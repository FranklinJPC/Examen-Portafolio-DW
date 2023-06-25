const Portfolio = require('../models/Portafolio')

const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}
const renderAbout = (req,res)=>{
    res.render('login')
}
const renderMoreInfo = async(req, res) =>{
    const portfolio = await Portfolio.findById(req.params.id).lean()
    // console.log(portfolio)
    res.render('informacionPortafolio', {portfolio})
}
module.exports ={
    renderIndex, 
    renderAbout,
    renderMoreInfo
}   