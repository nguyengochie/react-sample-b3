import React from 'react'

const URL = "https://cdn2.fptshop.com.vn/unsafe/750x0/filters:quality(100)/iphone_16_pro_max_desert_titan_3552a28ae0.png";

const ProductItem = ({ product }) => {
    const { title, img, description, price } = product;
    return (
        <div style={{ width: "350px", textAlign: "center", border: "2px solid #e5e5e5" }}>
            <div style={{ padding: "5px", background: "#fff", borderBottom: "2px solid #e5e5e5" }}>
                <img style={{ width: "100%" }} src={img} alt="san-pham" />
            </div>
            <div style={{ padding: "10px 5px" }}>
                <h2>{title}</h2>
                <p style={{ margin: "8px 0px " }}>{description} </p>
                <h3>{price}</h3>
            </div>
        </div>
    )
}

export default ProductItem;


//1. đẩy code lên ntn? push
// - push những thay đổi gì & push lên nhánh nào

// Server: 1-2-3-4-5-6-7-8-9-10
// Local: 1-2-3-4-5-6-7-8-9-10
//  - code thêm: 11-12: 1-2-3-4-5-11-12

//2. kéo code về ntn? pull
// - pull từ nhánh nào
// - git pull origin <ten nhanh> -> git pull origin master
