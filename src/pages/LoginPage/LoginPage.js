import React, { useState } from 'react'
import { useValidChecker } from '../../hooks/auth'
import styles from './LoginPage.module.css'

export default function LoginPage() {
    const [validFlag, setValidFlag] = useState({
        email: false,
        password: false,
    })
    console.log(validFlag)
    const handleChange = (e) => {
        setValidFlag({
            ...validFlag,
            [e.target.name]: new RegExp(e.target.pattern).test(e.target.value),
        })
    }
    return (
        <div>
            Login
            <form>
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
                    disabled={!(validFlag.email && validFlag.password)}
                    className={styles.submitButton}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}
