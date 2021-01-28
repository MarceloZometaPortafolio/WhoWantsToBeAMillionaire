import React from 'react'
import '../styles/CustomButtom.css'

const CustomButton = (props) => {
    const ButtonClicked = () => {
        props.action();
    }

    return(
        <div className="custom-button">
            <button onClick={ButtonClicked}>{props.message}</button>
        </div>
    );
}

export default CustomButton;