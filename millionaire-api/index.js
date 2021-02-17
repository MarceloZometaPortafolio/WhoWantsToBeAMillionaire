'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const dataService = require('./DataService/dataService')
const port = 8000;

app.get('/', async (req, res) => {
  var myData = new dataService.DataService();
  myData.greet();
  
  res.json({"message": "Hello world!"});
});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});