import React, { useState } from 'react'
import { useValidChecker } from '../../hooks/auth'
import styles from './LoginPage.module.css'
import { signInAPI, signUpAPI } from '../../api/auth'

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

    const handleSubmit = (e) => {
        e.preventDefault()
        signUpAPI(inputValue)
    }

    return (
        <div>
            Login
            <form onSubmit={handleSubmit}>
                <input
                    placeholder="email"
                    name="email"
                    required
                    pattern=".+@.+"
                    onChange={handleChange}
                />
                <input
                    placeholder="password"
                    name="password"
                    required
                    pattern=".{8,}"
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
