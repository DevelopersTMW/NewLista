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
import ListingImage1_1 from "../../../assets/listing1.1.png";
import ListingImage1_2 from "../../../assets/listing1.2.png";
import ListingImage1_3 from "../../../assets/listing1.3.png";
import ListingImage1_4 from "../../../assets/listing1.4.png";
import { Link } from "react-router-dom";
import ListingTable from "./ListingSection/ListingTable/ListingTable.jsx";
import { useForm } from "react-hook-form";
import { ChevronLeft, RefreshCw } from "lucide-react";

const propertyTypes = [
  "Apartments / Multifamily",
  "Automotive Property",
  "Church",
  "Gas Station",
  "Healthcare Facility",
  "Hospitality",
  "Industrial Building",
  "Industrial Park",
  "Mixed Use Property",
  "Office Building",
  "Recreation Center",
  "Retail Center",
  "School Building",
  "Self-Storage Facility",
  "Senior Living Facility",
  "Shopping Center",
  "Single-Tenant Retail Building",
  "Strip Center",
  "Vacant Land",
  "Warehouse",
  "Other",
];

const InvestmentRange = [
  "Under $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M – $2.5M",
  "$2.5M – $5M",
  "$5M – $10M",
  "$10M – $25M",
  "$25M – $50M",
  "Over $50M",
];

const Listing = () => {
  const { register, watch, setValue } = useForm();
  const status = watch("status");
  const propertyType = watch("propertyType");
  const priceRange = watch("priceRange");
  const search = watch("search");

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  console.log(status + propertyType + priceRange);

  const handleResetFilters = () => {
    setValue("status", "");
    setValue("search", "");
    setValue("propertyType", "");
    setValue("priceRange", "");
  };

  return (
    <>
      {/* HEADING SECTION  */}
      <section className="py-6">
        {/* PAGE TITTLE  */}
        <div className="flex flex-co flex-wrap max-[350px]:gap-3 gap-5 sm:flex-row justify-between items-center">
          <h1 className="font-Urbanist text-[#222222] text-[30px] font-[700]">
            My Listings
          </h1>
          <Link to={"/create-property"}>
            <button className="text-[13.5px] px-3 sm:px-5 md:text-[15px] font-Inter hover-btn hover-btn-black  bg-[#1E1E1E] text-white py-2.5 sm:py-3 max-[350px]:text-[12.5px] rounded-[7px]">
              <span>Add New Property</span>
            </button>
          </Link>
        </div>
      </section>

      <section className=" bg-white rounded-t-[20px] w-[100%] px-4 sm:px-0 pt-5">
        {/* UPPER TAB  */}
        <div className="flex flex-col sm:gap-5 sm:px-7 bg-white">
          {/* SEARCH  */}
          <div className="relative w-[100%]">
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
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[100%] text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold py-3.5 pl-11 rounded-[10px] text-[15px] bg-[#F3EEFF] outline-none"
              placeholder="Search Property Name "
              {...register("search")}
            />
          </div>
          {/* FILTER  */}
          {/* Desktop filter bar (hidden on mobile) */}
          <div className="hidden xl:flex gap-2 px-0 bg-white  w-[100%] border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1 w-[15%]">
              <img className="w-5 h-5" src={FilterIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Filter
              </span>
            </button>
            {/* STATUS  */}
            <div className="border-r-[1px] border-solid border-[#BBBBBB] w-[17%]">
              <Selection
                defaultOption={"Status"}
                Options={[
                  "Available",
                  "Withdrawn",
                  "Pending",
                  "Under Contract",
                  "Leased",
                ]}
                icon={"!top-3.5"}
                name={"status"}
                register={register}
                Style={"bg-transparent border-none"}
              />
            </div>
            <div className="border-r-[1px] border-solid border-[#BBBBBB] w-[23%]">
              <Selection
                defaultOption={"Property Type"}
                Options={propertyTypes}
                name={"propertyType"}
                icon={"!top-3.5"}
                register={register}
                Style={"bg-transparent border-none"}
              />
            </div>
            <div className=" border-r-[1px] border-solid border-[#BBBBBB] w-[20%]">
              <Selection
                defaultOption={"Price Range"}
                Options={InvestmentRange}
                icon={"!top-3.5"}
                name={"priceRange"}
                register={register}
                Style={"bg-transparent border-none"}
              />
            </div>
            <div className="flex justify-center items-center w-[20%]">
              <button
                onClick={handleResetFilters}
                className="flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="font-Urbanist font-[500] text-[15px] text-[#E31D1C]">
                  Reset Filter
                </span>
                <RefreshCw size={16} className="text-[#E31D1C]" />
              </button>
            </div>
          </div>
          {/* Mobile filter button (visible only on small screens) */}
          <div className="flex xl:hidden  px-4 w-[30%]  md:w-[20%] py-2 bg-white">
            <button
              onClick={() => setIsFilterOpen(true)}
              className="bg-[#1E1E1E] text-white py-2.5 pl-3.5 pr-9.5 lg:pl-5 lg:pr-10 rounded-[10px] flex items-center gap-2"
            >
              <img
                className="w-5 h-5 lg:w-7 lg:h-7"
                src={FilterIcon}
                alt="Filter"
              />
              <span className="font-Urbanist font-medium text-[15px] lg:text-[18px]">
                Filter
              </span>
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
                  <ChevronLeft />
                  Back
                </button>
              </div>

              {/* Filter Content */}
              <div className="flex flex-col gap-4">
                <button className="bg-[#1E1E1E] text-white py-2.5 px-4 rounded-[7px] flex items-center gap-2 w-full">
                  <img className="w-5 h-5" src={FilterIcon} alt="Sort" />
                  <span className="font-Urbanist font-medium text-[14px]">
                    Sort by
                  </span>
                </button>
                <div>
                  <Selection
                    defaultOption={"Status"}
                    Options={[
                      "Available",
                      "Withdrawn",
                      "Pending",
                      "Under Contract",
                      "Leased",
                    ]}
                    icon={"!top-3.5"}
                    name={"status"}
                    register={register}
                  />
                </div>
                <div>
                  <Selection
                    defaultOption={"Property Type"}
                    Options={propertyTypes}
                    name={"propertyType"}
                    icon={"!top-3.5"}
                    register={register}
                  />
                </div>
                <div>
                  <Selection
                    defaultOption={"Price Range"}
                    Options={InvestmentRange}
                    icon={"!top-3.5"}
                    name={"priceRange"}
                    register={register}
                  />
                </div>
                <button
                  onClick={handleResetFilters}
                  className="flex items-center gap-2 justify-end mt-2"
                >
                  <span className="font-Urbanist font-medium text-[15px] text-[#E31D1C]">
                    Reset Filter
                  </span>
                  <RefreshCw size={16} className="text-[#E31D1C]" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* TABLE SECTION */}
      <ListingTable
        search={search}
        priceRange={priceRange}
        status={status}
        propertyType={propertyType}
      ></ListingTable>

      {/* HEADING SECTION  */}
      {/* <section className="pt-6 pb-4 sm:py-6 px-2 sm:px-0 ">
        PAGE TITTLE 
        <div className="flex justify-between">
          <h1 className="font-Urbanist text-[#222222] text-[26px]  sm:text-[30px] font-[700]">
            Performance Overview
          </h1>
        </div>
      </section> */}

      {/* CARDS  */}
      {/* <section className="flex  flex-wrap gap-3  ">
        CARD 1
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
        CARD 2
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
        CARD 3
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
        CARD 4
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
      </section> */}
    </>
  );
};

export default Listing;
