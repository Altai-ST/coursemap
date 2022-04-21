import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../auth";
import CoursePage from "../coursePage";
import MainPage from "../mainPage";
import Map from "../map";
import Navigate from "../navigation";
import Price from "../price";
import Register from "../register";
export default function Routers() {
  //Роутеры сайта для навигации
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="price" element={<Price/>}/>
          <Route path="map" element={<Map/>}/>
        </Route>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/auth" element={<Auth />} />
        <Route path="/course" element={<CoursePage />} />
      </Routes>
      {/* <Navigate/> */}
    </>
  );
}
