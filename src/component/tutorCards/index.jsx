import React from 'react'
import styled from './tutorCards.module.scss'
import tutorImg from '../../images/Ogogo.png'
export default function TutorCards() {
  return (
    <div className={styled.container}>
        <img src={tutorImg} alt="" />
        <p className={styled.title}>Чипенко Илья</p>
        <p className={styled.text}>Frontend разработчик</p>
    </div>
  )
}
