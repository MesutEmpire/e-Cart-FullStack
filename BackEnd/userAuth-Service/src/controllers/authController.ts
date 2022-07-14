import {Request, Response} from "express";
const User = require("../models/userModel")
require('dotenv').config()
const jwt = require('jsonwebtoken')


const maxAge = 24*60*60
const createToken = (id:any)=>{
    return jwt.sign({id},`${process.env.SECRET_KEY}`,{
        expiresIn:maxAge
    })
}


const createNewUser = (req:Request,res:Response)=>{
    const {firstname,lastname,phoneNumber,email,password,level} = req.body
   try{
        User.create({firstname,lastname,phoneNumber,email,password,level})
            .then((response:any) =>{
                const token = createToken(response._id)
                res.cookie('userToken',token,{httpOnly:true,maxAge:maxAge*1000})

                res.status(201).json({
                    fullName:response.firstname+" "+response.lastname,
                    phoneNumber:response.phoneNumber,
                    email:response.email,
                    level:response.level
                })
            })
            .catch((err:any)=>{
                res.status(400).json(err.message)
       })
   }
   catch (err:any){
       res.status(400).json(err.message)
   }
}
const logInUser =(req:Request,res:Response)=>{
    const {email,password} = req.body
        User.login(email,password)
            .then((response:any)=> {
                const token = createToken(response._id)
                res.cookie('userToken',token,{httpOnly:true,maxAge:maxAge*1000})
                res.status(200).json({
                    fullName:response.firstname+" "+response.lastname,
                    phoneNumber:response.phoneNumber,
                    email:response.email,
                })
            })
            .catch ((err:any)=>{
                res.status(400).json(err.message)
            })
}

const logOutUser = (req:Request,res:Response)=>{
    res.cookie('userToken','',{maxAge:1})
    res.status(200).json("Logged Out")
}

const authUser = (req:Request,res:Response)=>{
   console.log("Success")
    res.status(200).json("Success User Authenicated")
}

module.exports = {
    createNewUser,
    logInUser,
    logOutUser,
    authUser
}