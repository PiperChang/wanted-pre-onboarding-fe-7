import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos } from '../../api/todo'
import { AiFillCheckCircle } from 'react-icons/ai'

const TodoList = ({ todos }) => {
    const handleChangeCompleteBtn = (e) => {
        // a = !e.target.checked
    }
    const handleClickDeleteBtn = (e) => {
        deleteTodo(e.target.parentElement.key)
    }
    const handleClickUpdateBtn = (e) => {}
    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <li key={todo.id}>
                        <input
                            type="checkbox"
                            checked={todo.isCompleted}
                            onChange={handleChangeCompleteBtn}
                        />
                        <button id="삭제" onClick={handleClickDeleteBtn}>
                            삭제
                        </button>
                        <button id="수정" onClick={handleClickUpdateBtn}>
                            수정
                        </button>
                        {todo.todo}
                        <AiFillCheckCircle />
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
    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await createTodo(e.target[0].value)
        console.log(res)
    }
    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" placeholder="Write to do" />
            </form>
            <TodoList todos={todoList} />
        </div>
    )
}
