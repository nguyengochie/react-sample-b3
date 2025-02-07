import React from 'react'

const Page12Detail = () => {
    let url = new URL(window.location)
    let params = new URLSearchParams(url.search);
    let sourceid = params.get('id')

    // gọi API detail thông qua id -> lấy đc data -> lưu vào state -> hiển thị
    // useEffect
    return (
        <div>Page12Detail</div>
    )
}

export default Page12Detail