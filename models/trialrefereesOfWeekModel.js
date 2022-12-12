const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TrialRefereesOfWeekSchema = new Schema({
  week_no:{
    type: String,
    required: true
  },
  referees: {
    type: Array,
    required: true
  }
});

const TrialRefereesOfWeek = mongoose.model('trial_referees_of_weeks', TrialRefereesOfWeekSchema);

module.exports = TrialRefereesOfWeek