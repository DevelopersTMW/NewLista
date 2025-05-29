import { Textarea } from "@headlessui/react";
import React from "react";

const TextAreas = ({label , placeholder , name , register}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block mb-1 text-[15px] font-[700] text-PurpleColor"
      >
        {label}
      </label>
      <Textarea
        className={
          "bg-[#F3EEFF] border-[#F3EEFF] text-[#868686] font-[500] font-Urbanist text-[15px] w-[100%]  px-4 rounded-[6px] outline-none py-5"
        }
        rows={4}
        name="description"
        placeholder={placeholder}
        {...(register && typeof register === "function" ? register(name) : {})}
      ></Textarea>
    </div>
  );
};

export default TextAreas;
