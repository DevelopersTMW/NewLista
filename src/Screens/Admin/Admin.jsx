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
import MyNetwork2 from "./MyNetwork/MyNetwork2";
import ProtectiveRoute from "../../Configuration/ProtectiveRoute/ProtectiveRoute";
import HelpSupport from "./HelpSupport/HelpSupport";

const Admin = () => {
  return (
    <>
    <AdminSidebar screen={
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/network" element={<MyNetwork2 />} />
            <Route path="/myoffers" element={<MyOffers />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/account-setting" element={<ProtectiveRoute component={<AccountSetting />} />} />
            <Route path="/inbox" element={<Inbox />} />
            <Route path="/customer-support" element={<HelpSupport />} />
          </Routes>
    }>
    </AdminSidebar>

    </>
  );
};

export default Admin;
