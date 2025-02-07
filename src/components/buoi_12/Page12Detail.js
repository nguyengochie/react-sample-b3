import React, { useEffect, useState } from 'react'

const Page12Detail = () => {
    let url = new URL(window.location)
    let params = new URLSearchParams(url.search);
    let guestId = params.get('guestId');

    const [detailGuest, setDetailGuest] = useState(null);

    const fetchDetail = async () => {
        try {
            const resp = await fetch(`https://ngochieuwedding.io.vn/api/guest/${guestId}`);
            const data = await resp.json();

            setDetailGuest(data);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchDetail()
    }, [])

    // gọi API detail thông qua id -> lấy đc data -> lưu vào state -> hiển thị
    // useEffect

    return (
        <div>
            {
                !detailGuest?.error ? <>
                    <img src={detailGuest?.img} />
                    <h1>{detailGuest?.name}</h1>
                    <h1>{detailGuest?.description}</h1>
                </> : "Empty"}

        </div>
    )
}

export default Page12Detail