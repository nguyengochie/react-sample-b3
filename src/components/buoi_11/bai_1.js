import React, { useEffect, useState } from 'react'

const BaiTap1 = () => {
    const [listUser, setListUser] = useState([]);
    const [isLoading, setLoading] = useState(false);

    const fetchUsers = async () => {
        try {
            setLoading(true);

            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await resp.json(); 
            setListUser(data);
        } catch (error) {
            console.error(error);
        }
        setLoading(false);
    }

    const renderUsers = () => {
        return listUser.map((user) => {
            return <div key={user?.id}>
                <h2>{user.id}</h2>
                <p>{user.name}</p>
            </div>
        })
    }

    useEffect(() => {
        // gọi API bên trong useEffect
        fetchUsers();
    }, [])
    return (
        <div>
            <h1>Bai tap 1</h1>
            {isLoading ? "...Loading" : renderUsers()}
        </div>
    )
}

export default BaiTap1