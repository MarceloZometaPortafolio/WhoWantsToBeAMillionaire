import React, {useEffect, useState} from 'react'
import {useLocation} from "react-router-dom";
import axios from 'axios';
import readAllQuestions from '../data_service/DataService';
import path from "../data_service/questions.json";
import { Suspense } from 'react';

function Game({props}) {
    const location = useLocation();
    const sleep = (milliseconds) => {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    const [showProgress, setShowProgress] = useState(true);    
    const [questions, setQuestions] = useState(null);

    const loadQuestions = async() => {
        console.log("Entering loadQuestions");
        await sleep(1000);
        const data = await readAllQuestions();
        setQuestions(data);
    }

    useEffect(() => {
        setShowProgress(true);
        //setQuestions(readAllQuestions());
        loadQuestions();
            // .then(data => {
            //     setQuestions(data);
            //     console.log("On game, questions are:", questions.game[0]);
            // })
            // .catch(err => console.log("Couldn't read the questions properly", err));
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
            <h1>You have loaded {questions?.game[0].question}</h1>
            
            {/* if (isEmpty(questions) ) {
                <h1>Loading....</h1>
            }
            else {
            } */}

            {/* <Suspense fallback={<p>Loading...</p>}>
                if (questions == null) {
                    <h1>Loading!</h1>
                }
                else{
                }
            </Suspense> */}
        </div>
    );
}

export default Game;