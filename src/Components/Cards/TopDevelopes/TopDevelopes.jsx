import React from "react";
import { Link } from "react-router-dom";

const TopDevelopes = ({ Img, MiniHeading, Heading, desc, Price , id }) => {
  return (
    <>
      <div className="sm:w-[48.5%] md:w-[47%] lg:w-[33%] bg-white border border-gray-200 rounded-lg shadow-sm">
        <img
          className="rounded-t-lg h-[240px] object-cover w-[100%] "
          src={import.meta.env.VITE_IMAGE_KEY + Img}
          alt=""
        />
        <div className="pt-4 pb- flex flex-col gap-3 px-5 py-7">
          <div>
            <h1 className=" text-[25px] font-[700] font-Inter tracking-tight leading-[24px] mt-3 text-gray-900 dark:text-white sm:text-[23px]">
              {Heading}
            </h1>
            <h1 className="mb-2 text-[18px] font-[600] font-Inter tracking-tight leading-[24px] mt-1 text-gray-900">
              {MiniHeading}
            </h1>
            <p className="mb-2 font-Inter text-[14px] font-normal text-gray-700">
              {desc}
            </p>
          </div>
          {/* <div className="flex  flex-wrap gap-3  items-center">
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3.5 py-[7px] text-[13px] flex rounded-full w-max gap-1">
            Office Buildings
            </span>
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3.5 py-[7px] text-[13px] flex rounded-full w-max gap-1">
            Luxury Apartments
            </span>
            <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3.5 py-[7px] text-[13px] flex rounded-full w-max gap-1">
            Mixed-Use Developments
            </span>
          </div> */}
          <div className="flex justify-between items-end flex-wrap gap-3">
            <div className="">
              <h5 className="font-Inter text-[15px] font-[500]">
                Starting from
              </h5>
              <h1 className="font-Inter text-[20px] font-bold">${Price}</h1>
            </div>
            <div className="">
              <Link to={`/properties/${id}`}>
                <button className="inline-flex font-Inter text-[13px] sm:text-[15.3px] items-center px-5 py-2.5 rounded-full text-sm font-medium text-center focus:outline-none hover-btn-yellow hover-btn ">
                  <span>View Property Details</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default TopDevelopes;
