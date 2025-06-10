import React, { useEffect, useState } from "react";
import { Select } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const Selection = ({
  labels,
  defaultOption,
  Options,
  Style,
  values,
  onchange,
  register,
  name,
  error,
  rules,
  autoSelectFirst = false,
}) => {
  const [Optionss, setOptions] = useState([]);

  useEffect(() => {
    // CHECK OPTIONS AND CHECK DUBLICATE OPTIONS
    if (Options && Array.isArray(Options)) {
      setOptions(Options);
    }
  }, [Options]);

  return (
    <>
      <div className={`relative ${Style} `}>
        <label
          htmlFor={name}
          className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]"
        >
          {labels}
        </label>
        <Select
          className={`bg-[#F3EEFF] border text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none ${
            error ? "border-red-500 " : "border-[#F3EEFF]"
          }`}
          defaultValue={
            autoSelectFirst ? Options[0] : defaultOption === null ? "" : ""
          }
          name="status"
          value={values}
          onChange={onchange}
          {...(register && typeof register === "function"
            ? {...register(name, rules)}
            : {})}
          aria-label="Project status"
        >
          {defaultOption !== null && !autoSelectFirst && (
            <option className="text-[11px] sm:text-[14px]" value="">
              {defaultOption}
            </option>
          )}
          {Optionss?.map((items, index) => {
            return (
              <option
                key={index}
                className="text-[#1a1919] font-[500] font-Urbanist text-[11px] sm:text-[14px] "
                value={items}
              >
                {items}
              </option>
            );
          })}
        </Select>
        <ChevronDownIcon
          className={`group pointer-events-none absolute top-10 right-2.5 size-5 fill-black text-black ${Style} `}
          aria-hidden="true"
        />
      </div>
       {error && (
        <p className="text-red-500 font-[500] text-[14px] pt-1 font-Urbanist tracking-wide">
          {typeof error === "string" ? error : error.message}
        </p>
      )}
    </>
  );
};

export default Selection;
