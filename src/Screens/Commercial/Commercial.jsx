import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
// IMAGES
import ImagePlaceholder from "../../assets/ImagePlaceholder.png";
import CommercialBanner from "../../assets/CommercialBanner.jpg";
import Inputs from "../../Components/InputFields/Inputs";
import Selection from "../../Components/InputFields/Selection";
import Radio from "../../Components/InputFields/Radio";
import { Switch, Textarea } from "@headlessui/react";
import Checkboxs from "../../Components/InputFields/Checkboxs";

const Commercial = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* BANNER START  */}
      <section>
        <div>
          <img
            className="h-[40vh] object-cover w-[100%]"
            src={CommercialBanner}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}

      {/* RESIDENTIALS FORM START  */}
      <section className="px-20 py-20">
        <div>
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[43px] leading-[48px]">
            Add a Property
          </h1>
        </div>
        <form action="" className="flex flex-col gap-7">
          <div className="flex items-center gap-6 mt-7">
            <Radio Labels={"For Sale"}></Radio>
            <Radio Labels={"For Lease"}></Radio>
            <Radio Labels={"Both"}></Radio>
            <div className="w-[15%] -mt-[22px]">
              <Selection
                labels={"ㅤㅤㅤㅤ"}
                defaultOption={"Commercial"}
              ></Selection>
            </div>
          </div>
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
          <div>
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
          <div className="flex flex-col gap-7">
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
          <div>
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Sales Details
              </h1>
            </div>
            <Inputs
              labels={"Rental Rate"}
              type={"text"}
              placeholder={"Enter sale price (e.g., $1,500,000)"}
            ></Inputs>
          </div>
          <div className="flex flex-col gap-7">
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Property Specifications
              </h1>
              <div className="flex gap-5">
                <span className="w-[50%]">
                  <Inputs
                    labels={"Land Size"}
                    type={"text"}
                    placeholder={"Enter land size (in acres or Sq. Ft.)"}
                  ></Inputs>
                </span>
                <span className="w-[50%]">
                  <Inputs
                    labels={"Building Size (if applicable)"}
                    type={"text"}
                    placeholder={"Enter building size (in Sq. Ft.)"}
                  ></Inputs>
                </span>
              </div>
            </div>
          </div>
          <div className="w-[100%] flex gap-5">
            <span className="w-[50%]">
              <Inputs
                labels={"Year Built"}
                type={"text"}
                placeholder={"Enter year built (e.g., 2008)"}
              ></Inputs>
            </span>
            <span className="w-[50%]">
              <Selection labels={"Fenced?"} defaultOption={"Yes"}></Selection>
            </span>
          </div>
          <div className="w-[100%] flex gap-5">
            <span className="w-[50%]">
              <Selection
                labels={"Electrical Power"}
                defaultOption={"220V"}
              ></Selection>
            </span>
            <span className="w-[50%]">
              <Selection
                labels={"Spray Polyurethane Foam"}
                defaultOption={"Torch Down"}
              ></Selection>
            </span>
          </div>
          <div>
            <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
              Utilities & Infrastructure (Optional)
            </h1>
            <div className="w-[100%] flex items-center gap-5">
              <span className="w-[49%]">
                <Inputs labels={"Surface Type"} placeholder={"Level"}></Inputs>
              </span>
              <span className="flex gap-5 justify-start items-center mt-7 w-[20%] ml-2">
                <h1 className="font-Urbanist font-[600] text-[#222222]">
                  Electricity?
                </h1>
                <Radio Labels={"Yes"}></Radio>
                <Radio Labels={"No"}></Radio>
              </span>
              <span className="w-[28%]">
                <Selection
                  defaultOption={"Municipal County"}
                  labels={"ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ"}
                ></Selection>
              </span>
            </div>
          </div>
          <div className="flex gap-5 w-[100%]">
            <span className="flex gap-4 w-[50%]">
              <span className="flex gap-5 justify-start items-center mt-7 w-[35%] ">
                <h1 className="font-Urbanist font-[600] text-[#222222]">
                  Water?
                </h1>
                <Radio Labels={"Yes"}></Radio>
                <Radio Labels={"No"}></Radio>
              </span>
              <span className="w-[61%] ">
                <Selection
                  defaultOption={"Municipal County"}
                  labels={"ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ"}
                ></Selection>
              </span>
            </span>
            <span className="flex gap-4 w-[50%]">
              <span className="flex gap-5 justify-start items-center mt-7 w-[41%] ">
                <h1 className="font-Urbanist font-[600] text-[#222222]">
                  Sewer?
                </h1>
                <Radio Labels={"Yes"}></Radio>
                <Radio Labels={"No"}></Radio>
              </span>
              <span className="w-[57%]">
                <Selection
                  defaultOption={"Municipal County"}
                  labels={"ㅤㅤㅤㅤㅤㅤ ㅤㅤㅤㅤ"}
                ></Selection>
              </span>
            </span>
          </div>
          <div className="flex gap-8">
            <span className="flex gap-3 justify-start items-center mt-7  ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Foreclosure?
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7  ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Added Value?
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7  ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Basement?
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7 ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Property Association?
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7 ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Living Area{" "}
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
          </div>
          <div className=" flex gap-11.5 items-center">
            <span className="flex gap-3 justify-start items-center mt-7 ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Lease Option?{" "}
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7 ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Bathrooms{" "}
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="flex gap-3 justify-start items-center mt-7 ">
              <h1 className="font-Urbanist font-[600] text-[#222222]">
                Living Area{" "}
              </h1>
              <Radio Labels={"Yes"}></Radio>
              <Radio Labels={"No"}></Radio>
            </span>
            <span className="w-[17%]">
              <Selection
                defaultOption={"Attached"}
                labels={"Garage"}
              ></Selection>
            </span>
            <span className="w-[17%]">
              <Selection
                defaultOption={"Lot size in Sq. Ft."}
                labels={"Lot Size (SF)"}
              ></Selection>
            </span>
          </div>
          <div className="flex gap-8 w-[100%]">
            <span className="w-[23%] flex items-center">
              <Inputs
                labels={"Ceiling Height"}
                placeholder={"Enter ceiling height"}
              ></Inputs>
            </span>
            <span className="w-[23%] flex items-center ">
              <Inputs
                style={"w-[100%] rounded-[14px] h-8"}
                labels={"Ceiling Height"}
                placeholder={"Enter ceiling height"}
              ></Inputs>
            </span>
            <span className="flex items-center w-[23%]">
              <Selection
                Style={"flex items-center gap-4 w-[100%]"}
                labels={"Accessibility"}
                defaultOption={"Wide Doors"}
              ></Selection>
            </span>
            <span className="flex items-center w-[23%]">
              <Selection
                Style={"flex items-center gap-4 w-[100%]"}
                labels={"Roof Type"}
                defaultOption={"Asphalt"}
              ></Selection>
            </span>
          </div>
          <div>
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Financial Information
              </h1>
              <div className="flex gap-5">
                <span className="w-[50%]">
                  <Inputs
                    labels={"Asking Price"}
                    type={"text"}
                    placeholder={"Enter asking price"}
                  ></Inputs>
                </span>
                <span className="w-[50%]">
                  <Selection
                    defaultOption={"Yes"}
                    labels={"Owner Financing Available"}
                  ></Selection>
                </span>
              </div>
            </div>
            <div className="flex gap-5">
              <span className="w-[50%]">
                <Inputs
                  labels={"CAP Rate"}
                  type={"text"}
                  placeholder={"Enter capitalization rate (e.g., 5.2%)"}
                ></Inputs>
              </span>
              <span className="w-[50%]">
                <Inputs
                  labels={"Net Operating Income (NOI)"}
                  type={"text"}
                  placeholder={
                    "Enter net operating income (e.g., $20,000/year)"
                  }
                ></Inputs>
              </span>
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-Urbanist font-[500] mb-4 text-[#666666]">
                Property Description & Highlights
              </h1>
              <div className="flex flex-col gap-7">
                <span className="w-[100%]">
                  <Inputs
                    labels={"Key Features (Amenities)"}
                    type={"text"}
                    placeholder={
                      "E.g., Scenic views, Accessible roads, Security, etc."
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
                    placeholder="Describe the property, its features, investment potential, and location advantages."
                    name="description"
                  ></Textarea>
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="font-Urbanist font-[500] mb-2 text-[#666666]">
              Amenities & Features
            </h1>
            <div className="flex gap-12">
              <span className="flex flex-col gap-2">
                <Checkboxs labels={"Conference Facility"}></Checkboxs>
                <Checkboxs labels={"Fitness Center"}></Checkboxs>
                <Checkboxs labels={"Indoor Café"}></Checkboxs>
                <Checkboxs labels={"Fenced and Gate"}></Checkboxs>
                <Checkboxs labels={"Monthly Rental"}></Checkboxs>
                <Checkboxs labels={"Daily Rental"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"After-Hour Access"}></Checkboxs>
                <Checkboxs labels={"Executives Offices"}></Checkboxs>
                <Checkboxs labels={"Outdoor Area"}></Checkboxs>
                <Checkboxs labels={"Solar Panel"}></Checkboxs>
                <Checkboxs labels={"Indoor Panel "}></Checkboxs>
                <Checkboxs labels={"Outdoor Panel"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"Retail Store"}></Checkboxs>
                <Checkboxs labels={"Designated Parking"}></Checkboxs>
                <Checkboxs labels={"High Ceilings"}></Checkboxs>
                <Checkboxs labels={"Beach Access"}></Checkboxs>
                <Checkboxs labels={"Lake Access"}></Checkboxs>
                <Checkboxs labels={"Golf Course"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"Designated Parking"}></Checkboxs>
                <Checkboxs labels={"Security Systems"}></Checkboxs>
                <Checkboxs labels={"WiFi"}></Checkboxs>
                <Checkboxs labels={"Park or Trail"}></Checkboxs>
                <Checkboxs labels={"Valet Parking"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
                <Checkboxs labels={"Onsite Management"}></Checkboxs>
                <Checkboxs labels={"Fully Furnished"}></Checkboxs>
                <Checkboxs labels={"Theatre"}></Checkboxs>
              </span>
              <span className="flex flex-col  gap-2">
              <Checkboxs labels={"Club House"}></Checkboxs>
              <Checkboxs labels={"Trash Pickup"}></Checkboxs>
              <Checkboxs labels={"Pet Area"}></Checkboxs>
              </span>
            </div>
          </div>
          <div>
            <div className="border-[#BBBBBB] border-[1px] border-solid flex gap-3 px-5 py-7 w-[70%] items-center rounded-[5px]">
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
                  (Note: Off-the-market properties will not be shown to free
                  users.)
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
      {/* RESIDENTIALS FORM END  */}

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default Commercial;
