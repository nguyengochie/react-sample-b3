import React, { memo, useCallback, useEffect, useState } from 'react';

const STUDENTS = [
    { id: "ST01", name: "Nguyen Van A" },
    { id: "ST02", name: "Nguyen Van B" },
    { id: "ST03", name: "Nguyen Van C" },
    { id: "ST04", name: "Nguyen Van D" },
    { id: "ST05", name: "Nguyen Van E" },
]

const Item = memo(({ student, remove, index }) => {
    console.log(student.id);

    return <tr>
        <td>{student.id}</td>
        <td>{student.name}</td>
        <td><button onClick={() => remove(index)}>Delete</button></td>
    </tr>
})

const BTVN12Bai3 = () => {
    const [listStudents, setListStudents] = useState(STUDENTS);

    const onDelete = useCallback((index) => {
        setListStudents((prevList) => {
            const cloneList = [...prevList];
            cloneList.splice(index, 1);
            return cloneList
        })
    }, [])

    const renderStudents = () => {
        return listStudents.map((st, index) => {
            return <Item key={index} student={st} remove={onDelete} />
        })
    }



    const onAddNewStudent = () => {
        const newStu = {
            id: `ST${listStudents?.length + 1}`,
            name: `Nguyen Van ${listStudents?.length + 1}`
        }

        setListStudents((prev) => ([...prev, newStu]))
    }

    return (
        <div>
            <button onClick={onAddNewStudent}>Add New</button>
            <table>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>ACTION</th>
                </tr>

                {renderStudents()}
            </table>

        </div>
    )
}

export default BTVN12Bai3