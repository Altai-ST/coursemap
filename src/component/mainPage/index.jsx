import React, { useState } from "react";
import burger from "../../images/Sort.svg";
import styled from "./mainPage.module.scss";
import mainFrame from "../../images/MainFrame.png";
import TabsBlock from "../../container/tabsBlock";
import Cards from "../cards";

export default function MainPage() {
    const navName = ['Все','Языки','IT','Дизайн','ОРТ','Бизнес']
  return (
    <div className={styled.container}>
      {/* <img src={burger} alt="" /> */}
      <img src={mainFrame} alt="" />
      <h2>Популярное</h2>
      <TabsBlock content={<Cards/>} nav={navName}/>
    </div>
  );
}
