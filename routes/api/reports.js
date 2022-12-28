const express = require("express");
const router = express.Router();
require("dotenv").config();

router.get('/registerReport/:username/:report', async(req, res)=> {

    console.log("in backend");
    const username = req.params.username;
    const report = req.params.report;

    console.log("username", username);
    console.log("report", report);


});