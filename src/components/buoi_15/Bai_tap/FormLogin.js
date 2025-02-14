import React, { useContext, useState } from 'react'
import { AuthenCtx } from './AuthenContext';

const FormLogin = () => {
    const { isLoginSuccess, setIsLogin } = useContext(AuthenCtx);

    const [formLogin, setFormLogin] = useState({ username: "", password: "" });

    const onInput = (field, value) => {
        setFormLogin((prevState) => ({ ...prevState, [field]: value }))
    }

    const onLogin = () => {
        if (formLogin.username === "admin" && formLogin.password === "1234") {
            setIsLogin(true)
            // success
        } else {
            setFormLogin(false)
        }
    }

    return (
        <div>{!isLoginSuccess ?
            <>
                <div>
                    <input
                        value={formLogin?.username}
                        onChange={(e) => onInput("username", e.target.value)} placeholder='username' />
                </div>
                <div>
                    <input
                        value={formLogin?.password}
                        onChange={(e) => onInput("password", e.target.value)} placeholder='password' />
                </div>
                <button onClick={onLogin}>Login</button>
            </> : <button onClick={() => setIsLogin(false)}>Logout</button>}
        </div>
    )
}

export default FormLogin