import React, { useEffect, useRef, useState } from 'react'

const Con = () => {
    return <h1>Con</h1>
}

const Page13 = () => {
    const [count, setCount] = useState(10);
    const [count2, setCount2] = useState(0);
    const timer = useRef();
    const inputRef = useRef()

    const onStart = () => {
        // 1
        timer.current = setInterval(() => {
            setCount((prevCount) => prevCount + 1);
        }, 1000)
        console.log("timer start", timer);

    }

    const onStop = () => {
        console.log("timer stop", timer);
        clearInterval(timer.current)
    }

    const onFocus = () => {
        inputRef.current.focus();
    }

    useEffect(() => {
        timer.current = count
    }, [count])



    return (
        <div>
            <h1>ĐẾM SỐ</h1>
            <h1>{count}</h1>
            <input ref={inputRef} />
            <div>
                <button onClick={onFocus} >Focus input</button>
                <button onClick={onStart} >start</button>
                <button onClick={onStop} >stop</button>
            </div>
        </div>
    )
}

export default Page13