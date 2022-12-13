const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const PostRating = require('../../models/postRatingModel');
const ObserverRating = require('../../models/observerRatingModel');
router.post("/addPostRating", async(req, res) => {
    const {rating, user_id, match_id} = req.body;
    
    timeZone = 'Europe/Istanbul';
    const date = new Date().toLocaleString('en-US', { timeZone });
    
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

router.get("/getPostRating/:matchID/:userID", async(req, res) => {
    try {
        await PostRating.find({ user_id: req.params.userID, match_id: req.params.matchID }).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }
});


router.post("/addObserverRating", async(req, res) => {
    const {rating, observer_id, match_id} = req.body;
    console.log("rating:", rating);
    console.log("observer id:", observer_id);
    console.log("match id", match_id);
    
    const newObserverRating = new ObserverRating({ rating, observer_id, match_id});

    try {
        const postRating = await PostRating.findOne({ user_id: user_id, match_id: match_id });
        if (postRating) throw Error('This post rating already exists');

        const savedPostRating = await newPostRating.save();
        if (!savedPostRating) throw Error('Something went wrong while saving the post rating');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});






module.exports = router;