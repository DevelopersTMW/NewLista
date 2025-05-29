import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";


const currencies = [
  "USD", "EUR", "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "AUD", "RON",
  "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "SGD", "PLN",
  "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "MXN", "ILS", "GBP", "KRW", "MYR"
];


const LandForm = ({ propertyTypeName, register }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Selection
              labels={"Currency"}
              defaultOption={null}
              Options={currencies}
              name={"Currency"}
              register={register}
               autoSelectFirst={false}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Monthly Rental*"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"Monthly-Rental"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Size"}
              defaultOption={"Select"}
               Options={["Sq Ft" , "Sq M"]}
              name={"BuildingSize"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"BuildingSizeNumber"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Fenced"}
              defaultOption={"Select"}
              Options={["Yes" , "No"]}
              name={"Fenced"}
              register={register}
            ></Selection>
          </span>
        </div>
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
              name={"YearBuild"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Land Scape"}
              defaultOption={"Select"}
               Options={["Sq Ft" , "Sq M"]}
              name={"LandScape"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"LandScapeNumber"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"‎"}
              type={"number"}
              placeholder={"Ex:10"}
              name={"LandScapeNumber2"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"‎"}
              defaultOption={"Select"}
              Options={["Acres" , "Hectacres"]}
              name={"LandScapeAcres"}
              register={register}
            ></Selection>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandForm;
