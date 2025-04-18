import React from "react";
import CheckIcon from '../../assets/Icon.png'
import '../../index.css'

const PlansTabs = ({PlanNum , PlanCard , Name , Desc , ButtonText}) => {
  return (
    <>
      <div className="bg-white px-7 py-7 rounded-2xl flex flex-col gap-6 w-[39%] border-solid border-[1.5px] border-PurpleColor">
        <div className="flex gap-7 items-center">
            <h1 className="font-Inter font-[500] text-[24px]">{PlanNum}  
            </h1>
            <button className="bg-PurpleColor px-7 py-[4px] -mt-1 font-Inter  rounded-xl text-white">{PlanCard}</button>
        </div>
        <div className="border-b-[1px] border-solid border-Paracolor flex flex-col gap-2 font-[400]">
            <h1 className="font-Poppins font-[700] text-[32px]">{Name}</h1>
            <p className="font-Urbanist text-Paracolor font-[600] text-[17px]  leading-[25px] mb-6">{Desc}</p>
        </div>
        <div className="mt-2">
            <ul className="flex flex-col gap-2.5">
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"> <img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" /> Feature 1</li>
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"><img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" /> Feature 2</li>
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"><img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" /> Feature 3</li>
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"><img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" /> Feature 4</li>
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"><img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" />Feature 5</li>
                <li  className="Inter text-[#1A1A1A] text-[18px] font-[500] items-center flex  gap-3"><img className="bg-PurpleColor text-[10px] px-1.5 py-1.5 rounded-full text-white" src={CheckIcon} alt="" />Feature 6</li>
            </ul>
        </div>
        <div className="mt-2">
            <button id="HoverButton" className="font-Inter  w-[100%] py-3 text-[18px] text-[#1A1A1A] font-[500] rounded-lg"><span className="z-10 relative">{ButtonText}</span></button>
        </div>

      </div>
    </>
  );
};

export default PlansTabs;
