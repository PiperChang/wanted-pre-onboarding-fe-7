import axios from 'axios'
const baseURL = 'https://pre-onboarding-selection-task.shop/'

export const request = axios.create({
    baseURL: baseURL,
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000,
})

export const authRequest = axios.create({
    baseURL: baseURL,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('access_token')}`,
        'Content-Type': 'application/json',
    },
    timeout: 1000,
})
