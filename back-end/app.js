const dotenv = require('dotenv');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

dotenv.config({path:'./config.env'});

require('./db/conn');

//to show json file
app.use(express.json());

app.use(require('./router/auth'));



const PORT = process.env.PORT;


/*app.get('/about',(req,res)=>{
    res.send(`About`);
});*/

/*app.get('/signin',(req,res)=>{
    res.send(`Signin`);
});*/

/*app.get('/register',(req,res)=>{
    res.send(`Register`);
});*/

app.listen(PORT, ()=>{
    console.log(`server is running on ${PORT}`);
})