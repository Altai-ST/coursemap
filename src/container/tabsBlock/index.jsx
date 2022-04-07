import React, { useState } from 'react'
import styled from './tabsBlock.module.scss'

export default function TabsBlock(props) {
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
    <div>
        <div className={styled.nav_btn_groub}>
        <button name='btn1' className={btnState.btn1 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[0]}</button>
        <button name='btn2' className={btnState.btn2 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[1]}</button>
        <button name='btn3' className={btnState.btn3 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[2]}</button>
        <button name='btn4' className={btnState.btn4 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[3]}</button>
        <button name='btn5' className={btnState.btn5 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[4]}</button>
        <button name='btn6' className={btnState.btn6 ? styled.nav_btn_active : styled.nav_btn} onClick={handleClick}>{props.nav[5]}</button>
      </div>
      {btnState.btn1 ? <div>{props.content}</div> : btnState.btn2 ? <>{props.content2}</> : btnState.btn4 ? <div>{props.content3}</div> : <div></div>}
    </div>
  )
}
