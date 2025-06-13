import React, { useMemo } from "react";
import Inputs from "../../../../Components/InputFields/Inputs";
import Selection from "../../../../Components/InputFields/Selection";
import RadioButton from "../../../../Components/InputFields/RadioButton";
import NumberInputs from "../../../../Components/InputFields/NumberInputs";
import FormattedNumberInput from "../../../../Components/InputFields/NumberInputs";

const propertyTypes = [
  "Church",
  "Gas Station",
  "Hotel",
  "Industrial Park",
  "Medical Building",
  "Mixed Use",
  "Motel",
  "Office Building",
  "Recreation Center",
  "Retail Center",
  "Self-Storage Facility",
  "School Building",
  "Senior Living Facility",
  "Shopping Center",
  "Single Tenant Retail Building",
  "Storage Facility",
  "Vacant Land",
  "Warehouse",
  "Other",
];

const PropertytypeSelection = ({ PropertyRadios, register, errors, watch }) => {
  const salePrice = watch("salePrice");
  const noi = watch("Noi");

  const capRate = useMemo(() => {
    const price = parseFloat(salePrice);
    const income = parseFloat(noi);

    if (!price || !income || price === 0) return null;

    return (income * 100) / price;
  }, [salePrice, noi]);

  return (
    <div className="flex flex-col gap-6 pb-10">
      <div>
        <span className="w-[100%]">
          <Inputs
            labels={"Property Name"}
            name="PropertyTitle"
            placeholder={"Enter Property Name"}
            register={register("PropertyTitle", {
              required: "Property Name is required",
            })}
            error={errors.PropertyTitle?.message}
          />
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-8">
        <span className="w-[100%]">
          <Selection
            defaultOption={"Select Your Property"}
            labels={"Property Type"}
            Options={propertyTypes}
            name={"propertyName"}
            register={register}
            rules={{ required: "Please select an option." }}
            error={errors.propertyName?.message}
          />
        </span>

        <span className="w-[100%]">
          <Selection
            defaultOption={"Select Status"}
            labels={"Listing Status"}
            Options={["Available", "Withdraw", "Pending", "Loss", "Lease"]}
            name={"ListingStatus"}
            register={register}
            rules={{ required: "Please select an option." }}
            error={errors.ListingStatus?.message}
          />
        </span>
      </div>

      <div className="grid  sm:grid-cols-2 gap-6 md:gap-8">
        {(PropertyRadios === "For Sale" ||
          PropertyRadios === "Both (For Sale & For Lease)") && (
          <span className="grid grid-cols-2 gap-5">
            <span className="">
              
              <Inputs
                labels={"Sale Price"}
                type={"number"}
                placeholder={"Enter Price"}
                register={register("salePrice", {
                  required: "Sales Price is required",
                })}
                error={errors.salePrice?.message}
              />
            </span>
            <span className="">
              <Inputs
                labels={"NOI (Net Operating Income)"}
                type={"number"}
                placeholder={"Enter Price"}
                register={register("Noi", {
                  required: "Net Operating Income is required",
                })}
                error={errors.Noi?.message}
              />
            </span>
          </span>
        )}

        {(PropertyRadios === "For Sale" ||
          PropertyRadios === "Both (For Sale & For Lease)") && (
          <span className="">
            <label className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
              Cap. Rate (%)
            </label>
            <div className="bg-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-full px-4 rounded-[6px] outline-none h-12 flex items-center">
              {capRate !== null && `${capRate.toFixed(2)}%`}
            </div>
          </span>
        )}

        {(PropertyRadios === "For Lease" ||
          PropertyRadios === "Both (For Sale & For Lease)") && (
          <span className="flex gap-4">
            <span className="w-[100%]">
              <Inputs
                labels={"Lease Rate"}
                type={"number"}
                placeholder={"Enter Price"}
                register={register("leaseRate", {
                  required: "Lease Rate is required",
                })}
                error={errors.leaseRate?.message}
              />
            </span>

            <span className="w-[100%]">
              <Selection
                labels="ㅤ"
                defaultOption="Select"
                Options={[
                  "Per SF/Month",
                  "Per SF/Year",
                  "Per Month",
                  "Per Year",
                ]}
                name="persf"
                register={register}
                rules={{ required: "Please select an option." }}
                error={errors.persf?.message}
              />
            </span>
          </span>
        )}

        <span className="">
          <Inputs
            labels={"Building Size (sq ft)"}
            type={"number"}
            placeholder={"Total Building Square Footage"}
            register={register("BuildingSize_sqft", {
              required: "Building Size is required",
            })}
            error={errors.BuildingSize_sqft?.message}
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
              register={register("leaseType", {
                required: "Please select a lease type.",
              })}
              name="leaseType"
              value="N"
            />
            <RadioButton
              label={"NN (Double Net)"}
              register={register("leaseType")}
              name="leaseType"
              value="NN"
            />
            <RadioButton
              label={"NNN (Triple Net)"}
              register={register("leaseType")}
              name="leaseType"
              value="NNN"
            />
            <RadioButton
              label={"None"}
              register={register("leaseType")}
              name="leaseType"
              value="None"
            />
          </span>
          {errors.leaseType && (
            <p className="text-red-500 text-sm mt-1">
              {errors.leaseType.message}
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default PropertytypeSelection;
