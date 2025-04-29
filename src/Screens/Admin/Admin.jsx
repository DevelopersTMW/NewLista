import React from "react";
import { Route, Routes } from "react-router-dom";
// COMPONENTS 
import AdminSidebar from "../../Components/AdminSideBar/AdminSidebar";
import Dashboard from "./Dashboard/Dashboard";
import Listing from "./Listing/Listing";
import MyNetwork from "./MyNetwork/MyNetwork";
import MyOffers from "./MyOffer/MyOffer";
import Analytics from "./Analytics/Analytics";
import AccountSetting from "./AccountSetting/AccountSetting";
import Inbox from "./Inbox/Inbox";

const Admin = () => {
  return (
    <>
    <AdminSidebar screen={
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/network" element={<MyNetwork />} />
            <Route path="/myoffers" element={<MyOffers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/account-setting" element={<AccountSetting />} />
            <Route path="/inbox" element={<Inbox />} />
          </Routes>
    }>
    </AdminSidebar>

    </>
  );
};

export default Admin;
