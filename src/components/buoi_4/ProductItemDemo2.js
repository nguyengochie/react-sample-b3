import React from 'react'

const URL = "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_black_titan_b3274fbf05.png";

const Image = ({ src, alt }) => {

    return <img style={{ width: "100%" }} src={src || URL} alt={alt} />
}

const ProductItem = ({ title, img, description, price }) => {
    // const { title, img, description, price } = product;

    const imgData = { src: img, alt: title }

    return (
        <div style={{ width: "350px", textAlign: "center", border: "2px solid #e5e5e5" }}>
            <div style={{ padding: "5px", background: "#fff", borderBottom: "2px solid #e5e5e5" }}>
                <Image {...imgData} />
                <img style={{ width: "100%" }} src={img} alt={title} />
            </div>
            <div style={{ padding: "10px 5px" }}>
                <h2>{title}</h2>
                <p style={{ margin: "8px 0px" }}>{description} </p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default ProductItem