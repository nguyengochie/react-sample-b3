import React, { createContext, useState } from 'react'

export const AuthenCtx = createContext();

const AuthenProvider = ({ children }) => {
    const [isLogin, setIsLogin] = useState(false);

    return (
        <AuthenCtx.Provider value={{ isLoginSuccess: isLogin, setIsLogin }}>
            {children}
        </AuthenCtx.Provider>
    )
}

export default AuthenProvider