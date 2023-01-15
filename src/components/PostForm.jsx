import React, { useState } from 'react'
import MyButton from './UI/button/MyButton'
import MyInput from './UI/input/MyInput'

const PostForm = ({ create }) => {
    // const bodyInputRef = useRef()

    // const [title, setTitle] = useState('')
    // const [body, setBody] = useState('')
    const [post, setPost] = useState({ title: '', body: '' })

    const addNewPost = (e) => {
        e.preventDefault()

        if (!!post.title && !!post.body) {
            // setPosts([...posts, { ...post, id: Date.now() }])
            const newPost = {
                ...post,
                id: Date.now(),
            }
            create(newPost)
            setPost({ title: '', body: '' })
        } else {
            alert('Заполните оба поля')
        }
    }
    return (
        <form>
            {/* управляемый */}
            <MyInput
                type="text"
                value={post.title}
                onChange={(e) => setPost({ ...post, title: e.target.value })}
                placeholder="Название поста"
            />
            <MyInput
                type="text"
                value={post.body}
                onChange={(e) => setPost({ ...post, body: e.target.value })}
                placeholder="Содержание поста"
            />
            {/* Неуправляемый */}
            {/* <MyInput
                    type="text"
                    ref={bodyInputRef}
                    placeholder="Содержание поста"
                /> */}
            <MyButton disabled={!post.body || !post.title} onClick={addNewPost}>
                Добавить
            </MyButton>
        </form>
    )
}

export default PostForm
