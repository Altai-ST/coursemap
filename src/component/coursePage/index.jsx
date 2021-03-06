import React from 'react'
import TabsBlock from '../../container/tabsBlock'
import ogoImg from '../../images/ogogo2.png'
import arrowImg from '../../images/arrow.png'
import styled from './coursePage.module.scss'
import { Link } from 'react-router-dom'
import About from './About'
import SubCourse from './subCourse'
import Tutors from './tutors'
import Map from '../map'
export default function CoursePage(props) {
  // Главная страница организации и его навигация
  const navName = ['О курсах','Курсы','Филиалы','Преподователи','Отзывы']

  return (
    <div className={styled.container}>
        <div className={styled.imageBlock}>
            <img className={styled.mainImg} src={props.img} alt="" />
            {/* 
              кнопка назад на главную страницу
            */}
            <Link to='/'>
              <img className={styled.arrow} src={arrowImg} alt="" />
            </Link>
            
        </div>
        <div className={styled.contentBlock}>
            <TabsBlock nav={navName} content={<About/>} content4={<Map map="maps"/>} content2={<SubCourse/>} content3={<Tutors/>} />
        </div>
    </div>
  )
}
