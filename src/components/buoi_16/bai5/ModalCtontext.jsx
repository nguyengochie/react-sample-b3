import React, { createContext, useState } from 'react'
import Modal from './Modal';

export const ModalCtx = createContext();

const ModalProvider = ({ children }) => {
    const [message, setMessage] = useState(null);

    const openModal = (message) => {
        setMessage(message);
    }

    const closeModal = () => {
        setMessage("");
    }

    return (
        <ModalCtx.Provider value={{ openModal, closeModal }}>
            {message && <Modal message={message} />}
            {children}
        </ModalCtx.Provider>
    )
}
export default ModalProvider