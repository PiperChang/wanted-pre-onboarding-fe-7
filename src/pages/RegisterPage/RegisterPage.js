import React, { useState } from 'react'
import styles from './RegisterPage.module.css'
import { signUpAPI } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

export default function RegisterPage() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
        passwordCheck: '',
    })

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signUpAPI(inputValue)
        console.log(response)
        switch (response.status) {
            case 400:
                alert(response.data.message)
                break
            case 201:
                alert('회원가입이 완료되었습니다.')
                navigate('/')
                break
            default:
                break
        }
    }

    return (
        <div>
            RegisterPage
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="email"
                    name="email"
                    required
                    onChange={handleChange}
                />
                <input
                    placeholder="password"
                    name="password"
                    required
                    onChange={handleChange}
                />
                <input
                    placeholder="passwordCheck"
                    name="passwordCheck"
                    required
                    onChange={handleChange}
                />
                <button
                    disabled={
                        !(
                            /.+@.+/.test(inputValue.email) &&
                            /.{8,}/.test(inputValue.password) &&
                            inputValue.password === inputValue.passwordCheck
                        )
                    }
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
