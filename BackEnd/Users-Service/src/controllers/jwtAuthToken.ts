require('dotenv').config()
const jwt = require('jsonwebtoken')

const maxAge = 60*60
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

module.exports = {createAdminToken,createSuperToken,maxAge}