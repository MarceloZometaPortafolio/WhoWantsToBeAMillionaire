import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from 'axios';
import readAllQuestions from '../data_service/DataService';
import path from "../data_service/questions.json";

function Game({props}) {
    const location = useLocation();
    
    const [showProgress, setShowProgress] = useState(true);    
    const [questions, setQuestions] = useState("");

    useEffect(() => {
        setShowProgress(true);
        //setQuestions(readAllQuestions());
        readAllQuestions()
            .then(data => {
                setQuestions(data);
                console.log("On game, questions are:", questions.game[0]);
            })
            .catch(err => console.log("Couldn't read the questions properly", err));
            // .then(data => {
            //     console.log(data); 
            //     setQuestions(data);
            // })
            // .catch(err => 
            //     console.log("Something went wrong", err
            // ));
    }, [])

    return(
        <div className="Game">
            <h1>Question {location.state.question}</h1>
        </div>
    );
}

export default Game;