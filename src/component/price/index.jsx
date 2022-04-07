import React from 'react'
import TabsBlock from '../../container/tabsBlock'
import {PriceCards} from './priceCards'
import styled from './price.module.scss'
export default function Price() {
  return (
    <div className={styled.container}>
        <h2>Акции</h2>
        <p>fdsgh</p>
        <p>dsfghjk</p>
        <TabsBlock content={<PriceCards/>}/>
    </div>
  )
}
