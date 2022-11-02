const mongoose=require('mongoose');
const Schema=mongoose.Schema;


// Create Schema
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  identity:{
    type:String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },

});

const User = mongoose.model('user', UserSchema);

module.exports=User