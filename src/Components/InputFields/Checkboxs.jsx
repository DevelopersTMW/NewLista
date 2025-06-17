import { Checkbox } from "@headlessui/react";

function Checkboxs({ labels, value, onChange, checked, error }) {
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <Checkbox
          checked={checked}
          onChange={onChange}
          className="group block size-3.5 border w-[20px] h-[17px] rounded-[2px] bg-white data-checked:bg-PurpleColor"
        >
          <svg
            className="stroke-white opacity-0 group-data-checked:opacity-100"
            viewBox="-2 -0.5 18 18"
            fill="none"
          >
            <path
              d="M3 8L6 11L11 3.5"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Checkbox>
        <label className="text-[13.5px] sm:text-[15px] font-[600] text-[#222222]">
          {labels}
        </label>
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}

export default Checkboxs;
