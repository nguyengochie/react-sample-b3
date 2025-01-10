import React from 'react'

const Counter = ({ setCount }) => {
    return (
        <button onClick={() => {
            setCount((prevCount) => {
                return prevCount + 1
            })
        }}>Counter</button>
    )
}

export default Counter