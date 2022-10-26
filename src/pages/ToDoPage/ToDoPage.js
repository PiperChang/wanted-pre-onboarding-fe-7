import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, updateTodo, getTodos } from '../../api/todo'
import ToDo from '../../components/ToDoPage/ToDo'
import TodoList from '../../components/ToDoPage/ToDoList'
import styles from './ToDoPage.module.css'


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
        <div className={styles.ToDoPage}>
            <h1 className={styles.H1}>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" placeholder="Write to do" />
            </form>
            <TodoList todos={todoList} getTodosData={getTodosData} />
        </div>
    )
}
