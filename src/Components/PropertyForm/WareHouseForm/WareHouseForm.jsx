import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";

const WareHouseForm = ({ propertyTypeName }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="">
        <div className="flex flex-col gap-8">
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
                labels={"‎"}
                type={"text"}
                placeholder={"Ex: 10000"}
              ></Inputs>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Inputs
                labels={"Ceiling Height (FT/M)"}
                type={"number"}
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
                defaultOption={"Sq Ft"}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"‎"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Selection labels={"‎"} defaultOption={"Acres"}></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"‎"}
                type={"number"}
                placeholder={"Ex:10"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Overhead Doors"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Parking Space"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="w-[100%]">
              <Inputs
                labels={"Number of Docks"}
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
                labels={"Ground Level Docks"}
                type={"number"}
                placeholder={"Ex:75"}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"High Level Docks"}
                type={"number"}
                placeholder={"Ex:1"}
              ></Inputs>
            </span>
          </div>
        </div>
      </div>
      <div className="">
        <div className="pt-8 flex gap-4 flex-col">
          <span>
            <h1 className="font-Urbanist font-[500] -mb-3 text-[#242424]">
              Electrical Power
            </h1>
          </span>
          <div className="flex gap-5">
            <Checkboxs labels={"Phase 3"}></Checkboxs>
            <Checkboxs labels={"220V"}></Checkboxs>
            <Checkboxs labels={"100 / 127V"}></Checkboxs>
            <Checkboxs labels={"230V"}></Checkboxs>
            <Checkboxs labels={"110 / 120V "}></Checkboxs>
            <Checkboxs labels={"240V"}></Checkboxs>
            <Checkboxs labels={"380V"}></Checkboxs>
            <Checkboxs labels={"480V"}></Checkboxs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseForm;
