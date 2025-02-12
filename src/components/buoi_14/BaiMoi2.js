import React, { useReducer, useState } from 'react'

const reducer = (state, action) => {
    switch (action.type) {
        case "CHANGE_A":
            return { ...state, numberA: action.number }
        case "CHANGE_B":
            return { ...state, numberB: action.number }
        case "CHANGE_C":
            return { ...state, numberB: action.number }
        default:
            return state;
    }
}

const BaiMoi2 = () => {
    const [state, dispatch] = useReducer(reducer, { numberA: 0, numberB: 0, numberC: 0 });

    const changeA = () => {
        dispatch({ type: "CHANGE_A", number: 10 })
    }
    const changeB = () => {
        dispatch({ type: "CHANGE_B", number: 90 })
    }
    const changeC = () => {
        dispatch({ type: "CHANGE_C", number: 20 })
    }


    console.log("state", state);


    return (
        <div>
            <h1>Vi Du 2:</h1>
            <button onClick={changeA}>click A</button>
            <button onClick={changeB}>click B</button>
        </div>
    )
}

export default BaiMoi2