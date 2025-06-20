import React from "react";
import CheckIcon from "../../../assets/Icon.png";
import { Check, X } from "lucide-react";
import PlansTabs from "../../../Components/OurPlans/PlansTabs";

const benefits = [
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
    label: "Send and receive messages directly through your private dashboard",
    checked: true,
  },
  {
    label: "Analytics on Listings & Profile Views",
    checked: true,
  },
  {
    label: "Make Direct Property Offers and Receive Instant Notifications",
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

const SubscriptionSetting = () => {
  return (
    <>
      {/* HEADING SECTION  */}
      <section className="p flex justify-between items-start mt-8 pb-5">
        {/* PAGE TITTLE  */}
        <div className="flex flex-co flex-wrap max-[350px]:gap-3 gap-5 sm:flex-row justify-between items-center">
          <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
            Current Plan
          </h1>
        </div>
      </section>

      <section className="">
        <div className="flex flex-col  gap-2">
          <div className="bg-[#ffffff] px-5 py-4 rounded-[10px] flex justify-between w-[75%]">
            <div>
              <h2 className="font-Urbanist text-[#222222] text-[24px] font-[700]">
                Professional Plan
              </h2>
              <p className="font-Urbanist text-Paracolor text-[17px] font-[600]">
                Billed monthly
              </p>
            </div>
            <div className="text-end">
              <h1 className="font-Inter text-[#222222] text-[24px] font-[700]">
                $49.99/mo
              </h1>
              <p className="font-Urbanist text-lime-600 font-semibold flex items-center gap-1 justify-end">
                Active
              </p>
            </div>
          </div>{" "}
          <div className="flex gap-10 mt-7">
            <div className="w-[43%]">
              {/* <PlansTabs
                PlanCard={"New Investor Pro Pricing (Save $61)"}
                PlanNum={"Monthly"}
                Name={"$29.99 USD"}
                Desc={
                  "Lorem ipsum dolor sit amet consectetur. Nunc et pulvinar dui."
                }
                benefits={benefits}
                ButtonText={"Subscribe Now"}
                buttonlink={"/premiummontlhy"}
              /> */}
            </div>
          </div>
          {/* PRICING CARD  */}
        </div>
      </section>
    </>
  );
};

export default SubscriptionSetting;
