import axios from "axios";
import { Grip } from "lucide-react";
import React, { useState } from "react";
import ComboboxSelector from "../ComboboxSelector/ComboboxSelector";

const statesArray = [/* your states data remains unchanged */];

const MobileMenu = () => {
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Toggle state

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

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

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center mb-0 text-gray-600 hover:text-Paracolor"
      >
        <Grip />
      </button>

      {isDropdownOpen && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-48 max-h-64  z-20">
          <div className="md:w-[40%] lg:w-[190px] whitespace-nowrap text-ellipsis px-4 py-2">
            <h1 className="text-[14px] font-Inter text-black font-[600] mb-1">
              State
            </h1>
            <ComboboxSelector
              options={statesArray}
              onSelect={StateSelectionHandler}
              placeholder={"Select Your State"}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
