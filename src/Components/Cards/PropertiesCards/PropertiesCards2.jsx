import React from "react";
import PropertyIcon from "../../../assets/PropertyIcon.png";
import PropertyIcon2 from "../../../assets/PropertyIcon2.png";
import { Link } from "react-router-dom";

const PropertiesCards2 = ({ Img, Heading, desc, Status, Price, Features , id  , images}) => {
  return (
    <>
      <div className="w-[100%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
          <img className="rounded-t-lg h-[230px] object-cover w-[100%]" src={images} alt="" />
        <div className="py-3 pb-4 px-4 flex flex-col gap-2">
          <div className="absolute top-8 end-8">
            {"Active" === Status ? (
              <span className="bg-[#28A745] text-white font-Inter px-4 py-1.5 text-[14px] rounded-full">
                Active
              </span>
            ) : "Sold" === Status ? (
              <span className="bg-[#DC3545] text-white font-Inter px-4 py-1.5 text-[14px] rounded-full">Sold</span>
            ) : (
              <span className="bg-[#FFC107] text-white font-Inter px-4 py-1.5 text-[14px] rounded-full">{Status}</span>
            )}
          </div>
          <div>
              <h1 className="mb-2 text-[21px] font-[600] font-Inter tracking-tight leading-[24px] mt-3 text-gray-900 dark:text-white">
                {Heading}
              </h1>
            <p className="mb-2 font-Inter text-[13px] font-normal text-gray-700 dark:text-gray-400">
              {desc}
            </p>
          </div>
          <div className="flex gap-1">
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[12.5px] flex rounded-full w-max gap-1">
              <img className="w-[16px] h-4.5" src={PropertyIcon} alt="" />{" "}
              10,000 SF
            </span>
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[12.5px] flex rounded-full w-max gap-1">
              <img className="w-[16px] h-4.5" src={PropertyIcon2} alt="" /> 15
              Units
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h5 className="font-Inter text-[16px] font-[500]">Price</h5>
              <h1 className="font-Inter text-[16px] font-bold">${Price}</h1>
            </div>
            <div>
              <Link to={`/properties/${id}`} className="inline-flex font-Inter text-[12.5px] items-center px-5 py-2.5 rounded-full text-sm font-medium text-center hover-btn-purple hover-btn">
                <span> View Property</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default PropertiesCards2;
