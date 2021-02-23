import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";
import axios from 'axios';

function Game({props}) {
    const location = useLocation();

    const [showProgress, setShowProgress] = React.useState(true);    

    useEffect(() => {
        setShowProgress(true);
        console.log(showProgress);

        axios.get('localhost:8000/')
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))        
    }, [])

    return(
        <div className="Game">
            <h1>Question {location.state.question}</h1>
            

        </div>
    );
}

export default Game;