import React from 'react';
import style from "./style.module.css";
import { getTitleMonth } from "../../util/helper";

const ExpenseItem = ({ item, setListExpense }) => {
    const year = new Date(item.date).getFullYear();
    const day = new Date(item.date).getDate();

    const onChangeTitle = () => {
        setListExpense((prevList) => {
            const cloneList = [...prevList];
            const foundIndex = cloneList.findIndex((i) => i.id === item.id);
            if (foundIndex === -1) {
                return prevList;
            }
            cloneList[foundIndex].title = "Updated!";
            return cloneList;
        })
    }

    return (
        <div className={`${style.flex} ${style.itemContent}`} style={{ justifyContent: "space-between", marginBottom: "8px" }}>
            <div className={`${style.flex}`} style={{ alignItems: "center", gap: "8px" }}>
                <div className={style.dateContent}>
                    <p>{getTitleMonth(item.date)}</p>
                    <p>{year}</p>
                    <p>{day}</p>
                </div>
                <h3>{item.title}</h3>
            </div>

            <div>
                <div>${item.amount}</div>
                <button onClick={onChangeTitle}>Change title</button>
            </div>
        </div>
    )
}

export default ExpenseItem