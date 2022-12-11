const express = require("express");
const router = require("./src/routes/api");
const mongoose = require("mongoose");
const app = new express();  // express js er object
const bodyParser = require("body-parser");
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitizer = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

 // security middleware Implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitizer());
app.use(xss());
app.use(hpp());
app.use(bodyParser.json());




module.exports = app;