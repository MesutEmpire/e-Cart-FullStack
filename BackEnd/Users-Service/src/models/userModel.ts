import {CallbackWithoutResultAndOptionalError, DocTypeFromGeneric, HydratedDocument, model, Schema} from 'mongoose';

interface IUsers{
    firstname : string,
    lastname : string,
    phoneNumber : string,
    email : string ,
    password: string,
    level:string,
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



module.exports = model<IUsers>('user',userSchema)