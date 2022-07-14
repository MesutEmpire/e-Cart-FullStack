import {Request, Response} from "express";
const {ChangeEvent} = require('mongodb')
const User = require("../models/userModel")
require('dotenv').config()
const jwt = require('jsonwebtoken')



let getAllUserParams:any = null
const echoWs = (ws:any, req:any) => {
    // ws.on('connection', (msg:any) {
    //     ws.send(msg);
    //     ws.send('Hello here from Echo listening');
    // });
    console.log('WS first hadn from client received')

    ws.on('connection',(socket:any)=>{
        console.log("New connection")
    })

    ws.on('message',(message:any) => {
        ws.send(`Roger that ${message}`)
    })
}
const getallUsers = (ws:any,req:any)=>{
    getAllUserParams = { ws:ws,req:req}
    User.find().select('-updatedAt -__v -password').sort({createdAt:-1})
        .then((response:any) =>{
            ws.send(JSON.stringify(response))
        })
        .then(()=>{
            ws.on('message',(message:any) => {
                console.log('This is the message from the Client',message)
            })
        })
        .catch((err:any)=>{
            console.log(err.message)
        })
}
const makeUserAdmin = (req:Request,res:Response)=>{
    const {email,_id} = req.body
    console.log(email,_id)
    User.findOneAndUpdate({email:email,_id:_id}, {level:'Admin'})
        .then((response:any) =>{
            res.status(200).json(response)
        })
        .catch((err:any)=>{
            res.status(400).json({error:err.message})
        })
}
const deleteMultipleUsers = (req:Request,res:Response)=>{
    const _ids = req.body
    User.deleteMany({_id: { $in: _ids}})
        .then((response:any) =>{
            res.status(200).json(response)
        })
        .catch((err:any)=>{
            res.status(400).json({error:err.message})
        })
}
const deleteUser = (req:Request,res:Response)=>{
    const {_id} = req.body
    User.findByIdAndDelete(_id)
        .then((response:any) =>{
            res.status(200).json(response)
        })
        .catch((err:any)=>{
            res.status(400).json({error:err.message})
        })
}


User.watch().on('change',(data:any)=>{
    // if(data.operationType === 'insert'){
    //     console.log('User Inserted ',data.fullDocument)
    // }
    // if(data.operationType === 'replace'){
    //     console.log('User replace ',data.fullDocument)
    // }
    // if(data.operationType === 'delete') {
    //     console.log('User delete ', data.fullDocument)
    // }
    const {ws,req} = getAllUserParams
    getallUsers(ws,req)
})

module.exports = {getallUsers,makeUserAdmin,deleteMultipleUsers,deleteUser,echoWs}
