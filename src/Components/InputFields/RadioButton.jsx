import { Radio } from "flowbite-react";

const RadioButton = ({ label, register, name , DefaultCheck }) => {
  return (
    <label className="flex items-center gap-2 font-Urbanist text-[14px]  md:text-[16px] font-[500] outline-none focus:outline-none w-max ">
      <Radio
        {...register(name)}
        value={label}
        defaultChecked={DefaultCheck}
        color="#703BF7"
      />
      {label}
    </label>
  );
};

export default RadioButton;
