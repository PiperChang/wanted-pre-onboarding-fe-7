import axios from 'axios'
import { request } from '.'

export const signUpAPI = async (user_data) => {
    const url = 'auth/signup'
    try {
        const res = await request.post(url, JSON.stringify(user_data))
        await localStorage.setItem('access_token', res.data.access_token)
        return res
    } catch (err) {
        return err.response
    }
}

export const signInAPI = async (user_data) => {
    const url = 'auth/signin'
    try {
        const res = await request.post(url, JSON.stringify(user_data))
        await localStorage.setItem('access_token', res.data.access_token)
        return res
    } catch (err) {
        return err.response
    }
}
