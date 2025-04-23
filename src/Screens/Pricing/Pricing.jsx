import React, { useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PlansTabs from "../../Components/OurPlans/PlansTabs";

const Pricing = () => {

    const [activeTab, setActiveTab] = useState("monthly");
  return (
    <>
      <Navbar></Navbar>
        <div class="relative isolate bg-white px-6 py-24 sm:py-32 lg:px-8 flex flex-col justify-center items-center">
          <div
            class="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
            aria-hidden="true"
          >
            {/* <div
              class="mx-auto aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
              style={{clipPathpolygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)}}
            ></div> */}
          </div>
          <div class="mx-auto max-w-4xl text-center">
            <h2 class="text-base/7 font-semibold text-indigo-600">Pricing</h2>
            <p class="mt-2 text-5xl font-Urbanist font-semibold tracking-tight text-balanc text-gray-900 sm:text-6xl">
            Choose Your Plan & Grow Your Network
            </p>
            
          </div>
          <p class="mx-auto mt-6 max-w-2xl text-center text-lg font-medium text-pretty text-gray-600 sm:text-md/8 font-Urbanist">
          Maximize your opportunities, connect with top investors, and access exclusive deals. Choose a plan that fits your needs.
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
          
          {/* TABS SEC START  */}
          <div className=" mt-16">
            {/* Cards */}
            <div className="flex gap-10 justify-center">
              {activeTab === "monthly" && (
                <>
                  <PlansTabs PlanCard={"Free"} PlanNum={"Monthly"} Name={"$1 USD"}  Desc={"Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui."} ButtonText={"Get started for free"} />
                  <PlansTabs PlanCard={"Premium"} PlanNum={"Monthly"} Name={"$1 USD"} Desc={"Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui."} ButtonText={"Upgrade your plan"} />
                </>
              )}
              {activeTab === "yearly" && (
                <>
                 <PlansTabs PlanCard={"Free"} PlanNum={"Yearly"} Name={"$10 USD"} Desc={"Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui."} ButtonText={"Get started for free"} />
                  <PlansTabs PlanCard={"Premium"} PlanNum={"Yearly"} Name={"$10 USD"} Desc={"Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui."} ButtonText={"Upgrade your plan"} />
                </>
              )}
            </div>
          </div>
          {/* TABS SEC END   */}
        </div>
      <Footer></Footer>
    </>
  );
};

export default Pricing;
