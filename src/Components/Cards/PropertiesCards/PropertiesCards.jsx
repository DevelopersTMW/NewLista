import React from "react";
import { Link } from "react-router-dom";
// IMAGES 
import PropertyIcon from "../../../assets/PropertyIcon.png";
import PropertyIcon2 from "../../../assets/PropertyIcon2.png";

const PropertiesCards = ({ Img, Heading, desc, Status , type, Price}) => {
  return (
    <>
      <div className="w-[100%] bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700 relative">
        <Link>
          <img className="rounded-t-lg h-[270px] object-cover w-[100%]" src={Img} alt="" />
        </Link>
        <div className="p-5 flex flex-col gap-2 justify-center">
          <div>
            {"For Sale" === type ? (
              <span className="bg-[#28A745] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                For Sale
              </span>
            ) : (
              <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[14px] rounded-full">{type}</span>
            )}
          </div>
          <div className="absolute top-6 end-6">
            {"Available" === Status ? (
              <span className="bg-[#28A745] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                Available
              </span>
            ) : "Sold" === Status ? (
              <span className="bg-[#DC3545] text-white font-Inter px-3 py-1 text-[14px] rounded-full">Sold</span>
            ) : (
              <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[14px] rounded-full">{Status}</span>
            )}
          </div>
          <div>
            <Link>
              <h1 className="mb-2 text-[25px] font-[600] font-Inter tracking-tight leading-[27px] mt-3 text-gray-900 dark:text-white ">
                {Heading}
              </h1>
            </Link>
            <p className="mb-2 font-Inter text-[14px] font-normal text-gray-700 dark:text-gray-400">
              {desc}
            </p>
          </div>
          <div className="flex gap-1">
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[13px] flex rounded-full w-max gap-1">
              <img className="w-[18px] h-4.5" src={PropertyIcon} alt="" />{" "}
              10,000 SF
            </span>
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[13px] flex rounded-full w-max gap-1">
              <img className="w-[18px] h-4.5" src={PropertyIcon2} alt="" /> 15
              Units
            </span>
          </div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h5 className="font-Inter text-[16px] font-[500]">Price</h5>
              <h1 className="font-Inter text-[18px] font-bold">${Price}</h1>
            </div>
            <div>
              <Link to={"/property-detail"} className="inline-flex font-Inter text-[15.3px] items-center px-5 py-2.5 rounded-full text-sm font-medium text-center focus:outline-none  hover-btn-purple hover-btn">
              <span>View Property Details</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesCards;
