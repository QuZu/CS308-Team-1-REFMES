const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Comment = require('../../models/commentModel');

router.post("/sendComment", async(req, res) => {
    const {comment, user_id, match_id, referee_id} = req.body;
    timeZone = 'Europe/Istanbul';
    const date = new Date().toLocaleString('en-US', { timeZone });
        
    const newComment = new Comment({ comment, user_id, match_id, referee_id, date });

    try {

        const savedComment = await newComment.save();
        if (!savedComment) throw Error('Something went wrong while saving the post rating');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});
  
module.exports = router;