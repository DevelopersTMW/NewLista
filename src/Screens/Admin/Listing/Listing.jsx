import React from "react";
import FilterIcon from "../../../assets/FilterIcon.png";
import Selection from "../../../Components/InputFields/Selection.jsx";
import { Select } from "@headlessui/react";
import ResetImage from "../../../assets/ResetImage.png";
import EditIcon from "../../../assets/EditIcon.png";
import DownloadIcon from "../../../assets/DownloadIcon.png";

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
  return (
    <>
      {/* HEADING SECTION  */}
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            My Listings
          </h1>
          <Link to={'/add-property'}>
          <button className="px-5 font-Inter hover-btn hover-btn-black bg-[#1E1E1E] text-white py-3 rounded-[7px]">
            <span>Add New Property</span>
          </button>
          </Link>
          
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="bg-white rounded-[20px] w-[100%] px-7 py-5">
        {/* UPPER TAB  */}
        <div className="flex gap-2">
          {/* SEARCH  */}
          <div className="relative w-[28%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#444444] dark:text-gray-400"
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
              placeholder="Search "
              required
            />
          </div>
          {/* FILTER  */}
          <div className="flex gap-1 w-[75%] border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1">
              <img className="w-5 h-5" src={FilterIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Filter
              </span>
            </button>
            {/* STATUS  */}
            <div className="flex gap-1 border-r-[1px] border-solid px-4 border-[#BBBBBB]">
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
            <div className="flex gap-1  border-r-[1px] border-solid px-4 border-[#BBBBBB]">
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
        </div>

        {/* LOWER TAB  */}
        <div className="mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-[15px] text-[#fff] rounded-t-2xl font-Urbanist uppercase bg-[#1E1E1E] ">
              <tr className="">
                <th scope="col" className="px-6 py-4.5 rounded-tl-2xl">
                  Property Name & Address
                </th>
                <th scope="col" className="px-6 py-4.5">
                  Type
                </th>
                <th scope="col" className="px-6 py-4.5">
                  Price
                </th>
                <th scope="col" className="px-6 py-4.5">
                  Status
                </th>
                <th scope="col" className="px-6 py-4.5">
                  Date Listed
                </th>
                <th scope="col" className="px-6 py-4.5 rounded-tr-3xl ">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {ListItem.map((items, index) => (
                <>
                  <tr className="bg-white border-b dark:bg-gray-800  dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 font-Urbanist"></tr>
                  <th
                    scope="row"
                    className="px-3 py-6 font-medium text-gray-900 whitespace-nowrap  text-[16px]"
                  >
                    {items.name}
                  </th>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.type}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.price}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px] flex gap-1 items-center">
                    {items.status === "Active" ? (
                      <div className="text-[#02E327] h-2 w-2 bg-[#02E327]  rounded-full"></div>
                    ) : items.status === "Sold" ? (
                      <div className="text-[#E31D1C] h-2 w-2 bg-[#E31D1C]  rounded-full"></div>
                    ) : (
                      <div className="text-[#4379EE] h-2 w-2 bg-[#4379EE]  rounded-full"></div>
                    )}
                    {items.status}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.datelisted}
                  </td>
                  <td className="px-4 py-6 text-[#222222] font-[550] text-[16px] flex justify-center">
                    <img className="w-5.5 h-5.5" src={EditIcon} alt="" />
                    <img className="w-6 h-6" src={DownloadIcon} alt="" />
                  </td>
                  <tr />
                </>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* ARROW SECTION  */}
      <section className="mt-3 flex justify-between items-center px-5">
        <div>
          <h1 className="font-Urbanist font-semibold text-[17px]">
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
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            Performance Overview
          </h1>
        </div>
      </section>

      {/* CARDS  */}
      <section className="flex gap-3">
        {/* CARD 1 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 py-7 w-[30%] rounded-[14px]">
          <div className="flex justify-between ">
            <span>
              <h4 className="text-[14px] font-Urbanist font-[500] text-[#666666]">
              Days on the Market
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] font-[700]">
              42 Days
              </h1>
            </span>
            <span>
              <img src={ListingImage1_1} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 2 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 py-7 w-[30%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="text-[14px] font-Urbanist font-[500] text-[#666666]">
              Total Views
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] font-[700]">
              2,430 Views
              </h1>
            </span>
            <span>
              <img src={ListingImage1_2} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 py-7 w-[30%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="text-[14px] font-Urbanist font-[500] text-[#666666]">
              Number of Offers
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] font-[700]">
              3 Offers
              </h1>
            </span>
            <span>
              <img src={ListingImage1_3} alt="" />
            </span>
          </div>
        </div>
        {/* CARD 4 */}
        <div className="flex flex-col justify-between bg-white px-5 gap-5 py-7 w-[30%] rounded-[14px]">
          <div className="flex justify-between">
            <span>
              <h4 className="text-[14px] font-Urbanist font-[500] text-[#666666]">
              Number of Rejections
              </h4>
              <h1 className="font-Urbanist text-[#222222] text-[25px] font-[700]">
              1 Rejection
              </h1>
            </span>
            <span>
              <img src={ListingImage1_4} alt="" />
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Listing;
