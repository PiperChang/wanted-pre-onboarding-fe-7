import { request } from '.'



const getAccessToken = () => {
    return localStorage.getItem('access_token') 
} 

export const createTodo = async (todo) => {
    const url = 'todos'
    try {
        const res = await request.post(
            url,
            JSON.stringify({
                todo: todo,
            }),
            {
                headers: {
                    Authorization: `Bearer ${getAccessToken()}`,
                },
            }
        )
        return res
    } catch (err) {
        return err.response
    }
}

export const getTodos = async () => {
    const url = 'todos'
    try {
        const res = await request.get(url, {
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        return res
    } catch (err) {
        return err.response
    }
}

export const updateTodo = async (todo_info) => {
    const url = `todos/${todo_info.id}`
    try {
        const res = await request.put(
            url,
            JSON.stringify({
                todo: todo_info.todo,
                isCompleted: todo_info.isCompleted,
            })
        ,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        console.log(res)
        return res
    } catch (err) {
        return err.response
    }
}

export const deleteTodo = async (id) => {
    console.log(id)
    const url = `todos/${id}`
    try {
        const res = await request.delete(url,{
            headers: {
                Authorization: `Bearer ${getAccessToken()}`,
            },
        })
        return res
    } catch (err) {
        return err.response
    }
}
