import React from "react";
import Checkboxs from "../../../../Components/InputFields/Checkboxs";
import { Controller } from "react-hook-form";

const featureOptions = [
  { name: "Parking", label: "Parking" },
  { name: "SprinklerSystem", label: "Sprinkler System" },
  { name: "SecuritySystem", label: "Security System" },
  { name: "HVAC", label: "HVAC" },
  { name: "HighSpeedInternet", label: "High Speed Internet" },
  { name: "ADACompliant", label: "ADA Compliant" },
];

const CustomCheckBox = ({ control, errors, propertyType }) => {
  if (propertyType !== "Retail Center") return null;

  console.log(propertyType);
  

  return (
    <>
      <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
        Features
      </h1>
      <Controller
        name="custom_fields"
        control={control}
        rules={{
          validate: (value) =>
            Object.values(value || {}).some(Boolean) ||
            "Please select at least one feature.",
        }}
        render={({ field }) => (
          <div className="grid max-[400px]:grid-cols-1 grid-cols-2 gap-2 md:grid-cols-3 md:gap-3">
            {featureOptions.map((opt) => (
              <Checkboxs
                key={opt.name}
                name={opt.name}
                labels={opt.label}
                checked={field.value?.[opt.name] || false}
                onChange={(checked) =>
                  field.onChange({
                    ...field.value,
                    [opt.name]: checked,
                  })
                }
              />
            ))}
          </div>
        )}
      />

      {errors?.custom_fields && (
        <p className="text-red-500 text-sm mt-1">
          {errors.custom_fields.message}
        </p>
      )}
    </>
  );
};

export default CustomCheckBox;
