import React, { useCallback, useMemo, useState } from 'react'

const BTVN14Bai2 = () => {
    const [numberA, setNumberA] = useState(0);
    const [numberB, setNumberB] = useState(0);
    const [isCheck, setCheck] = useState(0);

    const sum = () => {
        return parseInt(numberA) + parseInt(numberB)
    }

    const sumAB = useMemo(sum, [numberA, numberB]);

    const onChangeA = (e) => {
        const value = e.target.value;
        setNumberA(value);
    }

    const onChangeB = (e) => {
        const value = e.target.value;
        setNumberB(value);
    }

    return (
        <div>
            <button onClick={() => setCheck(!isCheck)}>check</button>
            <h1>{sumAB}</h1>
            <input type='number' onChange={onChangeA} placeholder='nhap A' />
            <input type='number' onChange={onChangeB} placeholder='nhap B' />
        </div>
    )
}

export default BTVN14Bai2