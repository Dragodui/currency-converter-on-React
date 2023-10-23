import CurInput from "./components/UI/CurInput/CurInput";
import CurChoosing from "./components/UI/CurChoosing/CurChoosing";
import {useEffect, useState} from "react";
import {useFetchCurrencies} from "./components/hooks/useFetchCurrencies";
import Loader from "./components/UI/Loader/Loader";
import axios from "axios";
import "./styles/App.css"
import ConverterField from "./components/ConverterField";
import Header from "./components/Header";
import CurButton from "./components/UI/CurButton/CurButton";
import swapImage from "./images/swap.png" ;


function App() {
    const [currencies, setCurrencies] = useState([]);

    const [value1, setValue1] = useState('0,00');
    const [value2, setValue2] = useState('0,00');

    const [currentRate1, setcurrentRate1] = useState(1);
    const [currentRate2, setcurrentRate2] = useState(1);
    const [currentCurrency1, setCurrentCurrency1] = useState('USD');
    const [currentCurrency2, setCurrentCurrency2] = useState('USD');


    const [isInputSelected1, setIsInputSelected1] = useState(false);
    const [isInputSelected2, setIsInputSelected2] = useState(false);

    const [fetchCurrencies, loading, error] = useFetchCurrencies(async () => {
        const response = await axios.get('http://www.floatrates.com/daily/usd.json');
        setCurrencies(Object.values(response.data));
    });

    const swapCurrencies = () => {

        setcurrentRate1(currentRate2);
        setcurrentRate2(currentRate1);

        setCurrentCurrency1(currentCurrency2);
        setCurrentCurrency2(currentCurrency1);

        setIsInputSelected1(isInputSelected2);
        setIsInputSelected2(isInputSelected1);
    }

    useEffect(() => {
        fetchCurrencies();
    }, []);

    useEffect(() => {
        setValue2((value1*(currentRate2/currentRate1)).toFixed(2))
    }, [<CurChoosing/>])


    return (
        <div className="App">
            <Header/>
            {
                loading
                    ? <Loader/>
                    :  error
                        ? <div className="error">{`Error occupied: ${error.message}`}</div>
                        : <main>
                            <div className="converter__wrapper">
                                <ConverterField
                                    currentCurrency={currentCurrency1}
                                    setCurrentCurrency={setCurrentCurrency1}
                                    currencies={currencies}
                                    setValue={setValue1}
                                    value={value1}
                                    currentRate={currentRate1}
                                    setCurrentRate={setcurrentRate1}
                                    isInputSelected={isInputSelected1}
                                    setIsInputSelected={setIsInputSelected1}
                                />
                                <CurButton style={{height:40, display:"flex",alignItems:"center", justifyContent:"center"}} onClick={swapCurrencies}><img style = {{width: 20}} src={swapImage} /></CurButton>
                                <ConverterField
                                    currentCurrency={currentCurrency2}
                                    setCurrentCurrency={setCurrentCurrency2}
                                    currencies={currencies}
                                    setValue={setValue2}
                                    value={value2}
                                    currentRate={currentRate2}
                                    setCurrentRate={setcurrentRate2}
                                    isInputSelected={isInputSelected2}
                                    setIsInputSelected={setIsInputSelected2}
                                />
                            </div>
                        </main>
            }
        </div>
    );
}

export default App;
