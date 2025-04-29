import React from "react";
import BlackLogo from "../../assets/BlackLogo.png";
import { Link } from "react-router-dom";
// IMAGES
import Dashboardicon1_1 from "../../assets/AdminIcon1.1.png";
import Dashboardicon1_2 from "../../assets/AdminIcon1.2.png";
import Dashboardicon1_3 from "../../assets/AdminIcon1.3.png";
import Dashboardicon1_4 from "../../assets/AdminIcon1.4.png";
import Dashboardicon1_5 from "../../assets/AdminIcon1.5.png";
import Dashboardicon1_6 from "../../assets/AdminIcon1.6.png";
import Dashboardicon1_7 from "../../assets/AdminIcon1.7.png";
import Dashboardicon1_8 from "../../assets/AdminIcon1.8.png";
import AdminNavbar from "../Navbar/AdminNavbar";

const AdminSidebar = ({ screen }) => {
  return (
    <>
      <div className="bg-[#F9F7FF] min-h-screen py-8">

        {/* MOBILE SCREEN BUTTON */}
        <button
          data-drawer-target="logo-sidebar"
          data-drawer-toggle="logo-sidebar"
          aria-controls="logo-sidebar"
          type="button"
          class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span class="sr-only">Open sidebar</span>
          <svg
            class="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              clip-rule="evenodd"
              fill-rule="evenodd"
              d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
            ></path>
          </svg>
        </button>

        {/* SIDE BAR MENU  */}
        <aside
          id="logo-sidebar"
          class="fixed  left-0 z-40 w-[20%] h-[90%] flex justify-center flex-col  transition-transform -translate-x-full sm:translate-x-0"
          aria-label="Sidebar"
        >
          <div class="h-full  py-10 overflow-y-auto bg-white rounded-r-[20px] dark:bg-gray-800 ">
            <Link
              to={"/"}
              class="flex items-center justify-center ps-2.5 mb-10"
            >
              <img
                src={BlackLogo}
                class="h-12 me-3 sm:h-16"
                alt="Flowbite Logo"
              />
            </Link>
            <ul class="space-y-1.5 font-medium">
              <li>
                <Link
                  to={"/admin/"}
                  class="flex items-center p-2 px-7 text-gray-900 bg-PurpleColor rounded-r-lg dark:text-white group gap-4"
                >
                  <img className="h-4.5 w-5" src={Dashboardicon1_1} alt="" />
                  <h1 className="font-Urbanist text-white font-[500] mt-1 text-[16px]">
                    Dashboard
                  </h1>
                </Link>
              </li>
              <li>
                <Link to={'/admin/listing'} class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_2} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    My Listings
                  </h1>
                </Link>
              </li>
              <li>
                <Link to={"/admin/network"} class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_3} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    My Network
                  </h1>
                </Link>
              </li>
              <li>
                <Link class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_4} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    Inbox
                  </h1>
                </Link>
              </li>
              <li>
                <Link to={"/admin/myoffers"} class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_5} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    My Offers
                  </h1>
                </Link>
              </li>
              <li>
                <Link to={"/admin/analytics"} class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_6} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    Analytics/Insights
                  </h1>
                </Link>
              </li>
              <li>
                <Link to={'/admin/account-setting'} class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_7} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    Account Settings
                  </h1>
                </Link>
              </li>
              <li>
                <Link class="flex items-center p-2 px-7 text-gray-900 rounded-r-lg dark:text-white group gap-4">
                  <img className="h-4.5 w-5" src={Dashboardicon1_8} alt="" />
                  <h1 className="font-Urbanist text-[#666666] font-[500]  text-[16px]">
                    Help/Support
                  </h1>
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* ADMIN SCREEN  */}
        <div class="px-4 flex flex-col gap-2 sm:ml-72">
          <div>
            <AdminNavbar></AdminNavbar>
          </div>
          <div>{screen}</div>
        </div>
      </div>
    </>
  );
};

export default AdminSidebar;
