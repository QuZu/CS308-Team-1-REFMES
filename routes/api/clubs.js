const express = require("express");
const router = express.Router();
require("dotenv").config();
const Club = require('../../models/clubModel');

router.get("/getClub/:clubName", async(req, response) => {
    console.log("Clubname:",req.params.clubName);
    try{
        await Club.findOne({asci_name: req.params.clubName}).then((result) => { // go to the database return the values in which acii name = clubName(like fenerbahce)
            response.json(result);
            console.log(result);

        }).catch((err) => {
            throw err;
        });

    }catch (err){
        response.status(500).json(err);
    }

});

router.get("/getClubs", async(req, response) => {
    try{
        await Club.find({}).then((result) => { // go to the database return the values in which acii name = clubName(like fenerbahce)
            response.json(result);
            console.log(result);

        }).catch((err) => {
            throw err;
        });

    }catch (err){
        response.status(500).json(err);
    }

});


module.exports = router;