import React, { useEffect, useState } from 'react'
import { createTodo, deleteTodo, updateTodo, getTodos } from '../../api/todo'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'

const ToDo = ({ todo, handleDelete, handleUpdate }) => {
    const [updating, setUpdating] = useState(true)

    const handleClickUpdateBtn = () => {
        setUpdating(!updating)
    }

    return (
        <li key={todo.id}>
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
                    <span>{todo.todo}</span>

                    <button id="삭제" onClick={() => handleDelete(todo.id)}>
                        <AiFillDelete />
                    </button>
                    <button id="수정" onClick={handleClickUpdateBtn}>
                        <AiFillEdit />
                    </button>
                </>
            ) : (
                <>
                    <form
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleUpdate({
                                ...todo,
                                todo: e.target[0].value,
                            })
                            setUpdating(!updating)
                        }}
                    >
                        <input
                            type="text"
                            name="todoInput"
                            defaultValue={todo.todo}
                        />
                        <button id="수정">
                            <AiFillEdit />
                        </button>
                    </form>
                </>
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
        <div>
            <h1>To Do List</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" name="todoInput" placeholder="Write to do" />
            </form>
            <TodoList todos={todoList} getTodosData={getTodosData} />
        </div>
    )
}
