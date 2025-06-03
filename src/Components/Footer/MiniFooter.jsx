import React from "react";
// IMAGES
import BgImage from "../../assets/JourneySecImage.jpg";
import { Link } from "react-router-dom";

// CSS
const JourneyBgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "#0009",
  backgroundBlendMode: "color",
};

const MiniFooter = () => {
  const token = localStorage.getItem("token")


  return (
    <>
      {/*START YOUR JOURNEY SECTION START  */}
      <div style={JourneyBgImage} className="bg-[#0F0F0F] flex justify-center">
        {/* CONTENT SECTION  */}
        <div className="flex justify-center flex-col gap-5 px-8 py-[60px] sm:items-center sm:flex-row md:px-14 lg:px-24 w-[100%] xl:w-[94%]  2xl:w-[83%]">
          <div className="sm:w-[65%]">
            <h1 className="text-[30px] leading-[38px] font-[600] font-Urbanist text-white sm:text-[32px] sm:leading-[38px] md:text-[33px] md:leading-[38px]">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-[13.5px] font-Urbanist font-medium text-pretty text-[#b9b9b9] mt-2 sm:text-[13px] md:text-[13.5px]/5.5 ">
              Find the perfect investment, connect with top professionals, and
              close deals faster. Whether you're buying, selling, or looking for
              strategic partnerships, NewLista helps you navigate the commercial
              real estate market with ease.
            </p>
          </div>
          <div className="sm:w-[35%] flex sm:justify-end">
            <Link to={token ? "/admin/network" : "/login"}>
              <button className="px-5 font-Inter hover-btn-purple hover-btn py-3 rounded-[7px] cursor-pointer">
                <span>Join the Network</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/*START YOUR JOURNEY SECTION END  */}
    </>
  );
};

export default MiniFooter;
