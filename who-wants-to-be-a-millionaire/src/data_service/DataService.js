import path from "./questions.json";

 function readAllQuestions(){
    try{
        const jsonString = JSON.stringify(path);
        const questions = JSON.parse(jsonString);

        console.log("These are the questions", questions);
        return questions;    
    }
    catch(err){
        console.log("Error found", err);
    }
  }

export default readAllQuestions;