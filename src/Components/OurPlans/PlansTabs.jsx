import React from "react";
import { Link } from "react-router-dom";
// ADDITIONAL CSS
import "../../index.css";
// IMAGES
import CheckIcon from "../../assets/Icon.png";
import { X } from "lucide-react";


  

const PlansTabs = ({ PlanNum, PlanCard, Name, Desc, ButtonText , benefits }) => {
  return (
    <>
      <div className="relative w-[100%] bg-white shadow-2xl rounded-3xl max-[350px]:px-6.5 p-8 ring-1 ring-gray-900/10 sm:p-10 2xl:py-12 flex flex-col justify-between">
        <h3 className={"text-PurpleColor text-base/7 font-semibold"}>
          {PlanCard}
        </h3>
        <p className="mt-4 max-[350px]:mt-2 flex items-baseline gap-x-2">
          <span
            className={
              "text-black max-[350px]:text-[35px]  text-[37px] sm:text-[43px] sm:leading-[48px] font-semibold tracking-tight font-Poppins leading-[39px]"
            }
          >
            {Name}
          </span>
          <span className={"text-Paracolor font-Urbanist max-[350px]:text-[14px] text-base leading-[20px]"}>
            / {PlanNum}
          </span>
        </p>
        <p
          className={
            "text-Paracolor max-[350px]:text-[13.5px] mt-6 text-base/7 font-semibold leading-[25px] font-Urbanist"
          }
        >
          {Desc}
        </p>
        <ul
          role="list"
          className={
            "text-Paracolor font-Urbanist mt-8 space-y-3 max-[350px]:text-[13px] text-sm/6 sm:mt-10"
          }
        >
          {benefits.map((item) => (
            <li key={item.id} className="flex items-center gap-x-3">
              {item.checked && (
                <img
                  src={CheckIcon}
                  alt="Checked"
                  className="bg-PurpleColor max-[350px]:px-[3px] max-[350px]:py-1 max-[350px]:text-[7px] text-[10px] px-[5px] py-1.5 rounded-full text-white"
                />
              )}
              {!item.checked&& (

                <div>
                  <X size={25} className="bg-red-600 max-[350px]:size-5 text-[19px] px-[1.5px] py-1 rounded-full text-white"  />
                </div>
                
              )}
              <span className="max-[350px]:text-[13px] text-sm text-gray-800">{item.label}</span>
            </li>
          ))}
          
        </ul>
        <Link
          className={
            "bg-PurpleColor text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-8 block rounded-md px-3.5 py-2.5 text-center max-[350px]:text-[16px] text-[18px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
          }
        >
          {ButtonText}
        </Link>
      </div>
    </>
  );
};

export default PlansTabs;
