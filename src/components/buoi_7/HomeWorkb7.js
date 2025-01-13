import React, { useState } from 'react'

const FAKE_DATA = [
    {
        id: "CV1",
        title: "Learn Javascript",
        isDone: false
    },
    {
        id: "CV2",
        title: "Learn HTML",
        isDone: false
    },
]

const HomeWorkb7 = () => {
    const [todoList, setTodoList] = useState(FAKE_DATA);
    const [inputValue, setInputValue] = useState("");

    const renderTodoList = () => {

        return todoList.map((item, index) => {
            return <div key={item.id}>
                <input onClick={() => onCheckedTodo(item.id)} type='checkbox' />
                {item.isDone ? <s>{item.title}</s> : <span>{item.title}</span>}
            </div>
        })
    }

    const addTodo = () => {
        setTodoList((prevList) => {
            const newTodo = {
                id: `CV${prevList.length + 1}`,
                title: inputValue,
                isDone: false
            }

            return [...prevList, newTodo];
        });
        setInputValue("")
    }

    const onCheckedTodo = (id) => {
        // tìm bản ghi có id nằm trong list
        // update isDone = true;
        const cloneList = [...todoList];
        const index = cloneList.findIndex((item) => item.id === id);
        if (index === -1) {
            return;
        }
        cloneList[index] = { ...cloneList[index], isDone: !cloneList[index].isDone };
        setTodoList(cloneList);
    }


    return (
        <div>
            <h1>
                THINGS TO DO
            </h1>
            <div>
                <input value={inputValue} onChange={(e) => {
                    setInputValue(e.target.value);
                }} />
                <button disabled={!inputValue.trim()} onClick={addTodo}>Add to do</button>
            </div>
            <div>
                {renderTodoList()}
            </div>
        </div>
    )
}

export default HomeWorkb7