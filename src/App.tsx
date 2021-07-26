import React, {useState} from 'react';
import './App.css';

function App() {
    const [value, setValue] = useState<number>(0)

    let incHandler = () => {
        setValue(value + 1)
    }

    const setToLocalStorageHandler = () => {
        localStorage.setItem('counterValue', JSON.stringify(value))
        localStorage.setItem('counterValue + 1', JSON.stringify(value + 1))
    }

    const getFromLocalStorage = () => {
        let valueAsString = localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue = JSON.parse(valueAsString)
            setValue(newValue)
        }
    }

    const clearLocalStorage = () => {
        localStorage.clear()
        setValue(0)
    }

    const removeItemFromLocalStorage = () => {
        localStorage.removeItem('counterValue' + 1)
        setValue(0)
    }

    return (
        <div className="App">
            <h1>{value}</h1>
            <button onClick={incHandler}>inc</button>
            <button onClick={setToLocalStorageHandler}>setToLocalStorage</button>
            <button onClick={getFromLocalStorage}>getFromLocalStorage</button>
            <button onClick={clearLocalStorage}>clearLocalStorage</button>
            <button onClick={removeItemFromLocalStorage}>removeItemFromLocalStorage</button>
        </div>
    );
}

export default App;
