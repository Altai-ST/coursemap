import React from 'react'
import TabsBlock from '../../container/tabsBlock'
import {PriceCards} from './priceCards'
import styled from './price.module.scss'
import Cards from '../cards'
// Страница с акциями
export default function Price() {
  const navName = ['Все','Языки','IT','Дизайн','ОРТ','Бизнес']
  
  return (
    <div className={styled.container}>
        <h2>Акции</h2>
        <TabsBlock content={<PriceCards/>} nav={navName}/>
    </div>
  )
}
