import React, { useState } from "react";
// Components
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PlansTabs from "../../Components/OurPlans/PlansTabs";
// IMAGE
import Shape from "../../assets/Shape.png";
import Shape2 from "../../assets/Shape2.png";
import PricingSec2_1 from "../../assets/PricingSec2.1.png";
import HomeSec5_2 from "../../assets/HomeSec5.2.png";
import { Link } from "react-router-dom";

const free = [
  {
    label: "View Featured Listings",
    checked: true,
  },
  {
    label: "Basic Listings",
    checked: true,
  },
  {
    label: "View Off-Market Listings",
    checked: false,
  },
  {
    label: "Create & Expand Investor Network",
    checked: false,
  },
  {
    label: "Send & Receive Messages",
    checked: false,
  },
  {
    label: "Analytics on Listings & Profile Views",
    checked: false,
  },
  {
    label: "Make Direct Offers on Properties",
    checked: false,
  },
  {
    label: "Exclusive Early-Access Listings",
    checked: false,
  },
  {
    label: "Premium Customer Support",
    checked: false,
  },
];
const premium = [
  {
    label: "View Featured Listings",
    checked: true,
  },
  {
    label: "Basic Listings",
    checked: true,
  },
  {
    label: "View Off-Market Listings",
    checked: true,
  },
  {
    label: "Create & Expand Investor Network",
    checked: true,
  },
  {
    label: "Send & Receive Messages",
    checked: true,
  },
  {
    label: "Analytics on Listings & Profile Views",
    checked: true,
  },
  {
    label: "Make Direct Offers on Properties",
    checked: true,
  },
  {
    label: "Exclusive Early-Access Listings",
    checked: true,
  },
  {
    label: "Premium Customer Support",
    checked: true,
  },
];

const Pricing = () => {
  const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
      <Navbar></Navbar>
      {/* PRICING SECTION  */}
      <section>
        <div className="relative isolate max-[350px]:px-4 px-6 py-24 sm:py-32 lg:px-8 flex flex-col justify-center items-center overflow-hidden">
          {/* SHAPE START  */}
          <div
            className="absolute left-[74%]  w-[50%]  inset-x-0 -top-[10%] -z-10 transform-gpu overflow-hidden  blur-3xl"
            aria-hidden="true"
          >
            <img src={Shape} alt="" />
          </div>
          <div
            className="absolute -left-[15%]  w-[50%]  inset-x-0 top-[25%] -z-10 transform-gpu overflow-hidden  blur-3xl"
            aria-hidden="true"
          >
            <img src={Shape2} alt="" />
          </div>
          {/* SHAPE END  */}
          {/* HEADER SECTION  */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="max-[350px]:text-[13.5px] text-base/7 font-semibold text-indigo-600">
              Pricing
            </h2>
            <p className="lg:mt-2 max-[350px]:text-[28px] max-[350px]:leading-[33px] text-[33px] leading-[36px] sm:leading-[45px] sm:text-[40px] font-Urbanist  tracking-tight text-balanc text-gray-900 lg:text-5xl font-[700]">
              Choose Your Plan & Grow Your Network
            </p>
          </div>
          <p className="mx-auto mt-4 lg:mt-6 max-w-3xl text-center text-[14.5px] sm:text-lg font-medium text-pretty text-gray-600 sm:text-md/8 font-Urbanist">
            Make offers, get insights, and build your real estate empire
          </p>
          <div className="flex bg-[#F3EEFF] w-max rounded-full justify-center items-center mt-7 sm:mt-10">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`max-[350px]:px-5.5 px-7 py-2.5 font-Urbanist font-[600] max-[350px]:text-[13px] text-[14.5px]  rounded-full cursor-pointer ${
                activeTab === "monthly"
                  ? "bg-PurpleColor text-white"
                  : "bg-[#F3EEFF] text-black"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`max-[350px]:px-5.5 px-8 py-2.5 font-Urbanist font-[600] max-[350px]:text-[13px]  text-[14.5px]  rounded-full cursor-pointer ${
                activeTab === "yearly"
                  ? "bg-PurpleColor text-white"
                  : "bg-[#F3EEFF] text-black"
              }`}
            >
              YEARLY
            </button>
          </div>
          {/* HEADER SECTION END  */}

          {/* TABS SEC START  */}
          <div className=" mt-16 max-[350px]:px-0  sm:px-5 lg:px-20 md:w-[100%] xl:w-[85%]">
            {/* Cards */}
            <div className="flex flex-col md:flex-row gap-10 justify-center">
              {activeTab === "monthly" && (
                <>
                  <PlansTabs
                    PlanCard={"Free"}
                    PlanNum={"Monthly"}
                    Name={"$0 USD"}
                    Desc={""}
                    benefits={free}
                    ButtonText={"Get started for free"}
                  />
                  <PlansTabs
                    PlanCard={"New Investor Pro Pricing (Save $61)"}
                    PlanNum={"Monthly"}
                    Name={"$29.99 USD"}
                    Desc={""}
                    benefits={premium}
                    ButtonText={"Subscribe Now"}
                  />
                </>
              )}
              {activeTab === "yearly" && (
                <>
                  <PlansTabs
                    PlanCard={"Free"}
                    PlanNum={"Yearly"}
                    Name={"$0 USD"}
                    Desc={""}
                    benefits={free}
                    ButtonText={"Get started for free"}
                  />
                  <PlansTabs
                    PlanCard={" New Investor Pro Pricing (Save $61)"}
                    PlanNum={"Yearly"}
                    Name={"$299.00 USD "}
                    Desc={""}
                    benefits={premium}
                    ButtonText={"Subscribe Now"}
                  />
                </>
              )}
            </div>
          </div>
          {/* TABS SEC END   */}
        </div>
      </section>
      {/* PRICING SECTION END */}

      {/* SECTION 2 START  */}

      <section className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-6 px-6 pb-16 sm:py-20 sm:pt-12 sm:gap-10 sm:pb-9 lg:pb-20 sm:px-8 md:px-0 md:items-center w-[100%] xl:w-[92%] 2xl:w-[85%]">
          <div className="md:w-[84%]">
            <h1 className=" text-center sm:text-start text-[30px]  leading-[38px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[48px]">
              Unlock Your Full Real Estate Potential
            </h1>
          </div>
          <div className="md:w-[84%] border-solid border-[1px] border-[#BBBBBB] flex flex-col items-center rounded-[10px] pb-7 pt-3 md:py-4 lg:py-5 xl:py-0  md:flex-row relative">
            <div className="w-[55%] sm:w-[35%]  md:w-[24%] sm:h-[90%]">
              <img className="" src={PricingSec2_1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-5 py-2 px-5 sm:px-10 md:w-[50%] md:px-3 lg:px-5 xl:px-20 ">
              <h1 className="font-Inter font-bold text-[20px] leading-[29px] sm:text-[24px] md:text-[20px] lg:text-[22px] sm:leading-[25px]">
                Not sure which plan is right for you? Contact Us for a
                personalized recommendation.{" "}
              </h1>
              <Link className="w-full" to={"/contact-us"}>
                <button className="hover-btn-purple hover-btn py-2 text-[16px] text-white font-Inter rounded-[8px] w-full cursor-pointer">
                  <span>Contact Us</span>
                </button>
              </Link>
            </div>
            <div className="hidden md:block  w-[25%] h-[90%]">
              <img className="" src={HomeSec5_2} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 END  */}

      <Footer></Footer>
    </>
  );
};

export default Pricing;
