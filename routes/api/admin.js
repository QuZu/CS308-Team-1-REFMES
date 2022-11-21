const express = require("express");
const { response } = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
require("dotenv").config();
const Referee = require('../../models/refereeModel');

router.post('/addReferee', async(req, res) => {
    console.log("Gelen datam:", req.body); 
  const {r_username, name, biography, birth_date, birth_place, fifa_date, first_super_date, total_rating, rating_count, totalMatch, yellowCard, avgYellowCard, yellowToRed, redCard, avgRedCard, penalty, avgPenalty} = req.body;
    if(!r_username || !name || !biography || !birth_date || !birth_place || !fifa_date || !first_super_date){
      return res.status(400).json({msg: "Please enter all fields"});
    }
  
    try {
      const referee = await Referee.findOne({ name });
      if (referee) throw Error('Referee already exists');

      const newReferee = new Referee({ r_username, name, biography, birth_date ,birth_place, fifa_date, first_super_date, total_rating,rating_count, totalMatch, yellowCard, avgYellowCard, yellowToRed, redCard, avgRedCard, penalty, avgPenalty});
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
        }});
  
      } catch (e) {
        res.status(400).json({ error: e.message });
      }
    }
  );
  module.exports = router;