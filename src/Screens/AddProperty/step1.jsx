import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import step1Schema from "./step1schema.js";
import Inputs from "../../Components/InputFields/Inputs.jsx";
import Selection from "../../Components/InputFields/Selection.jsx";
import DefaultForm from "../../Components/PropertyForm/DefaultForm/DefaultForm.jsx";
import { Switch, Textarea } from "@headlessui/react";
import Checkboxs from "../../Components/InputFields/Checkboxs.jsx";
import { AlertCircle } from "lucide-react";
import RentailForm from "../../Components/PropertyForm/RentailForm/RentailForm.jsx";
import LandForm from "../../Components/PropertyForm/LandForm/LandForm.jsx";
import WareHouseForm from "../../Components/PropertyForm/WareHouseForm/WareHouseForm.jsx";
import MapForm from "../../Components/Map/Map.jsx";
import ComboboxSelector from "../../Components/ComboboxSelector/ComboboxSelector.jsx";
import RadioButton from "../../Components/InputFields/RadioButton.jsx";

const propertyTypes = [
  "Retail For Lease",
  "Office For Lease",
  "Warehouse For Lease",
  "Land For Lease",
  "Condominium Building",
  "Apartments or Flats",
  "Mobile Home Parks",
  "Storage Facility",
  "Churches",
  "Mixed Use Properties",
  "Group of Townhomes",
  "Medical Building",
  "School Building",
  "Other Building",
];

const Step1 = ({ onNext, defaultValues }) => {
  const { register, watch } = useForm();

  // CHECK RADIO VALUE
  const PropertyType = watch("propertyType");
  // PROPERTY TYPES
  const [propertyType, setPropertyType] = useState("");

  const renderFormFields = () => {
    switch (propertyType) {
      case "Retail For Lease":
        return <RentailForm propertyTypeName={propertyType} />;
      case "Warehouse For Lease":
        return <WareHouseForm propertyTypeName={propertyType} />;
      case "Land For Lease":
        return <LandForm propertyTypeName={propertyType} />;
      default:
        return <DefaultForm propertyTypeName={propertyType} />;
    }
  };

  return (
    <>
      <div>
        <form className="">
          <div className="flex gap-5 pb-5">
            <RadioButton
              register={register}
              name="propertyType"
              label={"For Sale"}
              DefaultCheck={true}
            ></RadioButton>
            <RadioButton
              register={register}
              name="propertyType"
              label={"For Lease"}
            ></RadioButton>
            <RadioButton
              register={register}
              name="propertyType"
              label={"Both (For Sale & For Lease)"}
            ></RadioButton>
          </div>
          <div className="border border-[#ececec] rounded-2xl px-5 py-8">
            {/* PROPERTY TYPE  */}
            <div className="flex flex-col gap-6 pb-10">
              <div className="flex gap-8">
                <span className="w-[100%]">
                  <Selection
                    defaultOption={"Select Your Property"}
                    labels={"Property Type"}
                    Options={propertyTypes}
                    values={propertyType}
                    onchange={(e) => setPropertyType(e.target.value)}
                  ></Selection>
                </span>
                <span className="w-[100%]">
                  <Selection
                    defaultOption={"Select Status"}
                    labels={"Listing Status"}
                    Options={[
                      "Available",
                      "Withdraw",
                      "Pending",
                      "Loss",
                      "Lease",
                    ]}
                  ></Selection>
                </span>
              </div>
              <div className="flex justify-between flex-wrap gap-8">
                {(PropertyType === "For Sale" ||
                  PropertyType === "Both (For Sale & For Lease)") && (
                  <span className="w-[48.5%]">
                    <Inputs
                      labels={"Sale Price"}
                      type={"number"}
                      placeholder={"Enter Price"}
                    ></Inputs>
                  </span>
                )}
                {(PropertyType === "For Lease" ||
                  PropertyType === "Both (For Sale & For Lease)") && (
                  <span className="w-[48.5%] flex gap-4">
                    <span className="w-[100%]">
                      <Inputs
                        labels={"Lease Rate"}
                        type={"number"}
                        placeholder={"Enter Price"}
                      ></Inputs>
                    </span>
                    <span className="w-[100%]">
                      <Selection
                        labels={"Space"}
                        defaultOption={"Per SF/Month"}
                        Options={["Per SF/Year", "Per Month", "Per Year"]}
                      ></Selection>
                    </span>
                  </span>
                )}
                <span className="w-[48.5%]">
                  <Inputs
                    labels={"Building Size (sq ft)"}
                    type={"number"}
                    placeholder={"Total Building Square Footage"}
                  ></Inputs>
                </span>
              </div>
              {(PropertyType === "For Lease" ||
                PropertyType === "Both (For Sale & For Lease)") && (
                <div className="flex gap-2 flex-col">
                  <label className="block mb-1 font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                    Lease Type
                  </label>
                  <span className="flex gap-4 flex-wrap">
                    <RadioButton
                      label={"N (Single Net)"}
                      register={register}
                      name="propertyTypes"
                    ></RadioButton>
                    <RadioButton
                      label={"NN (Double Net)"}
                      register={register}
                      name="propertyTypes"
                    ></RadioButton>
                    <RadioButton
                      label={"NNN (Triple Net)"}
                      register={register}
                      name="propertyTypes"
                    ></RadioButton>
                    <RadioButton
                      label={"None"}
                      register={register}
                      name="propertyTypes"
                    ></RadioButton>
                  </span>
                </div>
              )}
            </div>

            {/* CUSTOM FIELD  */}
            {propertyType && renderFormFields()}

            {/* PROPERTY ADDRESS SECTION  */}
            <div className="flex flex-col gap-6 py-8 border-[#BBBBBB] border-t-[1px] ">
              <div>
                <Inputs
                  labels={"Property Address"}
                  type={"text"}
                  placeholder={"Enter Full Address"}
                ></Inputs>
              </div>
              <div className="flex justify-between gap-8">
                <span className="w-[100%]">
                  <Inputs
                    labels={"City"}
                    type={"text"}
                    placeholder={"City"}
                  ></Inputs>
                </span>
                <span className="w-[100%]">
                  <Inputs
                    labels={"State / Province"}
                    type={"text"}
                    placeholder={"State / Province"}
                  ></Inputs>
                </span>
                <span className="w-[100%]">
                  <Inputs
                    labels={"Zip /Postal Code"}
                    type={"number"}
                    placeholder={"Enter Zip /Postal Codes"}
                  ></Inputs>
                </span>
              </div>
            </div>

            {/* MAP SECTION  */}
            {/* <div className="border-dashed  border-[#BBBBBB] py-7 border-y-[1px]  ">
              <iframe
                src="https://www.google.com/maps?q=404 K St, Anchorage, Alaska, 99501, United States
                &output=embed"
                className="w-full h-[400px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div> */}

            {/* DESCRIPTION SECTION  */}
            <div className="border-b-[1px]  border-[#BBBBBB] py-7 flex-col gap-4 flex">
              {/* Message */}
              <div>
                <label
                  htmlFor="text"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  Description
                </label>
                <Textarea
                  className={
                    "bg-[#F3EEFF] border-[#F3EEFF] text-[#868686] font-[500] font-Urbanist text-[15px] w-[100%]  px-4 rounded-[6px] outline-none py-5"
                  }
                  rows={4}
                  name="description"
                  placeholder="Describe the property, its features, location advantages, and any unique selling points."
                ></Textarea>
              </div>
            </div>

            {/* SWITCH  */}
            <div className="flex flex-col py-5 gap-2">
              <div>
                <h1 className="font-Urbanist font-[600] text-[17px] text-PurpleColor  ">
                  Listing Visibility Options
                </h1>
              </div>
              <div className="flex  items-center gap-3">
                <Switch className="group inline-flex h-6.5 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>

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
                    Featured listings appear at the top of search results and
                    get more visibility
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-3">
                <Switch className="group inline-flex h-6.5 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>

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
                    Only visible to Professional users. Free users will see a
                    blurred version.
                  </p>
                </div>
              </div>
              <div className="flex  items-center gap-3">
                <Switch className="group inline-flex h-6.5 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>

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
                <Switch className="group inline-flex h-6.5 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>

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
                <Switch className="group inline-flex h-6.5 w-12 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>

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
          </div>

          {/* Send Message Button */}
          <div className="mt-1 flex justify-end gap-5 py-5">
            <button
              className="bg-PurpleColor hover-btn hover-btn-purple font-[600] cursor-pointer text-[17px] px-6 py-3 text-white font-Urbanist rounded-[6px]"
              onClick={onNext}
            >
              <span>Continue To Photo And Media</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
