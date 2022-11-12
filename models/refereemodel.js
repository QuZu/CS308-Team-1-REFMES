const mongoose=require('mongoose');
const Schema=mongoose.Schema;


// Create Schema
const RefSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  BirthDate:{
    type:String,
    required:true
  },
  BirthPlace: {
    type: String,
    required: true,
  },
  Biography: {
    type: String,
    required: true
  },
  FifaDate: {
    type: String,
    required: true
  },
  FirstSuperDate: {
    type: String,
    required: true
  },

});

const Ref = mongoose.model('referees', RefSchema);

module.exports=Ref