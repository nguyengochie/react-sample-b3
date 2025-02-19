import React from 'react'
import { useNavigate, useLocation } from "react-router-dom"
import Buoi15Bai1 from './Buoi15Bai1'
import Buoi15Bai2 from './Buoi15Bai2'

const Page15 = () => {
    const navigate = useNavigate();
    const location = useLocation();

    console.log("location", location.state);


    const onClickHome = () => {
        navigate("/");
    }
    const onClickContact = () => {
        navigate("/contact", { replace: true });
    }

    const onBack = () => {
        navigate(-1);
    }

    const onReload = () => {
        navigate(0);
    }

    const onForward = () => {
        navigate(1);
    }



    return (
        <div>
            <button onClick={onForward}>Click Forward</button>
            <button onClick={onReload}>Click Reload</button>
            <button onClick={onBack}>Click Back</button>
            <button onClick={onClickHome}>Click Home</button>
            <button onClick={onClickContact}>Click Contact</button>
            <h1>Buoi 15</h1>
            <Buoi15Bai1 />
            <Buoi15Bai2 />
            {/* <Buoi15Bai3 /> */}
            {/* <Buoi15Bai4 /> */}
            {/* <DemoUseContext /> */}
        </div>
    )
}

export default Page15