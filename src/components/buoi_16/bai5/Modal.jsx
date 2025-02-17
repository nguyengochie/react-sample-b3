import React from 'react'

const Modal = ({ message }) => {
    return (
        <div style={{
            background: "#ef7925",
            color: "#fff",
            border: "1px solid", borderRadius: "10px",
            padding: "20px", position: "fixed", margin: "0 auto", left: 0, right: 0, width: "fit-content",
            top: "30vh"
        }}>
            <h1>{message?.title}</h1>
            <p>{message?.description}</p>
        </div>
    )
}

export default Modal