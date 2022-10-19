import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { LoginContext } from './helper/Context'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ToDoPage from './pages/ToDoPage/ToDoPage'
import './App.css'

function App() {    
    const [loggedIn, setLoggedIn]= useState(localStorage.getItem('access_token'))
    
    return (
        <div className="App">
            <LoginContext.Provider value={{loggedIn, setLoggedIn}}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                loggedIn ? (
                                    <Navigate replace to="/todo" />
                                ) : (
                                    <HomePage />
                                )
                            }
                        />
                        <Route
                            path="/todo"
                            element={
                                loggedIn ? (
                                    <ToDoPage />
                                ) : (
                                    <Navigate replace to="/" />
                                )
                            }
                        />
                        <Route path="/auth/login" element={<LoginPage />} />
                        <Route
                            path="/auth/register"
                            element={<RegisterPage />}
                        />
                        <Route path="*" element={<ErrorPage />} />
                    </Routes>
                </BrowserRouter>
            </LoginContext.Provider>
        </div>
    )
}

export default App
