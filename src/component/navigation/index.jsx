import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "./nav.module.scss";

export default function Navigate() {
  return (
    <>
      <Outlet/>
      <div className={styled.nav}>
        <Link to="/">
          <box-icon type="solid" name="home"></box-icon>
        </Link>
        <Link to='/reg'>
          <box-icon type="solid" name="user-circle"></box-icon>
        </Link>
        <box-icon type="solid" name="envelope"></box-icon>
        <box-icon type="solid" name="map"></box-icon>
        {/* <Link>
          
        </Link>
        <Link>
          
        </Link> */}
      </div>
    </>
  );
}
