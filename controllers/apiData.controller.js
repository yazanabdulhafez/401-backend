'use strict';
const axios = require('axios');


const apiDataController = ((req, res) => {

  const apiUrl = "https://crypto-explorer.herokuapp.com/crypto-list/";
  axios.get(apiUrl).then(response => res.send(response.data))
    .catch((error) => console.log(error.message))

});


module.exports = apiDataController;