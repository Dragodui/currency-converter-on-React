import React from 'react';
import CurChoosing from "./UI/CurChoosing/CurChoosing";
import CurInput from "./UI/CurInput/CurInput";


const ConverterField = ({currencies, currentRate, setCurrentRate, value, setValue, currentCurrency, setCurrentCurrency, swapValue, isInputSelected, setIsInputSelected}) => {
    return (
        <div className="converter__field">
            <CurChoosing swapValue={swapValue} currentCurrency={currentCurrency} setCurrentCurrency={setCurrentCurrency} currencies = {currencies} currentRate = {currentRate} setcurrentRate={setCurrentRate} isInputSelected={isInputSelected} setIsInputSelected={setIsInputSelected}/>
            <CurInput value={value} setValue={setValue}/>
        </div>
    );
};

export default ConverterField;