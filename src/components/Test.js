import React, { memo, useCallback, useState } from 'react'



const Test = () => {
    const [isCheck, setCheck] = useState(false);
    const [isCheck2, setCheck2] = useState(false);

    const clickMe = useCallback(() => {
        console.log("click");

    }, [])
    return (
        <div>
            onChange
            <button onClick={() => setCheck2(!isCheck2)}>Check</button>
            {/* <Con isCheck={isCheck} /> */}
        </div>
    )
}

export default Test