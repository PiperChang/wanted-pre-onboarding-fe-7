import axios from 'axios'

export const request = axios.create({
    baseURL: 'https://pre-onboarding-selection-task.shop/',
    headers: {
        'Content-Type': 'application/json',
    },
    timeout: 1000,
})
