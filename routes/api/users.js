const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
require("dotenv").config();

const jwt=require("jsonwebtoken");
// Item Model
const User= require('../../models/usermodel');
const { response } = require("express");

const Comment= require('../../models/commentModel');

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
   if(!password || !email) {
      return res.status(400).json({ msg: 'Please enter all fields' });
    }
  
    try {
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
      await User.findOneAndUpdate({email: req.body.email},
        {name:req.body.name},
       
       );
       console.log(`${dataID} User has been found...`)
      res.status(200).json(`${dataID} User has been found...`);
  });
 router.post("/change-password",async (req, res)=> {
    
    const BCRYPT_SALT_ROUNDS = 10;
    const currUser = req.body.user;
    let myQuery = { "email": currUser.user.email}
    console.log("currentuser email:",currUser.user.email)
    
     
    User
    .findOne(myQuery, async (err, result) => {
      if(err){
        console.log(err.message)
      }
  
      else if(result) {
        console.log("result: ",result)
        const validPassword = await bcrypt.compare(req.body.currentPassword.toString(), result.password);
        console.log(validPassword, ""+req.body.password, result.password)
        if(validPassword){
          console.log("res:",result)
  
          bcrypt.genSalt(BCRYPT_SALT_ROUNDS, function (saltError, salt) {
          if (saltError) {
            console.log(saltError);
            return saltError
          }
          else {
            bcrypt.hash(req.body.password, salt, function (hashError, hash) {
              if (hashError) {
                console.log(hashError);
                return hashError
              }
              console.log("updating...");
               User.findOneAndUpdate({ "email": currUser.user.email }, 
              {
                  password: hash,
                })
                .then(() => {
                  console.log('password changed');
                  res.status(200).json(hash);
                });
            });
          }
          });
  
        }else {
          res.status(200).json({message: "Current password is invalid"});
        }
  
      }
      else {
        res.status(200).json({message: "Error! Please try again"});
      }
  
    }
    );
  });

  router.post("/sendComment", async (req, res) => {
    const {userEmail, comment} = req.body;
    console.log(userEmail);
    console.log(comment);
  });

module.exports = router;