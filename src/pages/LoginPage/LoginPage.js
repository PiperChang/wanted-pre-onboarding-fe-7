import React, { useState } from 'react'
import { useValidChecker } from '../../hooks/auth'
import styles from './LoginPage.module.css'
import { signInAPI } from '../../api/auth'

export default function LoginPage() {
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
        console.log(response)
        switch (response.status) {
            case 400:
                alert(response.data.message)
                break
            case 201:
                alert('회원가입이 완료되었습니다.')
                break
            default:
                break
        }
    }

    return (
        <div>
            Login
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
