require("dotenv").config();
const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 400;
const connectdb = require("./database/connection")
const bodyparser =require("body-parser");
app.use(express.static(__dirname + '/js'));
app.use(bodyparser.urlencoded({extended : true}));
app.set('view engine', 'ejs');    
app.set('/views', __dirname + '/views');
// app.use('/css',express.static(path.resolve(__dirname,"assets/css")))
app.set("/views",path.resolve(__dirname,"/views"))

app.use(express.urlencoded({extended: true}));
app.use(express.json());


app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true
}));


connectdb();
app.use('/',require('./server/routes/routes'))




app.listen(PORT , ()=>{

console.log(`server is    listening at http://localhost:${PORT}`);
});