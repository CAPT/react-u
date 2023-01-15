import React, { useState, useRef,  useMemo } from 'react'
import './App.css'
import PostForm from './components/PostForm'
import PostList from './components/PostList'
import MyInput from './components/UI/input/MyInput'
import MySelect from './components/UI/select/MySelect'

function App() {
    const [posts, setPosts] = useState([
        { id: 1, title: '111', body: 'e212esd' },
        { id: 2, title: '222', body: 'aa' },
    ])

    const createPost = (newPost) => setPosts([...posts, newPost])

    const removePost = (post) => {
        setPosts(posts.filter((p) => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    const sortPostsBySelectedType = (sortType) => {
        setSelectedSort(sortType)
    }

    function getSortedPosts() {
        if (selectedSort) {
            return [...posts].sort((a, b) =>
                a[selectedSort].localeCompare(b[selectedSort])
            )
        }
        return posts
    }
    const sortedPosts = getSortedPosts()

    const searchedPosts = (searchQuery) => {}

    return (
        <div className="App">
            <PostForm create={createPost} />
            <hr style={{ margin: '15px 0' }} />
            <div>
                <MyInput
                    placeholder="search"
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />

                <MySelect
                    value={selectedSort}
                    onChange={sortPostsBySelectedType}
                    defaultValue="Сортировка по"
                    options={[
                        { value: 'title', name: 'По заголовку' },
                        { value: 'body', name: 'По содержанию' },
                    ]}
                />
            </div>
            {posts.length ? (
                <PostList
                    remove={removePost}
                    posts={sortedPosts}
                    title="Список постов"
                />
            ) : (
                <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
            )}
        </div>
    )
}

export default App
