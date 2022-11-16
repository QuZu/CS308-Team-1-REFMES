const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
  comment:{
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
  referee_id:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    required: true
  }
});

const Comment = mongoose.model('comments', CommentSchema);

module.exports = Comment