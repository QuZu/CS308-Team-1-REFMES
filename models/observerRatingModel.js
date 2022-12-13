const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObserverRatingSchema = new Schema({
  rating:{
    type: Schema.Types.Number,
    required: true
  },
  observer_id: {
    type: Schema.Types.String,
    required: true
  },
  match_id:{
    type: Schema.Types.ObjectId,
    required: true
  },
});


const ObserverRating = mongoose.model('observer_ratings', ObserverRatingSchema);

module.exports = ObserverRating