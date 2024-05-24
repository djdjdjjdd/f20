const express = require('express'); //Commonjs
const app = express();// app express
const port = 3000; // port 
const hostname = process.env.HOST_NAME;
const env = require ('dotenv')
const  path = require('path');
const birds = require('./routes/web')

const configViewEngine = require('./config/viewEngine');
configViewEngine(app)
require('dotenv').config()

console.log(">>> check env: ", process.env)
//config template engine

// khai báo route

app.get('/jjj', (req, res) => {
    res.send('Hello World!')
})

app.get('/abc', (req, res) => {
    res.render('sample.ejs')
})                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            
app.use('/birds', birds)

const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3307,
    user: 'root',
    password: '123456',
    database: 'hoidanit'
})
connection.query(
    'select * from User u',
    function(err, results, fields) {
        console.log(">>> result=", results)
        console.log('>>> fields= ', fields)
    }
)
env.config();

app.listen(process.env.PORT, () => {
    console.log(`Server is running to port ${process.env.PORT}`);
})