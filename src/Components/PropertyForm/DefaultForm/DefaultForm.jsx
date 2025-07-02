import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import NumberInputs from "../../InputFields/NumberInputs";
import { DollarSign } from "lucide-react";
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
const DefaultForm = ({ propertyTypeName, register, watch, setValue }) => {
  // should log: "434"

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
              value={watch("custom_fields.Currency")}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Gross Scheduled Income"}
              type={"text"}
              watch={watch}
              setValue={setValue}
              placeholder={"Ex: 10000"}
              name={"custom_fields.MonthlyRental"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <Selection
              labels={"Lot Size"}
              defaultOption={"Select"}
              Options={["Sq Ft", "Sq M"]}
              name={"custom_fields.BuildingSize"}
              value={watch("custom_fields.BuildingSize")}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"‎"}
              type={"text"}
              watch={watch}
              setValue={setValue}
              placeholder={"Ex: 10000"}
              name={"custom_fields.BuildingSizeNumber"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
            <NumberInputs
              labels={"Building Levels"}
              type={"text"}
              watch={watch}
              setValue={setValue}
              placeholder={"Ex:1"}
              name={"custom_fields.BuildingLevels"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="">
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
          <span className="">
            <Selection
              labels={"Tenancy"}
              defaultOption={"Select"}
              Options={["Multiple", "Single"]}
              name={"custom_fields.Tenancy"}
              value={watch("custom_fields.Tenancy")}
              register={register}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Parking Spaces"}
              type={"text"}
              placeholder={"Ex:1"}
              watch={watch}
              setValue={setValue}
              name={"custom_fields.ParkingSpace"}
              register={register}
            ></NumberInputs>
          </span>
          <span className="relative ">
            <label className="block mb-1 font-[700] text-PurpleColor text-[14px]">
              {"CAM (Common Area Maint..) Cost"}
            </label>
            <div className="flex items-end">
              <span className="px-2 bg-[#F3EEFF] py-3.5 rounded-l-[5px]">
                <DollarSign className="size-4 top-4 md:size-4.5 lg:size-5" />
              </span>
              <span className="w-full">
                <Inputs
                  name={"custom_fields.CAM"}
                  register={register}
                  labels={""}
                  style={"!rounded-l-[0px]"}
                  type="number"
                  placeholder={"Ex: $1.00"}
                ></Inputs>
              </span>
            </div>
          </span>
          <span className="">
            <NumberInputs
              labels={"Number of Units"}
              type={"text"}
              placeholder={"Ex:1"}
              name={"custom_fields.NumberOfUnits"}
              register={register}
              watch={watch}
              setValue={setValue}
            ></NumberInputs>
          </span>
          <span className="">
            <Selection
              labels={"Building Class"}
              defaultOption={"Select"}
              Options={["A", "B", "C", "D"]}
              name={"custom_fields.BuildingClass"}
              register={register}
              value={watch("custom_fields.BuildingClass")}
            ></Selection>
          </span>
          <span className="">
            <NumberInputs
              labels={"Percentage Leased (%)"}
              type={"text"}
              watch={watch}
              setValue={setValue}
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
