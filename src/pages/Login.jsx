import React from 'react'
import MyButton from '../components/UI/button/MyButton'
import MyInput from '../components/UI/input/MyInput'

const Login = () => {
    return (
        <div>
            <h1>Login page</h1>
            <form>
                <MyInput type="text" placeholder="Введите логин " />
                <MyInput type="password" placeholder="Введите пароль" />
                <MyButton>Войти</MyButton>
            </form>
        </div>
    )
}

export default Login
