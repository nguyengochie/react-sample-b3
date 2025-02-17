import React, { useContext } from 'react'
import { LanguageCtx } from './LanguageContext'
import Home from './home';
import { ModalCtx } from '../bai5/ModalCtontext';

const Bai3Buoi16 = () => {
  const { language, toggleLanguage } = useContext(LanguageCtx);
  const { openModal, closeModal } = useContext(ModalCtx)

  return (
    <div>
      <button
        onClick={() => openModal({ title: "Welcome Green Academy", description: "Chao mung den voi lop hoc " })}>
        Open modal bai 3
      </button>
      <button onClick={closeModal}>Close modal bai 3</button>
      <h1>{language}</h1>
      <button onClick={toggleLanguage}>Change language</button>
      <Home />
    </div >
  )
}

export default Bai3Buoi16