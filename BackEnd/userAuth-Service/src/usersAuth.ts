import{Application,Request,Response,NextFunction} from "express";
import {connect} from 'mongoose';
const express = require('express')
require('dotenv').config()
const cors = require('cors')
const cookieParser = require('cookie-parser')

const authRoutes = require('./routes/authRoutes')

//express app
const app:Application = express()


//enable all CORS requests
app.use(cors({ origin:true, credentials:true }))


//middleware
app.use(express.json())
app.use(cookieParser())
app.use((req:Request,res:Response , next:NextFunction)=>{
    console.log(req.path,req.method)
    next()
})
// app.use((req:Request,res:Response , next:NextFunction)=>{
//     requireAuth(req,res,next)
//     next()
// })


//routes
app.use('/api/auth',authRoutes)


// console.log(process.env.MONGO_URI)

//connect to db
connect(`${process.env.MONGO_URI}`)
    .then(()=>{
        app.listen(process.env.PORT,()=>console.log('Connected to DB and listening on port',process.env.PORT))
    })
    .catch((err:any) =>{
        console.log(err)
    })


