import React, { useMemo, useState } from 'react'

const DemoUseMemo = () => {
    const [valueA, setValueA] = useState(0);
    const [valueB, setValueB] = useState(0);
    const [isCheck, setCheck] = useState(false);

    const onSum = () => {
        console.log("caculating...");

        return valueA + valueB;
    }
    // tránh việc thực lại hàm tính tổng và chỉ thực thi lại khi mảng deps đc thay đổi
    // kết quả của useMemo trả về kết quả thực thi 1 hàm
    const sum = useMemo(() => onSum(), [valueA, valueB]);
    return (
        <div>
            <h1>{valueB}</h1>
            <button onClick={() => setCheck(!isCheck)}>set check</button>
            <input type='number' onChange={(e) => setValueA(parseInt(e.target.value))} />
            <input type='number' onChange={(e) => setValueB(parseInt(e.target.value))} />
        </div>
    )
}

export default DemoUseMemo