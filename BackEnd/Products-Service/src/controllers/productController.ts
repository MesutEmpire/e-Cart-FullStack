import {Request, Response} from "express";
import {isValidObjectId} from 'mongoose'
const {upload} = require('./uploadImg')


const Product = require('../models/productsModel')

let getAllProductParams:any = null

//get all products
const getAllProducts = (ws:any,req:any)=>{
    getAllProductParams = { ws:ws,req:req}
    Product.find({}).sort({createdAt:-1})
        .then((response:any) =>{
            ws.send(JSON.stringify(response))
            // res.status(200).json(response)
        })
        .catch((err:any)=>{
            // res.status(400).json({error:err.message})
            console.log(err.message)
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
    const {title,price,category,description} = req.body
    const rating = {
        "rate": 0,
        "count": 0
    }
    upload(req.files)
        .then((cloudResponse:any)=>{
            const img =  cloudResponse.url
            try {
                Product.create({title,price,category,description,rating,img})
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
Product.watch().on('change',(data:any)=>{

    // if(data.operationType === 'insert'){
    //     console.log('User Inserted ',data.fullDocument)
    // }
    // if(data.operationType === 'replace'){
    //     console.log('User replace ',data.fullDocument)
    // }
    // if(data.operationType === 'delete') {
    //     console.log('User delete ', data.fullDocument)
    // }
    if (getAllProductParams != null){
        const {ws,req} = getAllProductParams
        getAllProducts(ws,req)
    }
})

module.exports = {
    createProduct,
    getAllProducts,
    getProduct,
    deleteProduct,
    updateProduct
}
