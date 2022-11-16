const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PreRatingSchema = new Schema({
  total_ratings:{
    type: String,
    required: true
  },
  rating_count: {
    type: String,
    required: true
  },
  week_no:{
    type: String,
    required: true
  },
  referee_id:{
    type: String,
    required: true
  }
});

const PreRating = mongoose.model('pre_ratings', PreRatingSchema);

module.exports = PreRating