import React from 'react'
import { Link } from 'react-router-dom'

const Mynavbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__links">
                <Link to="/posts">Посты</Link>
                <Link to="/about">О...</Link>
            </div>
        </div>
    )
}

export default Mynavbar
