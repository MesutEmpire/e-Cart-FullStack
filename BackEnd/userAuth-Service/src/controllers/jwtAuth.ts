require('dotenv').config()
const jwt = require('jsonwebtoken')

const maxAge = 60*60
const createUserToken = (id:any)=>{
    return jwt.sign({id},`${process.env.SECRET_KEY}`,{
        expiresIn:maxAge
    })
}
const createAdminToken = (id:any,email:any)=>{
    return jwt.sign({id,email},`${process.env.SECRET_ADMIN_KEY}`,{
        expiresIn:maxAge
    })
}
const createSuperToken = (id:any,email:any)=>{
    return jwt.sign({id,email},`${process.env.SECRET_SUPER_KEY}`,{
        expiresIn:maxAge
    })
}

module.exports = {createUserToken,createAdminToken,createSuperToken,maxAge}