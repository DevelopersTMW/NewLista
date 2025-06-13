import React, { useEffect, useState } from "react";
import AddPropertyBanner from "../../../assets/AddPropertyBanner.jpg";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";
import CrossImage from "../../../assets/CrossImage.png";
import { Select, Switch } from "@headlessui/react";
import Checkboxs from "../../../Components/InputFields/Checkboxs";
import CountrySelector from "../../../Components/RegisterCountrySelector/CountrySelection";
import Inputs from "../../../Components/InputFields/Inputs";
import Selection from "../../../Components/InputFields/Selection";
import TextAreas from "../../../Components/InputFields/TextAreas";
import { Controller, useForm } from "react-hook-form";
import Switches from "../../../Components/InputFields/Switch";
import { useSelector } from "react-redux";
import CapRatefield from "./Fields/CapRatefield.jsx";

import ComboboxSelector from "../../../Components/ComboboxSelector/ComboboxSelector.jsx";
import axios from "axios";
import SuggestedState from "../../../Components/RegisterCountrySelector/SuggestedState.jsx";
import HeadShootBanner from "./Fields/HeadShoot&Banner.jsx";

const statesArray = [
  { id: 1, name: "Alabama", code: "AL" },
  { id: 2, name: "Alaska", code: "AK" },
  { id: 3, name: "Arizona", code: "AZ" },
  { id: 4, name: "Arkansas", code: "AR" },
  { id: 5, name: "California", code: "CA" },
  { id: 6, name: "Colorado", code: "CO" },
  { id: 7, name: "Connecticut", code: "CT" },
  { id: 8, name: "Delaware", code: "DE" },
  { id: 9, name: "Florida", code: "FL" },
  { id: 10, name: "Georgia", code: "GA" },
  { id: 11, name: "Hawaii", code: "HI" },
  { id: 12, name: "Idaho", code: "ID" },
  { id: 13, name: "Illinois", code: "IL" },
  { id: 14, name: "Indiana", code: "IN" },
  { id: 15, name: "Iowa", code: "IA" },
  { id: 16, name: "Kansas", code: "KS" },
  { id: 17, name: "Kentucky", code: "KY" },
  { id: 18, name: "Louisiana", code: "LA" },
  { id: 19, name: "Maine", code: "ME" },
  { id: 20, name: "Maryland", code: "MD" },
  { id: 21, name: "Massachusetts", code: "MA" },
  { id: 22, name: "Michigan", code: "MI" },
  { id: 23, name: "Minnesota", code: "MN" },
  { id: 24, name: "Mississippi", code: "MS" },
  { id: 25, name: "Missouri", code: "MO" },
  { id: 26, name: "Montana", code: "MT" },
  { id: 27, name: "Nebraska", code: "NE" },
  { id: 28, name: "Nevada", code: "NV" },
  { id: 29, name: "NewHampshire", code: "NH" },
  { id: 30, name: "NewJersey", code: "NJ" },
  { id: 31, name: "NewMexico", code: "NM" },
  { id: 32, name: "NewYork", code: "NY" },
  { id: 33, name: "NorthCarolina", code: "NC" },
  { id: 34, name: "NorthDakota", code: "ND" },
  { id: 35, name: "Ohio", code: "OH" },
  { id: 36, name: "Oklahoma", code: "OK" },
  { id: 37, name: "Oregon", code: "OR" },
  { id: 38, name: "Pennsylvania", code: "PA" },
  { id: 39, name: "RhodeIsland", code: "RA" },
  { id: 40, name: "SouthCarolina", code: "SC" },
  { id: 41, name: "SouthDakota", code: "SD" },
  { id: 42, name: "Tennessee", code: "TN" },
  { id: 43, name: "Texas", code: "TX" },
  { id: 44, name: "Utah", code: "UT" },
  { id: 45, name: "Vermont", code: "VT" },
  { id: 46, name: "Virginia", code: "VA" },
  { id: 47, name: "Washington", code: "WA" },
  { id: 48, name: "WestVirginia", code: "WV" },
  { id: 49, name: "Wisconsin", code: "WI" },
  { id: 50, name: "Wyoming", code: "WY" },
];

const PropertyInterest = [
  "Apartment",
  "MixedUseProperty",
  "Retail",
  "OfficeBuilding",
  "Hospitality",
  "Land",
  "Others",
  "Shopping/StripCenter",
  "IndustrialBuilding",
  "Healthcare",
  "StorageFacility",
  "Automotive",
  "InvestmentHomes",
];

const MinRange = [
  { label: "Under", value: 0 },
  { label: "$250K", value: 250 },
  { label: "$500K", value: 500 },
  { label: "$1M", value: 1000 },
  { label: "$2.5M", value: 2500 },
  { label: "$5M", value: 5000 },
  { label: "$10M", value: 10000 },
  { label: "$25M", value: 25000 },
  { label: "Over", value: 50000 },
];

const MaxRange = [
  { label: "250K", value: 250 },
  { label: "$500K", value: 500 },
  { label: "$1M", value: 1000 },
  { label: "$2.5M", value: 2500 },
  { label: "$5M", value: 5000 },
  { label: "$10M", value: 10000 },
  { label: "$25M", value: 25000 },
  { label: "$50M", value: 50000 },
  { label: "$50M", value: 100000 },
];

const AccountSetting = () => {
  const user = JSON.parse(localStorage.getItem("User"));
  const profileData = JSON.parse(localStorage.getItem("ProfileData"));

  const [AutoSelect, setAutoSelect] = useState(true);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitted },
    setError,
    control,
    setValue,
    trigger,
    watch,
    reset,
  } = useForm({
    defaultValues: {
      FirstName: user.first_name,
      LastName: user.last_name,
      Email: user.email,
      phone: user.phone,
      StreetAddress: user.location,
      PropertyInterests: {},
      PropertyRange: 0,
      PreferredLocation: [],
      capRateMin: 0,
      capRateMax: 30,
    },
  });

  const PreferredRangeMin = watch("minRange");
  const PreferredRangeMax = watch("maxRange");
  const capRateMin = watch("capRateMin");
  const capRateMax = watch("capRateMax");
  const PropertyRange = watch("PropertyRange");

  // PREFERRED LOCATION
  const [selectedStates, setSelectedStates] = useState([]);
  const handleSelectState = (state) => {
    if (!state?.name) return;
    if (!selectedStates.includes(state.name)) {
      setSelectedStates((prev) => [...prev, state.name]);
    }
  };
  const handleRemoveState = (name) => {
    setSelectedStates((prev) => prev.filter((stateName) => stateName !== name));
  };
  useEffect(() => {
    setValue("PreferredLocation", selectedStates);
    trigger("PreferredLocation");
  }, [selectedStates]);

  //   CHECK IF CITY EXIST OR NOT
  let citiess = cities.map((name, index) => ({
    id: index + 1,
    name,
  }));

  const StateSelectionHandler = (value) => {
    setValue("state", value.name, { shouldValidate: true });
    trigger("state");

    let state = value.name;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    try {
      if (state) {
        const stateShortNames = value.code;

        axios
          .get(`/states/${stateShortNames}.json`)
          .then((res) => {
            setCities(res.data);
          })
          .catch((error) => {
            console.error("Failed to load cities:", error);
            setCities([]);
          });
      }
    } catch (error) {
      console.error("Failed to load cities:", error);
    }
  };

  const CitySelectionHandler = (value) => {
    console.log("====================================");
    console.log(value.name);
    console.log("====================================");
    setValue("city", value.name, { shouldValidate: true });
    trigger("city");
  };


  const ProfileComplete = (Data) => {
    const selected = Object.values(Data.PropertyInterests || {}).filter(
      Boolean
    );

    if (selected.length === 0) {
      // Manually set error for the group
      setError("PropertyInterests", {
        type: "manual",
        message: "Please select at least one property interest.",
      });
      return;
    }

    // Remove unchecked options
    const cleaned = Object.entries(Data.PropertyInterests || {})
      .filter(([, val]) => val)
      .reduce((acc, [key, val]) => {
        acc[key] = val;
        return acc;
      }, {});

    Data.PropertyInterests = cleaned;
    console.log(Data);
    localStorage.setItem("ProfileData", JSON.stringify(Data));
    // localStorage.removeItem("User");
    localStorage.setItem("ProfileComplete", true);
    // reset(Data);
  };

  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
      <HeadShootBanner/>
      </section>
      {/* BANNER END   */}

      <section className="mt-7 sm:mt-10">
        {/* CONTACT Form */}
        <form
          onSubmit={handleSubmit(ProfileComplete)}
          className="flex flex-col gap-4"
        >
          <section className="flex flex-col justify-start items-start sm:flex-row gap-14 px-2">
            <div className="sm:w-[47%] w-[98%] flex flex-col gap-6">
              {/* Name  */}
              <div className="w-[100%] flex gap-5">
                <span>
                  <Inputs
                    register={register("FirstName", {
                      required: "First name is required",
                    })}
                    labels={"First Name"}
                    placeholder={"Enter your first name"}
                    error={errors.FirstName?.message}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("LastName", {
                      required: "Last Name is required",
                    })}
                    labels={"Last Name"}
                    placeholder={"Enter your Last name"}
                    error={errors.LastName?.message}
                  ></Inputs>
                </span>
              </div>
              <div className="flex gap-6 flex-col">
                <span>
                  <Inputs
                    register={register("Email", {
                      required: "Email is required",
                    })}
                    labels={"Email"}
                    placeholder={"Enter a valid email (e.g., you@email.com)"}
                    type={"email"}
                    error={errors.Email?.message}
                  ></Inputs>
                </span>

                {/* Phone Number*/}
                <Controller
                  name="phone"
                  control={control}
                  rules={{ required: "Phone number is required" }}
                  render={({ field }) => (
                    <CountrySelector
                      phone={field.value}
                      setPhone={field.onChange}
                      error={errors.phone?.message}
                    />
                  )}
                />
                <span>
                  <Inputs
                    register={register("StreetAddress", {
                      required: "StreetAddress is required",
                    })}
                    labels={"Street Address"}
                    placeholder={"Enter street address"}
                    error={errors.StreetAddress?.message}
                  ></Inputs>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <span>
                  <Selection
                    labels="Country"
                    Options={["USA"]}
                    defaultOption="Select"
                    name="Country"
                    register={register}
                    rules={{ required: "Please select an option." }}
                    error={errors.Country?.message}
                  />
                </span>
                <span className="flex flex-col justify-center">
                  <label className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                    State
                  </label>
                  <ComboboxSelector
                    style={`flex items-center bg-[#F3EEFF] text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-full h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none ${
                      errors.state ? "border border-red-500" : ""
                    }`}
                    icon={"top-3.5 right-3.5"}
                    options={statesArray}
                    onSelect={StateSelectionHandler}
                    placeholder={"Select state or province"}
                  />
                  {errors.state && (
                    <p className="text-red-500 text-sm mt-1">
                      State or province is required.
                    </p>
                  )}
                  <input
                    type="hidden"
                    {...register("state", { required: true })}
                  />
                </span>
                <span>
                  <Inputs
                    register={register("ZipCode", {
                      required: "ZipCode is required",
                    })}
                    labels={"Zip/Postal Code"}
                    placeholder={"Enter zip/postal code"}
                    error={errors.ZipCode?.message}
                  ></Inputs>
                </span>
                <span>
                  <label className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                    City
                  </label>
                  <ComboboxSelector
                    style={`flex items-center bg-[#F3EEFF] text-[#4b4b4b] font-[600] font-Urbanist text-[14px] w-full h-12 px-4 rounded-[6px] outline-none appearance-none cursor-pointer focus:outline-none ${
                      errors.city ? "border border-red-500" : ""
                    }`}
                    icon={"top-3.5 right-3.5"}
                    options={citiess}
                    onSelect={CitySelectionHandler}
                    placeholder={"Select Your City"}
                    disabled={citiess.length > 0 ? false : true}
                  ></ComboboxSelector>
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      City is required.
                    </p>
                  )}
                  <input
                    type="hidden"
                    {...register("city", { required: true })}
                  />
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <span>
                  <Inputs
                    register={register("PersonalWebsite", {
                      required: "PersonalWebsite is required",
                    })}
                    labels={"Personal Website"}
                    placeholder={"Enter zip/postal code"}
                    error={errors.PersonalWebsite?.message}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("Title", {
                      required: "Property Title is required",
                    })}
                    labels={"Property Title"}
                    placeholder={"Select your title"}
                    error={errors.Title?.message}
                  ></Inputs>
                </span>
                <Selection
                  labels={"Experience Level"}
                  defaultOption={"Select"}
                  Options={["Beginner", "Intermediate", "Experienced"]}
                  name="ExperienceLevel"
                  register={register}
                  rules={{ required: "Please select an option." }}
                  error={errors.ExperienceLevel?.message}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-[15px] font-[700] text-PurpleColor"
                >
                  Investor Status
                </label>
                <span className="flex items-center gap-3">
                  <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                    Non-Active
                  </h4>
                  <Controller
                    name="InvestorStatus"
                    control={control}
                    defaultValue={false}
                    render={({ field }) => <Switches {...field} />}
                  />
                  <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                    Active
                  </h4>
                </span>
              </div>
              {/* Location  */}

              {/* Message */}
            </div>
            <div className="sm:w-[50%] flex flex-col gap-6  ">
              <div>
                {/* CHECK BOXS  */}
                <label
                  htmlFor="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Property Interests
                </label>
                <Controller
                  name="PropertyInterests"
                  control={control}
                  rules={{
                    validate: (value) =>
                      Object.values(value || {}).some(Boolean) ||
                      "Select at least one",
                  }}
                  render={({
                    field: { value = {}, onChange },
                    fieldState: { error },
                  }) => (
                    <>
                      <div className="grid grid-cols-2 gap-1 sm:gap-2">
                        {PropertyInterest.map((type) => (
                          <Checkboxs
                            key={type}
                            labels={type}
                            checked={value[type] || false}
                            onChange={(checked) =>
                              onChange({ ...value, [type]: checked })
                            }
                          />
                        ))}
                      </div>
                      {error && (
                        <p className="text-red-500 text-sm mt-2">
                          {error.message}
                        </p>
                      )}
                    </>
                  )}
                />
              </div>
              <div className="w-[90%] ">
                <label
                  htmlFor="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Investment Range (${PropertyRange})
                </label>
                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="text"
                      className="block mb-1 text-[15px] font-[700] text-Paracolor"
                    >
                      Min
                    </label>
                    <Controller
                      name="minRange"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="bg-[#0c0c0c] border-[#F3EEFF] text-[#e6e6e6] font-[600] font-Urbanist text-[14px] w-20 h-8  rounded-[6px] px-1 outline-none   "
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            field.onChange(val);
                          }}
                        >
                          {MinRange.map(({ label, value }) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>

                  <Controller
                    name="PropertyRange"
                    control={control}
                    rules={{
                      validate: (value) =>
                        value > 0 || "Property Range must be greater than zero",
                    }}
                    render={({ field }) => (
                      <input
                        {...field}
                        type="range"
                        min={PreferredRangeMin || 0}
                        max={PreferredRangeMin || 100000}
                        className="w-full h-2 bg-gray-200 rounded-lg cursor-pointer"
                      />
                    )}
                  />

                  <div className="flex gap-2 items-center">
                    <label
                      htmlFor="text"
                      className="block mb-1 text-[15px] font-[700] text-Paracolor"
                    >
                      Max
                    </label>
                    <Controller
                      name="maxRange"
                      control={control}
                      render={({ field }) => (
                        <select
                          {...field}
                          className="bg-[#0c0c0c] border-[#F3EEFF] text-[#e6e6e6] font-[600] font-Urbanist text-[14px] w-20 h-8  rounded-[6px] px-1 outline-none   "
                          onChange={(e) => {
                            const val = Number(e.target.value);
                            field.onChange(val);
                          }}
                        >
                          {MaxRange.map(({ label, value }) => (
                            <option key={value} value={value}>
                              {label}
                            </option>
                          ))}
                        </select>
                      )}
                    />
                  </div>
                </div>
                {errors.PropertyRange && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.PropertyRange.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Investment Location
                </label>
                <div className="relative w-[100%]">
                  <div className="bg-[#F3EEFF] flex w-[90%] gap-3 items-center rounded-[6px] ">
                    <div className=" inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                      <svg
                        className="w-4 h-4 text-[#444444] "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 20 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                        />
                      </svg>
                    </div>
                    <div className="w-[80%]">
                      <SuggestedState
                        errors={errors}
                        register={register}
                        onSelect={handleSelectState}
                      />
                    </div>
                  </div>
                  {isSubmitted && errors.PreferredLocation && (
                    <p className="text-red-500 font-[500] text-[14px] pt-1 font-Urbanist tracking-wide">
                      {errors.PreferredLocation.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                {selectedStates.map((name) => (
                  <span
                    key={name}
                    className="flex items-center font-Urbanist text-[14px] font-semibold bg-[#E7E7E7] rounded-full px-4 py-2 gap-2"
                  >
                    {name}
                    <img
                      className="w-5 h-5 cursor-pointer"
                      src={CrossImage}
                      alt="Remove"
                      onClick={() => handleRemoveState(name)}
                    />
                  </span>
                ))}
              </div>

              <div className="w-[90%] ">
                <label
                  htmlFor="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Cap Rate %
                </label>
                <CapRatefield
                  capRateMin={capRateMin}
                  capRateMax={capRateMax}
                  control={control}
                  errors={errors}
                  trigger={trigger}
                ></CapRatefield>
              </div>

              <div>
                <Selection
                  labels="Preferred Investment Type "
                  Options={["Value-Add" , " Stabilized" , "Development"]}
                  defaultOption="Select"
                  name="PreferredType"
                  register={register}
                  rules={{ required: "Please select an option." }}
                  error={errors.PreferredType?.message}
                />
              </div>

              <div>
                <TextAreas
                  name="Bio"
                  label="About Us"
                  register={register("Bio", {
                    required: "Description is required",
                  })}
                  error={errors.Bio?.message}
                  placeholder="Tell us about your experience in real estate, your role, and your background..."
                />
              </div>
            </div>
          </section>
          {/* Send Message Button */}
          <div className="mt-1 w-[50%] sm:w-[46%] px-2">
            <button
              type="submit"
              className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]"
            >
              Save Details
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AccountSetting;
