import { Checkbox } from "@headlessui/react";

function Checkboxs({ labels, name, value, onChange }) {
  return (
    <div className="flex justify-center items-center gap-2">
      <Checkbox
        checked={value}
        onChange={onChange}
        className="group block size-3.5 border w-[20px] rounded-[2px] bg-white data-checked:bg-PurpleColor"
      >
        <svg
          className="stroke-white opacity-0 group-data-checked:opacity-100"
          viewBox="-1 -1 16 16"
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
      <label className="block text-[13.5px] sm:text-[15px] font-[600] text-[#222222] w-[100%]">
        {labels}
      </label>
    </div>
  );
}

export default Checkboxs;
