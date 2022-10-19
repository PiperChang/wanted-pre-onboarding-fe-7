import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, updateTodo, getTodos } from '../../api/todo'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import styles from './ToDoPage.module.css'

const ToDo = ({ todo, handleDelete, handleUpdate }) => {
    const [updating, setUpdating] = useState(true)

    const handleUpdating = () => {
        setUpdating(!updating)
    }

    return (
        <li key={todo.id} className={styles.Li}>
            {updating ? (
                <>
                    <input
                        type="checkbox"
                        defaultChecked={todo.isCompleted}
                        onChange={() =>
                            handleUpdate({
                                ...todo,
                                isCompleted: !todo.isCompleted,
                            })
                        }
                    />
                    <span className={styles.Todo}>{todo.todo}</span>

                    <button id="삭제" onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </button>
                    <button id="수정" onClick={handleUpdating}>
                        <AiFillEdit />
                    </button>
                </>
            ) : (
                <div className={styles.Update}>
                    <form
                        id="update"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleUpdate({
                                ...todo,
                                todo: e.target[0].value,
                            })
                            handleUpdating()
                        }}
                    >
                        <input
                            type="text"
                            name="todoInput"
                            defaultValue={todo.todo}
                        />
                    </form>
                    <button type="submit" form="update">
                        수정
                    </button>
                    <button id="취소" onClick={handleUpdating}>
                        취소
                    </button>
                </div>
            )}
        </li>
    )
}

const TodoList = ({ todos, getTodosData }) => {
    const handleUpdate = async (todo) => {
        await updateTodo(todo)
        getTodosData()
    }

    const handleDelete = async (id) => {
        await deleteTodo(id)
        getTodosData()
    }

    return (
        <ul>
            {todos.map((todo) => {
                return (
                    <ToDo
                        key={todo.id}
                        todo={todo}
                        handleUpdate={handleUpdate}
                        handleDelete={handleDelete}
                    />
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
        <div className={styles.ToDoPage}>
            <h1 className={styles.H1}>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" placeholder="Write to do" />
            </form>
            <TodoList todos={todoList} getTodosData={getTodosData} />
        </div>
    )
}
