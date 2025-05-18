import React from "react";
import { Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Selection = ({ labels, defaultOption, Style }) => {
  return (
    <>
      <div className={`relative ${Style} `}>
        <label
          for="text"
          className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]"
        >
          {labels}
        </label>
        <Select
          className={
            "bg-[#F3EEFF] border-[#F3EEFF] text-[#868686] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none appearance-none "
          }
          name="status"
          aria-label="Project status"
        >
          <option
            className="text-[#1a1919] font-[500] font-Urbanist text-[14px] "
            value="active"
          >
            {defaultOption}
          </option>
          <option
            className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
            value="active"
          >
            Active
          </option>
          <option
            className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
            value="paused"
          >
            Paused
          </option>
          <option
            className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
            value="delayed"
          >
            Delayed
          </option>
          <option
            className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
            value="canceled"
          >
            Canceled
          </option>
        </Select>
        <ChevronDownIcon
          className={`group pointer-events-none absolute top-10 right-2.5 size-5 fill-black text-black ${Style} `}
          aria-hidden="true"
        />
      </div>
    </>
  );
};

export default Selection;
