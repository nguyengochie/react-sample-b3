import React, { useContext, useReducer } from 'react'
import { ThemeCtx } from './ThemeContext';

const DEFAULT_DATA = [{
    id: "CV1",
    name: "Lam BTVN",
    isDone: false
}, {
    id: "CV2",
    name: "Lam viec nha",
    isDone: false
}];

const reducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            const newTodo = {
                id: `CV${state?.length + 1}`,
                name: `Công việc số ${state?.length + 1}`,
                isDone: false
            }
            return [...state, newTodo];
        case "REMOVE":
            return state?.filter((item) => item?.id !== action?.id)
        case "TICK_DONE":
            return state?.map((item) => {
                if (item?.id === action?.id) {
                    return { ...item, isDone: !item?.isDone }
                }
                return item;
            })

        default:
            return state
    }
}

const Buoi15Bai2 = () => {
    const themContext = useContext(ThemeCtx);
    console.log("Bai 2", themContext);
    const [todoList, dispatch] = useReducer(reducer, DEFAULT_DATA);

    const onAddNewTodo = () => {
        dispatch({ type: "ADD" });
    }

    const onRemove = (id) => {
        dispatch({ type: "REMOVE", id })
    }

    const onToggleDone = (id) => {
        dispatch({ type: "TICK_DONE", id });
    }

    const renderTodoList = () => {
        return todoList?.map((todo) => {
            return <tr key={todo?.id}>
                <td>{todo?.id}</td>
                <td>{todo?.name}</td>
                <td>{todo?.isDone ? "DONE" : "NOT DONE"}</td>
                <td>
                    <button onClick={() => onRemove(todo?.id)}>Remove</button>
                    <button onClick={() => onToggleDone(todo?.id)}>Tick done</button>
                </td>
            </tr>
        })
    }

    return (
        <div>
            <button onClick={onAddNewTodo}>Add new todo</button>
            <table border="1px">
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>IS DONE</th>
                    <th>ACTION</th>
                </tr>
                {renderTodoList()}
            </table>

        </div>
    )
}

export default Buoi15Bai2;