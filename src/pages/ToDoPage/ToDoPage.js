import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, getTodos } from '../../api/todo'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const ToDo = ({
    todo,
    handleClickDeleteBtn,
    handleClickUpdateBtn,
    handleChangeCompleteBtn,
}) => {
    return (
        <li key={todo.id}>
            <input
                type="checkbox"
                defaultChecked={todo.isCompleted ? 'on' : 'off'}
                onChange={()=> handleChangeCompleteBtn(todo.id)}
            />
            {todo.todo}
            <button id="삭제" onClick={()=>handleClickDeleteBtn(todo.id)}>
                <AiFillDelete />
            </button>
            <button id="수정" onClick={handleClickUpdateBtn}>
                <AiFillEdit />
            </button>
        </li>
    )
}

const TodoList = ({ todos, getTodosData }) => {
    const handleChangeCompleteBtn = (e) => {}

    const handleClickDeleteBtn = async (id) => {
        await deleteTodo(id)
        getTodosData()
    }

    const handleClickUpdateBtn = (e) => {}

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <ToDo todo={todo} handleChangeCompleteBtn={handleChangeCompleteBtn} handleClickUpdateBtn={handleClickUpdateBtn} handleClickDeleteBtn = {handleClickDeleteBtn} />
                )
            })}
        </ul>
    )
}

export default function ToDoPage() {
    const [todoList, setTodoList] = useState([])
    async function getTodosData() {
        const todos = await getTodos()
        setTodoList(todos.data)
    }

    useEffect(() => {
        getTodosData()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const res = await createTodo(e.target[0].value)
        getTodosData()
    }
    return (
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" placeholder="Write to do" />
            </form>
            <TodoList todos={todoList} getTodosData={getTodosData} />
        </div>
    )
}
