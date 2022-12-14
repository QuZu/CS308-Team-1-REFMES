const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const RefereesOfWeek = require('../../models/refereesOfWeekModel');
const PreRating=require("../../models/preRatingModel")

router.get("/getRefereesOfWeek/:weekNo", async(req, res) => {
    try {
       await RefereesOfWeek.aggregate(
            [{$lookup:
                {
                    from:"referees",
                    localField:"referee_id",
                    foreignField:"_id",
                    as:"ref_info"
                }
            },
                {$match:{week_no:req.params.weekNo}}
            ]
            ).then(result=>{
                res.json(result);
            })
            } catch (err) {
        res.status(500).json(err);
        console.log("Could not get referees of the week");
    }
});
router.get("/getpointsRefereesOfWeek/:referee_id/:currentweek", async(req, res) => {
    //console.log(req.params.referee_id);
    try {
       await PreRating.find(
        {
            referee_id:req.params.referee_id,
            week_no:req.params.currentweek
        }
            ).then(result=>{
                res.json(result);
            })
            } catch (err) {
        res.status(500).json(err);
        console.log("Could not get referees of the week");
    }
});

module.exports = router;