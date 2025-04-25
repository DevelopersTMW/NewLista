import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../../Screens/Home/Home";
import Login from "../../Screens/Login/login";
import OurPlans from "../../Screens/OurPlans/OurPlans";
import Register from "../../Screens/Register/register";
import AboutUs from "../../Screens/AboutUs/AboutUs";
import Pricing from "../../Screens/Pricing/Pricing";
import ContactUs from "../../Screens/ContactUs.jsx/ContactUs";
import AddProperty from "../../Screens/AddProperty/AddProperty";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/add-property"} element={<AddProperty />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/plans"} element={<OurPlans />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
