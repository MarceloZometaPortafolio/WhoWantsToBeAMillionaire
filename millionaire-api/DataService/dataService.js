'use strict';
const fs = require("fs");
module.exports.DataService = class DataService {
    constructor(){
        this.path = "\DataService\\questions.json";
        console.log("Initiated new DataService");
    }
    
    greet() {
        console.log("Hello from Data Service");
    }

    readQuestions(){
        var questions = fs.readFile(this.path, 'utf8', (err, jsonString) => {
            if(err){
                console.log("File read failed: ", err);
                return;
            }
            console.log(jsonString);
        })
    }
}