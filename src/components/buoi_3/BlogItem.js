import React from 'react';

const Thumbnail = (props) => {
    const { word, bgColor } = props;
    return <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: bgColor,
        borderRadius: "10px",
        width: 100, height: 100
    }}>
        <h1 style={{ color: "#ffff", fontSize: "80px", fontWeight: 500 }}>{word}</h1>
    </div>
}

const BlogItem = ({ blog, isReading }) => {
    const { title, description } = blog;
    console.log("isReading", isReading);


    return (
        <div style={{ display: "flex" }}>
            <Thumbnail word={title?.[0]} bgColor="pink" />
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default BlogItem