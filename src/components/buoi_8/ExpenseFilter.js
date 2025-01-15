import React, { useState } from 'react';
import style from "./style.module.css"

const OPTIONS = ["ALL", "2025", "2024", "2023", "2022"];
const ExpenseFilter = ({ setFilterYear }) => {
    const renderOptions = () => {
        return OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)
    }

    return (
        <div className={style.flex} style={{ justifyContent: "space-between" }}>
            <h3 style={{ color: "#ffff" }}>Filter by year</h3>
            <select onChange={(e) => { setFilterYear(e.target.value) }}>
                {renderOptions()}
            </select>
        </div>
    )
}

export default ExpenseFilter