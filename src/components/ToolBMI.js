import React, { useState } from 'react'

const ToolBMI = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBMI] = useState(0);

    const onCaculateBMI = () => {
        const h = height / 100;
        const bmi = weight / (h * h);

        setBMI(bmi);
    }

    const renderStatusBMI = () => {
        if (bmi > 25) return "Béo"
        if (bmi < 10) return "Gầy"
        return "Bình thường"
    }

    return (
        <div>
            <input
                type='number'
                onChange={(e) => {
                    const value = e.target.value;
                    const nbValue = parseInt(value);
                    setWeight(nbValue);
                }}
                placeholder='Nhập cân nặng' />

            <input
                type='number'
                onChange={(e) => {
                    const value = e.target.value;
                    const nbValue = parseInt(value);
                    setHeight(nbValue);
                }}
                placeholder='Nhập chiều cao' />
            <button onClick={onCaculateBMI}>Caculate ToolBMI</button>
            {!!bmi && <h1>BMI:{bmi.toFixed(2)}</h1>}
            {!!bmi && <h2>{renderStatusBMI()}</h2>}
        </div>
    )
}

export default ToolBMI