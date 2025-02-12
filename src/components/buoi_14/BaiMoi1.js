import React, { useReducer, useState } from 'react'

// const reducer = (state, action) => {
//     console.log(state);
//     console.log(action);
//     return action
// }

function BaiMoi() {
    const [number, setNumber] = useState(0);

    const [state, dispatch] = useReducer((state, action) => {
        console.log("action", action);
        return action % 2 === 0 ? true : false
    }, 0);

    const onClichChangeNumber = () => {
        dispatch(1000);
    }

    console.log("state", state);


    return (
        <div>
            <button onClick={() => onClichChangeNumber()}>Click</button>
        </div>
    )
}

export default BaiMoi