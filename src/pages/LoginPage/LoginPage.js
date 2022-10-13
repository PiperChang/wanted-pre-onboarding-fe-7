import React, { useState } from 'react'
import { useValidChecker } from '../../hooks/auth'
import styles from './LoginPage.module.css'
import { signInAPI } from '../../api/auth'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
    const navigate = useNavigate()
    const [inputValue, setInputValue] = useState({
        email: '',
        password: '',
    })

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const response = await signInAPI(inputValue)
        switch (response.status) {
            case 400:
                alert(response.data.message)
                break
            case 401:
                alert('회원정보를 다시 확인해주세요.')
                break
            case 200:
                alert('환영합니다.')
                navigate('/')
                break
            default:
                break
        }
    }

    return (
        <div>
            <h1>Login</h1>
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
                <button
                    disabled={
                        !(
                            /.+@.+/.test(inputValue.email) &&
                            /.{8,}/.test(inputValue.password)
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
