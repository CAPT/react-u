import React from 'react'
import { useNavigate } from 'react-router-dom'
import MyButton from './UI/button/MyButton'

const PostItem = (props) => {
    const navigate = useNavigate()
    // function handleClick() {
    //     navigate('/posts:id')
    // }
    return (
        <div className="post">
            <div className="post__content">
                <strong>
                    {props.post.id}. {props.post.title}
                </strong>
                <div>{props.post.body}</div>
            </div>
            <div className="post__btns">
                <MyButton onClick={() => navigate(`/posts/${props.post.id}`)}>
                    Открыть
                </MyButton>
                <MyButton onClick={() => props.remove(props.post)}>❌</MyButton>
            </div>
        </div>
    )
}

export default PostItem
