const {Router} = require('express')
const { renderRegisterForm, registerNewUser, renderLoginForm, loginUser, logoutUser, confirmEmail } = require('../controllers/users.controllers')
const router = Router()

// Define las rutas

router.get('/user/register',renderRegisterForm)
router.post('/user/register',registerNewUser)


router.get('/user/login',renderLoginForm)
router.post('/user/login',loginUser)


router.post('/user/logout',logoutUser)
router.get('/user/confirmar/:token',confirmEmail)

// Exportacion por default
module.exports = router