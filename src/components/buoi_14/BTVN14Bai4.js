import React, { useCallback, useMemo, useState } from 'react'

const BTVN14Bai4 = () => {
    const [listNumber, setListNumber] = useState([1, 2, 3, 4]);

    const onSum = () => {
        return listNumber.reduce((sum, item) => { return sum += item }, 0)
    }

    const sum = useMemo(onSum, [listNumber]);

    const onGetNumber = useCallback(() => {
        const number = Math.floor(Math.random() * 100) + 1;
        setListNumber((prevList) => ([...prevList, number]));
    }, [])



    return (
        <div>
            <h1>{sum}</h1>
            <button onClick={() => onGetNumber()}>Get Number</button>
        </div>
    )
}

export default BTVN14Bai4