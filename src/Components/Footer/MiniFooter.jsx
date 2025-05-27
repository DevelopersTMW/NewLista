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
  return (
    <>
      {/*START YOUR JOURNEY SECTION START  */}
      <div style={JourneyBgImage} className="bg-[#0F0F0F]">
        {/* CONTENT SECTION  */}
        <div className="flex justify-center items-center px-24 py-[60px]">
          <div className="w-[65%]">
            <h1 className="text-7xl font-[600] font-Urbanist text-white sm:text-[35px] leading-[48px]">
              Start Your Real Estate Journey Today
            </h1>
            <p className="text-md font-Urbanist font-medium text-pretty text-[#999999] mt-2 sm:text-[14px]/5.5 ">
              Find the perfect investment, connect with top professionals, and
              close deals faster. Whether you're buying, selling, or looking for
              strategic partnerships, NewLista helps you navigate the commercial
              real estate market with ease.
            </p>
          </div>
          <div className="w-[35%] flex justify-end">
            <Link to={"/admin/network"}>
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
