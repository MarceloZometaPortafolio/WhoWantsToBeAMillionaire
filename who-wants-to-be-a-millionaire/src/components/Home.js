import React from 'react'
import '../styles/Home.css'
import CustomButton from './CustomButton'
import { useHistory, withRouter, useState } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

function Home () {
    const [openDialog, setOpenDialog] = React.useState(false);
    const history = useHistory();

    const LeaderboardAction = () => {
        history.push("/leaderboard");
    }

    const StartGameAction = () => {
        setOpenDialog(true);


    }

    const handleCloseDialog = () => {
        console.log("I was clicked!")

    }

    return (
        <div className="HomePage">
            <h1>Who Wants To Be A Millionaire?</h1>
            <CustomButton message={"Start new game"} action={StartGameAction}/>
            <CustomButton message={"Leader Board"} action={LeaderboardAction}/>

            <Dialog open={openDialog} onClose={handleCloseDialog}>
                <DialogTitle>Start new game!</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        I am dialog box!
                    </DialogContentText>
                    <DialogActions>
                        <button onClick={handleCloseDialog}>
                            Cancel
                        </button>
                        <button onClick={handleCloseDialog}>
                            Start
                        </button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </div>
    );
}

export default Home;