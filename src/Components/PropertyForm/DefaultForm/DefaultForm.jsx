import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
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
const DefaultForm = ({ propertyTypeName, register }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mb-10 bg-[#fcfcfc] py-8">
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Selection
              labels={"Currency"}
              Options={currencies}
              defaultOption={"Select"}
              name={"Currency"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Monthly Rental*"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"MonthlyRental"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Size"}
              defaultOption={"Select"}
              Options={["Sq Ft", "Sq M"]}
              name={"BuildingSize"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"SPACE"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"BuildingSizeNumber"}
              register={register}
            ></Inputs>
          </span>
        </div>
        <div className="flex items-end gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Building Levels"}
              type={"text"}
              placeholder={"Ex:1"}
              name={"Building Levels"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
              name={"YearBuilt"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Tenancy"}
              defaultOption={"Select"}
              Options={["Multiple" , "Single"]}
              name={"Tenancy"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Parking Spaces"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"ParkingSpace"}
              register={register}
            ></Inputs>
          </span>
        </div>
        <div className="flex flex-wrap items-end gap-8">
          <span className="w-[50%] md:w-[100%]">
            <Inputs
              labels={"CAM (Common Area Maint..) Cost"}
              type={"number"}
              placeholder={"Ex: $1.00"}
              name={"CAM"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Number of Units"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"NumberOfUnits"}
              register={register}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection
              labels={"Building Class"}
              defaultOption={"Select"}
              Options={["A" , "B" , "C" , "D"]}
              name={"BuildingClass"}
              register={register}
            ></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Percentage Leased (%)"}
              type={"number"}
              placeholder={"Ex: 75"}
              name={"PercentageLeased"}
              register={register}
            ></Inputs>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DefaultForm;
