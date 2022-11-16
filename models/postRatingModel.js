const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostRatingSchema = new Schema({
  rating:{
    type: String,
    required: true
  },
  user_id: {
    type: String,
    required: true
  },
  match_id:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
});

const PostRating = mongoose.model('post_ratings', PostRatingSchema);

module.exports = PostRating