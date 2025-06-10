import React from "react";
import Inputs from "../../../../Components/InputFields/Inputs";

const AddressFields = ({ register , errors }) => {
  return (
    <>
      <div className="flex flex-col gap-6 py-8 border-[#BBBBBB] border-t-[1px] ">
        <div>
          <Inputs
            labels={"Property Address"}
            type={"text"}
            placeholder={"Enter Full Address"}
            register={register("PropertyAddress", {
              required: "Property Address is required",
            })}
            error={errors.PropertyAddress?.message}
          ></Inputs>
        </div>
        <div className="flex justify-between flex-wrap sm:flex-nowrap gap-5 md:gap-8">
          <span className="w-[46%] sm:w-[100%]">
            <Inputs
              labels={"City"}
              type={"text"}
              placeholder={"City"}
              register={register("City", {
                required: "City is required",
              })}
              error={errors.City?.message}
            ></Inputs>
          </span>
          <span className="w-[46%] sm:w-[100%]">
            <Inputs
              labels={"State / Province"}
              type={"text"}
              placeholder={"State / Province"}
              register={register("StateProvince", {
                required: "State/Province is required",
              })}
              error={errors.StateProvince?.message}
            ></Inputs>
          </span>
          <span className="w-[100%] sm:w-[100%]">
            <Inputs
              labels={"Zip / Postal Code"}
              type={"number"}
              placeholder={"Enter Zip /Postal Codes"}
              register={register("ZipPostalCode", {
                required: "Zip/PostalCode is required",
              })}
              error={errors.ZipPostalCode?.message}
            ></Inputs>
          </span>
        </div>
      </div>
    </>
  );
};

export default AddressFields;
