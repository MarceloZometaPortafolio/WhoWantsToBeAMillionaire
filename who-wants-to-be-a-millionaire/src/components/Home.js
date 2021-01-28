import React from 'react'
import '../styles/Home.css'
import CustomButton from './CustomButton'

const Home = () => {
    return (
        <div className="HomePage">
            <h1>Who Wants To Be A Millionaire?</h1>
            <CustomButton message={"Start new game"}/>
        </div>
    );
}

export default Home;