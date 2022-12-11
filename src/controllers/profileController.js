const profileModel = require('../models/profileModel');

exports.createProfile = (req, res) => {
    let reqBody = req.body;
    profileModel.create(reqBody, (err, data)=> {
        if(err){
            res.status(404).json({status: "Fail", data: err})
        }
        else{
            res.status(200).json({status: "success", data: data})
        }
    })
}