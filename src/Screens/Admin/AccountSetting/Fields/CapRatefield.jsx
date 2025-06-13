import React from "react";
import { useForm, Controller } from "react-hook-form";

export default function CapRate({capRateMin , capRateMax , control , errors , trigger}) {
  

  const min = 0;
  const max = 30;

 

  // Calculate the percentage positions of the handles
  const minPercent = ((capRateMin - min) / (max - min)) * 100;
  const maxPercent = ((capRateMax - min) / (max - min)) * 100;

  return (
    <div className="w-full max-w-md mx-auto text-white font-Urbanist">
      <div className="flex items-center justify-center gap-2 mb-6">
        {/* Min Input */}
        <div className="flex gap-2 items-center justify-center">
          <label
            htmlFor="text"
            className="block font-Inter text-[15px] font-[700] text-[#616362]"
          >
            Min
          </label>
          <Controller
            name="capRateMin"
            control={control}
            rules={{
              required: "Min is required",
              min: { value: min, message: `Min must be ≥ ${min}` },
              max: {
                value: max,
                message: `Min must be ≤ ${max}`,
              },
              validate: (value) =>
                value < capRateMax || "Min must be less than Max",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                min={min}
                max={max}
                className={`bg-[#F3EEFF] border ${
                  errors.capRateMin ? "border-red-500" : "border-[#F3EEFF]"
                } text-Paracolor font-[600] text-[14px] w-20 h-8 rounded-[6px] px-1 outline-none`}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val > max) val = max;
                  else if (val < min) val = min;
                  field.onChange(val);
                  trigger(["capRateMin", "capRateMax"]);
                }}
              />
            )}
          />
        </div>

        {/* Double Range Slider */}
        <div className="relative w-full">
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-400 rounded transform -translate-y-1/2" />
          <div
            className="absolute top-1/2 h-1 bg-[#0075ff] rounded transform -translate-y-1/2"
            style={{
              left: `${minPercent}%`,
              width: `${maxPercent - minPercent}%`,
            }}
          />
          {/* Min thumb */}
          <input
            type="range"
            min={min}
            max={max}
            value={capRateMin}
            onChange={(e) => {
              const val = Math.min(Number(e.target.value), capRateMax - 1);
              trigger(["capRateMin", "capRateMax"]);
            }}
            className="pointer-events-auto absolute top-1/2 w-full h-10 -translate-y-1/2 appearance-none bg-transparent"
            style={{ zIndex: 2 }}
          />
          {/* Max thumb */}
          <input
            type="range"
            min={min}
            max={max}
            value={capRateMax}
            onChange={(e) => {
              const val = Math.max(Number(e.target.value), capRateMin + 1);
              // control.setValue("capRateMax", val);
              trigger(["capRateMin", "capRateMax"]);
            }}
            className="pointer-events-auto absolute top-1/2 w-full h-10 -translate-y-1/2 appearance-none bg-transparent text-PurpleColor"
            style={{ zIndex: 3 }}
          />
        </div>

        {/* Max Input */}
        <div className="flex items-center gap-2">
          <label
            htmlFor="text"
            className="block font-Inter text-[15px] font-[700] text-[#616362]"
          >
            Max
          </label>
          <Controller
            name="capRateMax"
            control={control}
            rules={{
              required: "Max is required",
              min: { value: min, message: `Max must be ≥ ${min}` },
              max: { value: max, message: `Max must be ≤ ${max}` },
              validate: (value) =>
                value > capRateMin || "Max must be greater than Min",
            }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                min={min}
                max={max}
                className={`bg-[#F3EEFF] border ${
                  errors.capRateMax ? "border-red-500" : "border-[#F3EEFF]"
                } text-Paracolor font-[600] text-[14px] w-20 h-8 rounded-[6px] px-1 outline-none`}
                onChange={(e) => {
                  let val = Number(e.target.value);
                  if (val > max) val = max;
                  else if (val < min) val = min;
                  field.onChange(val);
                  trigger(["capRateMin", "capRateMax"]);
                }}
              />
            )}
          />
        </div>
      </div>
    </div>
  );
}
