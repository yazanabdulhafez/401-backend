'use strict';

const mongoose = require("mongoose");

const currencySchema = require('./currency.model')
const userSchema = mongoose.Schema({
  email: { type: String },
  currencies: [currencySchema]
});

const userModel = mongoose.model('user', userSchema);

const seedData = () => {
  const yazan = new userModel({
    email: "fso361435@gmail.com",
    currencies: [{
      title: "Ethereum",
      description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
      toUSD: "3,288.49",
      image_url: "https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg"
    }, ]
  });
  yazan.save();
  const yahyia = new userModel({
    email: "v.salvatore7.gs@gmail.com",
    currencies: [{
      title: "Ethereum",
      description: "Ethereum is a decentralized, open-source blockchain with smart contract functionality.",
      toUSD: "3,288.49",
      image_url: "https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg"
    }, ]
  });
  yahyia.save();
  console.log(yahyia);
};
// seedData();

module.exports = userModel;