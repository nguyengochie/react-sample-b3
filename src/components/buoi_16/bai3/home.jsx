import React, { useContext } from 'react'
import { LanguageCtx } from './LanguageContext'

const Home = () => {
    const { language } = useContext(LanguageCtx);
    return (
        <div>
            <h1>{language === "vi" ? "Trang chủ" : "Home"}</h1>

        </div>
    )
}

export default Home