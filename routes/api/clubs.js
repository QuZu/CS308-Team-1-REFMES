const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Club = require('../../models/clubModel');

router.get("/getClub/:IDclub", async(req, res) => {
try{
    const clubID=req.params.IDclub;
    console.log(clubID);
    await Club.findById(clubID).then((result) => {
        res.json(result);
    }).catch((err) => {
        throw err;
    });
}catch (err) {
        res.status(500).json(err);
        console.log("Club Id not found");
    }
});

module.exports = router;