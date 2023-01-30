import React from 'react'
import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Posts from './pages/Posts'
import Error from './pages/Error'

import Mynavbar from './components/UI/navbar/Mynavbar'

function App() {
    return (
        <BrowserRouter>
            <Mynavbar />

            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/error" element={<Error />} />
                <Route path="/" element={<Posts />} />
                <Route path="*" element={<Navigate to="/error" replace />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
