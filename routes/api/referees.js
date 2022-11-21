const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Referee = require('../../models/refereeModel');
const Comments=require('../../models/commentModel');
const mongoose=require("mongoose")
  
router.get("/getref/:rUsername", async(req, res) => {
    try {
        await Referee.findOne({r_username: req.params.rUsername}).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);
router.get("/getrefbyId/:refid", async(req, res) => {
    try {
        await Referee.findById(req.params.refid).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);
router.get("/getAllref", async(req, res) => {
    try {
        await Referee.find({}).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);
router.get("/getComments/:refid", async(req, res) => {
    try {
        await Comments.aggregate(
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
                        from:"matches",
                        localField:"match_id",
                        foreignField:"_id",
                        as:"match_info"
                    }
                
                },
                {$match:
                    {
                        referee_id:mongoose.Types.ObjectId(req.params.refid)
                    }
                }
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