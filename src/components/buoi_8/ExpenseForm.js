import React, { useState } from 'react';
import style from "./style.module.css"

const ExpenseForm = ({ saveForm }) => {
    const [form, setForm] = useState();
    const [isShowForm, setIsShowForm] = useState(false);

    const setInputChange = (name, e) => {
        const value = e.target.value;
        setForm((prevForm) => {
            return { ...(prevForm || {}), [name]: value }
        })
    }

    return (
        <div style={{ background: "#a892ee", borderRadius: "10px", padding: "8px" }}>
            {isShowForm ? <>
                <div className={`${style.flex} ${style["gap-10"]}`}>
                    <div>
                        <h3>Title</h3>
                        <input value={form?.title} onChange={(e) => setInputChange("title", e)} />
                    </div>
                    <div>
                        <h3>Amount</h3>
                        <input value={form?.amount} type='number' onChange={(e) => setInputChange("amount", e)} />
                    </div>
                </div>
                <div>
                    <h3>Date</h3>
                    <input value={form?.date} type='date' onChange={(e) => setInputChange("date", e)} />
                </div>
                <button onClick={() => {
                    saveForm(form)
                    setForm({
                        title: "",
                        amount: "",
                        date: ""
                    });
                }}>Add expense</button>
                <button onClick={() => setIsShowForm(false)}>Cancel</button>
            </> : <div style={{ padding: "30px", textAlign: "center" }}>
                <button onClick={() => setIsShowForm(true)}>Add new Expense</button>
            </div>}

        </div>
    )
}

export default ExpenseForm