import React, { useState } from "react";
import burger from "../../images/Sort.svg";
import styled from "./mainPage.module.scss";
import mainFrame from "../../images/MainFrame.png";
import TabsBlock from "../../container/tabsBlock";
import Cards from "../cards";
import { useSelector } from "react-redux";

 // Главная страница 
export default function MainPage() {
 
 // категории
  const navName = ["Все", "Языки", "IT", "Дизайн", "ОРТ", "Бизнес"];
  // Получаю данные о карточках с store
  const courseState = useSelector((state) => state.users.course);
  console.log(courseState)
  // const categoryState = useSelector((state) => state.users.categoryCourse);
  return (
    <div className={styled.container}>
      {/* <img src={burger} alt="" /> */}
      <img src={mainFrame} alt="" />
      <h2>Популярное</h2>
      <TabsBlock

      // Навигационный блок по категория курсов
      // Для него нужны данных о категория и карты курсов

        // content={courseState.map((el) => {
        //   return (
        //     <Cards
        //       title={el.title}
        //       category={el.category}
        //       img={el.image}
        //       rate={el.rate}
        //       comment={el.comment}
        //       cost={el.cost}
        //     />
        //   );
        // })}
        // content2={categoryState.map((el) => {
        //   return (
        //     <Cards
        //       title={el.title}
        //       category={el.category}
        //       img={el.image}
        //       rate={el.rate}
        //       comment={el.comment}
        //       cost={el.cost}
        //     />
        //   );
        // })}
        // content3={categoryState.map((el) => {
        //   return (
        //     <Cards
        //       title={el.title}
        //       category={el.category}
        //       img={el.image}
        //       rate={el.rate}
        //       comment={el.comment}
        //       cost={el.cost}
        //     />
        //   );
        // })}
        nav={navName}
      />
    </div>
  );
}
