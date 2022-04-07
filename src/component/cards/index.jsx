import React from 'react'
import mainImg from '../../images/Ogogo.png'
import bookMark from '../../images/Bookmark.png'
import styled from './cards.module.scss'
export default function Cards() {
  return (
    <div className={styled.cards}>
        <img className={styled.mainImg} src={mainImg} width="157px" alt="" />
        <img className={styled.bookMark} src={bookMark} alt="" width="30px"/>
        <p className={styled.title}>OGOGO GROUP</p>
        <p className={styled.category}>Курсы IT</p>
        <div className={styled.stat}>
            <div>
                <box-icon name='star' type='solid' flip='horizontal' color='#ffff00' ></box-icon>
                <span>4.5</span>
            </div>
            <div>
              <box-icon name='message-rounded-dots' flip='horizontal' color='#8b8b8b' ></box-icon>
                <span>154</span>
            </div>  
        </div>
        
    </div>
  )
}
