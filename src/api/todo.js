import axios from 'axios'
import { authRequest } from '.'

export const createTodo = async (todo) => {
    const url = 'todos'
    try {
        const res = await authRequest.post(
            url,
            JSON.stringify({
                todo: todo,
            })
        )
        return res
    } catch (err) {
        return err.response
    }
}

export const getTodos = async () => {
    const url = 'todos'
    try {
        const res = await authRequest.get(url)
        return res
    } catch (err) {
        return err.response
    }
}

export const updateTodo = async (todo_info) => {
    const url = `todos/:${todo_info.id}`
    try {
        const res = await authRequest.put(
            url,
            JSON.stringify({
                todo: todo_info.todo,
                isCompleted: todo_info.isCompleted,
            })
        )
        return res
    } catch (err) {
        return err.response
    }
}

export const deleteTodo = async (id) => {
    const url = `todos/:${id}`
    try {
        const res = await authRequest.delete(url)
        return res
    } catch (err) {
        return err.response
    }
}
