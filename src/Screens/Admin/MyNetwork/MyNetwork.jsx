import React from "react";
import { Select } from "@headlessui/react";
// IMAGES
import RightSideArrow from "../../../assets/ListingRightSideArrow.png";
import LeftSideArrow from "../../../assets/ListingLeftSideArrow.png";
import SortIcon from "../../../assets/SortIcon1.1.png";
import ResetImage from "../../../assets/ResetImage.png";
import Testimonials1 from "../../../assets/Testimonials1.png";
import ViewEye from "../../../assets/ViewEye.png";
import InvestorCards from "../../../Components/Cards/InvestorCards/InvestorCards";


const ListItem = [
  {
    name: "John Doe",
    company: "ABC Capital",
    location: "New York, NY",
    invetmenttype: "Multifamily, Retail",
    phonenum: "123-456-789",
    date: "Jan 20, 2025",
  },
  {
    name: "Jane Smith",
    company: "Smith Realty",
    location: "Miami, FL",
    invetmenttype: "Office, Industrial",
    phonenum: "123-456-789",
    date: "Feb 2, 2025",
  },
  {
    name: "Michael Lee",
    company: "Skyline Properties",
    location: "Los Angeles, CA",
    invetmenttype: "Land, Mixed-Use",
    phonenum: "123-456-789",
    date: "Dec 15, 2024",
  },
  {
    name: "Jane Smith",
    company: "Smith Realty",
    location: "Miami, FL",
    invetmenttype: "Office, Industrial",
    phonenum: "123-456-789",
    date: "Feb 2, 2025",
  },
  {
    name: "Michael Lee",
    company: "Skyline Properties",
    location: "Los Angeles, CA",
    invetmenttype: "Land, Mixed-Use",
    phonenum: "123-456-789",
    date: "Dec 15, 2024",
  },
  {
    name: "John Doe",
    company: "ABC Capital",
    location: "New York, NY",
    invetmenttype: "Multifamily, Retail",
    phonenum: "123-456-789",
    date: "Jan 20, 2025",
  },
];


const MyNetwork = () => {
  return (
    <>
      {/* HEADING SECTION  */}
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            My Networks
          </h1>
          <button className="px-5 font-Inter text-[14px] bg-[#1E1E1E] text-white py-3 rounded-[7px]">
            Find & Connect with Investors
          </button>
        </div>
      </section>

      {/* TABLE SECTION */}
      <section className="bg-white rounded-[20px] w-[100%] flex flex-col  px-6 py-6 overflow-hidden">
        {/* UPPER TAB  */}
        <div className="flex gap-4">
          {/* SEARCH  */}
          <div className="relative w-[37%]">
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
          <div className="flex gap-1 w-[62%] border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1">
              <img className="w-5 h-5" src={SortIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Sort by
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
                  Recently Added
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
                  Name
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
        </div>
        {/* CARD SECTION  */}
        <div className="w-[84%] flex gap-4 pl-2 mt-14">
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
          <InvestorCards
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></InvestorCards>
        </div>

        {/* TABLE SECTION  */}
        <div className="mt-10">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-[15px] text-[#fff] rounded-t-2xl font-Urbanist uppercase bg-[#1E1E1E] ">
              <tr className="">
                <th scope="col" className="px-6 py-4.5 rounded-tl-2xl">
                NAME
                </th>
                <th scope="col" className="px-6 py-4.5">
                Company
                </th>
                <th scope="col" className="px-6 py-4.5">
                Location
                </th>
                <th scope="col" className="px-6 py-4.5">
                Investment Type
                </th>
                <th scope="col" className="px-6 py-4.5">
                Phone
                </th>
                <th scope="col" className="px-6 py-4.5 ">
                Date Joined
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
                    {items.company}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.location}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.invetmenttype}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.phonenum}
                  </td>
                  <td className="px-3.5 py-6 text-[#222222] font-[550] text-[16px]">
                    {items.date}
                  </td>
                  <td className="px-4 py-6 text-[#222222] font-[550] text-[16px] flex gap-1 justify-center">
                    <img className="w-5.5 h-5.5" src={ViewEye} alt="" />
                    View
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
    </>
  );
};

export default MyNetwork;
