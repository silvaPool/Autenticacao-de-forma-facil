import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Router, Routes } from 'react-router-dom'
import Home from "./pages/Home";
import Login from "./pages/Login";
import PasswordReset from "./pages/PasswordReset";
import Dashboard from "./pages/Dashboard";


function App() {
  return (
    <>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/login'>Login</Link>
              </li>
              <li>
                <Link to='/reset'>Reset</Link>
              </li>
              <li>
                <Link to='/dashboard'>Dashboard</Link>
              </li>
            </ul>
          </nav>

          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/passwordreset' element={<PasswordReset />}/>
            <Route path='/dashboard' element={<Dashboard />}/>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
