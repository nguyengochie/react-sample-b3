import React, { useState } from 'react'

const THEMES = {
    darkMode: {
        bgColor: "#252525",
        color: "#ffff"
    },
    lightMode: {
        bgColor: "#ffff",
        color: "#252525"
    }
}

const B3Bai2 = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const theme = isDarkMode ? THEMES.darkMode : THEMES.lightMode;

    return (
        <div style={{ width: "100vw", height: "100vh", background: theme.bgColor }}>
            <button onClick={() => setIsDarkMode(!isDarkMode)}>
                {isDarkMode ? "Light Mode" : "Dark Mode"}
            </button>
            <h1 style={{ color: theme.color }}>Bai</h1>
            <p style={{ color: theme.color }}>Chua BTVN so 2</p>
        </div>
    )
}

export default B3Bai2