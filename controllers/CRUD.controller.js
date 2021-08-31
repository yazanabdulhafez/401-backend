'use strict';
const userModel = require('../models/user.model');


//////////////get ////////////////////////

const getController = ((req, res) => {
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error)
    } else {
      res.send(userData);
    }
  })

});
///////////////////////create ///////////////////
const createController = ((req, res) => {
  const { email, title, description, toUSD, image_url } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message)
    } else {
      userData.currencies.push({ title: title, description: description, toUSD: toUSD, image_url: image_url });
      userData.save();
      res.send(userData);
    }
  })

});
/////////////////////update////////////////////
const updateController = ((req, res) => {
  const id = req.params["id"]
  const { email, title, description, toUSD, image_url } = req.body;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message)
    } else {
      userData.currencies.splice(id, 1, { title: title, description: description, toUSD: toUSD, image_url: image_url });
      userData.save();
      res.send(userData);
    }
  })

});

////////////////////delete ///////////////////////////
const deleteController = ((req, res) => {
  const id = req.params["id"];
  console.log(id);
  const { email } = req.query;
  userModel.findOne({ email: email }, (error, userData) => {
    if (error) {
      res.send(error.message)
    } else {
      console.log(userData);
      userData.currencies.filter((element) => element._id !== id);
      res.send(userData);
    }
  })

});

module.exports = { getController, createController, updateController, deleteController };