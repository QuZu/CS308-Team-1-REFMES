const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Week = require('../../models/weekModel');

router.post("/getWeek", async(req, res) => {
    console.log(1);
});

module.exports = router;