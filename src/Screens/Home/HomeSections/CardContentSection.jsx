import React from "react";
import { Link } from "react-router-dom";

const CardContentSection = ({Heading , Desc , ButtonName , ButtonLink ,onClick}) => {
  return (
    <>
      <div className="flex flex-col gap-4 sm:flex-row justify-center sm:items-center md:w-[84%]">
        <div className="sm:w-[65%]">
          <h1 className="text-[34px] leading-[40px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[32px] sm:leading-[39px] md:text-[37px] md:leading-[48px]">
           {Heading}
          </h1>
          <p className="text-[14.5px] font-Inter font-medium text-pretty text-Paracolor mt-2 sm:mt-0 md:mt-2 sm:text-[15px]/5 ">
           {Desc}
          </p>
        </div>
        <div className="sm:w-[35%]  flex sm:justify-end">
          {/* <Link to={``}> */}
            <button onClick={onClick} className="hover-btn hover-btn-black px-5 font-Inter py-3 rounded-[7px] text-[14.5px] cursor-pointer sm:text-[14px]">
              <span>{ButtonName}</span>
            </button>
          {/* </Link> */}
        </div>
      </div>
    </>
  );
};

export default CardContentSection;
