const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CommentSchema = new Schema({
  userEmail:{
    type:String,
    required:true
  },
  comment: {
    type: String,
    required: true
  }
});

const Comment = mongoose.model('comment', CommentSchema);

module.exports = Comment