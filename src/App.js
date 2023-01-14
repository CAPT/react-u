import React, { useState, useRef } from 'react'
import './App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: 'js', body: 'asdasdasdasdsa' },
        { id: 2, title: 'js', body: 'asdasdasdasdsa' },
    ])

    const createPost = (newPost) => setPosts([...posts, newPost])

    return (
        <div className="App">
            <PostForm create={createPost} />
            <PostList posts={posts} title="Список постов" />
        </div>
    )
}

export default App
