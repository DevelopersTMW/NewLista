import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import {
  CheckIcon,
  ChevronDownIcon,
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
  { id: 47, name: "Washington", code: "WA" },
  { id: 48, name: "Washington D.C.", code: "DC" },
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
  const [isOpen, setIsOpen] = useState(false);

  const toggleSelection = (name) => {
    const alreadySelected = selectedNames.includes(name);
    const updated = alreadySelected
      ? selectedNames.filter((n) => n !== name)
      : [...selectedNames, name];

    setSelectedNames(updated);
    setValue("state", updated);

    // Close dropdown if this is the first selection
    if (!alreadySelected && selectedNames.length === 0) {
      setIsOpen(false);
    }
  };

  return (
    <div className="text-black py-2 w-full max-w-md relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-[100%] h-10 px-4 text-left rounded-[6px] font-Urbanist font-[600] text-[14px] text-Paracolor bg-white truncate cursor-pointer relative"
      >
        {selectedNames.length === 0
          ? "Investment Location"
          : selectedNames.join(", ")}
        <ChevronDownIcon className="absolute right-2 top-2.5 w-5 h-5 text-gray-500" />
      </button>

      {isOpen && (
        <ul className="mt-1 max-h-60 absolute z-50 w-[85%] overflow-auto rounded-md border border-gray-200 bg-white p-1 shadow-lg">
          {statesArray.map((state) => {
            const isSelected = selectedNames.includes(state.name);
            return (
              <li
                key={state.id}
                onClick={() => toggleSelection(state.name)}
                className={clsx(
                  "flex items-center justify-between px-3 py-1 font-[500] text-[14.5px] rounded-md cursor-pointer select-none font-Urbanist",
                  isSelected ? "font-semibold bg-purple-100" : "hover:bg-gray-100"
                )}
              >
                <span>{state.name}</span>
                {isSelected && <CheckIcon className="w-4 h-4 text-purple-600" />}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
