import React from "react";
import Inputs from "../../../../Components/InputFields/Inputs";
import Selection from "../../../../Components/InputFields/Selection";
import RadioButton from "../../../../Components/InputFields/RadioButton";



const propertyTypes = [
  "Church",
  "Condominium",
  "Gas Station",
  "Hotel",
  "Industrial Park",
  "Medical Building",
  "Mixed Use",
  "Mobile Home Park",
  "Motel",
  "Multifamily",
  "Office Building",
  "Recreation Center",
  "Retail Center",
  "Self-Storage Facility",
  "School Building",
  "Senior Living Facility",
  "Shopping Center",
  "Single Tenant Retail Building",
  "Storage Facility",
  "Townhomes",
  "Vacant Land",
  "Warehouse",
  "Other"
];


const PropertytypeSelection = ({ PropertyRadios, register }) => {
  return (
    <div className="flex flex-col gap-6 pb-10">
      <div className="flex gap-8">
        <span className="w-[100%]">
          <Selection
            defaultOption={"Select Your Property"}
            labels={"Property Type"}
            Options={propertyTypes}
            name={"propertyName"}
            register={register}
          />
        </span>

        <span className="w-[100%]">
          <Selection
            defaultOption={"Select Status"}
            labels={"Listing Status"}
            Options={["Available", "Withdraw", "Pending", "Loss", "Lease"]}
            name={"ListingStatus"}
            register={register}
          />
        </span>
      </div>

      <div className="flex justify-between flex-wrap gap-8">
        {(PropertyRadios === "For Sale" ||
          PropertyRadios === "Both (For Sale & For Lease)") && (
          <span className="w-[48.5%]">
            <Inputs
              labels={"Sale Price"}
              type={"number"}
              placeholder={"Enter Price"}
              name={"salePrice"}
              register={register}
            />
          </span>
        )}

        {(PropertyRadios === "For Lease" ||
          PropertyRadios === "Both (For Sale & For Lease)") && (
          <span className="w-[48.5%] flex gap-4">
            <span className="w-[100%]">
              <Inputs
                labels={"Lease Rate"}
                type={"number"}
                placeholder={"Enter Price"}
                name={"leaseRate"}
                register={register}
              />
            </span>

            <span className="w-[100%]">
              <Selection
                labels={"Space"}
                defaultOption={"Per SF/Month"}
                Options={["Per SF/Year", "Per Month", "Per Year"]}
                name={"persf"}
                register={register}
              />
            </span>
          </span>
        )}

        <span className="w-[48.5%]">
          <Inputs
            labels={"Building Size (sq ft)"}
            type={"number"}
            placeholder={"Total Building Square Footage"}
            name={"buildingSize"}
            register={register}
          />
        </span>
      </div>

      {(PropertyRadios === "For Lease" ||
        PropertyRadios === "Both (For Sale & For Lease)") && (
        <div className="flex gap-2 flex-col">
          <label className="block mb-1 font-[700] text-PurpleColor">
            Lease Type
          </label>
          <span className="flex gap-4 flex-wrap">
            <RadioButton
              label={"N (Single Net)"}
              register={register}
              name="leaseType" // Use consistent name here
              value="N"
            />
            <RadioButton
              label={"NN (Double Net)"}
              register={register}
              name="leaseType"
              value="NN"
            />
            <RadioButton
              label={"NNN (Triple Net)"}
              register={register}
              name="leaseType"
              value="NNN"
            />
            <RadioButton
              label={"None"}
              register={register}
              name="leaseType"
              value="None"
            />
          </span>
        </div>
      )}
    </div>
  );
};

export default PropertytypeSelection;
