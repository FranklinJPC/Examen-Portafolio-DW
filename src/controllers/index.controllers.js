const Portfolio = require('../models/Portafolio')

const renderIndex = async(req,res)=>{
    const portfolios = await Portfolio.find().lean()
    res.render('index',{portfolios})
}
const renderAbout = (req,res)=>{
    res.render('login')
}
module.exports ={
    renderIndex, 
    renderAbout
}