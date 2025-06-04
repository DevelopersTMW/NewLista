import React from "react";
import Checkboxs from "../../../../Components/InputFields/Checkboxs";
import { Controller } from "react-hook-form";

const Features = ({control}) => {
  return (
    <>
      <span>
        <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
          Building Features
        </h1>
      </span>
      <div className="grid max-[400px]:grid-cols-1 grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
        <Controller
          name="Parking"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs {...field} name="Parking" labels="Parking" />
          )}
        />
        <Controller
          name="SprinklerSystem"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs
              {...field}
              name="SprinklerSystem"
              labels="Sprinkler System"
            />
          )}
        />
        <Controller
          name="SecuritySystem"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs
              {...field}
              name="SecuritySystem"
              labels="Security System"
            />
          )}
        />
        <Controller
          name="HVAC"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs {...field} name="HVAC" labels="HVAC" />
          )}
        />
        <Controller
          name="HighSpeedInternet"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs
              {...field}
              name="HighSpeedInternet"
              labels="High Speed Internet"
            />
          )}
        />
        <Controller
          name="ADACompliant"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <Checkboxs {...field} name="ADACompliant" labels="ADA Compliant" />
          )}
        />
      </div>
    </>
  );
};

export default Features;
