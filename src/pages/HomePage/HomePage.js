import React from 'react'
import { Link } from 'react-router-dom'
import styles from './HomePage.module.css'
export default function HomePage() {
    return (
        <div>
            <Link to={'auth/register'}>
                <button className={styles.Btn}>회원가입</button>
            </Link>
            <Link to={'auth/login'}>
                <button className={styles.Btn}>로그인</button>
            </Link>
        </div>
    )
}
