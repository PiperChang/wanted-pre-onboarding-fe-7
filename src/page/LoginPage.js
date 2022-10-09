import React from 'react'

export default function LoginPage() {
  return (
    <div>
        Login
        <form>
            <input placeholder='email' name='email' required pattern='.+@.+'/>
            <input placeholder='password' name='password' required pattern='.{8,}'/>
            <button/>
        </form>
    </div>
  )
}
