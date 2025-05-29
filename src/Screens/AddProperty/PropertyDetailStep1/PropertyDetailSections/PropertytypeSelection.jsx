import React from "react";
import Inputs from "../../../../Components/InputFields/Inputs";
import Selection from "../../../../Components/InputFields/Selection";
import RadioButton from "../../../../Components/InputFields/RadioButton";


const propertyType = [
  { name: "Select Your Property" },
  { name: "Car Wash" },
  // { name: "Church" },
  // { name: "Condominium" },
  { name: "Gas Station" },
  { name: "Hotel" },
  { name: "Industrial Park" },
  { name: "Investment Home" },
  // { name: "Medical Building" },
  // { name: "Mixed Use" },
  // { name: "Mobile Home Park" },
  { name: "Motel" },
  { name: "Multifamily" },
  // { name: "Office Building" },
  { name: "Recreation Center" },
  // { name: "Retail Center" },
  { name: "Self-Storage Facility" },
  // { name: "School Building" },
  { name: "Senior Living Facility" },
  { name: "Shopping Center" },
  { name: "Single Tenant Retail Building" },
  // { name: "Storage Facility" },
  { name: "Townhomes" },
  // { name: "Vacant Land" },
  // { name: "Warehouse" },
  // { name: "Other" },
];


const propertyTypes = [
  "Retail For Lease",
  "Office For Lease",
  "Warehouse For Lease",
  "Land For Lease",
  "Condominium Building",
  "Apartments or Flats",
  "Mobile Home Parks",
  "Storage Facility",
  "Churches",
  "Mixed Use Properties",
  "Group of Townhomes",
  "Medical Building",
  "School Building",
  "Other Building",
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
