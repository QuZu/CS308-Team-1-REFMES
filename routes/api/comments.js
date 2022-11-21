const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Comment = require('../../models/commentModel');

router.post("/sendComment", async(req, res) => {
    const {userid, usercomment} = req.body;
    console.log(userid);
    console.log(usercomment);
});

router.post("/sendRating", async(req, res) => {
    const {userEmail, rating, club1, club2, weekNo} = req.body;
    console.log("\n");
    console.log("Email: ", userEmail);
    console.log("Rating: ", rating);
    console.log("Club 1: ", club1);
    console.log("Club 2: ", club2);
    console.log("Week No: ", weekNo);
    console.log("\n");
});
  
module.exports = router;