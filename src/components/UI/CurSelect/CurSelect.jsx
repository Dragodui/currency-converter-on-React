import React, {useEffect, useState} from 'react';
import classes from "./CurSelect.module.css"
const CurSelect = ({currencies, defaultCurrencies, changeCurrency, isInputSelected , currentRate}) => {


    const filteredCurrencies = currencies.filter(cur => !defaultCurrencies.includes(cur.alphaCode));


    return (
        <select value={currentRate} onChange={changeCurrency} className={isInputSelected ? `${classes.select} ${classes.select__selected}` : classes.select}>
            <option className={classes.option} value="default">another currencies:</option>
            {
                filteredCurrencies.map(cur =>
                    <option className={classes.option} onChange={changeCurrency} key={cur.alphaCode} id={cur.alphaCode} value={cur.rate}>{cur.name} ({cur.alphaCode})</option>
                )
            }
        </select>
    );
};


export default CurSelect;