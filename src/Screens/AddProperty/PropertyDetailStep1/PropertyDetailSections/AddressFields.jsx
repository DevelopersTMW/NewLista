import React from "react";
import Inputs from "../../../../Components/InputFields/Inputs";

const AddressFields = () => {
  return (
    <>
      <div className="flex flex-col gap-6 py-8 border-[#BBBBBB] border-t-[1px] ">
        <div>
          <Inputs
            labels={"Property Address"}
            type={"text"}
            placeholder={"Enter Full Address"}
          ></Inputs>
        </div>
        <div className="flex justify-between gap-8">
          <span className="w-[100%]">
            <Inputs labels={"City"} type={"text"} placeholder={"City"}></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"State / Province"}
              type={"text"}
              placeholder={"State / Province"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Zip /Postal Code"}
              type={"number"}
              placeholder={"Enter Zip /Postal Codes"}
            ></Inputs>
          </span>
        </div>
      </div>
    </>
  );
};

export default AddressFields;
