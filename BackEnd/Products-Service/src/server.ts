import{Application,Request,Response,NextFunction} from "express";
import {connect} from 'mongoose';
const express = require('express')
require('dotenv').config()
const cors = require('cors')

const productsRoutes = require('./routes/index')

//express app
const app:Application = express()

//enable all CORS requests
app.use(cors())


//middleware
app.use(express.json())
app.use((req:Request,res:Response , next:NextFunction)=>{
    console.log(req.path,req.method)
    next()
})

//routes
app.use('/api/products',productsRoutes)

//
// console.log(process.env.MONGO_URI)

//connect to db
connect(`${process.env.MONGO_URI}`)
    .then(()=>{
        app.listen(process.env.PORT,()=>console.log('Connected to DB and listening on port',process.env.PORT))
    })
    .catch((err:any) =>{
        console.log(err)
    })


