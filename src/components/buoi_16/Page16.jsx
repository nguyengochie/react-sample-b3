import React from 'react'
import Bai3Buoi16 from './bai3/Bai3Buoi16'
import LanguageProvider from './bai3/LanguageContext'
import Bai4Buoi16 from './bai4/Bai4Buoi16'
import ProductProvider from './bai4/productContext/ProductContext'
import Modal from './bai5/Modal'
import ModalProvider from './bai5/ModalCtontext';
import { useNavigate } from 'react-router-dom'

const Page16 = () => {
    const navigate = useNavigate();

    const onClickFoward = () => {
        navigate(1);
    }
    const clickContactState = () => {
        navigate("/buoi15", { state: { name: "Green academy" } });
    }
    return (
        <ModalProvider>
            <div>
                <button onClick={onClickFoward}> Foward</button>
                <button onClick={clickContactState}> Buoi 15</button>
                <LanguageProvider>
                    <Bai3Buoi16 />
                </LanguageProvider>

                <ProductProvider>
                    <Bai4Buoi16 />
                </ProductProvider>
            </div>
        </ModalProvider>
    )
}

export default Page16