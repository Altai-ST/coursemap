import React from "react";
import styled from './about.module.scss'

export default function About(props) {
  // информация о организации
  return (
    <div className={styled.container}>
      <span className={styled.title}>{props.title}</span>
      <div className={styled.star}>
          <box-icon
        name="star"
        type="solid"
        flip="horizontal"
        color="#ffff00"
      ></box-icon>
      <box-icon
        name="star"
        type="solid"
        flip="horizontal"
        color="#ffff00"
      ></box-icon>
      <box-icon
        name="star"
        type="solid"
        flip="horizontal"
        color="#ffff00"
      ></box-icon>
      <box-icon
        name="star"
        type="solid"
        flip="horizontal"
        color="#ffff00"
      ></box-icon>
      <box-icon
        name="star"
        type="solid"
        flip="horizontal"
        color="#ffff00"
      ></box-icon>
      </div>
      <span className={styled.cat}>{props.category}</span>
      <span className={styled.num}>{props.comment}</span>
      <p className={styled.text}>
        {props.text}
      </p>
    </div>
  );
}
