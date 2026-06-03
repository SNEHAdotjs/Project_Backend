require('dotenv').config();
const express = require('express');
const router = require('./routes');
const connectDb = require('./db/connectdb');
const errorHandler = require('./middleWares/errorHandler');
const app = express();

app.use(express.json());
connectDb()

app.use(router)
app.use(errorHandler)



app.listen(5000,()=>{
    console.log('server is running on port 5000');
})