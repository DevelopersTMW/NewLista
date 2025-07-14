import axios from "axios";
import { useEffect, useState } from "react";
import { Search, UserRoundCheck } from "lucide-react";
import { Controller, useForm, useWatch } from "react-hook-form";

// COMPONENETS
import { setUser } from "../../../Reducers/authSlice/authSlice.js";
import CapRatefield from "./Fields/CapRatefield.jsx";
import Inputs from "../../../Components/InputFields/Inputs";
import HeadShootBanner from "./Fields/HeadShoot&Banner.jsx";
import { useConfirmation } from "./Fields/Confirmation.jsx";
import Switches from "../../../Components/InputFields/Switch";
import Checkboxs from "../../../Components/InputFields/Checkboxs";
import TextAreas from "../../../Components/InputFields/TextAreas";
import Selection from "../../../Components/InputFields/Selection";
import AlertModal from "../../../Components/AlertModal/AlertModal.js";
import ComboboxSelector from "../../../Components/ComboboxSelector/ComboboxSelector.jsx";
import CountrySelector from "../../../Components/RegisterCountrySelector/CountrySelection";
import SuggestedState from "../../../Components/RegisterCountrySelector/SuggestedState.jsx";
import ConfirmationModal from "../../../Components/ConfirmationModal/ConfirmationModal.jsx";
import CitySearchForm from "./Fields/CitySelectionField.jsx";

// IMAGES
import CrossImage from "../../../assets/CrossImage.png";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../../Components/Spinner/Spinner.jsx";

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
  { id: 29, name: "New Hampshire", code: "NH" },
  { id: 30, name: "New Jersey", code: "NJ" },
  { id: 31, name: "New Mexico", code: "NM" },
  { id: 32, name: "New York", code: "NY" },
  { id: 33, name: "North Carolina", code: "NC" },
  { id: 34, name: "North Dakota", code: "ND" },
  { id: 35, name: "Ohio", code: "OH" },
  { id: 36, name: "Oklahoma", code: "OK" },
  { id: 37, name: "Oregon", code: "OR" },
  { id: 38, name: "Pennsylvania", code: "PA" },
  { id: 39, name: "Rhode Island", code: "RI" },
  { id: 40, name: "South Carolina", code: "SC" },
  { id: 41, name: "South Dakota", code: "SD" },
  { id: 42, name: "Tennessee", code: "TN" },
  { id: 43, name: "Texas", code: "TX" },
  { id: 44, name: "Utah", code: "UT" },
  { id: 45, name: "Vermont", code: "VT" },
  { id: 46, name: "Virginia", code: "VA" },
  { id: 47, name: "Washington", code: "WA" }, // U.S. State
  { id: 48, name: "Washington D.C.", code: "DC" }, // Federal District
  { id: 49, name: "West Virginia", code: "WV" },
  { id: 50, name: "Wisconsin", code: "WI" },
  { id: 51, name: "Wyoming", code: "WY" },
  { id: 52, name: "Puerto Rico", code: "PR" },
  { id: 53, name: "U.S. Virgin Islands", code: "VI" },
  { id: 54, name: "Guam", code: "GU" },
  { id: 55, name: "American Samoa", code: "AS" },
  { id: 56, name: "Northern Mariana Islands", code: "MP" },
];

const PropertyInterest = [
  { label: "Apartments / Multifamily", name: "Apartments / Multifamily" },
  { label: "Automotive Property", name: "Automotive Property" },
  { label: "Church", name: "Church" },
  { label: "Gas Station", name: "Gas Station" },
  { label: "Healthcare Facility", name: "Healthcare Facility" },
  { label: "Hospitality", name: "Hospitality" },
  { label: "Industrial Building", name: "Industrial Building" },
  { label: "Industrial Park", name: "Industrial Park" },
  { label: "Mixed Use Property", name: "Mixed Use Property" },
  { label: "Office Building", name: "Office Building" },
  { label: "Recreation Center", name: "Recreation Center" },
  { label: "Retail Center", name: "Retail Center" },
  { label: "School Building", name: "School Building" },
  { label: "Self-Storage Facility", name: "Self-Storage Facility" },
  { label: "Senior Living Facility", name: "Senior Living Facility" },
  { label: "Shopping Center", name: "Shopping Center" },
  {
    label: "Single-Tenant Retail Building",
    name: "Single-Tenant Retail Building",
  },
  { label: "Strip Center", name: "Strip Center" },
  { label: "Vacant Land", name: "Vacant Land" },
  { label: "Warehouse", name: "Warehouse" },
  { label: "Other", name: "Other" },
];

const InvestmentRange = [
  "Under $250K",
  "$250K – $500K",
  "$500K – $1M",
  "$1M – $2.5M",
  "$2.5M – $5M",
  "$5M – $10M",
  "$10M – $25M",
  "$25M – $50M",
  "Over $50M",
];

const AccountSetting = () => {
  // GET
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  if (!user) return <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />;

  // STATES
  const [loading, setloading] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");

  // REACT HOOK FOR
  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();
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
    getValues,
  } = useForm({
    defaultValues: {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
      phone: user.phone,
      address: user.address,
      property_interests: [],
      preferred_investment_range: 0,
      preferred_locations: null,
      banner: null,
      headshot: null,
      investor_status: "Non-Active",
      capRateMin: 0,
      capRateMax: 30,
    },
    mode: "onTouched",
  });
  const capRateMin = watch("capRateMin");
  const capRateMax = watch("capRateMax");

  const DefaultSelection = useWatch({ control, name: "state" });

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
    setValue("preferred_locations", selectedStates);
    trigger("preferred_locations");
  }, [selectedStates]);

  // Build cities option list
  const citiess = cities.map((name, index) => ({
    id: index + 1,
    name,
  }));

  const StateSelectionHandler = (value) => {
    setValue("state", value.name, { shouldValidate: true });
    trigger("state");
    // reset cities
    let state = value.name;
    setSelectedState(state);
    setSelectedCity("");
    setCities([]);

    if (state) {
      const stateShortNames = value.code;
      axios
        .get(`/states/${stateShortNames}.json`)
        .then((res) => setCities(res.data))
        .catch((error) => {
          console.error("Failed to load cities:", error);
          setCities([]);
        });
    }
  };
  const selectedCitys = useWatch({ control, name: "city" });
  const CitySelectionHandler = (value) => {
    setValue("city", value.name, { shouldValidate: true });
    trigger("city");
  };

  const [banner, setbanner] = useState();
  const [Logo, setLogo] = useState();
  useEffect(() => {
    const loadInitialData = async () => {
      try {
        const res = await axios.get(`${ApiKey}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = res.data;
        console.log(data);

        setbanner(res.data.banner);
        setLogo(res.data.headshot);

        const defaultState = statesArray.find(
          (state) => state.name === res.data.state
        );
        if (defaultState) {
          StateSelectionHandler(defaultState);
        }
        reset({
          ...data,
          banner: import.meta.env.VITE_IMAGE_KEY + data.banner || null,
          headshot: import.meta.env.VITE_IMAGE_KEY + data.headshot || null,
          property_interests: data.property_interests || [],
          preferred_locations: data.preferred_locations || null,
          preferred_cap_rate_min: data.preferred_cap_rate_min,
          preferred_cap_rate_max: data.preferred_cap_rate_max,
          capRateMin: data.preferred_cap_rate_min,
          capRateMax: data.preferred_cap_rate_max,
        });

        setSelectedStates(data.preferred_locations || []);
      } catch (err) {
        console.error("Failed to fetch user profile:", err);
      }
    };
    loadInitialData();
  }, []);

  const loadInitialData = async () => {
    try {
      const res = await axios.get(`${ApiKey}/user`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = res.data;
      console.log(data);

      setbanner(res.data.banner);
      setLogo(res.data.headshot);

      setSelectedState(res.data.state);

      reset({
        ...data,
        banner: import.meta.env.VITE_IMAGE_KEY + data.banner || null,
        headshot: import.meta.env.VITE_IMAGE_KEY + data.headshot || null,
        property_interests: data.property_interests || [],
        preferred_locations: data.preferred_locations || null,
        preferred_cap_rate_min: data.preferred_cap_rate_min,
        preferred_cap_rate_max: data.preferred_cap_rate_max,
        capRateMin: data.preferred_cap_rate_min,
        capRateMax: data.preferred_cap_rate_max,
      });

      setSelectedStates(data.preferred_locations || []);
    } catch (err) {
      console.error("Failed to fetch user profile:", err);
    }
  };

  // COMPLETE PROFILE AND SAVE DATA IN API
  const ProfileComplete = async (data) => {
    function formatUSPhone(phone) {
      const cleaned = phone.replace(/\D/g, "");
      const match = cleaned.match(/^1?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        return `+1 (${match[1]}) ${match[2]}-${match[3]}`;
      }
      return phone;
    }

    const formatted = formatUSPhone(data.phone);
    const confirmed = await confirm();
    if (confirmed) {
      try {
        setloading(true);
        const response = await axios.post(
          `${ApiKey}/complete-profile`,
          {
            first_name: data.first_name,
            last_name: data.last_name,
            phone: formatted,
            email: data.email,
            address: data.address,
            personal_website: data.personal_website,
            title: data.title,
            property_interests: data.property_interests,
            property_interests_custom: null,
            preferred_investment_range: data.preferred_investment_range,
            preferred_locations: data.preferred_locations,
            preferred_investment_type: data.preferred_investment_type,
            preferred_cap_rate_min: Number(data.capRateMin),
            preferred_cap_rate_max: Number(data.capRateMax),
            investor_status: data.investor_status,
            experience_level: data.experience_level,
            bio: data.bio,
            headshot: data.headshot,
            banner: data.banner,
            country: data.country,
            city: data.city,
            state: data.state,
            zip: data.zip,
            company_name: data.company_name,
            years_of_experiance: data.years_of_experiance,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log(response);

        localStorage.setItem("User", JSON.stringify(response.data.user));
        localStorage.setItem(
          "ProfileComplete",
          response.data.user.profile_complete
        );
        reset(response.data.user);
        if (response.status === 200) {
          dispatch(setUser(response.data.user));
        }
        loadInitialData();

        AlertModal({
          icon: "success",
          title: "Thank You",
          iconColor: "#703BF7",
          text: "Profile Complete Successfully",
        });
      } catch (error) {
        setloading(false);
        const ErrorMessage = error.response.data.message;
        AlertModal({
          icon: "error",
          title: "No Submit",
          iconColor: "#703BF7",
          text: ErrorMessage,
        });
      } finally {
        setloading(false);
      }
    }
  };

  if (loading)
    return (
      <div className="flex justify-center items-center !h-[75vh]">
        <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
      </div>
    );

  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <HeadShootBanner
          defaultHeadshot={Logo}
          defaultBanner={banner}
          setValue={setValue}
        />
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
                  rules={{
                    required: "Phone number is required",
                    validate: (value) =>
                      !value ||
                      /^[0-9()+-\s]+$/.test(value) ||
                      "Invalid phone number",
                  }}
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
                    register={register("address", {
                      required: "Street Address is required",
                    })}
                    labels={"Street Address"}
                    placeholder={"Enter street address"}
                    error={errors.address?.message}
                  ></Inputs>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <span>
                  <Selection
                    labels="Country"
                    Options={["USA"]}
                    defaultOption="Select"
                    name="country"
                    register={register}
                    rules={{ required: "Please select an option." }}
                    error={errors.country?.message}
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
                    value={DefaultSelection}
                    type="Acount"
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
                    register={register("zip", {
                      required: "ZipCode is required",
                    })}
                    labels={"Zip/Postal Code"}
                    placeholder={"Enter zip/postal code"}
                    error={errors.zip?.message}
                  ></Inputs>
                </span>
                <span>
                  <label className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px]">
                    City
                  </label>
                  <CitySearchForm
                    error={errors.city}
                    setValue={setValue}
                    watch={watch}
                    register={register}
                    suggestedCities={citiess}
                  ></CitySearchForm>
                  {errors.city && (
                    <p className="text-red-500 text-sm mt-1">
                      City is required.
                    </p>
                  )}
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <span>
                  <Inputs
                    register={register("personal_website", {
                      required: false,
                    })}
                    labels={"Personal Website"}
                    placeholder={"Enter your website URL (optional)"}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("title", {
                      required: "Property Title is required",
                    })}
                    labels={"User Title"}
                    placeholder={"Enter Your title"}
                    error={errors.title?.message}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    register={register("company_name", {
                      required: "Company Name is required",
                    })}
                    labels={"Company Name"}
                    placeholder={"Enter Your Company Name"}
                    error={errors.company_name?.message}
                  ></Inputs>
                </span>
                <div className="grid grid-cols-2 gap-5">
                  <span>
                    <Selection
                      labels={"Experience Level"}
                      defaultOption={"Select"}
                      Options={["Beginner", "Intermediate", "Experienced"]}
                      name="experience_level"
                      register={register}
                      rules={{ required: "Please select an option." }}
                      error={errors.experience_level?.message}
                    />
                  </span>
                  <div>
                    <Inputs
                      register={register("years_of_experiance", {
                        required: "Year Of Experince is required",
                      })}
                      type="number"
                      labels={"Years Of Experience"}
                      placeholder={"Enter Years Of Experience"}
                      error={errors.years_of_experiance?.message}
                    ></Inputs>
                  </div>
                </div>
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
                        value={value === "Active"}
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
              {/* <div className="grid grid-cols-2">
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[15px] font-[700] text-PurpleColor"
                  >
                    Show Phone Number
                  </label>
                  <span className="flex items-center gap-3">
                    <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                      No
                    </h4>
                    <Controller
                      name="show_phone"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Switches
                          value={value}
                          onChange={(checked) => onChange(checked)}
                        />
                      )}
                    />
                    <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                      Yes
                    </h4>
                  </span>
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-[15px] font-[700] text-PurpleColor"
                  >
                    Show Email
                  </label>
                  <span className="flex items-center gap-3">
                    <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                      No
                    </h4>
                    <Controller
                      name="show_email"
                      control={control}
                      render={({ field: { value, onChange } }) => (
                        <Switches
                          value={value}
                          onChange={(checked) => onChange(checked)}
                        />
                      )}
                    />
                    <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                      Yes
                    </h4>
                  </span>
                </div>
              </div> */}
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
                  defaultValue={[]}
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
                            const isChecked = selected.includes(type.name);

                            return (
                              <Checkboxs
                                key={type.name}
                                labels={type.label}
                                checked={isChecked}
                                onChange={(checked) => {
                                  const updated = checked
                                    ? [...selected, type.name]
                                    : selected.filter(
                                        (item) => item !== type.name
                                      );
                                  field.onChange(updated);
                                }}
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
                <div>
                  <Selection
                    labels={"Preferred Investment Range"}
                    defaultOption={"Select"}
                    Options={InvestmentRange}
                    name="preferred_investment_range"
                    register={register}
                    rules={{ required: "Please select an option." }}
                    error={errors.preferred_investment_range?.message}
                  />
                </div>

                {/* <div className="flex items-center gap-2">
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
                </div> */}
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
                      <Search />
                    </div>
                    <div className="w-[80%]">
                      <SuggestedState
                        errors={errors}
                        register={register}
                        onSelect={handleSelectState}
                      />
                    </div>
                  </div>
                  {isSubmitted && errors.preferred_locations && (
                    <p className="text-red-500 font-[500] text-[14px] pt-1 font-Urbanist tracking-wide">
                      {errors.preferred_locations.message}
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
                  getValues={getValues}
                ></CapRatefield>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Investment type
                </label>
                <Controller
                  name="preferred_investment_type"
                  control={control}
                  defaultValue={[]}
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

                    const options = ["Value-Add", "Stabilized", "Development"];

                    return (
                      <>
                        <div className="grid grid-cols-3 gap-2">
                          {options.map((type) => {
                            const isChecked = selected.includes(type);

                            return (
                              <Checkboxs
                                key={type}
                                labels={type} // keep as your component expects
                                checked={isChecked}
                                onChange={(checked) => {
                                  const updated = checked
                                    ? [...selected, type]
                                    : selected.filter((item) => item !== type);
                                  field.onChange(updated);
                                }}
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
              className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px] hover-btn  hover-btn-purple"
            >
              <span>Save Details</span>
            </button>
          </div>
        </form>

        {/* MODAL */}
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
