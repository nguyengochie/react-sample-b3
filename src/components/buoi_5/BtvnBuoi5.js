import React from 'react';
import Footer from "./Footer";
import Header from "./Header";
import Box from "./Box";
import Aside from "./Aside";

const Blog = (props) => {
    // const { title, description } = props
    return <div>
        <h2>{props?.blog?.title || "N/A"}</h2>
        <p>{props?.blog?.description || "N/A"}</p>
    </div>
}

const BtvnBuoi5 = () => {
    return (
        <div>
            <Header />
            <div style={{ display: "flex" }}>
                <div style={{ width: "80%" }}>
                    <h1>Big Title</h1>

                    <Blog blog={undefined} />
                    <Blog blog={{ title: "Title 02", description: "Description 2" }} />
                    <Blog blog={{ title: "Title 02", description: "Description 2" }} />
                </div>
                <Aside />
            </div>
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <Box text="Box 1" />
                <Box text="Box 2" />
                <Box text="Box 3" />
                <Box text="Box 4" />
            </div>
            <Footer />
        </div>
    )
}

export default BtvnBuoi5