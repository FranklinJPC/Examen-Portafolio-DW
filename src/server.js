const express = require('express')
const {engine} = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport');
const session = require('express-session');
const fileUpload = require('express-fileupload')

// Inicializaciones 
const path = require('path')
const app = express()
require('./config/passport')
// Configuraciones
// Variable que toma el puerto a la cual se desplega o la especificada (3003)
app.set('port', process.env.port || 3003) 
app.set('views', path.join(__dirname, 'views'))
app.engine('.hbs', engine({
    defaultLayout: 'main',  // Layout principal
    layoutsDir:path.join(app.get('views'), 'layouts'), // Directorio principal
    partialsDir:path.join(app.get('views'), 'partials'), // Directorio de partials/componentes
    extname:'.hbs' // Extesion de las plantillas
}))
app.set('view engine', '.hbs')
//app.use(require('./routers/index.routes'))
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : './uploads'
}));

// Middleware
// Apis: express.json()
// Formularios: express.urlencode()
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))
app.use(session({ 
    secret: 'secret',
    resave:true,
    saveUninitialized:true
}));
app.use(passport.initialize())
app.use(passport.session())
// Variables globales
app.use((req,res,next)=>{
    res.locals.user = req.user?.name || null
    next()
})

// Rutas
// Rutas 
app.use(require('./routes/index.routes'))
app.use(require('./routes/portafolio.routes'))
app.use(require('./routes/users.routes'))
// Archivos estaticos
app.use(express.static(path.join(__dirname, 'public')))


module.exports = app
