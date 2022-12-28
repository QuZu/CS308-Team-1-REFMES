const express = require("express");
const { response } = require("express");
const router = express.Router();
const crypto = require("crypto");
const bcrypt=require("bcrypt");
require("dotenv").config();
const User = require('../../models/usermodel');
const Token = require('../../models/tokenModel');
const Observer = require('../../models/observerModel');
var nodemailer = require('nodemailer');
const { findByIdAndDelete } = require("../../models/usermodel");

router.post('/regreport', async(req, res)=> {

    console.log("in backend");
    const username = req.body.username;
    const report = req.body.report;

    console.log("username", username);
    console.log("report", report);


});