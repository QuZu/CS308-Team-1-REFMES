const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Match = require('../../models/matchModel');
const Club = require('../../models/clubModel');
const Referee = require("../../models/refereeModel");

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

router.get("/getAll/:week", async(req, res) => {

    console.log(req.params.week);
    try {
       await Match.aggregate(
            [{$lookup:
                {
                    from:"referees",
                    localField:"referee_id",
                    foreignField:"_id",
                    as:"ref_info"
                }
            },
            {$lookup:
                {
                    from:"clubs",
                    localField:"club1_id",
                    foreignField:"_id",
                    as:"club1_info"
                }
            },
            {$lookup:
                {
                    from:"clubs",
                    localField:"club2_id",
                    foreignField:"_id",
                    as:"club2_info"
                }
            },
                {$match:{week_no:req.params.week}}
            ]
            ).then(result=>{
                res.json(result);
            })
        //console.log(agg);
    } catch (err) {
        res.status(500).json(err);
        console.log("Could not get all match for this week");
    }
});

module.exports = router;

// try {
//     await Match.find({ week_no: req.params.week }).then((result) => {
//         var MatchDatas=result;
//         //console.log(MatchDatas);
//         res.json(MatchDatas);
//     }).catch((err) => {
//         throw err;
//     });
// } catch (err) {
//     res.status(500).json(err);
//     console.log("Could not get all match for this week");
// }

// var Alldata=[];
// const NameFinder= async(club1,club2,refid)=>{
//     var club1data,club2data, refdata;
//     try{
//         console.log(club1);
//         await Club.findById(club1).then((result) => {
//             club1data=result.data;
//             Club.findById(club2).then(res2=>{
//                 club2data=res2.data;
//                 Referee.findById(refid).then(res3 =>{
//                     refdata=result3.data;
//                     const Datas={
//                         club1:club1data,
//                         club2:club2data,
//                         ref:refdata
//                     }
//                      Alldata.push(Datas);
//                 })
//             }).catch((err)=>{
//                 throw err;
//             })

            
//         }).catch((err) => {
//             throw err;
//         });
//     }catch (err) {
//             res.status(500).json(err);
//             console.log("Club Id not found");
//         }

// }