import React from 'react'
import styled from './priceCards.module.scss'
export function PriceCards(props) {
  // Карточки акции на курсы
  return (
    <div className={styled.container}>
        <img src="" alt="" />
        <div>
            <p className={styled.title}>{props.title}</p>
            <p className={styled.cat}>{props.category}</p>
            <p className={styled.line}>{props.oldPrice}</p>
            <p className={styled.pricer}>{props.newPrice}</p>
        </div>
    </div>
  )
}
