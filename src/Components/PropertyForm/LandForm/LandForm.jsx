import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";
import NumberInputs from "../../InputFields/NumberInputs";

const currencies = [
  "USD",
  "EUR",
  "CAD",
  "HKD",
  "ISK",
  "PHP",
  "DKK",
  "HUF",
  "CZK",
  "AUD",
  "RON",
  "SEK",
  "IDR",
  "INR",
  "BRL",
  "RUB",
  "HRK",
  "JPY",
  "THB",
  "CHF",
  "SGD",
  "PLN",
  "BGN",
  "TRY",
  "CNY",
  "NOK",
  "NZD",
  "ZAR",
  "MXN",
  "ILS",
  "GBP",
  "KRW",
  "MYR",
];

const LandForm = ({ propertyTypeName, register, watch, setValue }) => {

  const Check = watch("custom_fields.BuildingSize");
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
            labels={"Gross Scheduled Income (Annual)"}
            type={"text"}
            placeholder={"Ex: 10000"}
            name={"custom_fields.MonthlyRental"}
            watch={watch}
            setValue={setValue}
            register={register}
          ></NumberInputs>
        </span>
        <span className="">
          <NumberInputs
            labels={"Lot Size"}
            type={"text"}
            watch={watch}
            setValue={setValue}
            placeholder={`Enter size in ${Check ? Check : "Unit"} (e.g., 10,000)`}
            name={"custom_fields.BuildingSizeNumber"}
            register={register}
          ></NumberInputs>
        </span>
        <span className="">
          <Selection
            labels={"Units"}
            defaultOption={"Select"}
            Options={["Sq Ft", "Sq M"]}
            name={"custom_fields.BuildingSize"}
            value={watch("custom_fields.BuildingSize")}
            register={register}
          ></Selection>
        </span>
        <span className="w-[100%]">
          <Selection
            labels={"Fenced"}
            defaultOption={"Select"}
            Options={["Yes", "No"]}
            name={"custom_fields.Fenced"}
            register={register}
            value={watch("custom_fields.Fenced")}
          ></Selection>
        </span>
        <span className="w-[100%]">
          <Inputs
            labels={"Year Built"}
            type={"number"}
            watch={watch}
            setValue={setValue}
            placeholder={"2020"}
            name={"custom_fields.YearBuilt"}
            register={register}
            min={"1900"}
            onInput={(e) => {
              e.target.value = e.target.value.replace(/\D/g, "").slice(0, 4);
            }}
          ></Inputs>
        </span>
        <span className="w-[100%]">
          <Selection
            labels={"Land Scape"}
            defaultOption={"Select"}
            Options={["Sq Ft", "Sq M"]}
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
            Options={["Acres", "Hectacres"]}
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
