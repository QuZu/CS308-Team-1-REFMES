const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Comment = require('../../models/commentModel');
const mongoose = require("mongoose");

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

router.get("/getComments/:matchID", async(req, res) => {
    try {
        await Comment.aggregate(
            [
                {$lookup:
                    {
                        from:"users",
                        localField:"user_id",
                        foreignField:"_id",
                        as:"user_info"
                    }
                },
                {$lookup:
                    {
                        from:"referees",
                        localField:"referee_id",
                        foreignField:"_id",
                        as:"referee_info"
                    }
                },
                {$match: {match_id:mongoose.Types.ObjectId(req.params.matchID)}}
            ]
        )
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);
router.get("/getUserComments/:userID", async(req, res) => {
    try {
        await Comment.aggregate(
            [
                {$lookup:
                    {
                        from:"matches",
                        localField:"match_id",
                        foreignField:"_id",
                        as:"match_infos"
                    }
                },
                {$lookup:
                    {
                        from:"referees",
                        localField:"referee_id",
                        foreignField:"_id",
                        as:"referee_info"
                    }
                },
                {$match: {user_id:mongoose.Types.ObjectId(req.params.userID)}}
            ]
        )
        .then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);
module.exports = router;