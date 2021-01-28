import React from 'react'
import '../styles/NavBar.css'
import {
    Link
  } from "react-router-dom";

const NavBar = () => {
    return(
        <div className="NavBar">
            <ul>
                <li><a href="\">Home</a></li>
                <li><a href="\leaderboard">LeaderBoard</a></li>
            </ul>
        </div>
    );
}

export default NavBar;
