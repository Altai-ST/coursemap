import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "../mainPage";
import Navigate from "../navigation";
import Register from "../register";
import UserList from "../userList";
export default function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigate/>}>
          <Route path="/" element={<MainPage/>}/>
          <Route path="reg" element={<Register />} />
          <Route path="list" element={<UserList />} />
        </Route>
      </Routes>
      {/* <Navigate/> */}
    </>
  );
}
