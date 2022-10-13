import React, { useEffect, useState } from 'react'
import { getTodos } from '../../api/todo'

const TodoList = ({ todos }) => {
    const handleClickCompleteBtn = (e) => {
        // e.target.
    }
    const handleClickDeleteBtn = (e) => {}
    const handleClickUpdateBtn = (e) => {}
    return (
        <ul>
            <h1>To Do List</h1>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            onClick={handleClickCompleteBtn}
                        />
                        <button
                            id="삭제"
                            onClick={handleClickDeleteBtn}
                        ></button>
                        <button
                            id="수정"
                            onClick={handleClickUpdateBtn}
                        ></button>
                        {todo.todo}
                    </li>
                )
            })}
        </ul>
    )
}

export default function ToDoPage() {
    const [todoList, setTodoList] = useState([])

    useEffect(() => {
        async function getTodosData() {
            const todos = await getTodos()
            setTodoList(todos.data)
        }
        getTodosData()
    }, [])

    return (
        <div>
            <TodoList todos={todoList} />
        </div>
    )
}
