import React from "react";

const Inputs = ({ labels, placeholder, type, style , value , onChange , error  }) => {
  return (
    <>
      <label
        htmlFor={`${value}`}
        className="block mb-1 text-[15px] font-[700] text-PurpleColor w-[100%]"
      >
        {labels}
      </label>
      <input
        name={`${value}`}
        type={type}
        className={`bg-[#F3EEFF] border border-solid text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none ${style} ${error ? "border-red-500" : "border-[#F3EEFF]"}`}
        placeholder={placeholder}
        value={value} 
        onChange={onChange}
        required
      />
    </>
  );
};

export default Inputs;
