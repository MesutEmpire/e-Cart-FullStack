const {Router} = require( 'express');

const {getallUsers,makeUserAdmin,deleteMultipleUsers,deleteUser,echoWs} =require ('../controllers/userController')
// const {requireAuth} = require('../middleware/authMiddleware')


const router = Router()
router.ws('/all', getallUsers )
router.post('/makeAdmin',makeUserAdmin)
router.delete('/deleteMultiple',deleteMultipleUsers)
router.delete('/deleteUser',deleteUser)



module.exports = router

