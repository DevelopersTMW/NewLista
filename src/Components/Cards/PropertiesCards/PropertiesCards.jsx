import React from "react";
import { Link } from "react-router-dom";
// IMAGES
import PropertyIcon from "../../../assets/PropertyIcon.png";
import PropertyIcon2 from "../../../assets/PropertyIcon2.png";
import PropertyIcon3 from "../../../assets/PropertyIcon.png";
import { Cuboid, Pickaxe } from "lucide-react";
import TruncatedText from "../../TruncatedText/TruncatedText";

const PropertiesCards = ({
  Img,
  Heading,
  desc,
  Status,
  type,
  Price,
  id,
  PropertyType,
  Area,
  forsale,
  forlease,
}) => {
  return (
    <>
      <div className="w-[100%] bg-white border border-gray-200 rounded-lg shadow-sm relative">
        <Link to={`/properties/${id}`}>
          <img
            className="rounded-t-lg h-[270px] object-cover w-[100%]"
            src={import.meta.env.VITE_IMAGE_KEY + Img}
            alt=""
          />
        </Link>
        <div className="p-5 flex flex-col gap-2 justify-between h-[55vh]">
          <div className="flex flex-col gap-2">
            <div>
              {"For Sale" === type ? (
                <span className="bg-[#28A745] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                  For Sale
                </span>
              ) : (
                <span className="bg-[#FFC107] text-white font-Inter px-3 py-1 text-[14px] rounded-full">
                  {type}
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
            <div>
              <Link to={`/properties/${id}`}>
                <h1 className="mb-1 text-[25px] font-[600] font-Inter tracking-tight leading-[27px] mt-3 text-gray-900 sm:text-[22px] ">
                  {Heading}
                </h1>
              </Link>
              <p className="mb-2 font-Inter text-[14px] font-normal text-gray-700">
                {desc}
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {/* <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[13px] flex rounded-full w-max gap-1">
                <Pickaxe size={17} />
                {Area} Sq
              </span> */}
              <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[13px] flex rounded-full w-max gap-1">
                <img className="w-[18px] h-4.5" src={PropertyIcon} alt="" />{" "}
                {Area} Sq
              </span>
              <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[13px] flex rounded-full w-max gap-1">
                <img className="w-[18px] h-4.5" src={PropertyIcon2} alt="" />{" "}
                {PropertyType}
              </span>
            </div>
          </div>
          <div className="flex items-cente flex-col flex-wrap gap-3">
            {type === "Both (For Sale & For Lease)" && (
              <div className=" ">
                <h5 className="font-Inter text-[16px] font-[500] ">
                  Price
                </h5>
                <h1 className="font-Inter text-[18px] font-bold">
                  $
                  <TruncatedText text={forsale} maxLength={6} />
                  {"/sale"}
                </h1>
                <h1 className="font-Inter text-[18px] font-bold">
                  $
                  <TruncatedText text={forlease} maxLength={6} />
                  {"/lease"}
                </h1>
              </div>
            )}
            {type !== "Both (For Sale & For Lease)" && (
              <div>
                <h5 className="font-Inter text-[18px] font-[500]">Price</h5>
                <h1 className="font-Inter text-[18px] font-bold">${Price}</h1>
              </div>
            )}
            <div>
              <Link
                to={`/properties/${id}`}
                className="inline-flex font-Inter text-[15.3px] items-center px-5 py-2.5 rounded-full text-sm font-medium text-center focus:outline-none  hover-btn-purple hover-btn sm:text-[14px]"
              >
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
