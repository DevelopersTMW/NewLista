import React, { useState } from "react";

const SuggestedState = ({ onSelect, register , errors }) => {
  const statesArray = [
    { id: 1, name: "Alabama", code: "AL" },
    { id: 2, name: "Alaska", code: "AK" },
    { id: 2, name: "California", code: "CL" },
    // ... all others
  ];

  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);

    const filtered = statesArray.filter((state) =>
      state.name.toLowerCase().startsWith(value.toLowerCase())
    );
    setSuggestions(filtered);
  };

  const handleSelect = (state) => {
    setInputValue(state.name);
    setInputValue("");

    setSuggestions([]);
    if (onSelect) onSelect(state);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const match = statesArray.find(
        (s) => s.name.toLowerCase() === inputValue.toLowerCase()
      );
      if (match) {
        handleSelect(match);
        e.preventDefault();
      }
    }
  };

  const handleBlur = () => {
    const match = statesArray.find(
      (s) => s.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (match) {
      handleSelect(match);
    }
  };

  return (
    <div className="relative w-full">
      <input
        {...register("PreferredLocation", {
          validate: (value) =>
            value.length > 0 || "Please select at least one ",
        })}
        type="text"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onBlur={handleBlur}
        placeholder="Search Preferred Investment Location"
        className="w-full p-2 rounded bg-[#F3EEFF] text-sm py-3.5 font-Urbanist font-[600] outline-none focus:outline-none"
      />
      {suggestions.length > 0 && (
        <ul className="absolute z-10 w-[50%] bg-[#fffefe] mt-1 rounded shadow max-h-40 overflow-auto">
          {suggestions.map((state) => (
            <li
              key={state.code}
              onMouseDown={() => handleSelect(state)}
              className="px-4 py-2 border-b-[1px] border-solid border-[#d6d6d6] hover:bg-gray-100 cursor-pointer font-Urbanist font-[600]"
            >
              {state.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SuggestedState;
