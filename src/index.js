require('dotenv').config()
const app = require('./server.js')

app.listen(app.get('port'),()=>{
    console.log(`Servidor iniciado en ${app.get('port')}`);
})

const connection = require('./database.js')
connection()