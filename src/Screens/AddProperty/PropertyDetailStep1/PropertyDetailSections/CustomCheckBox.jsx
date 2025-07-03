import React from "react";
import Checkboxs from "../../../../Components/InputFields/Checkboxs";
import { Controller } from "react-hook-form";


const propertyFeatureMap = {
  "Apartments / Multifamily": [
    { name: "LaundryFacilities", label: "Laundry Facilities" },
    { name: "ParkingSpaces", label: "Parking Spaces" },
    { name: "SwimmingPool", label: "Swimming Pool" },
    { name: "FitnessCenter", label: "Fitness Center" },
    { name: "Playground", label: "Playground" },
    { name: "PetFriendly", label: "Pet-Friendly" },
    { name: "SecurityGatedAccess", label: "Security / Gated Access" },
    { name: "AccessibilityFeatures", label: "Accessibility Features" },
    { name: "HighSpeedInternet", label: "High-Speed Internet" },
  ],

  "Retail Center": [
    { name: "HVAC", label: "HVAC" },
    { name: "SecuritySystem", label: "Security System" },
    { name: "SprinklerSystem", label: "Sprinkler System" },
    { name: "ADACompliant", label: "ADA Compliant" },
    { name: "ParkingSpaces", label: "Parking Spaces" },
    { name: "HighSpeedInternet", label: "High-Speed Internet" },
  ],

  "Office Building": [
    { name: "Reception", label: "Reception Area" },
    { name: "ConferenceRooms", label: "Conference Rooms" },
    { name: "BreakRoom", label: "Break Room" },
    { name: "ParkingGarage", label: "Parking Garage" },
    { name: "WiFi", label: "WiFi Included" },
  ],

  "Warehouse": [
    { name: "LoadingDock", label: "Loading Dock" },
    { name: "RollUpDoors", label: "Roll-up Doors" },
    { name: "ReinforcedFloors", label: "Reinforced Floors" },
  ],

  "Hotel": [
    { name: "RoomService", label: "Room Service" },
    { name: "Concierge", label: "Concierge" },
    { name: "Pool", label: "Pool Access" },
    { name: "Gym", label: "Fitness Center" },
  ],

  // ...add remaining 15 property types similarly
};

const CustomCheckBox = ({ control, errors, propertyType }) => {
  const checkboxes = propertyFeatureMap[propertyType];

  if (!checkboxes) return null;

  return (
    <>
      <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
        Features
      </h1>
      <Controller
        name="custom_fields"
        control={control}
        rules={{
          validate: (value) =>
            Object.values(value || {}).some(Boolean) ||
            "Please select at least one feature.",
        }}
        render={({ field }) => (
          <div className="grid max-[400px]:grid-cols-1 grid-cols-2 gap-2 md:grid-cols-5 md:gap-3">
            {checkboxes.map((opt) => (
              <Checkboxs
                key={opt.name}
                name={opt.name}
                labels={opt.label}
                checked={field.value?.[opt.name] || false}
                onChange={(checked) =>
                  field.onChange({
                    ...field.value,
                    [opt.name]: checked,
                  })
                }
              />
            ))}
          </div>
        )}
      />

      {errors?.custom_fields && (
        <p className="text-red-500 text-sm mt-1">
          {errors.custom_fields.message}
        </p>
      )}
    </>
  );
};

export default CustomCheckBox;
