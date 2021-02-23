'use strict';

const { response } = require('express');
const express = require('express');
const app = express();
const dataService = require('./DataService/dataService')
const port = 8000;
const fs = require("fs");
const { resolve } = require("path");

app.get('/', async (req, res) => {
  readQuestions()
    .then(data => {
      console.log("Returning data to the browser");
      res.send(data);
    })
    .catch( error => res.status(500).send(error))
    .finally(() => console.log("Done processing questions"));
});

function readQuestions(){
  const path = "\DataService\\questions.json";

  return new Promise((resolve, reject) => {
      fs.readFile(path, 'utf8', (err, data) => {
          if(err){
              reject(err);
          }
          else{
              let questions = JSON.parse(data);
              resolve(data);
          }
  })     
})}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});