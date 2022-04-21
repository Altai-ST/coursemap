import React from 'react'
import { Link } from 'react-router-dom'
import styled from './auth.module.scss'
// Страница с выбором типа входа
export default function Auth() {
  return (
    <div className={styled.container}>
        <h1>Course Map</h1>
        <button className={styled.auth}>Войти</button>
        <Link to="/reg">
            <button className={styled.reg}>Регистрация</button>
        </Link>
        <Link to="/">
            <button className={styled.back}>Назад</button>
        </Link>
    </div>
  )
}
