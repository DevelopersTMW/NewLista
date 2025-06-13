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
import { Controller, useForm, useWatch } from "react-hook-form";
import Switches from "../../../Components/InputFields/Switch";
import { useSelector } from "react-redux";
import CapRatefield from "./Fields/CapRatefield.jsx";

import ComboboxSelector from "../../../Components/ComboboxSelector/ComboboxSelector.jsx";
import axios from "axios";
import SuggestedState from "../../../Components/RegisterCountrySelector/SuggestedState.jsx";
import HeadShootBanner from "./Fields/HeadShoot&Banner.jsx";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal.jsx";
import { useConfirmation } from "./Fields/Confirmation.jsx";
import { UserRoundCheck } from "lucide-react";
import AlertModal from "../../../Components/AlertModal/AlertModal.js";

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
  const token = localStorage.getItem("token");
  const [AutoSelect, setAutoSelect] = useState(true);
  const ApiKey = import.meta.env.VITE_API_KEY;
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
    defaultValues:  {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      location: user.location,
      property_interests: [],
      preferred_investment_range: 0,
      PreferredLocation: [],
      capRateMin: 0,
      capRateMax: 30,
      banner: null,
      headshot: null,
      investor_status: "Non-Active",
    },
  });

  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();

  const PreferredRangeMin = watch("minRange");
  const PreferredRangeMax = watch("maxRange");
  const capRateMin = watch("capRateMin");
  const capRateMax = watch("capRateMax");
  const bannerImage = watch("banner");
  const profileImage = watch("headshot");
  const PropertyRange = watch("preferred_investment_range");
  const investorStatus = useWatch({ control, name: "investor_status" });

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
    setValue("city", value.name, { shouldValidate: true });
    trigger("city");
  };

  // Actual form logic
  const saveData = async (data) => {
    console.log(data);
    try {
      const response = await axios.post(
        `${ApiKey}/complete-profile`,
        {
          first_name: data.first_name,
          last_name: data.last_name,
          phone: data.phone,
          company_name: null,
          email: data.email,
          location: data.location,
          personal_website: data.personal_website,
          title: data.title,
          property_interests: data.property_interests,
          property_interests_custom: null,
          preferred_investment_range: data.preferred_investment_range,
          preferred_locations: data.preferred_locations,
          preferred_investment_type: data.preferred_investment_type,
          preferred_cap_rate_min: data.capRateMin,
          preferred_cap_rate_max: data.capRateMax,
          investor_status: data.investor_status,
          experience_level: data.experience_level,
          bio: data.bio,
          headshot: data.headshot,
          banner: data.banner,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data", 
          },
        }
      );
      localStorage.setItem("User", JSON.stringify(response.data.user));
      localStorage.setItem("ProfileComplete", response.data.user.profile_complete );
      console.log(response);
      reset(response.data.user);

      AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: "Prfile Complete Successfully",
      });
    } catch (error) {
      reset(data)
      console.log(error);
      const ErrorMessage = error.response.data.message;
      console.log(ErrorMessage);
      AlertModal({
        icon: "error",
        title: "No Submit",
        iconColor: "#703BF7",
        text: ErrorMessage,
      });
    }
  };

  const ProfileComplete = async (Data) => {
    // Remove unchecked options
    const cleaned = Object.entries(Data.property_interests || {})
      .filter(([, val]) => val)
      .reduce((acc, [key, val]) => {
        acc[key] = val;
        return acc;
      }, {});

    Data.property_interests = cleaned;
    const confirmed = await confirm();
    if (confirmed) {
      saveData(Data);
    } else {
      console.log("❌ Submission cancelled by user");
    }
  };

  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <HeadShootBanner setValue={setValue} />
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
                    register={register("first_name", {
                      required: "First name is required",
                    })}
                    labels={"First Name"}
                    placeholder={"Enter your first name"}
                    error={errors.first_name?.message}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("last_name", {
                      required: "Last Name is required",
                    })}
                    labels={"Last Name"}
                    placeholder={"Enter your Last name"}
                    error={errors.last_name?.message}
                  ></Inputs>
                </span>
              </div>
              <div className="flex gap-6 flex-col">
                <span>
                  <div className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px] ">
                    Email
                  </div>
                  <div className="bg-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-full px-4 rounded-[6px] h-12 flex items-center cursor-not-allowed">
                    {user.email}
                  </div>
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
                    register={register("location", {
                      required: "StreetAddress is required",
                    })}
                    labels={"Street Address"}
                    placeholder={"Enter street address"}
                    error={errors.location?.message}
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
                    register={register("personal_website", {
                      required: "PersonalWebsite is required",
                    })}
                    labels={"Personal Website"}
                    placeholder={"Enter zip/postal code"}
                    error={errors.personal_website?.message}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("title", {
                      required: "Property Title is required",
                    })}
                    labels={"User Title"}
                    placeholder={"Select your title"}
                    error={errors.title?.message}
                  ></Inputs>
                </span>
                <Selection
                  labels={"Experience Level"}
                  defaultOption={"Select"}
                  Options={["Beginner", "Intermediate", "Experienced"]}
                  name="experience_level"
                  register={register}
                  rules={{ required: "Please select an option." }}
                  error={errors.experience_level?.message}
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
                    name="investor_status"
                    control={control}
                    render={({ field: { value, onChange } }) => (
                      <Switches
                        value={value === "Active"} // convert "Active"/"Non-Active" to boolean
                        onChange={(checked) =>
                          onChange(checked ? "Active" : "Non-Active")
                        }
                      />
                    )}
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
                  name="property_interests"
                  control={control}
                  defaultValue={[]} // safe default
                  rules={{
                    validate: (value) =>
                      Array.isArray(value) && value.length > 0
                        ? true
                        : "Select at least one option",
                  }}
                  render={({ field, fieldState: { error } }) => {
                    const selected = Array.isArray(field.value)
                      ? field.value
                      : [];

                    return (
                      <>
                        <div className="grid grid-cols-2 gap-2">
                          {PropertyInterest.map((type) => {
                            const isChecked = selected.includes(type);

                            return (
                              <Checkboxs
                                key={type}
                                labels={type}
                                checked={isChecked}
                                onChange={(checked) => {
                                  const updated = checked
                                    ? [...selected, type]
                                    : selected.filter((item) => item !== type);
                                  field.onChange(updated);
                                }}
                                error={error?.message}
                              />
                            );
                          })}
                        </div>

                        {error && (
                          <p className="text-red-500 text-sm mt-2">
                            {error.message}
                          </p>
                        )}
                      </>
                    );
                  }}
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
                    name="preferred_investment_range"
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
                  Options={["Value-Add", " Stabilized", "Development"]}
                  defaultOption="Select"
                  name="preferred_investment_type"
                  register={register}
                  rules={{ required: "Please select an option." }}
                  error={errors.preferred_investment_type?.message}
                />
              </div>

              <div>
                <TextAreas
                  name="bio"
                  label="About Us"
                  register={register("bio", {
                    required: "Description is required",
                  })}
                  error={errors.bio?.message}
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
        {/* Modal injected here */}
        <ConfirmationModal
          isOpen={isOpen}
          onClose={handleCancel}
          onConfirm={handleConfirm}
          message="Do you want to save the details?"
          confirmLabel="Yes, Save"
          icon={
            <UserRoundCheck className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
          }
          style="bg-PurpleColor"
        />
      </section>
    </>
  );
};

export default AccountSetting;
