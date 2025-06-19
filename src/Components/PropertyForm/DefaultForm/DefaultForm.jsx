import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
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
const DefaultForm = ({ propertyTypeName, register }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mb-10 bg-[#fcfcfc] py-8">
      <div className="flex flex-col gap-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 items-end md:gap-8">
          <span className="">
            <Selection
              labels={"Currency"}
              Options={currencies}
              defaultOption={"Select"}
              name={"custom_fields.Currency"}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Monthly Rental*"}
              type={"number"}
              placeholder={"Ex: 10000"}
              name={"custom_fields.MonthlyRental"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <Selection
              labels={"Building Size"}
              defaultOption={"Select"}
              Options={["Sq Ft", "Sq M"]}
              name={"custom_fields.BuildingSize"}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"‎"}
              type={"text"}
              placeholder={"Ex: 10000"}
              name={"custom_fields.BuildingSizeNumber"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <NumberInputs
              labels={"Building Levels"}
              type={"text"}
              placeholder={"Ex:1"}
              name={"custom_fields.BuildingLevels"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <NumberInputs
              labels={"Year Built"}
              type={"number"}
              placeholder={"2020"}
              name={"custom_fields.YearBuilt"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <Selection
              labels={"Tenancy"}
              defaultOption={"Select"}
              Options={["Multiple", "Single"]}
              name={"custom_fields.Tenancy"}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Parking Spaces"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.ParkingSpace"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <NumberInputs
              labels={"CAM (Common Area Maint..) Cost"}
              type={"number"}
              placeholder={"Ex: $1.00"}
              name={"custom_fields.CAM"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <NumberInputs
              labels={"Number of Units"}
              type={"number"}
              placeholder={"Ex:1"}
              name={"custom_fields.NumberOfUnits"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <Selection
              labels={"Building Class"}
              defaultOption={"Select"}
              Options={["A", "B", "C", "D"]}
              name={"custom_fields.BuildingClass"}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Percentage Leased (%)"}
              type={"number"}
              placeholder={"Ex: 75"}
              name={"custom_fields.PercentageLeased"}
              register={register}
            ></NumberInputs>
          </span>
        </div>
      </div>
    </div>
  );
};

export default DefaultForm;
