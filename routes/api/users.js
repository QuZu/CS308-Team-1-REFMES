const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
require("dotenv").config();

const jwt=require("jsonwebtoken");
// Item Model
const User= require('../../models/usermodel');
const { response } = require("express");

/**
 * @route   POST api/users
 * @desc    register new user
 * @access  Public
 */
router.post('/register',async (req, res)=>{
   const {name,identity,email,password} =req.body;
   if(!name || !email || !password || !identity){
    return res.status(400).json({msg: "Please enter all fields"});
   }
   try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');

    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({
      name,
      identity,
      email,
      password: hash
    });

    const savedUser = await newUser.save();
    if (!savedUser) throw Error('Something went wrong saving the user');

    res.status(200).json({
      user: {
        id: savedUser.id,
        identity:savedUser.identity,
        name: savedUser.name,
        email: savedUser.email
      }
    });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});
router.post('/login', async (req, res) => {
    const {email,password} =req.body;
    console.log("Burdayım1")
   if(!password || !email) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
      console.log("Burdayım2")
      // Check for existing user
      const user = await User.findOne({ email });
      if (!user) throw Error('User does not exist');
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw Error('Invalid credentials');
  
  
      res.status(200).json({
        user: {
          id: user._id,
          name: user.name,
          email: user.email
        }
      });
    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  });
  router.post("/delete", async (req, res) => {
    const {id,name,email} =req.body;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  });
  router.post("/updatesetting", async (req, res) => {
    const dataID=req.body.id;
    console.log(req.body)
    console.log("girdim")
    console.log(dataID)
    console.log(req.body.email)
      await User.findOneAndUpdate({email: req.body.email},
        {name:req.body.name},
       
       );
       console.log(`${dataID} User has been found...`)
      res.status(200).json(`${dataID} User has been found...`);
  });

module.exports = router;