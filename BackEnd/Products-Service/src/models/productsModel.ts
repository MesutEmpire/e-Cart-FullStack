
// const mongoose = require('mongoose')
// const { Schema, Model, Document } = mongoose;
import {model, Schema} from 'mongoose';

interface IProducts{
    title : string,
    price : number,
    rating : number,
    time : number ,
    img: string,
}

const productSchema = new Schema<IProducts>({
    title : {
        type:String,
    required:true
    },
    price : {
        type:Number,
        required:true
    },
    rating : {
        type:Number,
        required:true
    },
    time : {
        type:Number,
        required:true
    } ,
    img: {
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = model<IProducts>('Product',productSchema)


//
// // 1. Create an interface representing a document in MongoDB.
// interface IUser {
//     name: string;
//     email: string;
//     // Use `Types.ObjectId` in document interface...
//     organization: Types.ObjectId;
// }
//
// // 2. Create a Schema corresponding to the document interface.
// const userSchema = new Schema<IUser>({
//     name: { type: String, required: true },
//     email: { type: String, required: true },
//     // And `Schema.Types.ObjectId` in the schema definition.
//     organization: { type: Schema.Types.ObjectId, ref: 'Organization' }
// });