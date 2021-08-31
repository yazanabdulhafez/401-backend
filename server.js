'use strict';

///////////////////////////////

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const indexController = require("./controllers/index.controller");
const apiDataController = require("./controllers/apiData.controller");
const { getController, createController, updateController, deleteController } = require("./controllers/CRUD.controller");
require("dotenv").config();


///////////////////////////////

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;


/////////////////////////////////
const mongoUrl = "mongodb+srv://Yazan:yazan12345@cluster0.eygrg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log('connected to DB'))
  ///////////////////////
app.get('/', indexController);
app.get('/cryptocurrency', apiDataController);

app.get('/currency', getController);
app.post('/currency', createController);
app.put('/currency/:id', updateController);
app.delete('/currency/:id', deleteController);


//////////////////////////
app.listen(PORT, () => console.log(`the server is running on port ${PORT}`))