import React from 'react'
import '../styles/Home.css'
import CustomButton from './CustomButton'
import { useHistory, withRouter } from 'react-router-dom';

const Home = () => {

    const history = useHistory();

    const LeaderboardAction = () => {
        history.push("/leaderboard");
    }

    const StartGameAction = () => {
        console.log("I was clicked!")
    }

    return (
        <div className="HomePage">
            <h1>Who Wants To Be A Millionaire?</h1>
            <CustomButton message={"Start new game"} action={StartGameAction}/>
            <CustomButton message={"Leader Board"} action={LeaderboardAction}/>
        </div>
    );
}

export default Home;