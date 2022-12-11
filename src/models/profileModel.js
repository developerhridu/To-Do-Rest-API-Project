const mongoose = require('mongoose');


const dataSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    emailAddress: String,
    mobileNumber: String,
    city: String,
    userName: String,
    password: String

}, {versionKey: false});
const profileModel = mongoose.model('profile', dataSchema)
module.exports = profileModel;