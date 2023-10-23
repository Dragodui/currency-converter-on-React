import React, {useState, useEffect} from 'react';
import CurButton from "../CurButton/CurButton";
import CurSelect from "../CurSelect/CurSelect";
import classes from "./CurChoosing.module.css";

const CurChoosing = ({currencies, currentRate, setcurrentRate, currentCurrency, setCurrentCurrency, swapValue, isInputSelected, setIsInputSelected}) => {


    const defaultCurrencies = [
       'USD', 'EUR', 'GBP'
    ]


    const [selectedOption, setSelectedOption] = useState(`default`);


    const convertCurrency = (curValue, setIsInputSelected = () => {}) => {
        if (curValue === 'USD') {
            setcurrentRate(1);
            setCurrentCurrency('USD');
        } else {
            currencies.forEach(cur => {
                if (cur.alphaCode.toUpperCase() === curValue) {
                    setcurrentRate(cur.rate);
                    setCurrentCurrency(cur.alphaCode);
                }
            });
        }

    }
    const changeCurrencyForButton = e => {
        setIsInputSelected(false);
        convertCurrency(e.target.value);
    }

    const changeCurrencyForSelected = e => {
        const selectedCurrency = e.target.options[e.target.selectedIndex].id;
        setcurrentRate(e.target.value);
        setCurrentCurrency(selectedCurrency);
        convertCurrency(selectedCurrency, setIsInputSelected);
        if (!defaultCurrencies.includes(selectedCurrency)) {
            setIsInputSelected(true);
        }
    }


    return (
        <div className={classes.choosing}>
           <div className={classes.langs}>
               <div className={classes.buttons}>
                   {
                       defaultCurrencies.map(cur =>
                           <CurButton
                               key = {cur}
                               onClick={changeCurrencyForButton}
                               value = {cur}
                               currentRate={currentCurrency}>
                               {cur}
                           </CurButton>)
                   }
               </div>
               <CurSelect currentRate={currentRate} selectedOption = {selectedOption} isInputSelected={isInputSelected} swapValue={swapValue} currencies={currencies} defaultCurrencies={defaultCurrencies} changeCurrency={changeCurrencyForSelected}/>
           </div>
        </div>
    );
};

export default CurChoosing;