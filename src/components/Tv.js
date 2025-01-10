import React, { useState } from 'react'

const Tv = ({ w, h }) => {
    const [status, setStatus] = useState(false);

    console.log("render");

    return (
        <div>
            <h1> {status ? "Bat" : "Tat"}</h1>
            <button onClick={() => {
                if (status) {
                    setStatus((prevState) => {
                        console.log("prevState", prevState);
                        return false;
                    });
                } else {
                    setStatus(true)
                }
            }}>Power</button>
        </div>
    )
}

export default Tv