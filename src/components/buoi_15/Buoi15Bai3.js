import React, { useReducer } from 'react'

const DEFAULT_STATE = {
    email: "",
    password: "",
    error: { email: "", password: "" },
    isLoginSuccess: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return { ...state, [action.field]: action.value };
        case "ERROR":
            return { ...state, error: action?.error }
        case "LOGIN_SUCCESS":
            return { ...state, isLoginSuccess: action?.isLoginSuccess }
        default:
            break;
    }
}
const Buoi15Bai3 = () => {
    const [formLogin, dispatch] = useReducer(reducer, DEFAULT_STATE);

    const onInputChange = (field, value) => {
        dispatch({ type: "INPUT", field, value });
    }

    const onLogin = () => {
        const errorEmail = !formLogin?.email?.includes("@") ? "Email sai dinh dang" : ""
        const errorPassword = formLogin?.password?.length < 6 ? "Password sai dinh dang" : ""

        dispatch({
            type: "ERROR",
            error: { email: errorEmail, password: errorPassword }
        })

        if (!errorEmail && !errorPassword) {
            dispatch({
                type: "LOGIN_SUCCESS",
                isLoginSuccess: true
            })
        }


    }

    return (
        <div style={{ padding: "30px" }}>
            <div style={{ display: "flex", flexDirection: "column", maxWidth: 400, gap: "10px" }}>
                <div style={{ width: "100%" }}>
                    <p>Email</p>
                    <input
                        value={formLogin?.email}
                        onChange={(e) => onInputChange("email", e.target.value)}
                        style={{ width: "80%" }} />
                </div>
                <div style={{ width: "100%" }}>
                    <p>Password</p>
                    <input
                        value={formLogin?.password}
                        onChange={(e) => onInputChange("password", e.target.value)}
                        // type='password'
                        style={{ width: "80%" }} />
                </div>
                {formLogin?.error?.email && <p style={{ color: "red" }}>{formLogin?.error?.email}</p>}
                {formLogin?.error?.password && <p style={{ color: "red" }}>{formLogin?.error?.password}</p>}
                {formLogin?.isLoginSuccess && <h2 style={{ color: "green" }}>Login Success</h2>}
                <button onClick={onLogin}>Login</button>
            </div>
        </div>
    )
}

export default Buoi15Bai3