import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import ErrorPage from './pages/ErrorPage/ErrorPage'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import ToDoPage from './pages/ToDoPage/ToDoPage'

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route
                        path="/"
                        element={
                            localStorage.getItem('access_token') ? (
                                <Navigate replace to="/todo" />
                            ) : (
                                <HomePage />
                            )
                        }
                    />
                    <Route path="/todo" element={<ToDoPage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<RegisterPage />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
