import React from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { Calendar, DollarSign, MapPin, Phone } from "lucide-react";

const ProfileModal = ({
  isOpen,
  onClose,
  InvesImage,
  InvesUserName,
  Invessubtitle,
}) => {
  if (!isOpen) return null;

  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <DialogBackdrop className="fixed inset-0 bg-[#000000d7] bg-opacity-50" />
      <div className="fixed inset-0 z-50 flex items-start justify-center min-[380px]:p-4 min-[380px]:my-[0.5%]  overflow-y-auto  min-[380px]:rounded-lg ">
        <DialogPanel className="bg-white shadow-xl sm:max-w-md  md:max-w-lg overflow-y-auto 2xl:max-w-xl w-full relative  min-[380px]:rounded-lg ">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 text-[18px] font-semibold cursor-pointer text-black z-50 hover:text-black"
          >
            ✕
          </button>

          {/* Header Image Area */}
          <div className="bg-gray-100 h-36 flex justify-center items-center relative rounded-t-[10px]">
            <div className="absolute left-6 bottom-[-40px] w-[105px] h-[105px] bg-gray-300 rounded-full border-4 border-PurpleColor shadow-md">
              <img
                className="rounded-full h-full object-cover"
                src={InvesImage}
                alt=""
              />
            </div>
            <div className="text-gray-400">📷</div>
          </div>

          {/* Content */}
          <div className="px-6 pt-16 pb-6">
            {" "}
            {/* increased top padding here */}
            {/* Heading */}
            <h1 className="font-Urbanist text-[23px] mb-3 font-semibold">
              Profile Details
            </h1>
            {/* Basic Info */}
            <h2 className="text-2xl font-bold font-Urbanist">
              {InvesUserName}
            </h2>
            <p className="text-gray-600 font-Urbanist font-[500]">
              {Invessubtitle}
            </p>
            <p className="text-sm text-gray-500 font-Urbanist font-[500]">
              Johnson Real Estate Group
            </p>
            {/* Info Grid */}
            <div className="mt-4 space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Phone className="size-5 text-PurpleColor" />
                <span className="font-Urbanist font-semibold text-[16px] text-Paracolor">
                  +1 (555) 123-4567
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="size-5 text-PurpleColor" />
                <span className="font-Urbanist font-semibold text-[16px] text-Paracolor">
                  Joined 2023-01-15
                </span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="size-5 text-PurpleColor" />
                <span className="font-Urbanist font-semibold text-[16px] text-Paracolor">
                  New York, NY
                </span>
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="size-5 text-PurpleColor" />
                <span className="font-Urbanist font-semibold text-[16px] text-Paracolor">
                  $500K - $2M
                </span>
              </div>
            </div>
            {/* About */}
            <div className="mt-4 pt-4 border-t border-[#dfdfdf]">
              <h3 className="text-[20px] font-bold font-Urbanist">About Us</h3>
              <p className="text-Paracolor font-Urbanist font-[500] text-[15px] mt-1">
                Experienced real estate investor specializing in commercial
                properties and multi-family residential units.
              </p>
            </div>
            {/* Property Interests */}
            <div>
              <h3 className="text-[18px] font-bold mt-3 font-Urbanist">
                Property Interests
              </h3>
              <div className="flex gap-2 mt-2 flex-wrap">
                <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[12.5px] rounded-full w-max">
                  15 Units
                </span>
                <span className="bg-[#E3E3E3] text-Paracolor font-semibold font-Inter px-3 py-1 text-[12.5px] rounded-full w-max">
                  Office Space
                </span>
              </div>
            </div>
            {/* Message Button */}
            <div className="mt-7">
              <button className="font-Inter text-[#fff] font-[500] text-[15px] px-6 py-2 rounded-full border-2 border-PurpleColor bg-PurpleColor hover:opacity-90 transition">
                Message
              </button>
            </div>
          </div>
        </DialogPanel>
      </div>
    </Dialog>
  );
};

export default ProfileModal;
