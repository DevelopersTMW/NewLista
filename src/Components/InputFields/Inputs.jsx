import React from "react";

const Inputs = ({labels , placeholder , type , style}) => {
  return (
    <>
      <label
        for="email"
        className="block mb-1 text-[15px] font-[600] text-[#222222] w-[100%]"
      >
        {labels}
      </label>
      <input
        type={type}
        id="email"
        className={`bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none ${style}`}
        placeholder={placeholder}
      />
    </>
  );
};

export default Inputs;
