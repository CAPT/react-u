import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import PostService from '../API/PostService'
import MyLoader from '../components/UI/loader/MyLoader'
import { useFetching } from '../hooks/useFetching'

const PostIdPage = () => {
    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(params.id)
        setPost(response.data)
    })
    const [fetchComments, isCommentsLoading, comError] = useFetching(
        async () => {
            const response = await PostService.getCommentsById(params.id)
            setComment(response.data)
        }
    )
    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])
    return (
        <div>
            <h1>Это страница поста {params.id}</h1>
            {isLoading ? (
                <MyLoader />
            ) : (
                <div>
                    {post.id} {post.title}
                </div>
            )}
            <h1 style={{ marginTop: 15 }}>Комментарии:</h1>
            {isCommentsLoading ? (
                <MyLoader />
            ) : (
                <div>
                    {comment.map((com) => (
                        <div key={com.id} style={{ marginTop: 15 }}>
                            <h4>{com.email}</h4>
                            <div>{com.body}</div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default PostIdPage
