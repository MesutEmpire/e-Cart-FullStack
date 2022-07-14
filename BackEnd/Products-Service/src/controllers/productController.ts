import {Request, Response} from "express";
import {isValidObjectId} from 'mongoose'
const {upload} = require('./uploadImg')


const Product = require('../models/productsModel')

//get all products
const getProducts = (req:Request,res:Response)=>{
    Product.find({}).sort({createdAt:-1})
        .then((response:any) =>{
            res.status(200).json(response)
        })
        .catch((err:any)=>{
            res.status(400).json({error:err.message})
        })
}
//get single product
const getProduct = (req:Request,res:Response)=>{
    const {id} = req.params

    if(!isValidObjectId(id)){
        res.status(400).json({error:"Not Valid ID"})
    }
   else{
        Product.findById(id)
            .then((response:any) =>{
                res.status(200).json(response)
            })
            .catch((err:any)=>{
                res.status(400).json({error:err.message})
            })
    }
}
//create a product
const createProduct =(req:any,res:Response)=>{
    const {title,price,rating,time} = req.body
    upload(req.files)
        .then((cloudResponse:any)=>{
            const img =  cloudResponse.url
            try {
                Product.create({title,price,rating,time,img})
                    .then((response:any)=>{
                        res.status(200).json(response)

                    })
                    .catch ((err:any)=>{
                        res.status(400).json({error:err.message})
                    })

            }catch (err:any){
                res.status(400).json({error:err.message})
            }
    })
        .catch((err:any)=>{
            res.status(err.status).json(err.message)
        })

}
//delete a product
const deleteProduct = (req:Request,res:Response)=>{
    const {id} = req.params
    if(!isValidObjectId(id)){
        res.status(400).json({error:"Not Valid ID"})
    }
    else {
        Product.findOneAndDelete({_id:id})
            .then((response:any) =>{
                res.status(200).json(response)
            })
            .catch((err:any)=>{
                res.status(400).json({error:err.message})
            })
    }
}
//update a product
const updateProduct = (req:Request,res:Response)=>{
    const {id} = req.params
    console.log(id)
    if(!isValidObjectId(id)){
        res.status(400).json({error:"Not Valid ID"})
    }
    else {
        Product.findOneAndUpdate({_id:id},{...req.body})
            .then((response:any) =>{
                res.status(200).json(response)
            })
            .catch((err:any)=>{
                res.status(400).json({error:err.message})
            })
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct,
    deleteProduct,
    updateProduct
}
