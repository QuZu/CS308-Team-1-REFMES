const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const PreRating = require('../../models/preRatingModel');

router.post("/getPreRating", async(req, res) => {
    console.log(1);
});

module.exports = router;