import React, { useEffect, useState } from "react";
import ResetImage from "../../../assets/ResetImage.png";
import SortIcon from "../../../assets/SortIcon1.1.png";
import { Select } from "@headlessui/react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";
import ComboboxSelector from "../../../Components/ComboboxSelector/ComboboxSelector.jsx";

const propertyTypes = [
  { name: "Apartment" },
  { name: "Retail" },
  { name: "Mixed-Use Property" },
  { name: "Office Building" },
  { name: "Hospitality" },
  { name: "Land" },
  { name: "Others" },
  { name: "Shopping/Strip Center" },
  { name: "Industrial Building" },
  { name: "Healthcare" },
  { name: "Storage Facility" },
  { name: "Automotive" },
  { name: "Investment Homes" },
];

const statesArray = [
  { id: 1, name: "Alabama", code: "AL" },
  { id: 2, name: "Alaska", code: "AK" },
  { id: 3, name: "Arizona", code: "AZ" },
  { id: 4, name: "Arkansas", code: "AR" },
  { id: 5, name: "California", code: "CA" },
  { id: 6, name: "Colorado", code: "CO" },
  { id: 7, name: "Connecticut", code: "CT" },
  { id: 8, name: "Delaware", code: "DE" },
  { id: 9, name: "Florida", code: "FL" },
  { id: 10, name: "Georgia", code: "GA" },
  { id: 11, name: "Hawaii", code: "HI" },
  { id: 12, name: "Idaho", code: "ID" },
  { id: 13, name: "Illinois", code: "IL" },
  { id: 14, name: "Indiana", code: "IN" },
  { id: 15, name: "Iowa", code: "IA" },
  { id: 16, name: "Kansas", code: "KS" },
  { id: 17, name: "Kentucky", code: "KY" },
  { id: 18, name: "Louisiana", code: "LA" },
  { id: 19, name: "Maine", code: "ME" },
  { id: 20, name: "Maryland", code: "MD" },
  { id: 21, name: "Massachusetts", code: "MA" },
  { id: 22, name: "Michigan", code: "MI" },
  { id: 23, name: "Minnesota", code: "MN" },
  { id: 24, name: "Mississippi", code: "MS" },
  { id: 25, name: "Missouri", code: "MO" },
  { id: 26, name: "Montana", code: "MT" },
  { id: 27, name: "Nebraska", code: "NE" },
  { id: 28, name: "Nevada", code: "NV" },
  { id: 29, name: "NewHampshire", code: "NH" },
  { id: 30, name: "NewJersey", code: "NJ" },
  { id: 31, name: "NewMexico", code: "NM" },
  { id: 32, name: "NewYork", code: "NY" },
  { id: 33, name: "NorthCarolina", code: "NC" },
  { id: 34, name: "NorthDakota", code: "ND" },
  { id: 35, name: "Ohio", code: "OH" },
  { id: 36, name: "Oklahoma", code: "OK" },
  { id: 37, name: "Oregon", code: "OR" },
  { id: 38, name: "Pennsylvania", code: "PA" },
  { id: 39, name: "RhodeIsland", code: "RA" },
  { id: 40, name: "SouthCarolina", code: "SC" },
  { id: 41, name: "SouthDakota", code: "SD" },
  { id: 42, name: "Tennessee", code: "TN" },
  { id: 43, name: "Texas", code: "TX" },
  { id: 44, name: "Utah", code: "UT" },
  { id: 45, name: "Vermont", code: "VT" },
  { id: 46, name: "Virginia", code: "VA" },
  { id: 47, name: "Washington", code: "WA" },
  { id: 48, name: "WestVirginia", code: "WV" },
  { id: 49, name: "Wisconsin", code: "WI" },
  { id: 50, name: "Wyoming", code: "WY" },
];

const investmentRanges = [
  { label: "Under $250K", value: "under_250k" },
  { label: "$250K – $500K", value: "250k_500k" },
  { label: "$500K – $1M", value: "500k_1m" },
  { label: "$1M – $2.5M", value: "1m_2_5m" },
  { label: "$2.5M – $5M", value: "2_5m_5m" },
  { label: "$5M – $10M", value: "5m_10m" },
  { label: "$10M – $25M", value: "10m_25m" },
  { label: "$25M – $50M", value: "25m_50m" },
  { label: "Over $50M", value: "over_50m" },
];

const SearchFilters = ({
  setShowMobileFilter,
  showMobileFilter,
  onSearchChange,
}) => {
  const { register, watch } = useForm();

  const searchQuery = watch("search");
  const PropertyType = watch("propertyType");
  const InvestmentRange = watch("InvestmentRange");
  const [Location, setLocation] = useState();

  useEffect(() => {
    onSearchChange({
      search: searchQuery || "",
      propertyType: PropertyType || "",
      investmentRange: InvestmentRange || "",
      location: Location || "",
    });
  }, [searchQuery, onSearchChange, PropertyType, Location]);

  const StateSelectionHandler = (value) => {
    setLocation(value.name);
  };

  return (
    <>
      <section className="mt-8 sm:mt-10">
        {/* Top Section */}

        <div className="flex sm:gap-5 sm:px-0  items-center sm:flex-row gap-4 px-2">
          {/* SEARCH  */}
          <div className="relative max-[350px]:w-[57%] w-[67%] items-center flex md:w-[80%]  xl:w-[24%] 2xl:w-[39%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <Search />
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[100%] text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold py-3.5 pl-11 rounded-[10px] text-[15px] bg-[#F3EEFF] outline-none"
              placeholder="Search by name, company, location"
              {...register("search")}
            />
          </div>
          {/* FILTER  */}
          {/* Desktop filter bar (hidden on mobile) */}
          <div className="hidden xl:flex   gap-2 pr-5 bg-white   border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1 w-[13%]">
              <img className="w-5 h-5" src={SortIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Filter
              </span>
            </button>
            {/* STATUS  */}
            <div className="flex gap-1  border-r-[1px] border-solid px-3.5 border-[#BBBBBB] w-[22%]">
              <select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] h-12 rounded-[6px] outline-none w-[100%]"
                }
                {...register("propertyType")}
              >
                <option value="">Property Type</option>
                {propertyTypes.map((item, index) => (
                  <option key={index} value={item.name}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-3.5 border-[#BBBBBB] w-[25%]">
              <select
                className={
                  "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                }
                {...register("InvestmentRange")}
              >
                <option value="">Investment Range</option>
                {investmentRanges.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-4 border-[#BBBBBB] w-[18%] items-center">
              <div className="w-[100%]">
                <ComboboxSelector
                  options={statesArray}
                  onSelect={StateSelectionHandler}
                  placeholder={"Location"}
                ></ComboboxSelector>
              </div>
            </div>
            <div className="flex justify-end ml-3 w-[15%]">
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
    </>
  );
};

export default SearchFilters;
