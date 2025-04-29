import { Checkbox } from "@headlessui/react";
import { useState } from "react";

function Checkboxs({labels}) {
  const [enabled, setEnabled] = useState(false);

  return (
    <>
      <div className="flex justify-center items-center gap-2">
      <Checkbox
        checked={enabled}
        onChange={setEnabled}
        className="group block size-4  border w-[20px] rounded bg-white data-checked:bg-PurpleColor"
      >
        {/* Checkmark icon */}
        <svg
          className="stroke-white  opacity-0 group-data-checked:opacity-100"
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
      <label  className="block  text-[15px] font-[600] text-[#222222] w-[100%]">{labels}</label>
      </div>
    </>
  );
}

export default Checkboxs;