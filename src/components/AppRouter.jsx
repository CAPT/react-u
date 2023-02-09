import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import About from '../pages/About'
import Posts from '../pages/Posts'
import Error from '../pages/Error'
import PostIdPage from '../pages/PostIdPage'
import { publicRoutes, privateRoutes } from '../router/routes'

const AppRouter = () => {
    const isAuth = false
    return (
        // <Routes>
        //     <Route path="/about" element={<About />} />
        //     <Route exact path="/posts" element={<Posts />} />
        //     <Route path="/posts/:id" element={<PostIdPage />} />
        //     <Route path="/error" element={<Error />} />
        //     <Route path="/" element={<Posts />} />
        //     <Route path="*" element={<Navigate to="/error" replace />} />
        // </Routes>
        isAuth ? (
            <Routes>
                {privateRoutes.map((route) => (
                    <Route
                        key={route.element}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
                {/* <Route path="*" element={<Navigate to="/error" replace />} /> */}
            </Routes>
        ) : (
            <Routes>
                {publicRoutes.map((route) => (
                    <Route
                        key={route.element}
                        element={route.element}
                        path={route.path}
                        exact={route.exact}
                    />
                ))}
                {/* <Route path="*" element={<Navigate to="/error" replace />} /> */}
            </Routes>
        )
    )
}

export default AppRouter
