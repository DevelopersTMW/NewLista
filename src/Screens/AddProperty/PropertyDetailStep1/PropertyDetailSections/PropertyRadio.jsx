import RadioButton from "../../../../Components/InputFields/RadioButton";

const PropertyRadios = ({register}) => {
  return (
    <div className="flex gap-5 pb-5">
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
