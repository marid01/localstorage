import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import './App.css';
import {AppStateType} from "./bll/store";
import {incValuesTC, setValueFromLocalStorageTC} from "./bll/counter-reducer";

function App() {

    const value = useSelector<AppStateType, number>(state => state.counter.value)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setValueFromLocalStorageTC())
    }, [])

    let incHandler = () => {
        dispatch(incValuesTC())
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
        </div>
    );
}


export default App;
