import React from 'react'
import styled from './search.module.scss'
// Поисковая строка
export default function Search() {
  return (
    <div className={styled.container}>
        <input className={styled.search} type="text" placeholder='Найти курсы, репетиторов'/>
        <div className={styled.iconss}>
            <box-icon  name='search-alt-2' ></box-icon>
        </div>
    </div>
  )
}
