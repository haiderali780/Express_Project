const express =require('express');
const dotenv=require('dotenv').config();
const errorHandler=require('./middleware/errorhandler');
const connectDB = require('./config/dbConnection');

connectDB();
const app=express();
app.use(express.json())
app.use('/api/contacts',require('./routes/contactRoutes'))
app.use(errorHandler)

const port = process.env.PORT || 5000;
app.listen(port,()=>console.log(`server running on port ${port}`))