import React, { useState } from "react";
import AddPropertyBanner from "../../../assets/AddPropertyBanner.jpg";
import AccountSettingImage from "../../../assets/AccountSettingImage.png";
import CrossImage from "../../../assets/CrossImage.png";
import { Select, Switch, Textarea } from "@headlessui/react";
import Checkboxs from "../../../Components/InputFields/Checkboxs";
import CountrySelector from "../../../Components/RegisterCountrySelector/CountrySelection";
import Inputs from "../../../Components/InputFields/Inputs";
import Selection from "../../../Components/InputFields/Selection";
import TextAreas from "../../../Components/InputFields/TextAreas";

const AccountSetting = () => {
  const [phone, setPhone] = useState();

  return (
    <>
      {/* BANNER START  */}
      <section className=" py-5">
        <div>
          <img
            className="h-[30vh] rounded-[10px] object-cover w-[100%]"
            src={AddPropertyBanner}
            alt=""
          />
        </div>
        <div className="ml-4 sm:ml-12 -mt-28">
          <img
            className="border-solid w-[49%] sm:w-[19%]  border-white border-[2px]  rounded-[15px]"
            src={AccountSettingImage}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}

      {/* FORM  */}

      <section className="mt-7 sm:mt-10">
        {/* CONTACT FORM */}
        <form className="flex flex-col gap-4">
          <section className="flex flex-col justify-start items-start sm:flex-row gap-14 px-2">
            <div className="sm:w-[47%] w-[98%] flex flex-col gap-6">
              {/* Name  */}
              <div className="w-[100%] flex gap-5">
                <span>
                  <Inputs
                    labels={"First Name"}
                    placeholder={"Enter your first name"}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    labels={"Last Name"}
                    placeholder={"Enter your Last name"}
                  ></Inputs>
                </span>
              </div>
              <div className="flex gap-6 flex-col">
                <span>
                  <Inputs
                    labels={"Email"}
                    placeholder={"Enter a valid email (e.g., you@email.com)"}
                    type={"email"}
                  ></Inputs>
                </span>

                <span>
                  <Inputs
                    labels={"Create Password"}
                    placeholder={"Create a password"}
                    type={"password"}
                  ></Inputs>
                </span>
                <span>
                  <Inputs
                    labels={"Re Enter Password"}
                    placeholder={"Enter your password"}
                    type={"password"}
                  ></Inputs>
                </span>

                {/* Phone Number*/}
                <CountrySelector setPhone={setPhone} phone={phone} />

                <span>
                  <Inputs
                    labels={"Street Address"}
                    placeholder={"Enter street address"}
                  ></Inputs>
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <span>
                  <Selection labels={"Country"} defaultOption={"USA"} />
                </span>
                <span>
                  <Selection
                    labels={"State/Province"}
                    defaultOption={"Select state or province"}
                  />
                </span>
                <span>
                  <Inputs
                    labels={"Zip/Postal Code"}
                    placeholder={"Enter zip/postal code"}
                  ></Inputs>
                </span>
                <span>
                  <Selection
                    labels={"Enter City"}
                    defaultOption={"Enter city"}
                  />
                </span>
              </div>
              <div className="flex flex-col gap-6">
                <span>
                  <Inputs
                    labels={"Personal Website"}
                    placeholder={"Enter zip/postal code"}
                  ></Inputs>
                </span>
                <span>
                   <Selection
                  labels={"Select your title"}
                  defaultOption={"Real Estate Seller"}
                />
                </span>
                <Selection
                  labels={"Experience Level"}
                  defaultOption={"Intermediate"}
                />
              </div>

              <div>
                <label
                  for="email"
                  className="block mb-2 text-[15px] font-[700] text-PurpleColor"
                >
                  Investor Status
                </label>
                <span className="flex items-center gap-3">
                  <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                    Non-Active
                  </h4>
                  <Switch className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor">
                    <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                  </Switch>
                  <h4 className="font-Urbanist font-[500] text-[16px] text-[#444444]">
                    Active
                  </h4>
                </span>
              </div>
              {/* Location  */}

              {/* Message */}
            </div>
            <div className="sm:w-[50%] flex flex-col gap-9  ">
              <div>
                {/* CHECK BOXS  */}
                <label
                  for="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Investment Range
                </label>
                <div className="flex gap-1 sm:gap-14">
                  <span className="flex flex-col gap-2.5 justify-center">
                    <Checkboxs labels={"Apartment"}></Checkboxs>
                    <Checkboxs labels={"Retail"}></Checkboxs>
                    <Checkboxs labels={"Mixed-Use Property"}></Checkboxs>
                    <Checkboxs labels={"Office Building"}></Checkboxs>
                    <Checkboxs labels={"Hospitality"}></Checkboxs>
                    <Checkboxs labels={"Land"}></Checkboxs>
                    <Checkboxs labels={"Others"}></Checkboxs>
                  </span>
                  <span className="flex flex-col gap-2.5">
                    <Checkboxs labels={"Shopping/Strip Center"}></Checkboxs>
                    <Checkboxs labels={"Industrial Building"}></Checkboxs>
                    <Checkboxs labels={"Healthcare"}></Checkboxs>
                    <Checkboxs labels={"Storage Facility"}></Checkboxs>
                    <Checkboxs labels={"Automotive"}></Checkboxs>
                    <Checkboxs labels={"Investment Homes"}></Checkboxs>
                  </span>
                </div>
              </div>
              <div className="w-[90%] ">
                <label
                  for="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Property Interests
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <label
                      for="text"
                      className="block mb-1 text-[15px] font-[700] text-Paracolor"
                    >
                      Min
                    </label>
                    <Select
                      className={
                        "bg-[#0c0c0c] border-[#F3EEFF] text-[#e6e6e6] font-[600] font-Urbanist text-[14px] w-20 h-8  rounded-[6px] px-1 outline-none  "
                      }
                      name="status"
                      aria-label="Project status"
                    >
                      <option className="text-[#c4c4c4]" value="active">
                        $250K
                      </option>
                      <option className="text-[#c4c4c4]" value="active">
                        Active
                      </option>
                      <option className="text-[#c4c4c4]" value="paused">
                        Paused
                      </option>
                      <option className="text-[#c4c4c4]" value="delayed">
                        Delayed
                      </option>
                      <option className="text-[#c4c4c4]" value="canceled">
                        Canceled
                      </option>
                    </Select>
                  </div>

                  <input
                    id="minmax-range"
                    type="range"
                    min="0"
                    max="10"
                    value="5"
                    class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />

                  <div className="flex gap-2 items-center">
                    <label
                      for="text"
                      className="block mb-1 text-[15px] font-[700] text-Paracolor"
                    >
                      Max
                    </label>
                    <Select
                      className={
                        "bg-[#0c0c0c] border-[#F3EEFF] text-[#e6e6e6] font-[600] font-Urbanist text-[14px] w-20 h-8  rounded-[6px] px-1 outline-none   "
                      }
                      name="status"
                      aria-label="Project status"
                    >
                      <option className="text-[#c4c4c4]" value="active">
                        $3Mn
                      </option>
                      <option className="text-[#c4c4c4]" value="active">
                        Active
                      </option>
                      <option className="text-[#c4c4c4]" value="paused">
                        Paused
                      </option>
                      <option className="text-[#c4c4c4]" value="delayed">
                        Delayed
                      </option>
                      <option className="text-[#c4c4c4]" value="canceled">
                        Canceled
                      </option>
                    </Select>
                  </div>
                </div>
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-3 text-[15px] font-[700] text-PurpleColor"
                >
                  Preferred Investment Location
                </label>
                <div class="relative  w-[100%]">
                  <div class="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
                    <svg
                      class="w-4 h-4 text-[#444444] "
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    class=" w-[90%] text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold py-3 pl-11 rounded-[10px] text-[15px] bg-[#F3EEFF] outline-none"
                    placeholder="Search by name, company, location "
                    required
                  />
                </div>
              </div>
              <div className="flex gap-2 flex-wrap">
                <span className="flex items-center font-Urbanist text-[14px] font-semibold bg-[#E7E7E7] rounded-full px-4 py-2 gap-2">
                  Location 1 <img className="w-5 h-5" src={CrossImage} alt="" />
                </span>
                <span className="flex items-center font-Urbanist text-[14px] font-semibold bg-[#E7E7E7] rounded-full px-4 py-2 gap-2">
                  Location 2 <img className="w-5 h-5" src={CrossImage} alt="" />
                </span>
                <span className="flex items-center font-Urbanist text-[14px] font-semibold bg-[#E7E7E7] rounded-full px-4 py-2 gap-2">
                  Location 3 <img className="w-5 h-5" src={CrossImage} alt="" />
                </span>
                <span className="flex items-center font-Urbanist font-semibold text-[14px] bg-[#E7E7E7] rounded-full px-4 py-2 gap-2">
                  Location 4 <img className="w-5 h-5" src={CrossImage} alt="" />
                </span>
                <span className="flex items-center font-Urbanist font-semibold text-[14px] bg-[#E7E7E7] rounded-full px-4 py-2 gap-2">
                  Location 5 <img className="w-5 h-5" src={CrossImage} alt="" />
                </span>
              </div>
              <div>
                <TextAreas
                  label={"About You"}
                  placeholder={
                    "Tell us about your experience in real estate, your role, and your background..."
                  }
                ></TextAreas>
              </div>
            </div>
          </section>
          {/* Send Message Button */}
          <div className="mt-1 w-[50%] sm:w-[46%] px-2">
            <button className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]">
              Save Details
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default AccountSetting;
