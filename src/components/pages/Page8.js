import React, { useEffect, useState } from 'react';

const DEFAULT_STATE = {
    name: "",
    class: "",
    isPresent: false,
    note: ""
}
const Page8 = () => {
    const [form, setForm] = useState(DEFAULT_STATE);
    const [isShow, setShow] = useState(false);

    const onInput = (name, e) => {
        setForm((prevForm) => {
            return { ...prevForm, [name]: e.target.value }
        })
    }

    const onChecked = (e) => {
        setForm((prevForm) => {
            return { ...prevForm, isPresent: e.target.checked }
        })
    }

    const onSubmit = () => {
        if (!!form) {
            setShow(true);
        } else {
            setShow(false);
        }
    }

    return (
        <div>
            <div>
                <h3>Name:</h3>
                <input onChange={(e) => onInput("name", e)} />
            </div>
            <div>
                <h3>Class:</h3>
                <input onChange={(e) => onInput("class", e)} />
            </div>
            <div>
                <h3>isPresent:</h3>
                <input onChange={onChecked} type='checkbox' />
            </div>
            <div>
                <h3>Note:</h3>
                <textarea onChange={(e) => onInput("note", e)} />
            </div>
            <button onClick={onSubmit}>submit</button>

            {isShow && <div>
                <p>Tên: <span>{form.name}</span></p>
                <p>Lớp: <span>{form.class}</span></p>
                <p>Điểm danh: <span>{form.isPresent ? "Có mặt" : "vắng mặt"}</span></p>
                <p>Ghi chú: <span>{form.note}</span></p>
            </div>}
        </div>
    )
}

export default Page8