import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";

const RentailForm = ({ propertyTypeName }) => {
  const [units, setUnits] = useState([0]); // Each entry just needs a key

  const handleAddUnit = () => {
    setUnits([...units, units.length ]); // Add new key to trigger re-render

  };
  

  return (
    <form action="">
      <div className="flex flex-col gap-6">
        <div>
          <span>
            <h1 className="font-Urbanist font-[500] mb-3 text-[#666666]">
              Basic Information
            </h1>
          </span>
          <Inputs
            labels={`Name of Retail`}
            type={"text"}
            placeholder={"Ex:Modern Building 2021"}
          ></Inputs>
        </div>
        <div>
          <Inputs
            labels={"Address"}
            type={"text"}
            placeholder={"Ex: Doral Lane 1110"}
          ></Inputs>
        </div>
        <div className="flex justify-between gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"City"}
              type={"text"}
              placeholder={"Ex: Houston"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"State"}
              type={"text"}
              placeholder={"Ex: Texas"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Zip Code"}
              type={"number"}
              placeholder={"Ex: 77073"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Size"}
              defaultOption={"United States"}
            ></Selection>
          </span>
        </div>
      </div>
      <div className="border-t-[1px] border-solid border-[#999999] my-10">
        <div className="pt-8 flex flex-col gap-8">
          <span>
            <h1 className="font-Urbanist font-[500] -mb-3 text-[#666666]">
              Custom Fields
            </h1>
          </span>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Selection labels={"Currency"} defaultOption={"USD"}></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Monthly Rental*"}
                type={"text"}
                placeholder={"Ex: 10000"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Building Size"}
                defaultOption={"Sq Ft"}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"SPACE"}
                type={"text"}
                placeholder={"Ex: 10000"}
              ></Inputs>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Inputs
                labels={"Building Levels"}
                type={"text"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Year Built"}
                type={"number"}
                placeholder={"2020"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Land Scape"}
                defaultOption={"Multiple"}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Spaces"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Selection
                labels={"Outdoor Signage Available"}
                defaultOption={"Yes"}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Parking Spaces"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Type of Property"}
                defaultOption={"Choose Your Property Type"}
              ></Selection>
            </span>
            <span className="w-[100%]">
             <Selection
                labels={"Sub Property type"}
                defaultOption={"Single Tenant"}
              ></Selection>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Inputs
                labels={"Number of Units"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Building Class"}
                defaultOption={"A"}
              ></Selection>
            </span>
            <span className="w-[100%]">
             <Inputs
                labels={"Percentage Leased (%)"}
                type={"number"}
                placeholder={"Ex:75"}
              ></Inputs>
            </span>
          </div>
                    <div className="flex gap-8">
            <span className="w-[100%]">
                <Selection
                labels={"Lease Type (N=Taxes, N=Insurance N=Maintenance)"}
                defaultOption={"Single Net N "}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Status"}
                defaultOption={"Active"}
              ></Selection>
            </span>
          </div>
        </div>
      </div>
      <div className="border-dashed  border-[#BBBBBB] border-y-[1px] py-7 flex-col gap-4 flex">
        {/* Message */}
        <div className="">
          <label
            for="text"
            className="block mb-1 text-[15px] font-[700] text-[#222222]"
          >
            Property Highlights
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
        <div>
          <label
            for="text"
            className="block mb-1 text-[15px] font-[700] text-[#222222]"
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
        <p className="font-Urbanist text-[15px] font-semibold text-Paracolor -mt-[15px]">
          Note: Off-the-market properties will not be shown to free users.
        </p>
      </div>

      {/* IMAGES SECTION  */}
      <div>
        <div className="flex flex-col gap-3 py-7 w-[70%] items-start rounded-[5px]">
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Main Image
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Additional Image 1
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Additional Image 2
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Additional Image 3
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Additional Image 4
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
          <div>
            <label
              class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
              for="file_input"
            >
              Additional Image 5
            </label>
            <div className="bg-[#F8FCFF] py-2 px-3">
              <input
                className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                type="file"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <div className="flex justify-between items-center w-[70%]">
          <h1 className="font-Urbanist font-[600] text-[18px] text-[#666666]">
            Unit Details
          </h1>
          <button
            onClick={handleAddUnit}
            className=" bg-PurpleColor text-[20px] pb-1 text-white px-2  rounded"
          >
            +
          </button>
        </div>
        {units.map((_, index) => (
          <UnitDetailsForm key={index} />
        ))}
      </div>
      {/* Send Message Button */}
      <div className="mt-1 flex justify-end gap-5">
        <button className="bg-transparent border-[#6C757D] cursor-pointer text-[17px] border-solid border-[2px] font-[600] px-6 py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]">
          Save Draft
        </button>
        <button className="bg-PurpleColor font-[600] cursor-pointer text-[17px] px-6 py-2.5 text-white font-Urbanist rounded-[6px]">
          Submit Listing
        </button>
      </div>
    </form>
  );
};

export default RentailForm;
