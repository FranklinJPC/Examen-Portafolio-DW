const Portfolio = require('../models/Portafolio')
const User = require('../models/User')

const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}
const renderAbout = (req,res)=>{
    res.render('login')
}
const renderMoreInfo = async(req, res) =>{
    const portfolio = await Portfolio.findById(req.params.id).lean()
    const usuario = await User.findById(req.params.idUS).lean()
    // console.log(usuario)
    res.render('informacionPortafolio', {portfolio, usuario})
}
module.exports ={
    renderIndex, 
    renderAbout,
    renderMoreInfo
}   