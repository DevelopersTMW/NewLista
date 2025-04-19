import React, { useState } from "react";
import PlansBg from "../../assets/PlansPage.jpg";
import PlansTabs from "../../Components/OurPlans/PlansTabs";
import { Link } from "react-router-dom";

// BACKGORUND
const Plans = {
  backgroundImage: `url(${PlansBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#00000085",
};

const OurPlans = () => {
  const [activeTab, setActiveTab] = useState("monthly");

  return (
    <>
      <div
        style={Plans}
        className="min-h-screen flex items-center justify-center py-28"
      >
        <div className="bg-[#ffffffa8]  w-[80%] rounded-2xl px-10 pt-10 pb-20">
          <div className="flex justify-between ">
            <div className="w-[50%]">
              <h1 className="font-Poppins font-[700] text-[44px]">Our Plans</h1>
              <p className="font-Urbanist text-Paracolor font-[600] text-[15px] pl-2">
                Unlock the full potential of real estate investing. Choose a
                plan that gives you the tools to list, connect, and close more
                deals—faster and smarter.
              </p>
            </div>
            <div className="w-[50%] flex flex-col justify-center items-end gap-6">
              <p className="font-Urbanist text-black font-[600] text-[15px] text-center mt-3">
                Already have an account?{" "}
                <Link to={"/"} className="font-bold">
                  Sign in now
                </Link>
              </p>
              <div className="flex bg-[#F3EEFF] w-max rounded-full">
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
            </div>
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
      </div>
    </>
  );
};

export default OurPlans;
