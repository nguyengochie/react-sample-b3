import React, { useEffect, useState } from 'react'

const B3Bai1 = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setLoading] = useState([])
    const [searchValue, setSearchValue] = useState("")

    const fetchUsers = async () => {
        try {
            const resp = await fetch("https://jsonplaceholder.typicode.com/users");
            const data = await resp.json();
            setUsers(data);
        } catch (error) {
            console.error(error);
        }
    }

    const renderUsers = () => {
        let searchResult = users;
        // nếu có giá trị người dùng nhập vào
        if (!!searchValue.trim()) {
            searchResult = searchResult?.filter((user) =>
                user?.name
                    ?.toLowerCase()
                    ?.includes(searchValue?.toLowerCase()))
        }

        return searchResult?.map((user) => {
            return <tr key={user?.id}>
                <td>{user?.id}</td>
                <td>{user?.name}</td>
                <td>{user?.address?.street}</td>
                <td>{user?.phone}</td>
                <td>{user?.website}</td>
            </tr>
        })
    }

    const onSearchChange = (e) => {
        const value = e.target.value;
        setSearchValue(value);
    }

    useEffect(() => {
        fetchUsers();
    }, [])

    return (
        <div>
            Bài 1
            <input onChange={onSearchChange} placeholder='Nhập tên để tìm kiếm...' />
            <table border="1px">
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>adress</th>
                    <th>phone</th>
                    <th>website</th>
                </tr>
                {renderUsers()}
            </table>
        </div>
    )
}

export default B3Bai1