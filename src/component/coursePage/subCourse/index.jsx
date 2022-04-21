import React from 'react'
import Cards from '../../cards'
import styled from './subCourse.module.scss'
export default function SubCourse(props) {
  // Карточка курса в организации в категории курсы
  return (
    <div className={styled.cardsCon}>
        <Cards cost={props.cost}/>
    </div>
  )
}
