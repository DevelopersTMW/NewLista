import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "../../Screens/Register/register";
import Login from "../../Screens/Login/login";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
