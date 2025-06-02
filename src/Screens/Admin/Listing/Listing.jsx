import React, { useState } from "react";
import FilterIcon from "../../../assets/FilterIcon.png";
import Selection from "../../../Components/InputFields/Selection.jsx";
import { Select } from "@headlessui/react";
import ResetImage from "../../../assets/ResetImage.png";
import EditIcon from "../../../assets/EditIcon.png";
import DownloadIcon from "../../../assets/DownloadIcon.png";
import SortIcon from "../../../assets/SortIcon1.1.png";

import RightSideArrow from "../../../assets/ListingRightSideArrow.png";
import LeftSideArrow from "../../../assets/ListingLeftSideArrow.png";
import ListingImage1_1 from "../../../assets/listing1.1.png"
import ListingImage1_2 from "../../../assets/listing1.2.png"
import ListingImage1_3 from "../../../assets/listing1.3.png"
import ListingImage1_4 from "../../../assets/listing1.4.png"
import { Link } from "react-router-dom";

const ListItem = [
  {
    name: "Modern 3BR Villa 123 Palm St, Miami, FL",
    type: "Residential",
    price: "$450,000",
    status: "Active",
    datelisted: "Jan 20, 2025 (42 Days)",
  },
  {
    name: "Downtown Office Space 456 Market St, NYC",
    type: "Commercial",
    price: "$2,000,000",
    status: "Leased",
    datelisted: "Feb 5, 2025 (12 Days)",
  },
  {
    name: "Luxury Beach House 789 Ocean Dr, LA, CA",
    type: "Residential",
    price: "$1,200,000",
    status: "Sold",
    datelisted: "Dec 15, 2024 (23 Days)",
  },
  {
    name: "Modern 3BR Villa 123 Palm St, Miami, FL",
    type: "Residential",
    price: "$450,000",
    status: "Active",
    datelisted: "Jan 20, 2025 (42 Days)",
  },
  {
    name: "Downtown Office Space 456 Market St, NYC",
    type: "Commercial",
    price: "$2,000,000",
    status: "Leased",
    datelisted: "Feb 5, 2025 (12 Days)",
  },
  {
    name: "Luxury Beach House 789 Ocean Dr, LA, CA",
    type: "Residential",
    price: "$1,200,000",
    status: "Sold",
    datelisted: "Dec 15, 2024 (23 Days)",
  },
];

const Listing = () => {

  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <>
      {/* HEADING SECTION  */}
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex flex-co flex-wrap max-[350px]:gap-3 gap-5 sm:flex-row justify-between items-center">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            My Listings
          </h1>
          <Link to={'/add-property'}>
            <button className="text-[13.5px] px-3 sm:px-5 md:text-[15px] font-Inter hover-btn hover-btn-black  bg-[#1E1E1E] text-white py-2.5 sm:py-3 max-[350px]:text-[12.5px] rounded-[7px]">
              <span>Add New Property</span>
            </button>
          </Link>

        </div>
      </section>

      {/* TABLE SECTION */}
      <section className=" bg-white rounded-[20px] w-[100%] px-4 sm:px-0 py-5">
        {/* UPPER TAB  */}
        <div className="flex sm:gap-5 sm:px-7 bg-white">
          {/* SEARCH  */}
          <div className="relative max-[350px]:w-[57%] w-[67%] items-center flex md:w-[80%]  xl:w-[23%] 2xl:w-[50%]">
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
              placeholder="Search Your Listing "
              required
            />
          </div>
          {/* FILTER  */}
          {/* Desktop filter bar (hidden on mobile) */}
          <div className="hidden xl:flex gap-2 px-0 bg-white  w-[85%] border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1">
              <img className="w-5 h-5" src={FilterIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Filter
              </span>
            </button>
            {/* STATUS  */}
            <div className="flex gap-1 border-r-[1px] border-solid px-3.5 border-[#BBBBBB]">
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
                  Status
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
                  Date Range
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
                  Sort
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
          <div className="flex xl:hidden  px-4 w-[30%]  md:w-[20%] py-2 bg-white">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-[#1E1E1E] text-white py-2.5 pl-3.5 pr-9.5 lg:pl-5 lg:pr-10 rounded-[10px] flex items-center gap-2"
            >
              <img className="w-5 h-5 lg:w-7 lg:h-7" src={FilterIcon} alt="Filter" />
              <span className="font-Urbanist font-medium text-[15px] lg:text-[18px]">Filter</span>
            </button>

          </div>
          {/* Fullscreen filter drawer (visible when isFilterOpen === true) */}
          {isFilterOpen && (
            <div className="fixed inset-0 bg-white z-50 pt-20 px-5  flex flex-col gap-3">
              {/* Back Button */}
              <div className="flex items-center mb-4">
                <button
                  onClick={() => setIsFilterOpen(false)}
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
                  <img className="w-5 h-5" src={FilterIcon} alt="Sort" />
                  <span className="font-Urbanist font-medium text-[14px]">Sort by</span>
                </button>

                {[["Recently Added", "Paused"], ["Name", "Paused"], ["Location", "Paused"]].map(
                  (options, idx) => (
                    <select
                      key={idx}
                      className="w-full h-12 text-[#444444] font-semibold font-Urbanist text-[14px] rounded-[6px] border border-[#F3EEFF] outline-none"
                    >
                      {options.map((opt) => (
                        <option className="text-[12.5px] font-Urbanist font-[600]" key={opt}>{opt}</option>
                      ))}
                    </select>
                  )
                )}

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

        {/* LOWER TAB  */}
        <div className="mt-7  sm:mt-10 sm:px-4 md:px-7 bg-white w-[98%] rounded-[13px]  xl:w-full overflow-x-auto">
          <table className="min-w-[880px] w-full text-sm text-left rtl:text-right text-gray-500 bg-[#fcfcfc]">
            <thead className="text-[13.5px] tracking-[1.5px] sm:tracking-normal sm:text-[14px] md:text-[15px] text-white font-Urbanist uppercase bg-[#1E1E1E]">
              <tr>
                <th className="px-6 py-4.5 rounded-tl-2xl">Property Name & Address</th>
                <th className="px-6 py-4.5">Type</th>
                <th className="px-6 py-4.5">Price</th>
                <th className="px-6 py-4.5">Status</th>
                <th className="px-6 py-4.5">Date Listed</th>
                <th className="px-6 py-4.5 rounded-tr-3xl">Actions</th>
              </tr>
            </thead>
            <tbody>
              {ListItem.map((items, index) => (
                <tr
                  key={index}
                  className="bg-white border-b border-gray-200 hover:bg-gray-50font-Urbanist"
                >
                  <th
                    scope="row"
                    className="w-[30%] text-[14px]  px-4 py-6 font-medium text-gray-900 whitespace-nowra sm:text-[14px] md:text-[16px]"
                  >
                    {items.name}
                  </th>
                  <td className="w-[15%] text-center px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.type}
                  </td>
                  <td className="w-[15%] text-center px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.price}
                  </td>
                  <td className=" px-3.5 py-6 text-[#222222] font-[550] text-[16px] flex gap-1 items-center mt-3 ml-2 sm:ml-0 sm:mt-2.5">
                    <div
                      className={`h-2 w-2 rounded-full ${items.status === "Active"
                          ? "bg-[#02E327]"
                          : items.status === "Sold"
                            ? "bg-[#E31D1C]"
                            : "bg-[#4379EE]"
                        }`}
                    ></div>
                    {items.status}
                  </td>
                  <td className="w-[35%] sm:w-[20%] px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.datelisted}
                  </td>
                  <td className="px-4 py-6 text-[#222222] font-[550] text-[16px] flex gap-3 justify-center">
                    <img className="w-5.5 h-5.5" src={EditIcon} alt="Edit" />
                    <img className="w-6 h-6" src={DownloadIcon} alt="Download" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </section>

      {/* ARROW SECTION  */}
      <section className="mt-3 flex justify-between items-center px-5">
        <div>
          <h1 className="font-Urbanist font-semibold text-[16px] sm:text-[17px]">
            Page 1 of 13
          </h1>
        </div>
        <div>
          <div className="border-[1px] border-solid border-[#222222] flex rounded-[7px] ">
            <span className="border-r-[1px] border-solid border-[#BBBBBB] px-3.5 py-2">
              <img className="w-2.5 h-3" src={RightSideArrow} alt="" />
            </span>
            <span className="px-3 py-2">
              <img className="w-2.5 h-3" src={LeftSideArrow} alt="" />
            </span>
          </div>
        </div>
      </section>

      {/* HEADING SECTION  */}
      <section className="pt-6 pb-4 sm:py-6 px-2 sm:px-0 ">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[26px]  sm:text-[30px] font-[700]">
            Performance Overview
          </h1>
        </div>
      </section>

      {/* CARDS  */}
      <section className="flex  flex-wrap gap-3  ">
        {/* CARD 1 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 sm:py-7 py-10 max-[350px]:w-[100%] w-[90%] sm:w-[47%] md:w-[35%] 2xl:w-[24%] rounded-[14px]">
          <div className="flex justify-between ">
            <span>
              <h4 className="sm:text-[14px] text-[15px]  font-Urbanist font-[500] text-[#666666]">
                Days on the Market
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] sm:text-[25px] font-[700]">
                42 Days
              </h1>
            </span>
            <span>
              <img className="max-[350px]:w-14" src={ListingImage1_1} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 sm:py-7 py-10 w-[90%] max-[350px]:w-[100%] sm:w-[47%] md:w-[35%] 2xl:w-[24%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="sm:text-[14px] text-[15px]  font-Urbanist font-[500] text-[#666666]">
                Total Views
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] sm:text-[25px] font-[700]">
                2,430 Views
              </h1>
            </span>
            <span>
              <img className="max-[350px]:w-14" src={ListingImage1_2} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 sm:py-7 py-10 w-[90%] max-[350px]:w-[100%] sm:w-[47%] md:w-[35%] 2xl:w-[24%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="sm:text-[14px] text-[15px] font-Urbanist font-[500] text-[#666666]">
                Number of Offers
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] sm:text-[25px] font-[700]">
                3 Offers
              </h1>
            </span>
            <span>
              <img className="max-[350px]:w-14" src={ListingImage1_3} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 sm:py-7 py-10 w-[90%] max-[350px]:w-[100%] sm:w-[47%] md:w-[35%] 2xl:w-[24%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="sm:text-[14px] text-[15px] font-Urbanist font-[500] text-[#666666]">
                Number of Rejections
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] sm:text-[25px] font-[700]">
                1 Rejection
              </h1>
            </span>
            <span>
              <img className="max-[350px]:w-13" src={ListingImage1_4} alt="" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
