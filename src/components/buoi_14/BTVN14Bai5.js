import React, { useCallback, useMemo, useRef, useState } from 'react'

const BTVN14Bai5 = () => {
    const [text, setText] = useState("");
    const textRef = useRef();

    const onCountWord = useCallback(() => {
        const arr = text?.trim()?.split(/\s+/);
        return arr.length;
    }, [text])

    const wordCount = useMemo(onCountWord, [text]);

    const onchange = (e) => {
        const value = e.target.value;
        setText(value);
    }
    return (
        <div>
            <h1>{wordCount}</h1>
            <textarea ref={textRef} onChange={onchange} />
        </div>
    )
}

export default BTVN14Bai5