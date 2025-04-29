import React from "react";
import { Switch, Textarea } from "@headlessui/react";
// COMPONENTS 
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Radio from "../../Components/InputFields/Radio";
import Inputs from "../../Components/InputFields/Inputs";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Selection from "../../Components/InputFields/Selection";
import Checkboxs from "../../Components/InputFields/Checkboxs";
// IMAGES
import ImagePlaceholder from "../../assets/ImagePlaceholder.png";
import LeaseBgImage from "../../assets/LeaseForm.jpg";


const LeaseForm = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* BANNER START  */}
      <section>
        <div className="relative">
        <div className="bg-black absolute w-[100%] h-full opacity-20"></div>
          <img
            className="h-[40vh] object-cover w-[100%]"
            src={LeaseBgImage}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}

      {/* LeaseForm FORM START  */}
      <section className="px-20 py-20">
        <div className="relative ">
           
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[43px] leading-[48px]">
            Add a Property
          </h1>
        </div>
        <form action="" className="flex flex-col gap-7">
          {/* RADIO BUTTONS  */}
          <div className="flex items-center gap-6 mt-7">
            <Radio Labels={"For Sale"}></Radio>
            <Radio Labels={"For Lease"}></Radio>
            <Radio Labels={"Both"}></Radio>
          </div>
          {/* PROPERTY DETAILS  */}
          <div className="flex gap-5 w-[100%]">
            <span className="w-[45%]">
              <Selection
                defaultOption={
                  "Select property type (e.g., Commercial, Office Building)"
                }
                labels={"Property Type"}
              ></Selection>
            </span>
            <span className="w-[45%]">
              <Selection
                defaultOption={
                  "Select sub-property type if applicable (e.g., Townhomes, Retail)"
                }
                labels={"Sub-Property Type"}
              ></Selection>
            </span>
            <span className="w-[10%]">
              <Selection defaultOption={"Active"} labels={"Status"}></Selection>
            </span>
          </div>
          {/* BASIC INFO  */}
          <div className="border-[#BBBBBB] border-b-[1px] border-solid pb-7">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Basic Information
              </h1>
            </div>
            <Inputs
              labels={"Property Title"}
              type={"text"}
              placeholder={"Enter property title (e.g., Sunset Acres)"}
            ></Inputs>
          </div>
          {/* ADDRESS  */}
          <div className="flex flex-col gap-7 border-[#BBBBBB] border-b-[1px] border-solid pb-8">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Location Details
              </h1>
              <Inputs
                labels={"Street Address"}
                type={"text"}
                placeholder={"Enter property address"}
              ></Inputs>
            </div>
            <div className="w-[100%] flex gap-5">
              <span className="w-[25%]">
                <Inputs
                  labels={"City"}
                  type={"text"}
                  placeholder={"Enter city name"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Inputs
                  labels={"State/Province"}
                  type={"text"}
                  placeholder={"Enter state or province"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Inputs
                  labels={"ZIP/Postal Code"}
                  type={"number"}
                  placeholder={"Enter ZIP or postal code"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Selection
                  labels={"Country"}
                  defaultOption={"Select Country"}
                ></Selection>
              </span>
            </div>
          </div>
          {/* Lease Details */}
          <div className="py-2 border-[#BBBBBB] border-b-[1px] border-solid pb-8">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Lease Details
              </h1>
            </div>
            <div className="flex flex-col mb-6 gap-1">
              <label
                for="email"
                className="block mb-1 text-[15px] font-[600] text-[#222222] w-[100%]"
              >
                Lease Type
              </label>
              <div className="flex items-center gap-6 ">
                <Radio Labels={"For Sale"}></Radio>
                <Radio Labels={"For Lease"}></Radio>
                <Radio Labels={"Both"}></Radio>
              </div>
            </div>

            <div className="flex gap-5">
              <span className="w-[25%]">
                <Inputs
                  labels={"Rental Rate"}
                  type={"text"}
                  placeholder={"Enter rental rate (e.g., $2,500 per month)"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Inputs
                  labels={"Lease Term"}
                  type={"text"}
                  placeholder={"Enter lease term (e.g., 3-5 years)"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Inputs
                  labels={"Common Area Maintainance Cost"}
                  type={"text"}
                  placeholder={"Enter CAM cost (e.g., $100/month)"}
                ></Inputs>
              </span>
              <span className="w-[25%]">
                <Inputs
                  labels={"Tenancy Type"}
                  type={"text"}
                  placeholder={"Multiple Tenant"}
                ></Inputs>
              </span>
            </div>
          </div>
          {/* Property Specifications */}
          <div className="flex flex-col gap-7">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Property Specifications
              </h1>
              <div className="flex gap-5">
                <span className="w-[50%]">
                  <Inputs
                    labels={"Building Area"}
                    type={"text"}
                    placeholder={"Enter total building area (in Sq. Ft.)"}
                  ></Inputs>
                </span>
                <span className="w-[50%]">
                  <Inputs
                    labels={"Number of Units"}
                    type={"text"}
                    placeholder={"Enter number of available units"}
                  ></Inputs>
                </span>
                <span className="w-[50%]">
                  <Inputs
                    labels={"Building Levels"}
                    type={"text"}
                    placeholder={"Enter number of building levels"}
                  ></Inputs>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex gap-5 border-[#BBBBBB] border-b-[1px] border-solid pb-8">
            <span className="w-[50%]">
              <Inputs
                labels={"Parking Spaces"}
                type={"text"}
                placeholder={"Enter number of available parking spaces"}
              ></Inputs>
            </span>
            <span className="w-[50%]">
              <Inputs
                labels={"Year Built"}
                type={"text"}
                placeholder={"Enter year built (e.g., 2008)"}
              ></Inputs>
            </span>
          </div>
          {/* Property Description & Highlights */}
          <div className="border-[#BBBBBB] border-b-[1px] border-solid pb-8">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Property Description & Highlights
              </h1>
              <div className="flex flex-col gap-7">
                <span className="w-[100%]">
                  <Inputs
                    labels={"Key Highlights"}
                    type={"text"}
                    placeholder={
                      "Enter top highlights (e.g., Prime location, newly renovated, high foot traffic, secure access, etc.)"
                    }
                  ></Inputs>
                </span>
                <span>
                  <label
                    htmlFor=""
                    className="block mb-1 text-[15px] font-[600] text-[#222222] w-[100%]"
                  >
                    Property Description
                  </label>
                  <Textarea
                    className={
                      "bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-28 px-4 rounded-[6px] outline-none py-4"
                    }
                    placeholder="Provide detailed property information, features, nearby amenities, and any unique selling points."
                    name="description"
                  ></Textarea>
                </span>
              </div>
            </div>
          </div>
          {/* Unit-Specific Details */}
          <div className="border-[#BBBBBB] border-b-[1px] border-solid pb-8">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Unit-Specific Details (For Multi-Unit Listings Only)
              </h1>
            </div>
            <div className="flex gap-5">
              <span className="w-[50%]">
                <Inputs
                  labels={"Unit Number"}
                  type={"text"}
                  placeholder={"Enter unit number (e.g., Unit 5)"}
                ></Inputs>
              </span>
              <span className="w-[50%]">
                <Inputs
                  labels={"Unit Size"}
                  type={"text"}
                  placeholder={"Enter size in Sq. Ft./Sq. M."}
                ></Inputs>
              </span>
              <span className="w-[50%]">
                <Inputs
                  labels={"Rental Rate for Unit"}
                  type={"text"}
                  placeholder={"Enter rate per month"}
                ></Inputs>
              </span>
            </div>
            <div className="w-[100%] flex gap-5 mt-6">
              <span className="w-[50%]">
                <Selection
                  labels={"Rent Terms"}
                  defaultOption={"Annually"}
                ></Selection>
              </span>
              <span className="w-[50%]">
                <Selection
                  labels={"Condition"}
                  defaultOption={"Good"}
                ></Selection>
              </span>
            </div>
          </div>
          {/* Amenities & Features */}
          <div className="flex flex-col gap-4">
            <h1 className="font-Urbanist font-[500] mb-2 text-[#666666]">
              Amenities & Features
            </h1>
            <div className="flex gap-12">
              <span className="flex flex-col gap-2">
                <Checkboxs labels={"Conference Facility"}></Checkboxs>
                <Checkboxs labels={"Fitness Center"}></Checkboxs>
                <Checkboxs labels={"Indoor Café"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"After-Hour Access"}></Checkboxs>
                <Checkboxs labels={"Executives Offices"}></Checkboxs>
                <Checkboxs labels={"Outdoor Area"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"Retail Store"}></Checkboxs>
                <Checkboxs labels={"Designated Parking"}></Checkboxs>
                <Checkboxs labels={"High Ceilings"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"Covered Parking"}></Checkboxs>
                <Checkboxs labels={"Security Systems"}></Checkboxs>
                <Checkboxs labels={"WiFi"}></Checkboxs>
              </span>
            </div>
          </div>
          {/* IMAGES BOX  */}
          <div>
            <div className="border-[#BBBBBB] border-[1px] border-solid flex gap-3 px-5 py-7 w-[45%] items-center rounded-[5px]">
              <div>
                <img src={ImagePlaceholder} alt="" />
              </div>
              <div>
                <label
                  class="block mb-2 text-[16px] font-semibold text-gray-900 dark:text-white font-Urbanist italic"
                  for="file_input"
                >
                  Upload at least one image to showcase your property.
                </label>
                <div className="bg-[#F8FCFF] py-2 px-3">
                  <input
                    className="text-PurpleColor  border-solid border-[1px] font-Inter font-semibold px-2 py-2.5 border-PurpleColor rounded-[7px]"
                    type="file"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            {/* SWITCH  */}
            <div className="flex flex-col gap-5">
              <div className="flex  items-center gap-2">
                <Switch className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>
                <label className="block font-Urbanist text-[15px] font-[600] text-[#222222]">
                  Featured Listing
                </label>
              </div>
              <div className="flex  items-center gap-2">
                <Switch className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-checked:bg-PurpleColor outline-none">
                  <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-checked:translate-x-6" />
                </Switch>
                <label className="block font-Urbanist text-[15px] font-[600] text-[#222222]">
                  Off the Market
                </label>
                <p className="font-Urbanist text-[15px] font-semibold text-Paracolor ">
                  (Not shown to free users)
                </p>
              </div>
            </div>

            {/* Send Message Button */}
            <div className="mt-10 flex gap-5">
              <button className="bg-transparent border-[#6C757D] cursor-pointer text-[17px] border-solid border-[2px] font-[600] px-6 py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]">
                Save Draft
              </button>
              <button className="bg-PurpleColor font-[600] cursor-pointer text-[17px] px-6 py-2.5 text-white font-Urbanist rounded-[6px]">
                Submit Listing
              </button>
            </div>
          </div>
        </form>
      </section>
      {/* LeaseForm FORM END  */}

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default LeaseForm;
