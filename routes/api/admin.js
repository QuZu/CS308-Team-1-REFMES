const express = require("express");
const { response } = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
var nodemailer = require('nodemailer');
require("dotenv").config();
const Referee = require('../../models/refereeModel');
const Observer = require('../../models/observerModel');
const Match = require('../../models/matchModel');
const RefereesOfWeek = require('../../models/refereesOfWeekModel');
const RefmesRating = require('../../models/refmesRatingModel');
const Report =require('../../models/reportsModel');
router.post('/addReferee', async(req, res) => {
  const {r_username, name, biography, birth_date, birth_place, fifa_date, first_super_date, total_rating, rating_count, totalMatch, yellowCard, avgYellowCard, yellowToRed, redCard, avgRedCard, penalty, avgPenalty,t_name,preRating,postRating,observerRating} = req.body;
    if(!r_username || !name || !biography || !birth_date || !birth_place || !fifa_date || !first_super_date || !t_name){
      return res.status(400).json({msg: "Please enter all fields"});
    }
  
    try {
      const referee = await Referee.findOne({ name });
      if (referee) throw Error('Referee already exists');

      const newReferee = new Referee({ r_username, name, biography, birth_date ,birth_place, fifa_date, first_super_date, total_rating,rating_count, totalMatch, yellowCard, avgYellowCard, yellowToRed, redCard, avgRedCard, penalty, avgPenalty,t_name,preRating,postRating,observerRating});
      const savedReferee = await newReferee.save();
      if (!savedReferee) throw Error('Something went wrong while saving the user');
  
      res.status(200).json({
        referee: {
          id: savedReferee.id,
          r_username: savedReferee.r_username,
          name: savedReferee.name,
          biography: savedReferee.biography,
          birth_date: savedReferee.birth_date,
          birth_place: savedReferee.birth_place,
          fifa_date: savedReferee.fifa_date,
          first_super_date: savedReferee.first_super_date,
          total_rating: savedReferee.total_rating,
          rating_count: savedReferee.rating_count,
          totalMatch: savedReferee.totalMatch,
          yellowCard: savedReferee.yellowCard, 
          avgYellowCard: savedReferee.avgYellowCard, 
          yellowToRed: savedReferee.yellowToRed, 
          redCard: savedReferee.redCard, 
          avgRedCard: savedReferee.avgRedCard, 
          penalty: savedReferee.penalty, 
          avgPenalty: savedReferee.penalty,
          t_name: savedReferee.t_name,
          preRating: savedReferee.preRating,
          postRating: savedReferee.postRating,
          observerRating: savedReferee.observerRating
        }});
  
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    }
  );
  router.post('/addObserver', async(req, res) => {
  const {observer_id,password} = req.body;
    if(!observer_id || !password) {
      return res.status(400).json({msg: "Please enter all fields"});
    }
    
      const newObserver = new Observer({observer_id,password});
      const newSavedObserver = await newObserver.save().then(business => {}).catch(err => {});
      
      if(newSavedObserver !== undefined){
        res.status(200).json({
          observer: {
            observer_id: newSavedObserver.observer_id,
            password: newSavedObserver.password,
          }});
      }
    }
  );
  router.post('/updateMatchScore', async(req, res) => {
    const {match_id,team1goal,team2goal}= req.body;
    if(team1goal < 0 || team2goal < 0) {
      return res.status(400).json({msg: "Please enter valid score!"});
    }
    await Match.findByIdAndUpdate(match_id,{club1_goals:team1goal, club2_goals: team2goal}).then(() => {
      res.status(200);
    }
      
    )
  }
  );
  router.post('/selectReferee', async(req, res) => {

  const {week_no,referee_ids} = req.body;
   
      try {
        const newRefereesOFWeek = new RefereesOfWeek({week_no,referee_ids});
        const savedRefereesOFWeek = await newRefereesOFWeek.save();
        if (!savedRefereesOFWeek) throw Error('Something went wrong while saving the referee list');
    
        res.status(200).json({
          refereesOfWeek: {
            week_no: savedRefereesOFWeek.week_no,
            referee_ids: savedRefereesOFWeek.referee_ids,
          }});
    
        } catch (e) {
          res.status(400).json({ error: e.message });
        }
      }
    
  
  );

router.get("/getRefmesRatingWeights", async(req, res) => {
  try {
    await RefmesRating.findById("639a1da0ed4b14a87afe9ed5").then((result) => {
    res.json(result);
  }).catch((err) => {
    throw err;
  });} catch (err) {
    res.status(500).json(err);
  }}
);
router.post("/postRefmesRatingWeights", async(req, res) => {
  const{fan,observer,experience,constant}=req.body
  try {
    await RefmesRating.findByIdAndUpdate("639a1da0ed4b14a87afe9ed5",
    {
      wFan:fan,
      wObserver:observer,
      wExperience:experience,
      wConstant:constant
    })
    .then((result) => {
    res.json(result);
  }).catch((err) => {
    throw err;
  });} 
  catch (err) {
    res.status(500).json(err);
  }
}
);
router.get("/getAllReports", async(req, res) => {
  try {
      await Report.find().then((result) => {
          res.json(result);
      }).catch((err) => {
          throw err;
      });
  } catch (err) {
      res.status(500).json(err);
  }}
);
router.post("/answerReport", async(req, res) => {
  const {user_email, admin_answer, report_id} =req.body;
  try {
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'refmes.org@gmail.com',
        pass: 'deuerygiggvzlkga'
      }
    });

    var mailOptions = {
      from: 'refmes.org@gmail.com',
      to: user_email,
      subject: 'Answer To Report',
      text: admin_answer
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });

    await Report.findByIdAndDelete(report_id);
    res.status(200).json("Report has been deleted...");
  } catch (err) {
    res.status(500).json(err);
  }
}
);
router.post("/getReportData", async(req, res) => {
  try {
    //console.log(req.body);
    await Report.aggregate(
      [
      {$lookup:
          {
              from:"users",
              localField:"user_email",
              foreignField:"email",
              as:"user_info"
          }
      },
          {$match: { $expr : { $eq: [ '$_id' , { $toObjectId: req.body._id} ] } } }
      ]
      ).then(result=>{
          res.status(200).json(result);
      })
      
  } catch (err) {
      res.status(500).json(err);
  }}
);

module.exports = router;