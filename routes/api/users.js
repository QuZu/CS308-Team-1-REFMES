const express = require("express");
const { response } = require("express");
const router = express.Router();
const bcrypt=require("bcrypt");
require("dotenv").config();
const User = require('../../models/usermodel');
const Observer = require('../../models/observerModel');
router.post('/signup', async(req, res) => {
  const {username, full_name, email, password, fan_of} = req.body;
  if(!username || !full_name || !email || !password || !fan_of){
    return res.status(400).json({msg: "Please enter all fields"});
  }
  try {
    const user = await User.findOne({ email });
    if (user) throw Error('User already exists');
    const salt = await bcrypt.genSalt(10);
    if (!salt) throw Error('Something went wrong with bcrypt');

    const hash = await bcrypt.hash(password, salt);
    if (!hash) throw Error('Something went wrong hashing the password');

    const newUser = new User({ username, full_name, email, password: hash, fan_of });
    console.log(newUser);
    const savedUser = await newUser.save();
    console.log("Saveduser:",savedUser)
    if (!savedUser) throw Error('Something went wrong while saving the user');

    res.status(200).json({
      user: {
        id: savedUser.id,
        username: savedUser.username,
        full_name: savedUser.full_name,
        email: savedUser.email,
        fan_of: savedUser.fan_of
      }});

    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  }
);

router.post('/login', async(req, res) => {
  const {email, password} = req.body;
  if(!email || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
  }
  
  try {
    const user = await User.findOne({ email });
    if (!user) throw Error('User does not exist');
  
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw Error('Invalid credentials');

    res.status(200).json({
      user: {
        id: user._id,
        username: user.username,
        full_name: user.full_name,
        email: user.email,
        fan_of: user.fan_of
      }});

    console.log(user);

    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }
);

router.post('/observerLogin', async(req, res) => {
  const {observerid, password} = req.body;
  console.log("id:" ,observerid);
  console.log("passw:" ,password);
  if(!observerid || !password) {
      return res.status(400).json({ msg: 'Please enter all fields' });
  }
  
  try {
    const observer = await Observer.findOne({ observer_id:observerid });
    console.log("observer:" ,observer);
    if (!observer) throw Error('Observer does not exist');
  
    if (password !== observer.password){

      throw Error('Invalid credentials');
    }
    res.status(200).json({
      observer: {
        id: observer.observer_id,
      }});

    console.log(observer);

    } catch (e) {
      res.status(400).json({ msg: e.message });
    }
  }
);

router.post("/delete", async(req, res) => {
    const {id, username, email} =req.body;
    try {
      await User.findByIdAndDelete(id);
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(500).json(err);
    }
  }
);

router.post("/updatesetting", async(req, res) => {
    const dataID = req.body.id;
      await User.findOneAndUpdate({email: req.body.email}, {name:req.body.name});
      console.log(`User ${dataID} has been found...`);
      res.status(200).json(`User ${dataID} has been found...`);
  }
);

router.post("/change-password", async(req, res)=> {
    const BCRYPT_SALT_ROUNDS = 10;
    const currUser = req.body.user;
    let myQuery = { "email": currUser.user.email}
    console.log("Current user email:", currUser.user.email)
    User.findOne(myQuery, async (err, result) => {
      if(err) {
        console.log(err.message);
      } else if(result) {
        console.log("Result: ",result);
        const validPassword = await bcrypt.compare(req.body.currentPassword.toString(), result.password);
        console.log(validPassword, ""+req.body.password, result.password);
        if(validPassword){
          console.log("Res:",result)
  
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
              console.log("Updating...");
              User.findOneAndUpdate({"email": currUser.user.email}, {password: hash}).then(() => {
                  console.log('Password changed');
                  res.status(200).json(hash);
                });
            });
          }
          });
  
        } else {
          res.status(200).json({message: "Current password is invalid"});
        }
      } else {
        res.status(200).json({message: "Error! Please try again"});
      }
    });
  }
);

module.exports = router;