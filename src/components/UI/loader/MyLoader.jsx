import React from 'react'
import cls from './MyLoader.module.css'

const MyLoader = () => {
    return (
        <div className={cls.LoaderWrapper}>
            <div className={cls.lds_ellipsis}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default MyLoader
