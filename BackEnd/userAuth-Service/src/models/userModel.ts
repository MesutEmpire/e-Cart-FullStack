import {CallbackWithoutResultAndOptionalError, DocTypeFromGeneric, HydratedDocument, model, Schema} from 'mongoose';
const bcrypt = require('bcrypt')

interface IUsers{
    firstname : string,
    lastname : string,
    phoneNumber : string,
    email : string ,
    password: string,
    level:string
}


const userSchema = new Schema<IUsers>({
    firstname: {
        type:String,
        required:true,
    },
    lastname: {
        type:String,
        required:true,
    },
    phoneNumber: {
        type:String,
        required:true,
    },
    email: {
        type:String,
        required:true,
        unique:true,
        lowercase:true
    },
    password: {
        type:String,
        required:true,
        minLength:6
    },
    level:{
        type:String,
        required:true,
    },

},{timestamps:true})

//Mongoose LIfe hooks ---- After save
// userSchema.post('save',(doc:any,next:CallbackWithoutResultAndOptionalError)=>{
//     console.log("New User was created and saved",doc)
//     next()
// })
//Mongoose LIfe hooks ---- before save
userSchema.pre('save',function (next:CallbackWithoutResultAndOptionalError){
    bcrypt.genSalt()
        .then((salt:any)=>{
            bcrypt.hash(this.password,salt)
                .then((hash:any)=>{
                    this.password = hash
                    next()
                })
        })

})

//Static Method
userSchema.statics.login = function (email,password){
    return new Promise((resolve, reject) => {
    this.findOne({email})
        .then((response:any)=>{
            bcrypt.compare(password,response.password)
                .then((result:any)=>{
                    console.log(result)
                    if(result){
                        resolve (response)
                    }
                    reject ({message:"Wrong Password"})
                })
                .catch((err:any)=>{
                    reject(err)
                })
        })
        .catch((err:any)=>{
            reject({message : "Email Address is not registered"})
        })
})
}


module.exports = model<IUsers>('user',userSchema)