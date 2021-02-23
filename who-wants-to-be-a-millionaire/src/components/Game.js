import React, {useEffect} from 'react'
import {useLocation} from "react-router-dom";

function Game({props}) {
    const location = useLocation();

    const [showProgress, setShowProgress] = React.useState(true);    

    useEffect(() => {
        setShowProgress(true);

    }, [])

    return(
        <div className="Game">
            <h1>Question {location.state.question}</h1>
            
            if(this.showProgress){
                <p>I'm showing the questions!</p>
            }
        </div>
    );
}

export default Game;