import React, { useState, useRef, useMemo } from 'react'
import './App.css'
import PostFilter from './components/PostFilter'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyButton from './components/UI/button/MyButton'
import MyInput from './components/UI/input/MyInput'
import MyModal from './components/UI/modal/MyModal'
import MySelect from './components/UI/select/MySelect'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: '111', body: 'e212esd' },
        { id: 2, title: '222', body: 'aa' },
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
        setModalVisible(false)
    }

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const [filter, setFilter] = useState({ sort: '', query: '' })
    const [modalVisible, setModalVisible] = useState(false)

    const sortedPosts = useMemo(() => {
        console.log('getSortedPosts')
        if (filter.sort) {
            return [...posts].sort((a, b) =>
                a[filter.sort].localeCompare(b[filter.sort])
            )
        }
        return posts
    }, [filter.sort, posts])

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter((post) =>
            post.title.toLowerCase().includes(filter.query.toLowerCase())
        )
    }, [filter.query, sortedPosts])

    return (
        <div className="App">
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
