import React, { useState } from "react";
// IMAGES
import fade from "../../../assets/fade.png";
import MyNetwork from "../../../assets/MyNetwork.jpg";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";
import { Select } from "@headlessui/react";
import ResetImage from "../../../assets/ResetImage.png";
import Testimonials1 from "../../../assets/Testimonials1.png";

import SortIcon from "../../../assets/SortIcon1.1.png";
import EditIcon2 from "../../../assets/EditIcon2.png";
import MessageIcon2 from "../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import CallIcon from "../../../assets/CallIcon.png";
import MyNetworkCard from "../../../Components/Cards/MyNetworkCard/MyNetworkCard";
import AddToNetwork from "../../../Components/Cards/AddToNetwork/AddToNetwork";
import ProfileModal from "../../../Components/ProfileModal/ProfileModal";

const initialNetworkUsers = [
  {
    id: 1,
    image: Testimonials1,
    name: "John Doe",
    desc: "Real Estate Investor",
    location: "New York",
    propertyTypes: "Multifamily - Retail - Industrial",
    memberSince: "2022",
    email: "johndoe@gmail.com",
    phone: "(224) 523 321",
  },
  {
    id: 2,
    image: Testimonials1,
    name: "Jane Smith",
    desc: "Commercial Investor",
    location: "Los Angeles",
    propertyTypes: "Office - Warehouse",
    memberSince: "2021",
    email: "janesmith@gmail.com",
    phone: "(312) 123 456",
  },
  {
    id: 3,
    image: Testimonials1,
    name: "Jane Smith",
    desc: "Commercial Investor",
    location: "Los Angeles",
    propertyTypes: "Office - Warehouse",
    memberSince: "2021",
    email: "janesmith@gmail.com",
    phone: "(312) 123 456",
  },
];

const BackgroundImages = {
  backgroundImage: `url(${MyNetwork})`,
  backgroundPosition: "5%",
};

const MyNetwork2 = () => {
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [users, setUsers] = useState(initialNetworkUsers);
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const handleReject = (id) => {
    // Optionally call an API here to report or reject the user
    // await api.rejectUser(id)
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  const [activeTab, setActiveTab] = useState("myNetwork");
  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <div
          style={BackgroundImages}
          className="relative flex items-center justify-center overflow-hidden rounded-[10px]"
        >
          <img className="absolute -top-[40%]  w-[100%]" src={fade} alt="" />
          <h1 className="font-Inter font-bold text-[35px]  sm:text-[43px] text-white  text-center py-16 relative ">
            My Networks
          </h1>
          <button className="absolute z-10 right-5 top-4 h-6 w-6 ">
            <img src={EditIcon2} alt="" />
          </button>
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROFILE SECTION START */}
      <section className="flex flex-col items-center gap-0 sm:gap-7 sm:flex-row ">
        <div className=" z-10 relative py-3 ml-3 sm:py-5 sm:w-[20%]">
          <img
            className="border-solid  border-PurpleColor w-[90%] h-[100%] border-[3px]  rounded-full"
            src={AccountSettingImage}
            alt=""
          />
        </div>

        <div className="flex items-center gap-2 flex-col sm:items-start sm:gap-2">
          <h4 className="font-Inter font-bold text-[35px] sm:text-[43px]">
            John Doe
          </h4>
          <h6 className="font-Inter text-[18px] font-[500] text-center sm:text-start">
            Director Manager | Arme Properties
          </h6>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:items-start sm:gap-5 ">
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={InvestorIcon1} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                New York
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={MessageIcon2} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                johndoe@gmail.com
              </p>
            </li>
            <li className="flex gap-2 -mt-2 sm:mt-0 justify-center items-center">
              <img className="w-4 h-4" src={CallIcon} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                (224) 523 321
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* PROFILE SECTION END */}

      {/* SECTION 1 START  */}
      <section className="mt-8 sm:mt-10">
        {/* Top Section */}

        <div className="flex sm:gap-5 sm:px-0  items-center sm:flex-row gap-4 px-2">
          {/* SEARCH  */}
          <div className="relative max-[350px]:w-[57%] w-[67%] items-center flex md:w-[80%]  xl:w-[24%] 2xl:w-[39%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#444444] "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[100%] text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold py-3.5 pl-11 rounded-[10px] text-[15px] bg-[#F3EEFF] outline-none"
              placeholder="Search by name, company, location"
              required
            />
          </div>
          {/* FILTER  */}
          {/* Desktop filter bar (hidden on mobile) */}
          <div className="hidden xl:flex   gap-2 pr-5 bg-white   border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1">
              <img className="w-5 h-5" src={SortIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Filter
              </span>
            </button>
            {/* STATUS  */}
            <div className="flex gap-1  border-r-[1px] border-solid px-3.5 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12 rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Property Type
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-3.5 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12  rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Investment Range
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-4 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12 rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Location
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex justify-end ml-3">
              <button className="flex items-center justify-end gap-2">
                <span className="font-Urbanist font-[500] text-[15px] text-[#E31D1C]">
                  Reset Filter
                </span>{" "}
                <img className="h-5" src={ResetImage} alt="" />{" "}
              </button>
            </div>
          </div>
          {/* Mobile filter button (visible only on small screens) */}
          <div className="flex xl:hidden  px-4 w-[30%]  md:w-[20%] py-2">
            <button
              onClick={() => setShowMobileFilter(true)}
              className="bg-[#1E1E1E] text-white py-2.5 pl-3.5 pr-9.5 lg:pl-5 lg:pr-10 rounded-[10px] flex items-center gap-2"
            >
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src={SortIcon}
                alt="Filter"
              />
              <span className="font-Urbanist font-medium text-[15px] lg:text-[18px]">
                Filter
              </span>
            </button>
          </div>
          {/* Fullscreen filter drawer (visible when isFilterOpen === true) */}
          {showMobileFilter && (
            <div className="fixed inset-0 bg-white z-50 pt-20 px-5  flex flex-col gap-3">
              {/* Back Button */}
              <div className="flex items-center mb-4">
                <button
                  onClick={() => setShowMobileFilter(false)}
                  className="text-[#1E1E1E] text-[18px] flex items-center gap-2 font-Urbanist  font-[600]"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back
                </button>
              </div>

              {/* Filter Content */}
              <div className="flex flex-col gap-4">
                <button className="bg-[#1E1E1E] text-white py-2.5 px-4 rounded-[7px] flex items-center gap-2 w-full">
                  <img className="w-5 h-5" src={SortIcon} alt="Sort" />
                  <span className="font-Urbanist font-medium text-[14px]">
                    Filter By
                  </span>
                </button>

                {[
                  ["Property type", "Paused"],
                  ["Investment Range", "Paused"],
                  ["Location", "Paused"],
                ].map((options, idx) => (
                  <select
                    key={idx}
                    className="w-full h-12 text-[#444444] font-semibold font-Urbanist text-[14px] rounded-[6px] border border-[#F3EEFF] outline-none"
                  >
                    {options.map((opt) => (
                      <option
                        className="text-[12.5px] font-Urbanist font-[600]"
                        key={opt}
                      >
                        {opt}
                      </option>
                    ))}
                  </select>
                ))}

                <button className="flex items-center gap-2 justify-end mt-2">
                  <span className="font-Urbanist font-medium text-[15px] text-[#E31D1C]">
                    Reset Filter
                  </span>
                  <img className="h-5" src={ResetImage} alt="Reset" />
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Drawer */}
        {showMobileFilter && (
          <div className="fixed inset-0 bg-white z-50 pt-20 px-5  flex flex-col gap-3">
            {/* Back Button */}
            <div className="flex items-center mb-4">
              <button
                onClick={() => setShowMobileFilter(false)}
                className="text-[#1E1E1E] text-[18px] flex items-center gap-2 font-Urbanist  font-[600]"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                Back
              </button>
            </div>

            {/* Filter Content */}
            <div className="flex flex-col gap-4">
              <button className="bg-[#1E1E1E] text-white py-2.5 px-4 rounded-[7px] flex items-center gap-2 w-full">
                <img className="w-5 h-5" src={SortIcon} alt="Sort" />
                <span className="font-Urbanist font-medium text-[14px]">
                 Filter By
                </span>
              </button>

              {[
                ["Property Type", "Paused"],
                ["Investment Range", "Paused"],
                ["Location", "Paused"],
              ].map((options, idx) => (
                <select
                  key={idx}
                  className="w-full h-12 text-[#444444] font-semibold font-Urbanist text-[14px] rounded-[6px] border border-[#F3EEFF] outline-none"
                >
                  {options.map((opt) => (
                    <option
                      className="text-[12.5px] font-Urbanist font-[600]"
                      key={opt}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              ))}

              <button className="flex items-center gap-2 justify-end mt-2">
                <span className="font-Urbanist font-medium text-[15px] text-[#E31D1C]">
                  Reset Filter
                </span>
                <img className="h-5" src={ResetImage} alt="Reset" />
              </button>
            </div>
          </div>
        )}
      </section>
      {/* SECTION 1 END  */}

      <div className="w-full">
        {/* Tabs Header */}
        <div className="flex flex-wrap justify-between gap-2 sm:gap-4 mt-11 mb-6 bg-gray-200 rounded-[10px] w-full">
          <button
            onClick={() => setActiveTab("myNetwork")}
            className={`flex-1 min-w-[100px] text-[15px] sm:text-[18px] font-Urbanist py-2.5 md:py-2 px-2.5 md:px-4 rounded-[7px] font-semibold text-center transition duration-200 cursor-pointer ${
              activeTab === "myNetwork"
                ? "bg-PurpleColor text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            My Network
          </button>
          <button
            onClick={() => setActiveTab("addToNetwork")}
            className={`flex-1 min-w-[100px] text-[15px] sm:text-[18px] font-Urbanist px-2.5 md:px-4 rounded-[7px] font-semibold text-center transition duration-200 cursor-pointer ${
              activeTab === "addToNetwork"
                ? "bg-PurpleColor text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Discover
          </button>
          <button
            onClick={() => setActiveTab("pending")}
            className={`flex-1 min-w-[100px] text-[15px] sm:text-[18px] font-Urbanist px-2.5 md:px-4 rounded-[7px] font-semibold text-center transition duration-200 cursor-pointer ${
              activeTab === "pending"
                ? "bg-PurpleColor text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Pending
          </button>
        </div>

        {/* Tabs Content */}
        {activeTab === "myNetwork" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              My Network
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {users.map((user) => (
                <MyNetworkCard
                  InvesImage={user.image}
                  InvesUserName={user.name}
                  InvesDesc={user.desc}
                  showModal={showModal}
                  setShowModal={setShowModal}
                />
              ))}
            </div>
          </section>
        )}

        {activeTab === "addToNetwork" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              Add To Network
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {users.map((user) => (
                <AddToNetwork
                  key={user.id}
                  id={user.id}
                  InvesImage={user.image}
                  InvesUserName={user.name}
                  InvesDesc={user.desc}
                  location={user.location}
                  propertyTypes={user.propertyTypes}
                  memberSince={user.memberSince}
                  email={user.email}
                  phone={user.phone}
                  showModal={showModal}
                  setShowModal={setShowModal}
                  onReject={handleReject}
                />
              ))}
            </div>
            <ProfileModal />
          </section>
        )}

        {activeTab === "pending" && (
          <section className="flex flex-col gap-7 sm:gap-10 items-center sm:items-start">
            <h1 className="text-[26px] mt-5 font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] sm:text-[30px] font-[700]">
              Pending Requests
            </h1>
            <div className="flex flex-wrap gap-4 justify-center sm:justify-start">
              {/* Replace with your pending request components */}
              <div className="text-white">No pending requests.</div>
            </div>
          </section>
        )}
      </div>
    </>
  );
};

export default MyNetwork2;
