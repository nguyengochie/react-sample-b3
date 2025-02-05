import React, { useEffect, useState } from 'react'

const BaiTap2 = () => {
    const [count, setCount] = useState(-1);


    useEffect(() => {
        if (count < 0) {
            return;
        }

        const timer = setInterval(() => {
            setCount((prevCount) => {
                if (prevCount <= 0) {
                    clearInterval(timer);
                    return 0;
                }
                return prevCount - 1;
            })
        }, 1000)

        return () => {
            clearInterval(timer);
        }
    }, [count])

    return (
        <div>
            <h1>Bai Tap 2</h1>
            <button onClick={(() => {
                setCount(count <= 0 ? 10 : -1)
            })}>
                {count <= 0 ? "Start" : "Stop"}
            </button>
            <div>
                {count > 0 ? count : "Het gio!"}
            </div>
        </div>
    )
}

export default BaiTap2