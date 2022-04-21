import React from 'react'
import styled from './tutorCards.module.scss'
import tutorImg from '../../images/Ogogo.png'
export default function TutorCards(props) {
  return (
    <div className={styled.container}>
        <img src={props.img} alt="" />
        <p className={styled.title}>{props.name}</p>
        <p className={styled.text}>{props.profile}</p>
    </div>
  )
}
