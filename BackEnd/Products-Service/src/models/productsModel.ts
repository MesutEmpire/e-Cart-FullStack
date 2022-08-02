
import {model, Schema} from 'mongoose';

interface IProducts{
    title : string,
    price : number,
    rating : IRating,
    category:string,
    description:string,
    // time : number ,
    img: string,
}
interface IRating{
    rate : number,
    count : number
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
        type:Object,
        required:true
    },
    category : {
        type:String,
        required:true
    },
    description : {
        type:String,
        required:true
    },
    // time : {
    //     type:Number,
    //     required:true
    // } ,
    img: {
        type:String,
        required:true
    },
},{timestamps:true})

module.exports = model<IProducts>('Product',productSchema)

