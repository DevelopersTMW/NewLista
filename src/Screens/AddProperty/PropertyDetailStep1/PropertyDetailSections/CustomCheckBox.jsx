import React from "react";
import Checkboxs from "../../../../Components/InputFields/Checkboxs";
import { Controller } from "react-hook-form";
import propertyFeatureMap from "../../../../CustomHook/CheckBoxes/CheckBoxes.js"


const CustomCheckBox = ({ control, errors, propertyType }) => {


  console.log(propertyFeatureMap);
  const checkboxes = propertyFeatureMap[propertyType];

  if (!checkboxes) return null;

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
          <div className="grid max-[400px]:grid-cols-1 grid-cols-2 gap-2 md:grid-cols-4 md:gap-3">
            {checkboxes.map((opt) => (
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
