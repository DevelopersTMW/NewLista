import React, { useEffect } from "react";
import ResetImage from "../../../assets/ResetImage.png";
import SortIcon from "../../../assets/SortIcon1.1.png";
import { Select } from "@headlessui/react";
import { Search } from "lucide-react";
import { useForm } from "react-hook-form";

const SearchFilters = ({ setShowMobileFilter, showMobileFilter , onSearchChange  }) => {
  const { register, watch } = useForm();

  const searchQuery = watch("search"); 

  useEffect(() => {
    if (searchQuery !== undefined) {
        onSearchChange(searchQuery) 
    }
  }, [searchQuery , onSearchChange]);

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
    </>
  );
};

export default SearchFilters;
