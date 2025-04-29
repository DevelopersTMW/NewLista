import React from "react";
import { Link } from "react-router-dom";
// ADDITIONAL CSS 
import "../../index.css";
// IMAGES 
import CheckIcon from "../../assets/Icon.png";


const PlansTabs = ({ PlanNum, PlanCard, Name, Desc, ButtonText }) => {
  return (
    <>
      <div className="relative w-[42%] bg-white shadow-2xl rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10">
        <h3 className={"text-PurpleColor text-base/7 font-semibold"}>
          {PlanCard}
        </h3>
        <p className="mt-4 flex items-baseline gap-x-2">
          <span
            className={
              "text-black text-5xl font-semibold tracking-tight font-Poppins"
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
          Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui.
          consectetur. Nunc et pulvinar dui.
        </p>
        <ul
          role="list"
          className={
            "text-Paracolor font-Urbanist mt-8 space-y-3 text-sm/6 sm:mt-10"
          }
        >
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Unlimited products
          </li>
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Unlimited subscribers
          </li>
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Advanced analytics
          </li>
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Dedicated support representative
          </li>
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Marketing automations
          </li>
          <li className="flex gap-x-3">
            <img
              className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white"
              src={CheckIcon}
              alt=""
            />
            Custom integrations
          </li>
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
