const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RefmesRatingSchema = new Schema({
  wFan:{
    type: Schema.Types.Decimal128,
    required: true
  },
  wObserver: {
    type: Schema.Types.Decimal128,
    required: true
  },
  wExperience:{
    type: Schema.Types.Decimal128,
    required: true
  },
  wConstant:{
    type: Schema.Types.Decimal128,
    required: true
  }
});

const RefmesRating = mongoose.model('refmes_rating_weights', RefmesRatingSchema);

module.exports = RefmesRating