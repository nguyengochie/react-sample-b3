import React, { createContext, useState } from 'react'

export const AuthenCtx = createContext();

const AuthenProvider = ({ children }) => {
    const isLoginLocal = localStorage.getItem("isLogin")
    const [isLogin, setIsLogin] = useState(isLoginLocal);

    return (
        <AuthenCtx.Provider value={{ isLoginSuccess: isLogin, setIsLogin }}>
            {children}
        </AuthenCtx.Provider>
    )
}

export default AuthenProvider