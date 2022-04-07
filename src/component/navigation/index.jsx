import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "./nav.module.scss";

export default function Navigate() {
  return (
    <>
      <Outlet/>
      <div className={styled.nav}>
        <Link to="/">
          <box-icon type="solid" name="home" color='#656070'></box-icon>
        </Link>
        <Link to='/reg'>
          <box-icon type="solid" name="user-circle" color='#656070'></box-icon>
        </Link>
        <box-icon type="solid" name="envelope" color='#656070'></box-icon>
        <Link to='/price'>
          <box-icon name='purchase-tag' type='solid' color='#656070' ></box-icon>
        </Link>
        
        {/* <Link>
          
        </Link>
        <Link>
          
        </Link> */}
      </div>
    </>
  );
}
