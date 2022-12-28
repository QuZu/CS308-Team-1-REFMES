const express = require("express");
const router = express.Router();
require("dotenv").config();
const Club = require('../../models/clubModel');



router.post('/registerReport', async(req, res)=> {

    console.log("in backend");
    const username = req.body.username;
    const report = req.body.report;

    console.log("username", username);
    console.log("report", report);


});