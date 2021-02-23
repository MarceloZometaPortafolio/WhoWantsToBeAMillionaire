import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import axios from 'axios';
import readAllQuestions from '../data_service/DataService';
import path from "../data_service/questions.json";

function Game({props}) {
    const location = useLocation();

    const [showProgress, setShowProgress] = React.useState(true);    

    useEffect(() => {
        setShowProgress(true);
        readAllQuestions();
    }, [])

    return(
        <div className="Game">
            <h1>Question {location.state.question}</h1>
            

        </div>
    );
}

export default Game;