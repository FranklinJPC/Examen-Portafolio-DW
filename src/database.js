const mongosoe = require('mongoose')
const {DBUSER, DBPASSWORD, DBNAME} = process.env
const MONGODB_URL = `mongodb+srv://${DBUSER}:${DBPASSWORD}@cluster0.gyfwtbm.mongodb.net/${DBNAME}`
connection = async()=>{
    try{
        await mongosoe.connect(MONGODB_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true
        })
        console.log("Base de datos conectada")
    }
    catch(error){
        console.log(error)
    }
}

module.exports = connection