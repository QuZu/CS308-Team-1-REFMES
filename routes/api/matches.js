const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Match = require('../../models/matchModel');

router.post("/addMatch", async(req, res) => {
    const {week_no, referee_id, club1_id, club2_id, club1_goals, club2_goals} = req.body;
    const newMatch = new Match({ week_no, referee_id, club1_id, club2_id, club1_goals, club2_goals });

    try {
        const match = await Match.findOne({ week_no: week_no, club1_id: club1_id, club2_id: club2_id });
        if (match) throw Error('This match already exists');

        const savedMatch = await newMatch.save();
        if (!savedMatch) throw Error('Something went wrong while saving the match');

    } catch (e) {
        res.status(400).json({ error: e.message });
    }
});

router.get("/getMatchDetails/:matchID", async(req, res) => {
    try {
        await Match.find({ _id: req.params.matchID }).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
        console.log("zortladik");
    }
});

module.exports = router;