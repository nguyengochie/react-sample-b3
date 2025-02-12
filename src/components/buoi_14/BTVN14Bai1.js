import React, { useRef } from 'react';


const BTVN14Bai1 = () => {
    const inputRef = useRef();
    const clickRef = useRef(0);


    const onClick = () => {
        clickRef.current = clickRef.current + 1;

        console.log("so lan clickRef: ", clickRef.current);
        inputRef.current.focus();
    }


    return (
        <div>
            <button onClick={onClick}>Click</button>
            <input ref={inputRef} />
        </div>
    )
}

export default BTVN14Bai1