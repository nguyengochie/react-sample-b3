import React, { createContext, useState } from 'react'

export const ThemeCtx = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    const onChangeTheme = (themeParam) => {
        setTheme(themeParam);
    }
    return (
        <ThemeCtx.Provider value={{ theme: theme, onChangeTheme }}>
            {children}
        </ThemeCtx.Provider>
    )
}

export default ThemeProvider;

