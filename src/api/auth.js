import axios from 'axios'

const API_URL = 'https://pre-onboarding-selection-task.shop/'

export const signUpAPI = (user_data) => {
    const url = API_URL + 'auth/signup'
    axios
        .post(url, user_data, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then((res) => {
            console.log(res)
        })
}

export const signInAPI = (user_data) => {
    const url = API_URL + 'auth/signin'
    axios
        .post(
            'https://pre-onboarding-selection-task.shop/auth/signup',
            user_data,
            {
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        .then((res) => {
            console.log(res)
        })
}
