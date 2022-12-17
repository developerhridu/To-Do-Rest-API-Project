const mongoose = require('mongoose');


const dataSchema = mongoose.Schema({
    FirstName: {type: 'string'},
    LastName: {type: 'string'},
    EmailAddress: {type: 'string'},
    MobileNumber: {type: 'string'},
    City: {type: 'string'},
    UserName: {type: 'string', unique: true},
    Password: {type: 'string'},

}, {versionKey: false});
const ProfileModel = mongoose.model('profile', dataSchema)
module.exports = ProfileModel;