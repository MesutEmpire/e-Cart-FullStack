import {Router} from 'express';

const { logInUser , createNewUser,logOutUser,authUser} =require ('../controllers/authController')
const {requireAuth} = require('../middleware/authMiddleware')


const router = Router()
router.post('/signup', createNewUser)

router.post('/login',logInUser)

router.get('/logout',logOutUser)

router.get('/authUser',requireAuth,authUser)

module.exports = router