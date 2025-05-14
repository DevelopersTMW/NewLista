import React from "react";
// IMAGES
import fade from "../../../assets/fade.png";
import MyNetwork from "../../../assets/MyNetwork.jpg";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";
import { Select } from "@headlessui/react";
import ResetImage from "../../../assets/ResetImage.png";
import Testimonials1 from "../../../assets/Testimonials1.png";

import SortIcon from "../../../assets/SortIcon1.1.png";
import EditIcon2 from "../../../assets/EditIcon2.png";
import MessageIcon2 from "../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import CallIcon from "../../../assets/CallIcon.png";
import MyNetworkCard from "../../../Components/Cards/MyNetworkCard/MyNetworkCard";
import AddToNetwork from "../../../Components/Cards/AddToNetwork/AddToNetwork";

const BackgroundImages = {
  backgroundImage: `url(${MyNetwork})`,
  backgroundPosition: "5%",
};

const MyNetwork2 = () => {
  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <div
          style={BackgroundImages}
          className="relative flex items-center justify-center overflow-hidden rounded-[10px]"
        >
          <img className="absolute -top-[40%]  w-[100%]" src={fade} alt="" />
          <h1 className="font-Inter font-bold text-[43px] text-white  text-center py-16 relative ">
            My Network
          </h1>
          <button className="absolute z-10 right-5 top-4 h-6 w-6 "><img src={EditIcon2} alt="" /></button>
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROFILE SECTION START */}
      <section className="flex items-center gap-7">
        <div className="ml-3 py-5 z-10 relative w-[20%]">
          <img
            className="border-solid  border-PurpleColor w-[100%] h-[100%] border-[3px]  rounded-full"
            src={AccountSettingImage}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2">
          <h4 className="font-Inter font-bold text-[43px]">John Doe</h4>
          <h6 className="font-Inter text-[18px] font-[500]">
            Director Manager | Arme Properties
          </h6>
          <ul className="flex justify-start items-start gap-5 ">
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={InvestorIcon1} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                New York
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={MessageIcon2} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                johndoe@gmail.com
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4" src={CallIcon} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                (224) 523 321
              </p>
            </li>
          </ul>
        </div>
      </section>
      {/* PROFILE SECTION END */}

      {/* SECTION 1 START  */}
      <section className="mt-10">
        {/* UPPER TAB  */}
        <div className="flex gap-4">
          {/* SEARCH  */}
          <div className="relative w-[42%]">
            <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
              <svg
                className="w-4 h-4 text-[#444444] dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className=" w-[100%] text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold py-3.5 pl-11 rounded-[10px] text-[15px] bg-[#F3EEFF] outline-none"
              placeholder="Search by name, company, location "
              required
            />
          </div>
          {/* FILTER  */}
          <div className="flex gap-1 w-[60%] border-[1px] border-solid border-[#1E1E1E] rounded-[10px]">
            {/* FILTER BUTTON  */}
            <button className=" font-Inter bg-[#1E1E1E] text-white py-2.5 rounded-l-[7px] flex items-center px-4 gap-1">
              <img className="w-5 h-5" src={SortIcon} alt="" />{" "}
              <span className="font-Urbanist font-[500] text-[15px]">
                Sort by
              </span>
            </button>
            {/* STATUS  */}
            <div className="flex gap-1 border-r-[1px] border-solid px-4 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12 rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Recently Added
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-4 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12 rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Name
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex gap-1  border-r-[1px] border-solid px-4 border-[#BBBBBB]">
              <Select
                className={
                  " border-[#F3EEFF] text-[#444444] font-[600] font-Urbanist text-[14px] w-[100%] h-12  rounded-[6px] outline-none  "
                }
                name="status"
                aria-label="Project status"
              >
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[15px]"
                  value="active"
                >
                  Location
                </option>
                <option
                  className="text-[#1a1919] font-[500] font-Urbanist text-[14px]"
                  value="paused"
                >
                  Paused
                </option>
              </Select>
            </div>
            <div className="flex justify-end ml-3">
              <button className="flex items-center justify-end gap-2">
                <span className="font-Urbanist font-[500] text-[15px] text-[#E31D1C]">
                  Reset Filter
                </span>{" "}
                <img className="h-5" src={ResetImage} alt="" />{" "}
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 1 END  */}

      {/* SECTION 2 MY NETWORK  START*/}
      <section className="mt-10 flex flex-col gap-10">
        <div>
          <h1 className="font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] text-[30px] font-[700]">
            My Networks
          </h1>
        </div>
        <div className=" flex gap-4 ">
          <MyNetworkCard
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></MyNetworkCard>
          <MyNetworkCard
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></MyNetworkCard>
          <MyNetworkCard
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></MyNetworkCard>
        </div>
      </section>
      {/* SECTION 2 MY NETWORK  END*/}
      {/* SECTION 2 ADD TO NETWORK  START*/}
      <section className="mt-10 flex flex-col gap-10">
        <div>
          <h1 className="font-Urbanist text-[#f5f5f5] bg-PurpleColor w-max px-5 rounded-[7px] text-[30px] font-[700]">
            ADD TO NETWORK
          </h1>
        </div>
        <div className=" flex gap-4 ">
          <AddToNetwork
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></AddToNetwork>
          <AddToNetwork
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></AddToNetwork>
          <AddToNetwork
            InvesImage={Testimonials1}
            InvesUserName={"John Doe"}
            InvesDesc={"Real Estate Investor"}
          ></AddToNetwork>
        </div>
      </section>
      {/* SECTION 2 ADD TO NETWORK  END*/}
    </>
  );
};

export default MyNetwork2;
