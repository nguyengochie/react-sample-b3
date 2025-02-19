import React, { useContext } from 'react'
import Page15 from './buoi_15/Page15'
import FormLogin from './buoi_15/Bai_tap/FormLogin'
import Page16 from './buoi_16/Page16';
import { Routes, Route, Link, Outlet, useNavigate } from 'react-router-dom'
import { AuthenCtx } from './buoi_15/Bai_tap/AuthenContext';

const Product = () => {
    const navigate = useNavigate();
    return <div>
        <button onClick={() => navigate("/product/tab1")}>Tab1</button>
        <button onClick={() => navigate("/product/tab2")}>Tab2</button>
        <button onClick={() => navigate("/product/tab3")}>Tab3</button>
        <Outlet />
    </div>
}

const Detail = () => {
    return <div>
        <h2>Detail Product</h2>
    </div>
}

const Main = () => {
    const { isLoginSuccess } = useContext(AuthenCtx);
    return (
        <div>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/buoi15" >Page 15</Link></li>
                <li><Link to="/contact" >Contact</Link></li>
                <li><Link to="/product/detail" >detail</Link></li>
            </ul>
            <Routes>
                {/* {isLoginSuccess && <> */}
                <Route path='/' element={<Page16 />} />
                <Route path='/buoi15' element={<Page15 />} />
                <Route path='/contact' element={<h1>Contact</h1>} />

                <Route path="/product" element={<Product />} >
                    <Route path="tab1" element={<h1>Tab1</h1>} />
                    <Route path="tab2" element={<h1>Tab2</h1>} />
                    <Route path="tab3" element={<h1>Tab3</h1>} />
                </Route>

                {/* </>} */}
                <Route path="/login" element={<FormLogin />} />
                <Route path="*" element={<h1>NOT FOUND</h1>} />
            </Routes>


            {/* <FormLogin />
            <Page15 /> */}
            {/* <Page16 /> */}
        </div>
    )
}

export default Main