const express = require('express');
const app = express();
const mongoose = require("mongoose");
const MongoClient = require('mongodb').MongoClient;

const PORT = process.env.PORT || 2700;

const path=require("path");
const cors = require('cors');

mongoDbUrl= "mongodb://127.0.0.1:27017/Rasta"

mongoose.connect(mongoDbUrl).then(db =>{

    console.log('MONGO connected');

}).catch(error=> console.log(error));
mongoose.set('strictQuery', false);
module.exports=app;
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
const metaData=require("./src/routes/metaData")
app.use('/',metaData)


app.listen(PORT, () => console.log('Application is running'))