import path from "./questions.json";

 function readAllQuestions(){
    return new Promise((resolve, reject) => {
        const loadData = () => JSON.parse(JSON.stringify(path));
        console.log(loadData);
        return loadData;
        // fs.readFile(path, 'utf8', (err, data) => {
        //     if(err){
        //         reject(err);
        //     }
        //     else{
        //         let questions = JSON.parse(data);
        //         resolve(data);
        //     }
        // })}
    });  
  }

export default readAllQuestions();