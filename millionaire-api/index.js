'use strict';

const express = require('express');
const app = express();
const dataService = require('./DataService/dataService')
const port = 8000;

app.get('/', (req, res) => {
  var myData = new dataService.DataService();
  myData.greet();
  myData.readQuestions();

  res.json({message: 'Hello World!'});

});
 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});