const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RefereeSchema = new Schema({
  r_username: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  biography:{
    type:String,
    required:true
  },
  birth_date: {
    type: String,
    required: true,
  },
  birth_place: {
    type: String,
    required: true
  },
  fifa_date: {
    type: String,
    required: true
  },
  first_super_date: {
    type: String,
    required: true
  },
  total_rating: {
    type: String,
    required: true
  },
  rating_total: {
    type: String,
    required: true
  }
});

const Referee = mongoose.model('referees', RefereeSchema);

module.exports = Referee