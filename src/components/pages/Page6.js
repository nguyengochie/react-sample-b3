import React, { useState } from 'react'
import Counter from '../Counter';
import Voting from '../Voting';
import ToolBMI from '../ToolBMI';

const Page6 = () => {
    const [count, setCount] = useState(0);

    const onCount = () => {
        setCount((prevCount) => {
            return prevCount + 1;
        });
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={onCount}>Count</button>
            <Counter setCount={setCount} />
            <Voting />
            <ToolBMI />
        </div>
    )
}

export default Page6