'use strict';

const mongoose = require("mongoose");

const currencySchema = mongoose.Schema({

  title: { type: String, Unique: true, trim: true },
  description: { type: String },
  toUSD: { type: String },
  image_url: { type: String }
});



module.exports = currencySchema;