import { Select } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import ComboboxSelector from "../ComboboxSelector/ComboboxSelector";
import Selection from "../InputFields/Selection";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Grip, GripVertical, Search, Turtle } from "lucide-react";
import MobileMenu from "./MobileMenu";

const propertyType = [
  { name: "Select Your Property" },
  { name: "Church" },
  { name: "Condominium" },
  { name: "Gas Station" },
  { name: "Hotel" },
  { name: "Industrial Park" },
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

const SearchBar = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const [selectedPerson, setSelectedPerson] = useState(null);

  const StateSelectionHandler = (value) => {
    let state = value.name;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    try {
      if (state) {
        const stateShortNames = value.code;

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

  const CitySelectionHandler = (value) => {
    console.log("Selected Data :", value);
  };

  //   CHECK IF CITY EXIST OR NOT
  let citiess = cities.map((name, index) => ({
    id: index + 1,
    name,
  }));

  const [listingType, setListingType] = useState(""); // "For Sale" or "For Lease"

  return (
    <>
      <div className=" sm:mb-8 sm:flex sm:justify-center mt-8">
        <div className="relative w-[85%] justify-between md:w-[35%] lg:w-[94%] xl:w-[84%] flex rounded-full py-3 px-5 lg:px-6.5 sm:py-3.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-textColor lg:justify-center items-center">
          <div className="w-[45%] lg:w-[15%] px-4 py-2 lg:border-r-[1px] border-solid border-Paracolor">
            <Select
              name="status"
              aria-label="Project status"
              className={
                "overline-none text-[16px] font-Inter text-black font-[500] focus:outline-none border-none focus:ring-0"
              }
              onChange={(e) => {
                const value = e.target.value;
                setListingType(value);
                setIsFilterOpen(value !== "Select" && value !== ""); // Open only if valid
              }}
              defaultValue="Select"
            >
              <option
                className="overline-none font-Inter block lg:hidden "
                value="Select"
              >
                Select
              </option>
              <option className="overline-none font-Inter" value="For Sale">
                For Sale
              </option>
              <option className="overline-none font-Inter" value="For Lease">
                For Lease
              </option>
            </Select>
          </div>
          <div className="hidden lg:flex lg:w-[20%] px-8 py-1 md:border-r-[1px] border-solid border-Paracolor flex-col ">
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
          <div className=" hidden  lg:flex lg:w-[190px] whitespace-nowrap text-ellipsis px-8 py-1 lg:border-r-[1px] border-solid border-Paracolor flex-col">
            <h1 className="text-[14px] font-Inter text-black font-[600]">
              State
            </h1>
            <ComboboxSelector
              options={statesArray}
              onSelect={StateSelectionHandler}
              placeholder={"Select Your State"}
            ></ComboboxSelector>
          </div>

          <div className="w-[40%] flex justify-center items-center lg:hidden md:w-[10%] sm:w-[25%]">
            {isFilterOpen && (
              <MobileMenu
                setIsFilterOpen={setIsFilterOpen}
                isFilterOpen={isFilterOpen}
                listingType={listingType}
              ></MobileMenu>
            )}
          </div>

          <div className=" hidden lg:w-[22%] px-8 py-1 border-r-[1px] border-solid border-Paracolor lg:flex flex-col ">
            <h1 className="text-[14px] font-Inter text-black font-[600]">
              City
            </h1>

            <ComboboxSelector
              options={citiess}
              onSelect={CitySelectionHandler}
              placeholder={"Select Your City"}
              disabled={citiess.length > 0 ? false : true}
            ></ComboboxSelector>
          </div>

          <div className="hidden lg:w-[20%] px-8 py-1  lg:flex flex-col ">
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
              <option value="active">Under $250K</option>
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
            <button className="hover-btn hover-btn-purple text-white px-2 py-2 rounded-full text-[14px] cursor-pointer">
              <span>
                <Search />
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchBar;
