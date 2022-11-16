const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WeekSchema = new Schema({
  week_no:{
    type: String,
    required: true
  },
  start_date: {
    type: String,
    required: true
  },
  end_date:{
    type: String,
    required: true
  }
});

const Week = mongoose.model('weeks', WeekSchema);

module.exports = Week