import React from "react";
import { Link, Outlet } from "react-router-dom";
import Search from "../search";
import styled from "./nav.module.scss";

export default function Navigate() {
  // навигация сайта
  return (
    <>
    <div className={styled.searchCourse}>
       <Search/>
    </div>
      <Outlet/>
      <div className={styled.nav}>
        <Link to="/">
          <box-icon type="solid" name="home" color='#656070'></box-icon>
        </Link>
        <Link to='/price'>
          <box-icon name='purchase-tag' type='solid' color='#656070' ></box-icon>
        </Link>
        <Link to='/map'>
          <box-icon type='solid' name='map' color='#656070'></box-icon>
        </Link>
        <Link to='/auth'>
          <box-icon type="solid" name="user-circle" color='#656070'></box-icon>
        </Link>
        
        {/* <Link>
          
        </Link>
        <Link>
          
        </Link> */}
      </div>
    </>
  );
}
