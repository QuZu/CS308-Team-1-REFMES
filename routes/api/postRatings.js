const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const PostRating = require('../../models/postRatingModel');

router.post("/addPostRating", async(req, res) => {
    const {rating, user_id, match_id, date} = req.body;
    const newPostRating = new PostRating({ rating, user_id, match_id, date });

    try {
        const postRating = await PostRating.findOne({ user_id: user_id, match_id: match_id });
        if (postRating) throw Error('This post rating already exists');

        const savedPostRating = await newPostRating.save();
        if (!savedPostRating) throw Error('Something went wrong while saving the post rating');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/getPostRating/:userID", async(req, res) => {
    try {
        await PostRating.find({ user_id: req.params.userID}).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;