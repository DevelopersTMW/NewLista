import React from "react";
import { Link } from "react-router-dom";
import TruncatedText from "../../TruncatedText/TruncatedText";

const TopDevelopes = ({
  Img,
  MiniHeading,
  Heading,
  desc,
  Price,
  id,
  Status,
  type,
  OffMarketProperties,
}) => {
  return (
    <>
      <div className="sm:w-[48.5%] md:w-[47%] lg:w-[33%] bg-white border border-gray-200 rounded-lg shadow-sm relative">
        <img
          className="rounded-t-lg h-[240px] object-cover w-[100%] "
          src={import.meta.env.VITE_IMAGE_KEY + Img}
          alt=""
        />
        <div className="pt-4 pb- flex flex-col gap-3 px-5 py-7 justify-between h-[38ch]">
          <div className="flex flex-col gap-2">
            <div className="flex gap-2 items-center">
              {"For Sale" === type ? (
                <span className="bg-[#28A745] text-white font-Inter px-3 py-1 text-[13.5px] rounded-full">
                  For Sale
                </span>
              ) : (
                <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[13.5px] rounded-full">
                  {type}
                </span>
              )}
              {OffMarketProperties && (
                <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[13.5px] rounded-full">
                  {OffMarketProperties}
                </span>
              )}
            </div>
            <div className="absolute top-6 end-6">
              {"Available" === Status ? (
                <span className="bg-[#28A745] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                  Available
                </span>
              ) : "Sold" === Status ? (
                <span className="bg-[#DC3545] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                  Sold
                </span>
              ) : (
                <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                  {Status}
                </span>
              )}
            </div>
          </div>

          <div>
            <h1 className=" text-[25px] font-[700] font-Inter tracking-tight leading-[24px] mt-3 text-gray-900 sm:text-[23px]">
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
            {type === "Both (For Sale & For Lease)" && (
              <div className=" ">
                <h5 className="font-Inter text-[15px] font-[500]">
                  Starting from
                </h5>
                <h1 className="font-Inter text-[20px] font-bold">
                  {" "}
                  $
                  <TruncatedText text={forsale} maxLength={6} />
                  {"/sale"}
                </h1>
                <h1 className="font-Inter text-[20px] font-bold">
                  {" "}
                  $
                  <TruncatedText text={forlease} maxLength={6} />
                  {"/lease"}
                </h1>
              </div>
            )}
            {type !== "Both (For Sale & For Lease)" && (
              <div className="">
                <h5 className="font-Inter text-[15px] font-[500]">
                  Starting from
                </h5>
                <h1 className="font-Inter text-[20px] font-bold">${Price}</h1>
              </div>
            )}

            <div className="">
              <Link to={`/properties/${id}`}>
                <button className="inline-flex font-Inter text-[13px] sm:text-[15.3px] items-center px-5 py-2.5 rounded-full text-sm font-medium text-center focus:outline-none hover-btn-purple hover-btn ">
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
