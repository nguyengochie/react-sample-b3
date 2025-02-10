import React, { useEffect, useState } from 'react'

const B3Bai3 = () => {
    const [users, setUsers] = useState([]);
    const [detailuser, setDetailUser] = useState(null);


    const fetchUsers = async () => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await resp.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchDetailUsers = async (id) => {
        if (!id) return;
        try {
            const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await resp.json();
            setDetailUser(data);
        } catch (error) {
            console.error(error);
        }
    }

    const renderUsers = () => {
        return users?.map((user) => {
            return <tr key={user?.id}>
                <td><div onClick={() => fetchDetailUsers(user?.id)}>
                    {user?.id}
                </div></td>
                <td>{user?.name}</td>
                <td>{user?.address?.street}</td>
                <td>{user?.phone}</td>
                <td>{user?.website}</td>
            </tr>
        })
    }

    const goBack = () => {
        setDetailUser(null);
    }

    useEffect(() => {
        fetchUsers();
    }, [])


    return (
        <div>
            Bai 3:
            {!!detailuser && <div >
                <h2>🔍 Chi tiết người dùng</h2>
                <p><strong>🆔 ID:</strong> {detailuser?.id}</p>
                <p><strong>👤 Tên:</strong> {detailuser?.name}</p>
                <p><strong>📧 Email:</strong> {detailuser?.email}</p>
                <p><strong>📍 Địa chỉ:</strong> {detailuser?.address?.street}, {detailuser?.address?.city}</p>
                <p><strong>☎️ SĐT:</strong> {detailuser?.phone}</p>
                <p><strong>🌐 Website:</strong> {detailuser?.website}</p>
                <button onClick={goBack} >⬅️ Quay lại danh sách</button>
            </div>}

            {!detailuser && <table border="1px">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>adress</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
                {renderUsers()}
            </table>}
        </div>
    )
}

export default B3Bai3