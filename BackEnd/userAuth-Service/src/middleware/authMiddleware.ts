import {NextFunction, Request, Response} from "express";
require('dotenv').config()
const jwt = require('jsonwebtoken')

const requireAuth = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.userToken
    try{
        if(token){
            jwt.verify(token,`${process.env.SECRET_KEY}`,(err:any,decodedToken:any)=>{
                if(err){
                    console.log(err.message)
                    res.status(403).json('Access Denied')
                }
                else{
                    console.log(decodedToken)
                    next()
                }
            })
        }
    }
    catch(err:any) {
        res.status(403).json('Access Denied')
    }
    }


module.exports = {requireAuth}