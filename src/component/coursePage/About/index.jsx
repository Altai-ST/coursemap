import React from "react";
import styled from './about.module.scss'

export default function About() {
  return (
    <div className={styled.container}>
      <span className={styled.title}>OGOGO GROUP</span>
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
      <span className={styled.cat}>Курсы IT</span>
      <span className={styled.num}>154 отзыва</span>
      <p className={styled.text}>
        Разнообразный и богатый опыт консультация с широким активом обеспечивает
        широкому кругу. Товарищи! постоянное информационно-пропагандистское
        обеспечение нашей деятельности позволяет выполнять важные задания по
        разработке модели развития.
      </p>
    </div>
  );
}
