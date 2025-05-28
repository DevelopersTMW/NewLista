import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Switch, Textarea } from "@headlessui/react";
import { AlertCircle } from "lucide-react";

import { yupResolver } from "@hookform/resolvers/yup";
import Inputs from "../../Components/InputFields/Inputs.jsx";
import Selection from "../../Components/InputFields/Selection.jsx";
import DefaultForm from "../../Components/PropertyForm/DefaultForm/DefaultForm.jsx";
import RentailForm from "../../Components/PropertyForm/RentailForm/RentailForm.jsx";
import LandForm from "../../Components/PropertyForm/LandForm/LandForm.jsx";
import WareHouseForm from "../../Components/PropertyForm/WareHouseForm/WareHouseForm.jsx";
import RadioButton from "../../Components/InputFields/RadioButton.jsx";

// SCHEMA
import PropertyDetailSchema from "../../../Schema/AddPropertySchema/PropertyDetailSchema.js";
import AddressFields from "./PropertyDetailSections/AddressFields.jsx";
import ListingVisibilitySwitches from "./PropertyDetailSections/ListingVisibilitySwitches.jsx";

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

            <AddressFields />

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
             
            </div>

            <ListingVisibilitySwitches />
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
