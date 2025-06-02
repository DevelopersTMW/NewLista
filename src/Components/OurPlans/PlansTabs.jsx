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
      <div className="relative w-[100%] bg-white shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10">
        <h3 className={"text-PurpleColor text-base/7 font-semibold"}>
          {PlanCard}
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span
            className={
              "text-black text-[46px] font-semibold tracking-tight font-Poppins"
            }
          >
            {Name}
          </span>
          <span className={"text-Paracolor font-Urbanist text-base"}>
            / {PlanNum}
          </span>
        </p>
        <p
          className={
            "text-Paracolor mt-6 text-base/7 font-semibold leading-[25px] font-Urbanist"
          }
        >
          {Desc}
        </p>
        <ul
          role="list"
          className={
            "text-Paracolor font-Urbanist mt-8 space-y-3 text-sm/6 sm:mt-10"
          }
        >
          {benefits.map((item) => (
            <li key={item.id} className="flex items-center gap-x-3">
              {item.checked && (
                <img
                  src={CheckIcon}
                  alt="Checked"
                  className="bg-PurpleColor text-[10px] px-[5px] py-1.5 rounded-full text-white"
                />
              )}
              {!item.checked&& (

                <div>
                  <X size={22} className="bg-red-600 text-[19px] px-[1.5px] py-1 rounded-full text-white"  />
                </div>
                
              )}
              <span className="text-sm text-gray-800">{item.label}</span>
            </li>
          ))}
          
        </ul>
        <Link
          className={
            "bg-PurpleColor text-white shadow-xs hover:bg-indigo-400 focus-visible:outline-indigo-500 mt-8 block rounded-md px-3.5 py-2.5 text-center text-[18px] font-semibold focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10"
          }
        >
          {ButtonText}
        </Link>
      </div>
    </>
  );
};

export default PlansTabs;
