const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Club = require('../../models/clubModel');

router.post("/getClub", async(req, res) => {
    console.log(1);
});

module.exports = router;