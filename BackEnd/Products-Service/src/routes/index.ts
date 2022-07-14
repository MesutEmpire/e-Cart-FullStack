import {NextFunction, Request, Response, Router} from 'express'
const multer = require('multer')
var upload = multer();

// import {Product} from '../models/productsModel'
const {createProduct,getProducts,getProduct,updateProduct,deleteProduct} = require('../controllers/productController')

const router = Router()

router.get('/',getProducts)

router.get('/:id',getProduct)

router.post('/',upload.fields([
    { name: 'title', maxCount: 6 },
    { name: 'price', maxCount: 6 },
    { name: 'time', maxCount: 6 },
    { name: 'rating', maxCount: 6 },
    { name: 'img', maxCount: 1 },
]),createProduct)

router.delete('/:id',deleteProduct)

router.patch('/:id',updateProduct)

module.exports = router