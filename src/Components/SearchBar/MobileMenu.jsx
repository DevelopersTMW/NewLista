import axios from "axios";
import { Grip, Search } from "lucide-react";
import React, { useState } from "react";
import ComboboxSelector from "../ComboboxSelector/ComboboxSelector";
import { Select } from "@headlessui/react";
import Selection from "../InputFields/Selection";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { useForm } from "react-hook-form";

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

const MobileMenu = ({
  isFilterOpen,
  setIsFilterOpen,
  listingType,
  handleFilterChange,
}) => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const { register, setValue, getValues, watch } = useForm({
    defaultValues: {
      propertyType: "Select Your Property",
      listingTypes: listingType,
      priceRange: "Choose Price Range",
      city: "",
      state: "",
    },
  });
  // const listingType = watch("listingTypes");
  const onSubmit = () => {
    const formValues = getValues();
    const data = {
      listingType: formValues.listingTypes, // if needed
      propertyType: formValues.propertyType,
      state: selectedState,
      city: selectedCity,
      priceRange: formValues.priceRange,
    };
    handleFilterChange(data);
    setIsFilterOpen(false)

  };

  const StateSelectionHandler = (value) => {
    let state = value.name;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);
    setValue("state", state);

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
    setSelectedCity(value.name)
    setValue("city", value.name);
  };

  //   CHECK IF CITY EXIST OR NOT
  let citiess = cities.map((name, index) => ({
    id: index + 1,
    name,
  }));

  return (
    <div className="relative">
      {/* Mobile filter button (visible only on small screens) */}
      <div className="sm:hidden w-0">
        <button
          onClick={() => {
            setIsFilterOpen(true);
          }}
        ></button>
      </div>
      {/* Fullscreen filter drawer (visible when isFilterOpen === true) */}
      {isFilterOpen && (
        <div className="fixed inset-0 md:w-[40%] bg-white z-50 pt-10 px-5  flex flex-col gap-3">
          {/* Back Button */}
          <div className="flex items-center">
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
            <div>
              <Selection
                Options={["For Sale", "For Lease"].filter(
                  (option) => option !== listingType
                )}
                labels={"ㅤ"}
                defaultOption={listingType}
                name="listingTypes"
                register={register}
              ></Selection>
            </div>
            {/* PROPERTY TYPE  */}
            <div className="relative">
              <label className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                {"Property Type"}
              </label>
              <select
                {...register("propertyType")}
                aria-label="Project status"
                className={
                  "bg-[#F3EEFF] border-[#F3EEFF]  text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none"
                }
              >
                {propertyType.map((item, index) => (
                  <option
                    key={index}
                    className="outline-none font-Inter text-[11px]"
                    value={item.name}
                  >
                    {item.name}
                  </option>
                ))}
              </select>
              <ChevronDownIcon
                className={`group pointer-events-none absolute top-10 right-2.5 size-5 fill-black text-black `}
                aria-hidden="true"
              />
            </div>

            {/* STATES  */}
            <div>
              <label className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                {"State"}
              </label>
              <div className="bg-[#F3EEFF] border-[#F3EEFF]  text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none flex flex-col justify-center">
                <ComboboxSelector
                  styles={"w-full"}
                  options={statesArray}
                  onSelect={StateSelectionHandler}
                  placeholder={"Select Your State"}
                ></ComboboxSelector>
              </div>
            </div>

            {/* CITY  */}
            <div>
              <label className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                {"City"}
              </label>
              <div className="bg-[#F3EEFF] border-[#F3EEFF]  text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none flex flex-col justify-center">
                <ComboboxSelector
                  options={citiess}
                  onSelect={CitySelectionHandler}
                  placeholder={"Select Your City"}
                  disabled={citiess.length > 0 ? false : true}
                ></ComboboxSelector>
              </div>
            </div>

            {/* PRICE RANGE  */}
            <div>
              <Selection
                Options={[
                  "Under $250K",
                  "$250K – $500K",
                  "$500K – $1M",
                  "$1M – $2.5M",
                  "$2.5M – $5M",
                  "$5M – $10M",
                  "$10M – $25M",
                  "$25M – $50M",
                  "Over $50M",
                ]}
                defaultOption={"Choose Price Range"}
                labels={" Price Range"}
                name="priceRange"
                register={register}
              ></Selection>
            </div>

            <button
              onClick={onSubmit}
              className="hover-btn hover-btn-purple w-[40%] text-white px-4 pr-7 py-2 mt-4 text-[14px] cursor-pointer"
            >
              <span className="flex gap-2 justify-center items-center font-Urbanist font-[600]">
                <Search size={19} />
                Search
              </span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
