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
import ViewProperty from "../../Screens/ViewProperty/ViewProperty";
import PropertyDetails from "../../Screens/ViewProperty/PropertyDetails";
import Residential from "../../Screens/Residential/Residential";
import Commercial from "../../Screens/Commercial/Commercial";
import Admin from "../../Screens/Admin/Admin";
import Industrial from "../../Screens/Industrial/Industrial";
import LeaseForm from "../../Screens/LeaseForm/LeaseForm";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/add-property"} element={<AddProperty />} />
          <Route path={"/view-property"} element={<ViewProperty />} />
          <Route path={"/property-detail"} element={<PropertyDetails />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/plans"} element={<OurPlans />} />
          <Route path={"/residential"} element={<Residential />} />
          <Route path={"/commercial"} element={<Commercial />} />
          <Route path={"/industrial"} element={<Industrial />} />
          <Route path={"/lease"} element={<LeaseForm />} />
          <Route path={"/admin/*"} element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
