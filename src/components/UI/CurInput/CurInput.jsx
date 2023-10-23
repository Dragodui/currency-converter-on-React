import React, {useState} from 'react';
import classes from "./CurInput.module.css"
const CurInput = ({value, setValue}) => {

    const handleChange = e => {
        setValue(e.target.value);
    }
    const handleClick = e => {
        if (e.target.value ==='0,00') {
            e.target.value = '';
        }
    }
    const handleBlur = e => {
        if (!e.target.value) {
            e.target.value = '0,00';
        }
    }
    return (
        <input
            className={classes.input}
            onClick={handleClick}
            onBlur ={handleBlur}
            type="number"
            placeholder='0,00'
            value={value}
            onChange={handleChange}
        />
    );
};

export default CurInput;