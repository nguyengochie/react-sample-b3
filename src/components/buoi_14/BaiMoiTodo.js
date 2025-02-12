import React, { useReducer } from 'react'

const TODO_LIST = [
    { id: 1, title: "Lam BTVN", isCompleted: false },
    { id: 2, title: "On tap bai moi", isCompleted: false },
    { id: 3, title: "An toi", isCompleted: false },
]

const reducer = (state, action) => {
    switch (action.type) {
        case "DO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, isCompleted: true }
                }
                return todo;
            })
        case "UNDO":
            return state.map((todo) => {
                if (todo.id === action.id) {
                    return { ...todo, isCompleted: false }
                }
                return todo;
            })

        default:
            return state;
    }
}

const BaiMoiTodo = () => {
    const [todoList, dispatch] = useReducer(reducer, TODO_LIST);

    const onDo = (id) => {
        dispatch({ type: "DO", id })
    }
    const onUndo = (id) => {
        dispatch({ type: "UNDO", id })
    }

    const renderTodoList = () => {
        return todoList.map((todo) => {
            return <div key={todo.id} >
                <button onClick={() => todo.isCompleted ? onUndo(todo.id) : onDo(todo.id)}>
                    tick
                </button>
                <h2>{`${todo.id} - ${todo.title} ${todo?.isCompleted ? "- DONE" : ""}`}</h2>
            </div >
        })
    }

    return (
        <div>
            <h1>VD 3</h1>
            {renderTodoList()}
        </div>
    )
}

export default BaiMoiTodo