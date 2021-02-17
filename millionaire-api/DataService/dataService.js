'use strict';

const { response } = require("express");
const fs = require("fs");
module.exports.DataService = class DataService {
    constructor(){
        this.path = "\DataService\\questions.json";
        this.jsonString = null;
        this.jsonObject = null;
        console.log("Initiated new DataService");
    }
    
    greet() {
        console.log("Hello from Data Service");
    }

    async readQuestions(){
        var questions = await fs.readFile(this.path, 'utf8', (err, jsonString) => {
            if(err){
                console.log("File read failed: ", err);
                return;
            }
            
            const questions = JSON.parse(jsonString);
            //const {game: [Level1, Level2]} = questions;
            //console.log(questions.game[0].Level1[0].question);
            return questions;
        });
    }

    async readQuestions(Level){
        var questions = await fs.readFile(this.path, 'utf8', (err, jsonString) => {
            if(err){
                console.log("File read failed: ", err);
                return;
            }
            
            const questions = JSON.parse(jsonString);
            const {game: [Level1, Level2]} = questions;
            console.log(questions.game[0].Level1[Level]);
            //return string(questions.game[0].Level1[Level]);
        });
    }

    async getQuestions(){
        const questions = await this.readQuestions();
        console.log(questions.game[0].Level1[1].correct);
        // if(typeof myString !== 'undefined'){
        //     const myObj = JSON.parse(myString);
        //     console.log("Hit the getQuestions", myObj);
        // }

    }
}