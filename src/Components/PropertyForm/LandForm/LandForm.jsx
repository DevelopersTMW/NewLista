import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";
import NumberInputs from "../../InputFields/NumberInputs";


const currencies = [
  "USD", "EUR", "CAD", "HKD", "ISK", "PHP", "DKK", "HUF", "CZK", "AUD", "RON",
  "SEK", "IDR", "INR", "BRL", "RUB", "HRK", "JPY", "THB", "CHF", "SGD", "PLN",
  "BGN", "TRY", "CNY", "NOK", "NZD", "ZAR", "MXN", "ILS", "GBP", "KRW", "MYR"
];


const LandForm = ({ propertyTypeName, register , watch , setValue }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-8">
          <span className="w-[100%]">
            <Selection
              labels={"Currency"}
              defaultOption={null}
              Options={currencies}
              name={"custom_fields.Currency"}
              register={register}
              value={watch("custom_fields.Currency")}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <NumberInputs
              labels={"Gross Scheduled Income"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"custom_fields.MonthlyRental"}
              watch={watch} 

              setValue={setValue}
              register={register}
            ></NumberInputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Lot Size"}
              defaultOption={"Select"}
               Options={["Sq Ft" , "Sq M"]}
              name={"custom_fields.BuildingSize"}
              register={register}
              value={watch("custom_fields.BuildingSize")}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <NumberInputs
              labels={"‎"}
              type={"text"}
              placeholder={"Ex: 10000"}
              watch={watch} 
              setValue={setValue}
              name={"custom_fields.BuildingSizeNumber"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Fenced"}
              defaultOption={"Select"}
              Options={["Yes" , "No"]}
              name={"custom_fields.Fenced"}
              register={register}
              value={watch("custom_fields.Fenced")}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
              watch={watch} 
              setValue={setValue}
              name={"custom_fields.YearBuilt"}
              register={register}
              value={watch("custom_fields.YearBuilt")}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Land Scape"}
              defaultOption={"Select"}
               Options={["Sq Ft" , "Sq M"]}
              name={"custom_fields.LandScape"}
              register={register}
              value={watch("custom_fields.LandScape")}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <NumberInputs
              labels={"‎"}
              type={"number"}
              placeholder={"Ex:1"}
              watch={watch} 
              setValue={setValue}
              name={"custom_fields.LandScapeNumber"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="w-[100%]">
            <NumberInputs
              labels={"‎"}
              type={"number"}
              placeholder={"Ex:10"}
              watch={watch} 
              setValue={setValue}
              name={"custom_fields.LandScapeNumber2"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"‎"}
              defaultOption={"Select"}
              Options={["Acres" , "Hectacres"]}
              name={"custom_fields.LandScapeAcres"}
              register={register}
              value={watch("custom_fields.LandScapeAcres")}
            ></Selection>
          </span>
      </div>
    </div>
  );
};

export default LandForm;
