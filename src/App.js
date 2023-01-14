import React, { useState } from 'react'
import './App.css'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'asdasdasdasdsa' },
        { id: 2, title: 'js', body: 'asdasdasdasdsa' },
    ])
    return (
        <div className="App">
            <form>
                <MyInput placeholder="name" />
                <MyInput placeholder="body" />
                <MyButton>asdsad</MyButton>
            </form>
            <PostList posts={posts} title="Список постов" />
        </div>
    )
}

export default App
