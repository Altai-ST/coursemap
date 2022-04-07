import React from 'react'
import Cards from '../../cards'
import styled from './subCourse.module.scss'
export default function SubCourse() {
  return (
    <div className={styled.cardsCon}>
        <Cards cost='4000 сом/мес'/>
        <Cards cost='430 сом.мес'/>
        <Cards cost='4000 сом/мес'/>
        <Cards cost='430 сом.мес'/>
        <Cards cost='4000 сом/мес'/>
        <Cards cost='430 сом.мес'/>
        <Cards cost='4000 сом/мес'/>
        <Cards cost='430 сом.мес'/>
    </div>
  )
}
