import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'

import Mynavbar from './components/UI/navbar/Mynavbar'
import AppRouter from './components/AppRouter'

function App() {
    return (
        <BrowserRouter>
            <Mynavbar />
            <AppRouter />
        </BrowserRouter>
    )
}

export default App
