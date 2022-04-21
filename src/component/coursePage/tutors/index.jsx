import React from 'react'
import { useSelector } from 'react-redux'
import TutorCards from '../../tutorCards'
import styled from './tutors.module.scss'

export default function Tutors() {
  // блок карточек с учителями в организации. Категория предподаватели
  const tutors = useSelector((state)=>state.users.tutor) 
  return (
    <div className={styled.container}>
        {
          tutors.map((el)=>{
            return <TutorCards img={el.image} title={el.title} profile={el.profile}/>
          })
        }
    </div>
  )
}
