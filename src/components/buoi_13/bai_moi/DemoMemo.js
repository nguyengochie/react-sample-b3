import React, { useState, memo, useCallback } from 'react'

const Con = memo(({ log }) => {

    console.log("re-render component con");

    const onClick = () => {
        log()
    }
    return <h1>
        Con Component
        <button onClick={onClick}>onClick con</button>
    </h1>
})

const DemoMemo = () => {
    const [isCheck, setCheck] = useState(false)
    const [isStatus, setStatus] = useState(false)

    // tránh re-render lại function và kq của useCallback sẽ trả về 1 function
    const log = useCallback(() => {
        console.log("hello green");
    }, [isStatus])
    

    return (
        <div>
            DemoMemo
            <button onClick={() => setCheck(!isCheck)}>check{`${isCheck}`}</button>
            <button onClick={() => setStatus(!isStatus)}>check status{`${isStatus}`}</button>
            <Con log={log} />
        </div>
    )
}

export default DemoMemo