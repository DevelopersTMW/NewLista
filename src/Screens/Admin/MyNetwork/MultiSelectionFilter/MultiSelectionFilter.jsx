import {
  Combobox,
  ComboboxButton,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/20/solid";
import { useState } from "react";
import clsx from "clsx";

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
  { id: 29, name: "New Hampshire", code: "NH" },
  { id: 30, name: "New Jersey", code: "NJ" },
  { id: 31, name: "New Mexico", code: "NM" },
  { id: 32, name: "New York", code: "NY" },
  { id: 33, name: "North Carolina", code: "NC" },
  { id: 34, name: "North Dakota", code: "ND" },
  { id: 35, name: "Ohio", code: "OH" },
  { id: 36, name: "Oklahoma", code: "OK" },
  { id: 37, name: "Oregon", code: "OR" },
  { id: 38, name: "Pennsylvania", code: "PA" },
  { id: 39, name: "Rhode Island", code: "RI" },
  { id: 40, name: "South Carolina", code: "SC" },
  { id: 41, name: "South Dakota", code: "SD" },
  { id: 42, name: "Tennessee", code: "TN" },
  { id: 43, name: "Texas", code: "TX" },
  { id: 44, name: "Utah", code: "UT" },
  { id: 45, name: "Vermont", code: "VT" },
  { id: 46, name: "Virginia", code: "VA" },
  { id: 47, name: "Washington", code: "WA" }, // U.S. State
  { id: 48, name: "Washington D.C.", code: "DC" }, // Federal District
  { id: 49, name: "West Virginia", code: "WV" },
  { id: 50, name: "Wisconsin", code: "WI" },
  { id: 51, name: "Wyoming", code: "WY" },
  { id: 52, name: "Puerto Rico", code: "PR" },
  { id: 53, name: "U.S. Virgin Islands", code: "VI" },
  { id: 54, name: "Guam", code: "GU" },
  { id: 55, name: "American Samoa", code: "AS" },
  { id: 56, name: "Northern Mariana Islands", code: "MP" },
];

export default function MultiSelectDropdown({
  selectedNames,
  setSelectedNames,
  setValue,
}) {
  const toggleSelection = (name) => {
    const isSelected = selectedNames.includes(name);
    const updatedSelection = isSelected
      ? selectedNames.filter((n) => n !== name)
      : [...selectedNames, name];

    setSelectedNames(updatedSelection);
    setValue("state", updatedSelection); // Sync with form state (e.g., react-hook-form)
  };

  const removeName = (name) => {
    const updated = selectedNames.filter((n) => n !== name);
    setSelectedNames(updated);
    setValue("state", updated); // Also update form state
  };

  console.log(selectedNames);

  return (
    <div className="text-black py-2 w-full max-w-md">
      <Combobox as="div" value={selectedNames} onChange={() => {}} multiple>
        {/* Trigger button showing selected names */}
        <div className="relative">
          <ComboboxButton className="w-[85%] h-10 px-4 text-left rounded-[6px]  font-Urbanist font-[600] text-[14px] text-Paracolor bg-white truncate cursor-pointer">
            <button type="button" className="">
              {selectedNames.length === 0
                ? "Investment Location"
                : selectedNames.join(", ")}
            </button>
            <ChevronDownIcon className="absolute w-5 h-5  inset-y-0 right-1 flex items-center top-2.5 text-gray-500" />
          </ComboboxButton>
        </div>

        {/* Dropdown options */}
        <ComboboxOptions className="mt-1 max-h-60 absolute z-50 w-[10%] overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg">
          {statesArray.map((state) => {
            const isSelected = selectedNames.includes(state.name);
            return (
              <ComboboxOption
                key={state.id}
                value={state.name}
                onClick={(e) => {
                  e.preventDefault();
                  toggleSelection(state.name);
                }}
                className={({ active }) =>
                  clsx(
                    "flex items-center justify-between px-3 py-1 font-[500] text-[14.5px] rounded-md cursor-pointer select-none font-Urbanist",
                    active ? "bg-purple-100" : "",
                    isSelected ? "font-semibold" : ""
                  )
                }
              >
                <span>{state.name}</span>
                {isSelected && (
                  <CheckIcon className="w-4 h-4 text-purple-600" />
                )}
              </ComboboxOption>
            );
          })}
        </ComboboxOptions>
      </Combobox>
    </div>
  );
}
