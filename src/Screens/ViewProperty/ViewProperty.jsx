import React from "react";
import {
  Select,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MiniFooter from "../../Components/Footer/MiniFooter";
import PropertiesCards from "../../Components/Cards/PropertiesCards/PropertiesCards";
// IMAGES
import PropertiesImage1 from "../../assets/PropertiesImage1.png";
import PropertiesImage2 from "../../assets/PropertiesImage2.png";
import PropertiesImage3 from "../../assets/PropertiesImage3.png";
import AddPropertyBanner from "../../assets/AddPropertyBanner.jpg";
import ViewPropertyIcon1 from "../../assets/ViewPropertyIcon1.png";
import ViewPropertyIcon2 from "../../assets/ViewPropertyIcon2.png";
import ViewPropertyIcon3 from "../../assets/ViewPropertyIcon3.png";
import ViewPropertyIcon4 from "../../assets/ViewPropertyIcon4.png";
import ViewPropertyIcon5 from "../../assets/ViewPropertyIcon5.png";
import ViewPropertyIcon6 from "../../assets/ViewPropertyIcon6.png";
import ViewPropertyIcon7 from "../../assets/ViewPropertyIcon7.png";
import ViewPropertyIcon8 from "../../assets/ViewPropertyIcon8.png";
import ViewPropertyIcon9 from "../../assets/ViewPropertyIcon9.png";
import PropertiesCards2 from "../../Components/Cards/PropertiesCards/PropertiesCards2";

// TAB ITEMS
const tabItems = [
  {
    label: "All Properties",
    image: ViewPropertyIcon1,
  },
  {
    label: "Office Buildings",
    image: ViewPropertyIcon2,
  },
  {
    label: "Retail Spaces",
    image: ViewPropertyIcon3,
  },
  {
    label: "Industrial Properties",
    image: ViewPropertyIcon4,
  },
  {
    label: "Apartments",
    image: ViewPropertyIcon5,
  },
  {
    label: "Development Sites",
    image: ViewPropertyIcon6,
  },

  {
    label: "Office Buildings",
    image: ViewPropertyIcon7,
  },
  {
    label: "Storage Facilities",
    image: ViewPropertyIcon8,
  },
  {
    label: "Shopping Centers",
    image: ViewPropertyIcon9,
  },
];

// TABS PANELS
const tabpanel = (
  <TabPanel className="w-[100%] my-20 flex flex-wrap gap-4 px-16">
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage1}
        Heading={"Seaside Serenity Villa"}
        desc={
          " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
        }
        Status={"Active"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage3}
        Heading={"Rustic Retreat Cottage"}
        desc={
          " An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More"
        }
        Status={"Sold"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage2}
        Heading={"Metropolitan Haven"}
        desc={
          " A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
        }
        Status={"Rental"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage1}
        Heading={"Rustic Retreat Cottage"}
        desc={
          "An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More"
        }
        Status={"Active"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage2}
        Heading={"Rustic Retreat Cottage"}
        desc={
          " An elegant 3-bedroom, 2.5-bathroom townhouse in a gated community... Read More"
        }
        Status={"Sold"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage3}
        Heading={"Metropolitan Haven"}
        desc={
          " A chic and fully-furnished 2-bedroom apartment with panoramic city views... Read More"
        }
        Status={"Sold"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage1}
        Heading={"Seaside Serenity Villa"}
        desc={
          " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
        }
        Status={"Active"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
    <div className="w-[23.5%]">
      <PropertiesCards2
        Img={PropertiesImage3}
        Heading={"Seaside Serenity Villa"}
        desc={
          " A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
        }
        Status={"Sold"}
        Price={"550,000"}
      ></PropertiesCards2>
    </div>
  </TabPanel>
);

// BACKGORUND
const BannerBackground = {
  backgroundImage: `url(${AddPropertyBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#0009",
};

const propertyType = [
  { name: "Select Your Property" },
  { name: "Car Wash" },
  { name: "Church" },
  { name: "Condominium" },
  { name: "Gas Station" },
  { name: "Hotel" },
  { name: "Industrial Park" },
  { name: "Investment Home" },
  { name: "Medical Building" },
  { name: "Mixed Use" },
  { name: "Mobile Home Park" },
  { name: "Motel" },
  { name: "Multifamily" },
  { name: "Office Building" },
  { name: "Recreation Center" },
  { name: "Retail Center" },
  { name: "Self-Storage Facility" },
  { name: "School Building" },
  { name: "Senior Living Facility" },
  { name: "Shopping Center" },
  { name: "Single Tenant Retail Building" },
  { name: "Storage Facility" },
  { name: "Townhomes" },
  { name: "Vacant Land" },
  { name: "Warehouse" },
  { name: "Other" },
];

const ViewProperty = () => {
  return (
    <>
      <Navbar></Navbar>
      {/* BANNER START  */}
      <section style={BannerBackground}>
        
         <div className="hidden sm:mb-8 sm:flex sm:justify-center  py-28">
                      <div className="relative flex rounded-full px-6.5 py-3.5 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20 bg-textColor justify-center items-center">
                        <div className="px-4 py-2 border-r-[1px] border-solid border-Paracolor">
                          <Select
                            name="status"
                            aria-label="Project status"
                            className={
                              "overline-none text-[16px] font-Inter text-black font-[500]"
                            }
                          >
                            <option className="overline-none font-Inter" value="active">
                              Buy
                            </option>
                            <option className="overline-none font-Inter" value="active">
                              Sale
                            </option>
                            <option className="overline-none font-Inter" value="paused">
                              Rent
                            </option>
                          </Select>
                        </div>
        
                        <div className="px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
                          <h1 className="text-[14px] font-Inter text-black font-[600]">
                            Location
                          </h1>
                          <Select
                            name="status"
                            aria-label="Project status"
                            className={
                              "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                            }
                          >
                            <option className="overline-none font-Inter" value="active">
                              Select Your City
                            </option>
                            <option className="" value="active">
                              New York
                            </option>
                            <option className="" value="paused">
                              Austin
                            </option>
                            <option className="" value="delayed">
                              Phoenix
                            </option>
                            <option className="" value="canceled">
                              Chicago
                            </option>
                            <option className="" value="canceled">
                              Houston
                            </option>
                            <option className="" value="canceled">
                              Los Angeles
                            </option>
                          </Select>
                        </div>
                        <div className="px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
                          <h1 className="text-[14px] font-Inter text-black font-[600]">
                            State
                          </h1>
                          <Select
                            disabled
                            name="status"
                            aria-label="Project status"
                            className={
                              "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                            }
                          >
                            <option className="overline-none font-Inter" value="active">
                              Select Your State
                            </option>
                            <option className="" value="active">
                              Active
                            </option>
                            <option className="" value="paused">
                              Paused
                            </option>
                            <option className="" value="delayed">
                              Delayed
                            </option>
                            <option className="" value="canceled">
                              Canceled
                            </option>
                          </Select>
                        </div>
                        <div className="px-8 py-1 border-r-[1px] border-solid border-Paracolor flex flex-col ">
                          <h1 className="text-[14px] font-semibold font-Inter text-black ">
                            Property Type
                          </h1>
                          <Select
                            name="status"
                            aria-label="Project status"
                            className={
                              "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                            }
                          >
                            {propertyType.map((item, index) => (
                              <option
                                key={index}
                                className="outline-none font-Inter"
                                value={item.name}
                              >
                                {item.name}
                              </option>
                            ))}
                          </Select>
                        </div>
                        <div className="px-8 py-1  flex flex-col ">
                          <h1 className="text-[14px] font-Inter text-black font-[600]">
                            Price Range
                          </h1>
                          <Select
                            name="status"
                            aria-label="Project status"
                            className={
                              "overline-none text-[13px] font-Inter text-Paracolor font-[500] -mt-0.5 -ml-1"
                            }
                          >
                            <option className="overline-none font-Inter" value="active">
                              Choose Price Range
                            </option>
                            <option className="" value="active">
                              Under $250K
                            </option>
                            <option className="" value="paused">
                              $250K – $500K
                            </option>
                            <option className="" value="delayed">
                              $500K – $1M
                            </option>
                            <option className="" value="canceled">
                              $1M – $2.5M
                            </option>
                            <option className="" value="canceled">
                              $2.5M – $5M
                            </option>
                            <option className="" value="canceled">
                              $5M – $10M
                            </option>
                            <option className="" value="canceled">
                              $10M – $25M
                            </option>
                            <option className="" value="canceled">
                              $25M – $50M
                            </option>
                            <option className="" value="canceled">
                              Over $50M
                            </option>
                          </Select>
                        </div>
                        <div>
                          <button className="bg-PurpleColor text-white px-2 py-2 rounded-full text-[14px] cursor-pointer">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              className="size-5 font-bold"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
      </section>
      {/* BANNER END   */}

      {/* PROPERTY TABS START */}
      <section>
        <TabGroup>
          <TabList
            className={
              "flex gap-7 px-12 pt-5 justify-center border-b-[1px] border-[#BBBBBB] border-solid"
            }
          >
            {tabItems.map((item, index) => (
              <Tab key={index} as={React.Fragment}>
                {({ selected }) => (
                  <span
                    className={`flex flex-col justify-evenly items-center text-center pb-5 gap-1 focus:outline-none cursor-pointer ${
                      selected
                        ? "border-b-2 border-Paracolor"
                        : "border-b-2 border-transparent"
                    }`}
                  >
                    <img
                      className="w-[25px]"
                      src={item.image}
                      alt={item.label}
                    />
                    <h5 className="font-Poppins text-Paracolor text-[13px]  font-semibold">
                      {item.label}
                    </h5>
                  </span>
                )}
              </Tab>
            ))}
          </TabList>
          <TabPanels>
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
            {tabpanel}
          </TabPanels>
        </TabGroup>
      </section>
      {/* PROPERTY TABS END */}

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default ViewProperty;
