import React from 'react'

function Game() {
    const [showProgress, setShowProgress] = React.useState(true);    

    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowProgress(false);
        }, 3000);

        return () => {
            clearTimeout(timer);
        }
    }, [])

    return(
        <div className="Game">
            <h1>message</h1>
            
            if(showProgress){
                <p>I'm showing the questions!</p>
            }
        </div>
    );
}

export default Game;