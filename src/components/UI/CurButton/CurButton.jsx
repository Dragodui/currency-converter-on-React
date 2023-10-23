import React from 'react';
import classes from "./CurButton.module.css"
const CurButton = ({children, currentRate, ...props}) => {

    return (
        <button
            {...props}
            className={
                currentRate === children
                ? `${classes.button} ${classes.button__active}`
                : classes.button
            }
        >
            {children}
        </button>
    );
};

export default CurButton;