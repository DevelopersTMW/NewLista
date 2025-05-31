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
        <div className="relative isolate px-6 py-24 sm:py-32 lg:px-8 flex flex-col justify-center items-center overflow-hidden">
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
            <h2 className="text-base/7 font-semibold text-indigo-600">
              Pricing
            </h2>
            <p className="mt-2 text-5xl font-Urbanist  tracking-tight text-balanc text-gray-900 sm:text-5xl font-[700]">
              Choose Your Plan & Grow Your Network
            </p>
          </div>
          <p className="mx-auto mt-6 max-w-3xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-md/8 font-Urbanist">
            Make offers, get insights, and build your real estate empire
          </p>
          <div className="flex bg-[#F3EEFF] w-max rounded-full justify-center items-center mt-10">
            <button
              onClick={() => setActiveTab("monthly")}
              className={`px-7 py-2.5 font-Urbanist font-[600] text-[14.5px]  rounded-full cursor-pointer ${
                activeTab === "monthly"
                  ? "bg-PurpleColor text-white"
                  : "bg-[#F3EEFF] text-black"
              }`}
            >
              MONTHLY
            </button>
            <button
              onClick={() => setActiveTab("yearly")}
              className={`px-8 py-2.5 font-Urbanist font-[600] text-[14.5px]  rounded-full cursor-pointer ${
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
          <div className=" mt-16 px-20 w-[85%]">
            {/* Cards */}
            <div className="flex gap-10 justify-center">
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
                    ButtonText={"Upgrade your plan"}
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
                    Name={"$299 USD "}
                    Desc={""}
                    benefits={premium}
                    ButtonText={"Upgrade your plan"}
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
      <section className="flex flex-col justify-center items-center gap-10 pt-12 pb-20">
        <div className="w-[84%]">
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
            Unlock Your Full Real Estate Potential
          </h1>
        </div>
        <div className="w-[84%] border-solid border-[1px] border-[#BBBBBB] flex rounded-[10px]">
          <div className="w-[25%] h-[90%]">
            <img className="" src={PricingSec2_1} alt="" />
          </div>
          <div className="flex flex-col justify-center items-center text-center px-20 gap-5 w-[50%] py-2">
            <h1 className="font-Urbanist font-[500] text-[20px] leading-[25px]">
              Not sure which plan is right for you? Contact Us for a
              personalized recommendation.{" "}
            </h1>
            <button className="bg-PurpleColor py-2 text-[16px] text-white font-Inter rounded-[8px] w-full">
              Contact Us
            </button>
          </div>
          <div className="w-[25%] h-[90%]">
            <img className="" src={HomeSec5_2} alt="" />
          </div>
        </div>
      </section>
      {/* SECTION 2 END  */}

      <Footer></Footer>
    </>
  );
};

export default Pricing;
