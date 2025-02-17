import React, { createContext, useState } from 'react'


export const LanguageCtx = createContext();

const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState("vi");

    const toggleLanguage = () => {
        setLanguage((prev) => prev === "vi" ? "en" : "vi")
    }

    return (
        <LanguageCtx.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageCtx.Provider>
    )
}

export default LanguageProvider