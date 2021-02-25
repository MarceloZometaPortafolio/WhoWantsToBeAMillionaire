import path from "./questions.json";

 function readAllQuestions(){
    try{
        return new Promise((resolve, reject) => {
          const jsonString = JSON.stringify(path);
          const questions = JSON.parse(jsonString);
  
          console.log("These are the questions", questions);
          return resolve(questions);              
        });
    }
    catch(err){
        console.log("Error found", err);
    }
  }

export default readAllQuestions;