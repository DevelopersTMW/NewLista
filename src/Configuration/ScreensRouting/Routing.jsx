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
import ForgetPassword from "../../Screens/ProtectedScreen/ForgetPassword";
import OptVerification from "../../Screens/ProtectedScreen/OptVerification";
import SetNewPassword from "../../Screens/ProtectedScreen/SetNewPassword";
import AddProperty2 from "../../Screens/AddProperty/AddProperty2";
import AddProperty3 from "../../Screens/AddProperty/AddProperty3.jsx";
import StepForm from "../../Screens/AddProperty/form";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop.jsx";

const Routing = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={"/"} element={<Home />} />
          <Route path={"/about-us"} element={<AboutUs />} />
          <Route path={"/add-property"} element={<AddProperty />} />
          <Route path={"/create-property"} element={<AddProperty3 />} />
          <Route path={"/form"} element={<StepForm />} />
          <Route path={"/properties"} element={<ViewProperty />} />
          <Route path={"/properties/:id"} element={<PropertyDetails />} />
          <Route path={"/pricing"} element={<Pricing />} />
          <Route path={"/contact-us"} element={<ContactUs />} />
          <Route path={"/login"} element={<Login />} />
          <Route path={"/reset-password"} element={<ForgetPassword />} />
          <Route path={"/verify-otp"} element={<OptVerification />} />
          <Route path={"/set-new-password"} element={<SetNewPassword />} />
          <Route path={"/register"} element={<Register />} />
          <Route path={"/plans"} element={<OurPlans />} />
          {/* <Route path={"/residential"} element={<Residential />} /> */}
          {/* <Route path={"/commercial"} element={<Commercial />} /> */}
          {/* <Route path={"/industrial"} element={<Industrial />} /> */}
          {/* <Route path={"/lease"} element={<LeaseForm />} /> */}
          <Route path={"/admin/*"} element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Routing;
