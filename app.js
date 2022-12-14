// Basic Lib Import
const express =require('express');
const router =require('./src/routes/api');
const app= new express();
const bodyParser =require('body-parser');

// Security Middleware Lib Import
const rateLimit =require('express-rate-limit');
const helmet =require('helmet');
const mongoSanitize =require('express-mongo-sanitize');
const xss =require('xss-clean');
const hpp =require('hpp');
const cors =require('cors');

// Database Lib Import
const mongoose =require('mongoose');


// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

// Body Parser Implement
app.use(bodyParser.json())

// Request Rate Limit
const limiter= rateLimit({windowMs:15*60*1000,max:3000})
app.use(limiter)


// MongoDB Connection
// let URI = "mongodb+srv://mrhridu:hridu2277@cluster0.wdge2vt.mongodb.net/?retryWrites=true&w=majority/ToDO";
let URI = "mongodb://127.0.0.1:27017/ToDo";
let OPTION = {user: '', pass: '', autoIndex: true}
mongoose.connect(URI, OPTION, (error) => {
    if(error){
        console.log(error);
    }
    else{
        console.log("Database connection successfully")
    }
})

// Routing implement
app.use("/api/v1", router);

//undefined router implement
app.use('*', (req, res) => {
    res.status(404).json({status: 'Failed to find route', Data: 'Not Found'});
})

module.exports = app;