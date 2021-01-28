import React from 'react'
import '../styles/Home.css'
import CustomButton from './CustomButton'

const Home = () => {

    const ButtonAction = () => {
        console.log("I was clicked!!!")
    }

    return (
        <div className="HomePage">
            <h1>Who Wants To Be A Millionaire?</h1>
            <CustomButton message={"Start new game"} action={ButtonAction}/>
        </div>
    );
}

export default Home;