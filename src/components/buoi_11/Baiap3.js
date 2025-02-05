import React, { useEffect, useState } from 'react'
// minh tu ban phim khi nào bấm Enter thì hiện thị nội dung vừa nhập
const Baiap3 = () => {
    const [value, setValue] = useState("");
    const [message, setMessage] = useState("")

    const onChange = (e) => {
        setValue(e.target.value);
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Enter") {
                setMessage(`Bạn đã nhập: ${value}`);
            }
        };
        window.addEventListener("keydown", handleKeyDown);

    }, [value])

    return (
        <div>
            <h1> {message}</h1>
            <input onChange={onChange} />
        </div>
    )
}

export default Baiap3