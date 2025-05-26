import { Select } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";

const propertyType = [
  { name: "Select Your Property" },
  { name: "Car Wash" },
  { name: "Church" },
  { name: "Condominium" },
  { name: "Gas Station" },
  { name: "Hotel" },
  { name: "Industrial Park" },
  { name: "Investment Home" },
  { name: "Medical Building" },
  { name: "Mixed Use" },
  { name: "Mobile Home Park" },
  { name: "Motel" },
  { name: "Multifamily" },
  { name: "Office Building" },
  { name: "Recreation Center" },
  { name: "Retail Center" },
  { name: "Self-Storage Facility" },
  { name: "School Building" },
  { name: "Senior Living Facility" },
  { name: "Shopping Center" },
  { name: "Single Tenant Retail Building" },
  { name: "Storage Facility" },
  { name: "Townhomes" },
  { name: "Vacant Land" },
  { name: "Warehouse" },
  { name: "Other" },
];

const states = {
  Alabama: "AL",
  Alaska: "AK",
  Arizona: "AZ",
  Arkansas: "AR",
  California: "CA",
  Colorado: "CO",
  Connecticut: "CT",
  Delaware: "DE",
  Florida: "FL",
  Georgia: "GA",
  Hawaii: "HI",
  Idaho: "ID",
  Illinois: "IL",
  Indiana: "IN",
  Iowa: "IA",
  Kansas: "KS",
  Kentucky: "KY",
  Louisiana: "LA",
  Maine: "ME",
  Maryland: "MD",
  Massachusetts: "MA",
  Michigan: "MI",
  Minnesota: "MN",
  Mississippi: "MS",
  Missouri: "MO",
  Montana: "MT",
  Nebraska: "NE",
  Nevada: "NV",
  NewHampshire: "NH",
  NewJersey: "NJ",
  NewMexico: "NM",
  NewYork: "NY",
  NorthCarolina: "NC",
  NorthDakota: "ND",
  Ohio: "OH",
  Oklahoma: "OK",
  Oregon: "OR",
  Pennsylvania: "PA",
  RhodeIsland: "RA",
  SouthCarolina: "SC",
  SouthDakota: "SD",
  Tennessee: "TN",
  Texas: "TX",
  Utah: "UT",
  Vermont: "VT",
  Virginia: "VA",
  Washington: "WA",
  WestVirginia: "WV",
  Wisconsin: "WI",
  Wyoming: "WY",
};

const SearchBar = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const StateSelectionHandler = (e) => {
    let state = e.target.value;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    try {
      if (state) {
        const stateShortNames = states[state];
        axios
          .get(`/states/${stateShortNames}.json`)
          .then((res) => {
            setCities(res.data);
          })
          .catch((error) => {
            console.error("Failed to load cities:", error);
            setCities([]);
          });
      }
    } catch (error) {
      console.error("Failed to load cities:", error);
    }
  };

  //   CHECK IF CITY EXIST OR NOT
  useEffect(() => {
    if (selectedCity) {
    //   console.log(selectedCity);
    }
  });
  return (
    <>
      <div className="hidden sm:mb-8 sm:flex sm:justify-center mt-8">
        <div className="relative w-[84%] flex rounded-full px-6.5 py-3.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-textColor justify-center items-center">
          <div className=" px-4 py-2 border-r-[1px] border-solid border-Paracolor">
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[16px] font-Inter text-black font-[500]"
              }
            >
              <option className="overline-none font-Inter" value="active">
                For Sale
              </option>
              <option className="overline-none font-Inter" value="active">
                For Lease
              </option>
            </Select>
          </div>

          <div className=" px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
            <h1 className="text-[14px] font-Inter text-black font-[600]">
              State
            </h1>
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1 focus:outline-none"
              }
              value={selectedState}
              onChange={StateSelectionHandler}
            >
              <option className="overline-none font-Inter" value="">
                Select Your State
              </option>
              {Object.keys(states).map((state) => (
                <option key={state} value={state}>
                  {state}
                </option>
              ))}
            </Select>
          </div>
          <div
            className="w-[190px] overflow-hidden  appearance-none  truncate whitespace-nowrap text-ellipsis px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col  "
          >
            <h1 className="text-[14px] font-Inter text-black font-[600]">
              City
            </h1>
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1  focus:outline-none"
              }
              disabled={!cities.length}
              value={selectedCity}
              onChange={(e) => {
                setSelectedCity(e.target.value);
              }}
            >
              <option className="overline-none font-Inter focus:outline-none" value="active">
                Select Your City
              </option>
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </Select>
          </div>
          <div className=" px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
            <h1 className="text-[14px] font-semibold font-Inter text-black ">
              Property Type
            </h1>
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
              }
            >
              {propertyType.map((item, index) => (
                <option
                  key={index}
                  className="outline-none font-Inter"
                  value={item.name}
                >
                  {item.name}
                </option>
              ))}
            </Select>
          </div>
          <div className=" px-8 py-1  flex flex-col ">
            <h1 className="text-[14px] font-Inter text-black font-[600]">
              Price Range
            </h1>
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
              }
            >
              <option className="overline-none font-Inter" value="active">
                Choose Price Range
              </option>
              <option  value="active">
                Under $250K
              </option>
              <option className="" value="paused">
                $250K – $500K
              </option>
              <option className="" value="delayed">
                $500K – $1M
              </option>
              <option className="" value="canceled">
                $1M – $2.5M
              </option>
              <option className="" value="canceled">
                $2.5M – $5M
              </option>
              <option className="" value="canceled">
                $5M – $10M
              </option>
              <option className="" value="canceled">
                $10M – $25M
              </option>
              <option className="" value="canceled">
                $25M – $50M
              </option>
              <option className="" value="canceled">
                Over $50M
              </option>
            </Select>
          </div>
          <div>
            <button className="bg-PurpleColor text-white px-2 py-2 rounded-full text-[14px] cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-5 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
