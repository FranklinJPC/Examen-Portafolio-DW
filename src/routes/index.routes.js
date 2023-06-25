
const {Router} = require('express')
const router = Router()
const {Handlebars} = require('../helpers/handlebars.helper')

const {renderIndex,renderAbout, renderMoreInfo} = require('../controllers/index.controllers.js')

router.get('/',renderIndex)
router.get('/login',renderAbout)
router.get('/informacionPortafolio/:id/:idUS' ,renderMoreInfo)

module.exports = router