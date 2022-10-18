import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
    return (
        <div>
            <Link to={'auth/register'}>
                <button>회원가입</button>
            </Link>
            <Link to={'auth/login'}>
                <button>로그인</button>
            </Link>
        </div>
    )
}
