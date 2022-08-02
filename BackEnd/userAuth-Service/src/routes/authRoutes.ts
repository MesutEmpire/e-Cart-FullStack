import {Router} from 'express';

const { logInUser , createNewUser,logOutUser,authUser,authAdmin,authSuper} =require ('../controllers/authController')
const {requireUserAuth,requireAdminAuth,requireSuperAuth} = require('../middleware/authMiddleware')


const router = Router()
router.post('/signup', createNewUser)

router.post('/login',logInUser)

router.get('/logout',logOutUser)

router.get('/authUser',requireUserAuth,authUser)

router.get('/authAdmin',requireAdminAuth,authAdmin)

router.get('/authSuper',requireSuperAuth,authSuper)

module.exports = router