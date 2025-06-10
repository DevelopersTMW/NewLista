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
    reset,
  } = useForm({
    defaultValues,
  });

  // CHECK RADIO VALUE
  const PropertyRadio = watch("propertyType");
  const propertyType = watch("propertyName");

  const renderFormFields = () => {
    switch (propertyType) {
      case "Retail Center":
        return (
          <RentailForm register={register} propertyTypeName={propertyType} />
        );
      case "Warehouse":
        return (
          <WareHouseForm
            register={register}
            control={control}
            propertyTypeName={propertyType}
          />
        );
      case "Vacant Land":
        return <LandForm register={register} propertyTypeName={propertyType} />;
      default:
        return (
          <DefaultForm
            errors={errors}
            register={register}
            propertyTypeName={propertyType}
          />
        );
    }
  };

  const SubmitPropertyForm = (value) => {
    console.log("Validated Form Data:", value);
    if(value){
    onNext(value);
    } return
  };

  return (
    <>
      <div className="">
        <form onSubmit={handleSubmit(SubmitPropertyForm)}>
          <PropertyRadios register={register}></PropertyRadios>
          <div className="border border-[#ececec] rounded-2xl mx-3 md:mx-0 px-3 md:px-5 py-8">
            <PropertytypeSelection
              PropertyRadios={PropertyRadio}
              register={register}
              errors={errors}
            />
            {/* CUSTOM FIELD  */}
            {propertyType && renderFormFields()}
            <AddressFields register={register} errors={errors} />
            {/* DESCRIPTION SECTION  */}
            <div className="border-b-[1px]  border-[#BBBBBB] pb-7 sm:py-7 flex-col gap-4 flex">
              <TextAreas
                label={"Description"}
                placeholder={
                  "Describe the property, its features, location advantages, and any unique selling points."
                }
                register={register("description", {
                  required: "Sales Price is required",
                })}
                error={errors.description?.message}
              ></TextAreas>
            </div>
            <ListingVisibilitySwitches controls={control} />
          </div>

          {/* Send Message Button */}
          <div className="mt-1 flex justify-end gap-5 py-5">
            <button
              className="bg-PurpleColor hover-btn hover-btn-purple font-[600] cursor-pointer text-[14px] mr-3 sm:mr-0 sm:text-[14.5px] lg:text-[17px] px-6 py-3 text-white font-Urbanist rounded-[6px]"
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
