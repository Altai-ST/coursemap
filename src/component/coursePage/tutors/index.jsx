import React from 'react'
import TutorCards from '../../tutorCards'
import styled from './tutors.module.scss'

export default function Tutors() {
  return (
    <div className={styled.container}>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
        <TutorCards/>
    </div>
  )
}
