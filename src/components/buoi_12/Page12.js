import React, { useEffect, useState } from 'react'


const Page12 = () => {
  const [listGuest, setListGuest] = useState([]);

  const fetchPosts = async () => {
    try {
      const resp = await fetch("https://ngochieuwedding.io.vn/api/guest");
      const data = await resp.json();
      setListGuest(data);
    } catch (error) {
      console.error(error);
    }
  }

  const renderGuest = () => {
    return listGuest.map((guest) => {
      return <tr key={guest?._id}>
        <td><a target='_blank' href={`/detail?guestId=${guest?._id}`}>{guest?._id}</a> </td>
        <td>{guest?.name}</td>
        <td>{guest?.description}</td>
      </tr>
    })
  }

  useEffect(() => {
    fetchPosts();
  }, [])

  return (
    <div>
      <table border="1px">
        <tr>
          <th>id</th>
          <th>name</th>
          <th>description</th>
        </tr>
        {renderGuest()}
      </table>
    </div>
  )
}

export default Page12