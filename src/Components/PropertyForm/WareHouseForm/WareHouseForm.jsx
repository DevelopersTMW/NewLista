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
                register={register}
                name={"custom_fields.Currency"}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Monthly Rental*"}
                type={"text"}
                placeholder={"Ex: 10000"}
                name={"custom_fields.MonthlyRental"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Building Size"}
                defaultOption={"Select"}
                Options={["Sq Ft", "Sq M"]}
                name={"custom_fields.BuildingSize"}
                register={register}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"‎"}
                type={"text"}
                placeholder={"Ex: 10000"}
                name={"custom_fields.BuildingSizeNumber"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Ceiling Height (FT/M)"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.CeilingHeight"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Year Built"}
                type={"number"}
                placeholder={"2020"}
                name={"custom_fields.YearBuilt"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Land Scape"}
                defaultOption={"Select"}
                Options={["Sq Ft", "Sq M"]}
                name={"custom_fields.LandScape"}
                register={register}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"‎"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.LandScapeNumber"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"‎"}
                defaultOption={"Select"}
                Options={["Acres", "Hectacres"]}
                name={"custom_fields.LandScapeAcres"}
                register={register}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"‎"}
                type={"number"}
                placeholder={"Ex:10"}
                name={"custom_fields.LandScapeNumber2"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Overhead Doors"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.OverheadDoors"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Parking Space"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.ParkingSpace"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Number of Docks"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.NumberOfDocks"}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Selection
                labels={"Building Class"}
                defaultOption={"Select"}
                Options={["A", "B", "C", "D"]}
                name={"custom_fields.BuildingClass"}
                register={register}
              ></Selection>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"Ground Level Docks"}
                type={"number"}
                placeholder={"Ex:75"}
                name={"custom_fields.Ground-Level-Docks "}
                register={register}
              ></Inputs>
            </span>
            <span className="w-[100%]">
              <Inputs
                labels={"High Level Docks"}
                type={"number"}
                placeholder={"Ex:1"}
                name={"custom_fields.High-Level-Docks"}
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
              name="custom_fields.Phase3"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.Phase3"
                  labels="Phase 3"
                />
              )}
            />
             <Controller
              name="custom_fields.220V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.220V"
                  labels="220V"
                />
              )}
            />
            <Controller
              name="custom_fields.230V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.230V"
                  labels="230V"
                />
              )}
            />
            <Controller
              name="custom_fields.240V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.240V"
                  labels="240V"
                />
              )}
            />
            <Controller
              name="custom_fields.380V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.380V"
                  labels="380V"
                />
              )}
            />
            <Controller
              name="custom_fields.480V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.480V"
                  labels="480V"
                />
              )}
            />
            <Controller
              name="custom_fields.110/120V "
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.110/120V"
                  labels="110 / 120V "
                />
              )}
            />
            <Controller
              name="custom_fields.100/127V"
              control={control}
              defaultValue={false}
              render={({ field }) => (
                <Checkboxs
                  {...field}
                  name="custom_fields.100/127V"
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
