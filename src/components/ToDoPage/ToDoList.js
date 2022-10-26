import { updateTodo,deleteTodo } from "../../api/todo"

import ToDo from "./ToDo"

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

export default TodoList