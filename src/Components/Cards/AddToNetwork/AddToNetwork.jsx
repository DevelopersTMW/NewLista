import React from "react";

// IMAGES 
import MessageIcon2 from '../../../assets/MessageIcon2.png'
import CallIcon from '../../../assets/CallIcon.png'
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import InvestorIcon2 from "../../../assets/InvestorIcon2.png";
import InvestorIcon3 from "../../../assets/InvestorIcon3.png";

const AddToNetwork = ({InvesImage , InvesUserName , InvesDesc}) => {
  return (
    <>
      <div className="w-[92%] min-[450px]:w-[70%] border-[1px] border-solid border-[#BBBBBB] px-7 py-7 rounded-[8px] sm:w-[46%] md:w-[48%]  lg:w-[40%] xl:w-[32%]">
        {/* IMAGES AND USERNAME  */}
        <div className="flex justify-start items-center gap-3 border-b-[1px] border-solid border-Paracolor pb-7">
          <span>
            <img
              className="w-[60px] h-[60px] object-cover rounded-full"
              src={InvesImage}
              alt=""
            />
          </span>
          <span>
            <h4 className="font-Inter font-bold text-[20px]">{InvesUserName}</h4>
            <h6 className="font-Inter text-[14px] font-[500]">{InvesDesc}</h6>
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
            <li className="flex gap-3 justify-center items-center">
              <img className="w-5 h-5 " src={MessageIcon2} alt="" />
              <p className="font-Inter text-[15px] text-Paracolor font-[600]">johndoe@gmail.com</p>
            </li>
             <li className="flex gap-3 justify-center items-center">
              <img className="w-5 h-5 " src={CallIcon} alt="" />
              <p className="font-Inter text-[15px] text-Paracolor font-[600]">(224) 523 321</p>
            </li>
          </ul>
          {/* BUTTONS  */}
          <div className="flex gap-1 sm:gap-3 pt-5">
            <button className="font-Inter text-[#fff] font-semibold text-[12px] sm:text-[12.5px] sm:px-2.5 sm:py-1.5 px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-full border-solid border-[2px] border-[#64AAE9] bg-[#64AAE9]">Add to Network</button>
            <button className="font-Inter text-[#fff] font-semibold text-[12px] px-2 py-1.5 sm:text-[12.5px] sm:px-2.5 sm:py-1 lg:px-3.5 rounded-full border-solid border-[2px] border-[#F61418] bg-[#F61418]">Block User</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddToNetwork;
