import React, { useContext, useReducer } from 'react'
import { ThemeCtx } from './ThemeContext';

const reducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return state + 1;
        case "DECREASE":
            return state - 1;
        case "RESET":
            return 0;
        default:
            return 0;
    }
}

const Buoi15Bai1 = () => {
    const themContext = useContext(ThemeCtx);
    console.log("Bai 1", themContext);
    const [count, dispatch] = useReducer(reducer, 0);

    const onIncrease = () => {
        dispatch({ type: "INCREASE" })
    }

    const onDecrease = () => {
        dispatch({ type: "DECREASE" })
    }

    const onReset = () => {
        dispatch({ type: "RESET" })
    }

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>Tăng</button>
                <button onClick={onDecrease}>Giảm</button>
                <button onClick={onReset}>Reset</button>
            </div>
        </div>
    )
}

export default Buoi15Bai1