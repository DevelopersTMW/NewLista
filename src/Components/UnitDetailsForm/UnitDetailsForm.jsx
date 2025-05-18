import React from "react";
import Inputs from "../InputFields/Inputs";
import Selection from "../InputFields/Selection";

const UnitDetailsForm = () => {
  return (
    
      <div className="px-10 border-[1px] rounded-[10px] w-[70%] border-dashed py-7 mt-5 flex flex-col gap-5">
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Unit No"}
              type={"text"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Size"}
              type={"number"}
              placeholder={"2020"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Selection labels={"Sq/Sq M"} defaultOption={"Sq Ft"}></Selection>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Level"}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
        </div>
        <div className="flex gap-8">
          <span className="w-[100%]">
            <Inputs
              labels={"Rental Rate/Month"}
              type={"number"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Rent Terms/Year"}
              type={"number"}
              placeholder={"2020"}
            ></Inputs>
          </span>
          <span className="w-[100%]">
            <Inputs
              labels={"Condition"}
              type={"text"}
              placeholder={"Ex:1"}
            ></Inputs>
          </span>
        </div>
      </div>
    
  );
};

export default UnitDetailsForm;
