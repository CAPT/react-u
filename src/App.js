import React, { useState, useEffect } from 'react'
import './App.css'
import { usePosts } from './components/hooks/usePosts'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyModal from './components/UI/modal/MyModal'
import axios from 'axios'

function App() {
    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modalVisible, setModalVisible] = useState(false)
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query)

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    async function fetchPosts() {
        const response = await axios.get(
            'https://jsonplaceholder.typicode.com/posts'
        )
        setPosts(response.data)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    return (
        <div className="App">
            <MyButton style={{ marginTop: '30px' }} onClick={fetchPosts}>
                Получить посты
            </MyButton>
            <MyButton
                style={{ marginTop: '30px' }}
                onClick={() => setModalVisible(true)}
            >
                Добавить пост
            </MyButton>
            <MyModal visible={modalVisible} setVisible={setModalVisible}>
                <PostForm create={createPost} />
            </MyModal>

            <hr style={{ margin: '15px 0' }} />
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList
                remove={removePost}
                posts={sortedAndSearchedPosts}
                title="Список постов"
            />
        </div>
    )
}

export default App
