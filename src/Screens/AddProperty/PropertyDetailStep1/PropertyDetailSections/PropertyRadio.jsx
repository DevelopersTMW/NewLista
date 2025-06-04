import RadioButton from "../../../../Components/InputFields/RadioButton";

const PropertyRadios = ({ register }) => {
  return (
    <div className="grid grid-cols-1 pb-5 gap-2 md:gap-5 px-4 md:px-0 md:grid-cols-3 ">
      <RadioButton
        register={register}
        name="propertyType"
        label={"For Sale"}
        DefaultCheck={true}
      ></RadioButton>
      <RadioButton
        register={register}
        name="propertyType"
        label={"For Lease"}
      ></RadioButton>
      <RadioButton
        register={register}
        name="propertyType"
        label={"Both (For Sale & For Lease)"}
      ></RadioButton>
    </div>
  );
};

export default PropertyRadios;
