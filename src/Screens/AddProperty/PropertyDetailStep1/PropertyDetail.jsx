import React, { useState } from "react";
import { useForm } from "react-hook-form";

import DefaultForm from "../../../Components/PropertyForm/DefaultForm/DefaultForm.jsx";
import RentailForm from "../../../Components/PropertyForm/RentailForm/RentailForm.jsx";
import LandForm from "../../../Components/PropertyForm/LandForm/LandForm.jsx";
import WareHouseForm from "../../../Components/PropertyForm/WareHouseForm/WareHouseForm.jsx";
// import RadioButton from "../../../Components/InputFields/RadioButton.jsx";

// SCHEMA
import PropertyDetailSchema from "../../../Schema/AddPropertySchema/PropertyDetailSchema.js";
import AddressFields from "./PropertyDetailSections/AddressFields.jsx";
import ListingVisibilitySwitches from "./PropertyDetailSections/ListingVisibilitySwitches.jsx";
import TextAreas from "../../../Components/InputFields/TextAreas.jsx";
import PropertyRadios from "./PropertyDetailSections/PropertyRadio.jsx";
import PropertytypeSelection from "./PropertyDetailSections/PropertytypeSelection.jsx";

const Step1 = ({ onNext, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues});

  // CHECK RADIO VALUE
  const PropertyRadio = watch("propertyType");
  const propertyType = watch("propertyName");

  console.log(propertyType);
  

  const renderFormFields = () => {
    switch (propertyType) {
      case "Retail Center":
        return (
          <RentailForm register={register} propertyTypeName={propertyType} />
        );
      case "Warehouse":
        return (
          <WareHouseForm register={register} control={control} propertyTypeName={propertyType} />
        );
      case "Vacant Land":
        return <LandForm register={register} propertyTypeName={propertyType} />;
      default:
        return (
          <DefaultForm register={register} propertyTypeName={propertyType} />
        );
    }
  };

  const SubmitPropertyForm = (value) => {
    console.log("Validated Form Data:", value);
    // onNext(data);
    reset();
  };

  return (
    <>
      <div>
        <form onSubmit={handleSubmit(SubmitPropertyForm)}>
          <PropertyRadios register={register}></PropertyRadios>
          <div className="border border-[#ececec] rounded-2xl px-5 py-8">
            <PropertytypeSelection
              PropertyRadios={PropertyRadio}
              register={register}
            />
            {/* CUSTOM FIELD  */}
            {propertyType && renderFormFields()}
            <AddressFields register={register} />
            {/* DESCRIPTION SECTION  */}
            <div className="border-b-[1px]  border-[#BBBBBB] py-7 flex-col gap-4 flex">
              <TextAreas
                label={"Description"}
                placeholder={
                  "Describe the property, its features, location advantages, and any unique selling points."
                }
                name={"description"}
                register={register}
              ></TextAreas>
            </div>
            <ListingVisibilitySwitches controls={control} />
          </div>

          {/* Send Message Button */}
          <div className="mt-1 flex justify-end gap-5 py-5">
            <button
              className="bg-PurpleColor hover-btn hover-btn-purple font-[600] cursor-pointer text-[17px] px-6 py-3 text-white font-Urbanist rounded-[6px]"
              type="submit"
            >
              <span>Continue To Photo And Media</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Step1;
