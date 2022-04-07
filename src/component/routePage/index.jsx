import React from "react";
import { Routes, Route } from "react-router-dom";
import CoursePage from "../coursePage";
import MainPage from "../mainPage";
import Navigate from "../navigation";
import Price from "../price";
import Register from "../register";
import RegisterCopy from "../register copy";
export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="reg" element={<Register />} />
          <Route path="price" element={<RegisterCopy/>}/>
        </Route>
        <Route path="/course" element={<CoursePage />} />
      </Routes>
      {/* <Navigate/> */}
    </>
  );
}
