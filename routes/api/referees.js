const express = require("express");
const { response } = require("express");
const router = express.Router();
require("dotenv").config();
const Referee = require('../../models/refereeModel');
  
router.get("/getref/:rUsername", async(req, res) => {
    try {
        await Referee.findOne({r_username: req.params.rUsername}).then((result) => {
            res.json(result);
        }).catch((err) => {
            throw err;
        });
    } catch (err) {
        res.status(500).json(err);
    }}
);

module.exports = router;