import React from 'react'
import '../styles/Home.css'
import CustomButton from './CustomButton'
import { useHistory, withRouter, useState } from 'react-router-dom';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { TextField } from '@material-ui/core';

function Home () {
    const [openDialog, setOpenDialog] = React.useState(false);
    const [name, setName] = React.useState("");
    const [helperText, setHelperText] = React.useState("");

    const history = useHistory();

    const LeaderboardAction = () => {
        history.push("/leaderboard");
    }

    const StartGameAction = () => {
        setOpenDialog(true);
    }
    
    const handleNameChange = (e) => {
        setName(e.target.value);  
        setHelperText("");      
    }

    const handleCancelDialogButton = () => {
        setName("");
        setOpenDialog(false);
    }

    const handleCloseDialog = () => {
        if(name.length < 1){
            console.log("Invalid name length")
            setHelperText("Please input a name to continue");
        }
        else{
            console.log(`The name registered is ${name}`);
            setOpenDialog(false);
    
            history.push({
                pathname: '/game',
                state: {question: '1'}
            });
        }
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
                        Please enter your name for the new game:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin='dense'
                        id='name'
                        label='Name'
                        value={name}
                        helperText={helperText}
                        required={true}
                        onChange={handleNameChange}
                        fullWidth
                    />
                    <DialogActions>
                        <button onClick={handleCancelDialogButton}>
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