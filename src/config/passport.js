// Importacion del PASSPORT
const passport = require('passport')
// Importar el modelo del Usuario
const User = require('../models/User')
// Define la estrategia 
const LocalStrategy = require('passport-local').Strategy


// Configuracion de la estrategia 
passport.use(new LocalStrategy({
    usernameField:'email',
    passwordField:'password'
},async(email,password,done)=>{
    const userBDD = await User.findOne({email})
    if(!userBDD) return done("Lo sentimos, el email no se encuentra registrado",false,)
    const passwordUser = await userBDD.matchPassword(password)
    if(!passwordUser) return done("Lo sentimos, los passwords no coinciden",false)
    if(userBDD.confirmEmail===false) return done("Lo sentimos, debe verificar la cuenta en su correo electrónico",false)
    return done(null,userBDD)
}))


// Serecializacion del usuario
passport.serializeUser((user,done)=>{
    done(null,user.id)
})

// Deserializa el usuario
passport.deserializeUser(async (id, done) => {
    // Traer el usuario en base al id de la session
    const userDB  = await User.findById(id).exec();
    return done(null,userDB)
});