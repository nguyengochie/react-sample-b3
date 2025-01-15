import React, { useState } from 'react';
import style from "./style.module.css"
import ExpenseForm from './ExpenseForm';
import ExpenseItem from './ExpenseItem';
import ExpenseFilter from './ExpenseFilter';
import { DATA } from "./const";


const HomeWork = () => {
    const [listExpense, setListExpense] = useState(DATA);
    const [filterYear, setFilterYear] = useState("ALL");

    const renderExpenses = () => {
        // danh sách gốc
        let list = listExpense;
        //nếu tồn tại filter thì sẽ thực hiện lọc và gán vào biến list
        if (!!filterYear && filterYear !== "ALL") {
            list = list.filter((i) => {
                const iYear = new Date(i.date).getFullYear() + "";
                return iYear === filterYear;
            })
        }
        // in biến list ra
        return list.map((item) => {
            return <ExpenseItem setListExpense={setListExpense} item={item} />
        })
    }

    const saveForm = (formData) => {
        const newForm = { ...formData, id: `EP-${Math.random() * 10}` }
        setListExpense((prev) => {
            return [...prev, newForm];
        });
    }


    return (
        <div className={`${style["p-10"]} ${style.container}`}>
            <ExpenseForm saveForm={saveForm} />
            <div style={{ marginTop: 20 }}>
                <ExpenseFilter setFilterYear={setFilterYear} />
                <div style={{ marginTop: 20 }}>
                    {renderExpenses()}
                </div>
            </div>
        </div>
    )
}

export default HomeWork