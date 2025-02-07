import React from 'react'

const Page12 = () => {
  // viết hàm get API -> lấy Data -> Lưu nó vào State -> map data ra để hiển thị
  // useEffect                         useState           renderGuests sd listGuest.map

  // <a href="/detail?id=67a5f1375c593e4d04455632" target="_blank" />



  return (
    <div>
      <table>
        <tr>
          <th>id</th>
          <th>name</th>
        </tr>
        <tr>
          <td>id-01</td>
          <td>Nguyen Van A</td>
        </tr>
      </table>
    </div>
  )
}

export default Page12