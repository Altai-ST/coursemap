import React, { useState } from "react";
import burger from "../../images/Sort.svg";
import styled from "./mainPage.module.scss";
import mainFrame from "../../images/MainFrame.png";
import Cards from "../cards";

export default function MainPage() {
    const [btnState, setBtnState] = useState({
        btn1: true,
        btn2: false,
        btn3: false,
        btn4:false,
        btn5: false,
        btn6: false,
    })

    const handleClick = (val)=>{
        if(val.target.name === 'btn1'){
            
        }
        switch(val.target.name){
            case 'btn1':
                setBtnState({...btnState, btn1: true, btn2: false, btn3:false,btn4:false,btn5:false,btn6:false});
                break;
            case 'btn2':
                setBtnState({...btnState, btn1: false, btn2: true, btn3:false,btn4:false,btn5:false,btn6:false});
                break;
            case 'btn3':
                setBtnState({...btnState, btn1: false, btn2: false, btn3:true, btn4:false,btn5:false,btn6:false});
                break;
            case 'btn4':
                setBtnState({...btnState, btn1: false, btn2: false, btn3:false,btn4:true,btn5:false,btn6:false});
                break;
            case 'btn5':
                setBtnState({...btnState, btn1: false, btn2: false, btn3:false,btn4:false,btn5:true,btn6:false});
                break;
            case 'btn6':
                setBtnState({...btnState, btn1: false, btn2: false, btn3:false,btn4:false,btn5:false,btn6:true});
                break;
            default: break
        }
    }
  return (
    <div className={styled.container}>
      {/* <img src={burger} alt="" /> */}
      {/* <h1>Hello Main</h1> */}
      <img src={mainFrame} alt="" />
      <h2>Популярное</h2>
      <div className={styled.nav_btn_groub}>
        <button name='btn1' className={btnState.btn1 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>Все</button>
        <button name='btn2' className={btnState.btn2 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>Языки</button>
        <button name='btn3' className={btnState.btn3 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>IT</button>
        <button name='btn4' className={btnState.btn4 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>Дизайн</button>
        <button name='btn5' className={btnState.btn5 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>ОРТ</button>
        <button name='btn6' className={btnState.btn6 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>Бизнес</button>
      </div>
      {btnState.btn1 ? <div><Cards/></div> : <div></div>}
    </div>
  );
}
