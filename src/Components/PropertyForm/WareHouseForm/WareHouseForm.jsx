import React, { useState } from "react";
import Inputs from "../../InputFields/Inputs";
import Selection from "../../InputFields/Selection";
import Checkboxs from "../../InputFields/Checkboxs";
import { Textarea } from "@headlessui/react";
import UnitDetailsForm from "../../UnitDetailsForm/UnitDetailsForm";
import { Controller } from "react-hook-form";

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

const WareHouseForm = ({ propertyTypeName, register , control }) => {
  return (
    <div className="border-[2px] rounded-[8px] px-4 border-solid border-[#ececec] mt-5 bg-[#fcfcfc] py-8">
      <div className="">
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-col gap-5 md:gap-8">
            <span className="w-[100%]">
              <Selection
                labels={"Select"}
                Options={currencies}
                defaultOption={"Select"}
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
                labels={"‎"}
                type={"text"}
                placeholder={"Ex: 10000"}
                name={"BuildingSizeNumber"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Ceiling Height (FT/M)"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"CeilingHeight"}
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
                labels={"Land Scape"}
                defaultOption={"Select"}
                Options={["Sq Ft", "Sq M"]}
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
              <Selection
                labels={"‎"}
                defaultOption={"Select"}
                Options={["Acres", "Hectacres"]}
                name={"LandScapeAcres"}
                register={register}
              ></Selection>
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
              <Inputs
                labels={"Overhead Doors"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"OverheadDoors"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Parking Space"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"ParkingSpace"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Number of Docks"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"NumberOfDocks"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Building Class"}
                defaultOption={"Select"}
                Options={["A", "B", "C", "D"]}
                name={"BuildingClass"}
                register={register}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Ground Level Docks"}
                type={"number"}
                placeholder={"Ex:75"}
                name={"Ground-Level-Docks "}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"High Level Docks"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"High-Level-Docks"}
                register={register}
              ></Inputs>
            </span>
        </div>
      </div>
      <div className="">
        <div className="pt-8 flex gap-4 flex-col">
          <span>
            <h1 className="font-Urbanist font-[500] -mb-3 text-[#242424]">
              Electrical Power
            </h1>
          </span>
          <div className="flex flex-wrap gap-1.5 sm:gap-3 md:gap-5">
            <Controller
              name="Phase 3"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="Phase 3"
                  labels="Phase 3"
                />
              )}
            />
             <Controller
              name="220V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="220V"
                  labels="220V"
                />
              )}
            />
            <Controller
              name="230V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="230V"
                  labels="230V"
                />
              )}
            />
            <Controller
              name="240V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="240V"
                  labels="240V"
                />
              )}
            />
            <Controller
              name="380V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="380V"
                  labels="380V"
                />
              )}
            />
            <Controller
              name="480V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="480V"
                  labels="480V"
                />
              )}
            />
            <Controller
              name="110 / 120V "
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="110 / 120V "
                  labels="110 / 120V "
                />
              )}
            />
            <Controller
              name="100 / 127V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="100 / 127V"
                  labels="100 / 127V"
                />
              )}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WareHouseForm;
