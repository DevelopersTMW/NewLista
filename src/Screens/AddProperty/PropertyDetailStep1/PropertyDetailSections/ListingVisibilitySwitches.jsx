import { Switch } from "@headlessui/react";
import { AlertCircle } from "lucide-react";
import React from "react";
import Switches from "../../../../Components/InputFields/Switch";
import { Controller } from "react-hook-form";

const ListingVisibilitySwitches = ({ register, controls }) => {
  return (
    <>
      <div className="flex flex-col py-5 gap-2">
        <div>
          <h1 className="font-Urbanist font-[600] text-[17px] text-PurpleColor  ">
            Listing Visibility Options
          </h1>
        </div>
        <div className="flex  items-center gap-3">
          <Controller
            name="FeaturedListing"
            control={controls}
            defaultValue={false}
            render={({ field }) => <Switches {...field} />}
          />
          <div className="flex flex-col gap-0.5">
            <span className="flex gap-4">
              <h1 className="block font-Urbanist text-[17px] font-[500] text-[#000000]">
                Featured Listing
              </h1>
              <button className="border-PurpleColor border  font-[600] cursor-pointer text-[13px] w-max px-3 flex justify-center items-center text-PurpleColor font-Urbanist rounded-[14px] text-center">
                Free
              </button>
            </span>
            <p className="block font-Urbanist text-[14.5px] font-[400] text-[#222222]">
              Featured listings appear at the top of search results and get more
              visibility
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <Controller
            name="Off-the-MarketListing"
            control={controls}
            defaultValue={false}
            render={({ field }) => <Switches {...field} />}
          />
          <div className="flex flex-col gap-0.5">
            <span className="flex gap-4">
              <h1 className="block font-Urbanist text-[17px] font-[500] text-[#000000]">
                Off-the-Market Listing
              </h1>
              <button className="border-PurpleColor border  font-[600] cursor-pointer text-[13px] w-max px-3 flex justify-center items-center text-PurpleColor font-Urbanist rounded-[14px] text-center">
                Premium
              </button>
            </span>
            <p className="block font-Urbanist text-[14.5px] font-[400] text-[#222222]">
              Only visible to Professional users. Free users will see a blurred
              version.
            </p>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <Controller
            name="OwnerFinancing"
            control={controls}
            defaultValue={false}
            render={({ field }) => <Switches {...field} />}
          />

          <div className="flex flex-co items-center gap-0.5">
            <span className="flex gap-4">
              <h1 className="block font-Urbanist text-[17px] font-[500] text-[#000000]">
                Owner Financing
              </h1>
            </span>
            <button className="border-PurpleColor ml-2 border  font-[600] cursor-pointer text-[13px] w-max px-3 flex justify-center items-center text-PurpleColor font-Urbanist rounded-[14px] text-center">
              Free
            </button>
          </div>
        </div>
      </div>

      {/* Contact Visibility  */}
      <div className="flex flex-col gap-3 mb-7">
        <div>
          <h1 className="font-Urbanist font-[600] text-[17px] text-PurpleColor  ">
            Contact Visibility
          </h1>
        </div>
        <div className="flex  items-center gap-3">
          <Controller
            name="ShowNumber"
            control={controls}
            defaultValue={false}
            render={({ field }) => <Switches {...field} />}
          />

          <div className="flex flex-co items-center gap-0.5">
            <span className="flex gap-4">
              <h1 className="block font-Urbanist text-[17px] font-[500] text-[#000000]">
                Show my phone number on this listing
              </h1>
            </span>
            <button className="border-PurpleColor ml-2 border  font-[600] cursor-pointer text-[13px] w-max px-3 flex justify-center items-center text-PurpleColor font-Urbanist rounded-[14px] text-center">
              Premium
            </button>
          </div>
        </div>
        <div className="flex  items-center gap-3">
          <Controller
            name="ShowEmail"
            control={controls}
            defaultValue={false}
            render={({ field }) => <Switches {...field} />}
          />

          <div className="flex flex-co items-center gap-0.5">
            <span className="flex gap-4">
              <h1 className="block font-Urbanist text-[17px] font-[500] text-[#000000]">
                Show my email address on this listing
              </h1>
            </span>
            <button className="border-PurpleColor ml-2 border  font-[600] cursor-pointer text-[13px] w-max px-3 flex justify-center items-center text-PurpleColor font-Urbanist rounded-[14px] text-center">
              Premium
            </button>
          </div>
        </div>
      </div>

      <div>
        <div
          variant="outline"
          className="bg-amber-50 border border-amber-200  pl-5 pr-8 py-6 w-max rounded-[8px] flex gap-2 "
        >
          <AlertCircle className="h-5 w-5 mt-1" />

          <div className="flex flex-col ">
            <h1 className="block font-Urbanist text-[19px] font-[500] text-amber-800">
              Premium features require a subscription
            </h1>
            <div className="block font-Urbanist text-[15px] font-[500] text-amber-800">
              Upgrade to a premium subscription to access featured and
              off-the-market listings.
              <button
                variant="outline"
                size="sm"
                className="ml-2 bg-amber-100 hover:bg-amber-200 border-amber-300 border px-4 rounded-[8px] py-2"
              >
                Upgrade Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingVisibilitySwitches;
