const {Router} = require('express')
const multer = require('multer')
var upload = multer();

// import {Product} from '../models/productsModel'
const {createProduct,getAllProducts,getProduct,updateProduct,deleteProduct} = require('../controllers/productController')

const router = Router()

router.ws('/all', getAllProducts )
// router.get('/',getProducts)

router.get('/:id',getProduct)

router.post('/',upload.fields([
    { name: 'title', maxCount: 6 },
    { name: 'price', maxCount: 6 },
    { name: 'merchant', maxCount: 6 },
    { name: 'category', maxCount: 6 },
    { name: 'description', maxCount: 6 },
    { name: 'img', maxCount: 1 },
]),createProduct)

router.delete('/deleteProduct',deleteProduct)

router.patch('/:id',updateProduct)

module.exports = router