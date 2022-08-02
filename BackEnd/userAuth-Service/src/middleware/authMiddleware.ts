import {NextFunction, Request, Response} from "express";
require('dotenv').config()
const jwt = require('jsonwebtoken')

const authCode = (res:Response,next:NextFunction,token:any,secretKey:any)=>{
    try{
        if(token){
            console.log("JWT TOKEN")
            jwt.verify(token,`${secretKey}`,(err:any,decodedToken:any)=>{
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
        else{
            res.status(403).json('Access Denied')
        }
    }
    catch(err:any) {
        res.status(500).json(' Internal Server Error')
    }
}

const requireUserAuth = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.userToken
    authCode(res,next,token,process.env.SECRET_KEY)
}
const requireAdminAuth = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.adminToken
    authCode(res,next,token,process.env.SECRET_ADMIN_KEY)
}
const requireSuperAuth = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.cookies.superToken
    authCode(res,next,token,process.env.SECRET_SUPER_KEY)
}

module.exports = {requireUserAuth,requireAdminAuth,requireSuperAuth}