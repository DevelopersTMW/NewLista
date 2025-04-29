import React from "react";

// IMAGES 
import MessageIcon from '../../../assets/MessageIcon.png'
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import InvestorIcon2 from "../../../assets/InvestorIcon2.png";
import InvestorIcon3 from "../../../assets/InvestorIcon3.png";

const InvestorCards = ({InvesImage , InvesUserName , InvesDesc}) => {
  return (
    <>
      <div className="border-[1px] border-solid border-[#BBBBBB] px-7 py-7 rounded-[8px]">
        {/* IMAGES AND USERNAME  */}
        <div className="flex justify-start items-center gap-3 border-b-[1px] border-solid border-Paracolor pb-7">
          <span>
            <img
              className="w-[70px] h-[70px] object-cover rounded-full"
              src={InvesImage}
              alt=""
            />
          </span>
          <span>
            <h4 className="font-Inter font-bold text-[22px]">{InvesUserName}</h4>
            <h6 className="font-Inter text-[15px] font-[500]">{InvesDesc}</h6>
          </span>
        </div>
        <div className="pt-7">
          {/* FEATURES  */}
          <ul className="flex justify-start items-start flex-col gap-3">
            <li className="flex gap-3 justify-center items-center">
              <img className="w-5 h-5 " src={InvestorIcon1} alt="" />
              <p className="font-Inter text-[15px] text-Paracolor font-[600]">New York</p>
            </li>
            <li className="flex gap-3 justify-center items-center">
              <img className="w-5 h-5 " src={InvestorIcon2} alt="" />
              <p className="font-Inter text-[15px] text-Paracolor font-[600]">Multifamily - Retail - Industrial</p>
            </li>
            <li className="flex gap-3 justify-center items-center">
              <img className="w-5 h-5 " src={InvestorIcon3} alt="" />
              <p className="font-Inter text-[15px] text-Paracolor font-[600]">Member since 2022</p>
            </li>
          </ul>
          {/* BUTTONS  */}
          <div className="flex gap-4 pt-7">
            <button className="font-Inter text-[#008316] font-semibold text-[15px] px-5 py-1.5 rounded-full border-solid border-[2px] border-[#008316]">Connect</button>
            <button className="font-Inter text-white bg-PurpleColor font-semibold text-[15px] px-5 py-1.5 rounded-full  flex gap-2 justify-center items-center"><img className="w-4 h-4" src={MessageIcon} alt="" />Message</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorCards;
