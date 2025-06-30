import React, { useState, useEffect, Fragment } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import classNames from "classnames";
import { Building2, Grip } from "lucide-react";
import ViewPropertyIcon1 from "../../../assets/ViewPropertyIcon1.png";
import ViewPropertyIcon2 from "../../../assets/ViewPropertyIcon2.png";
import ViewPropertyIcon3 from "../../../assets/ViewPropertyIcon3.png";
import ViewPropertyIcon4 from "../../../assets/ViewPropertyIcon4.png";
import ViewPropertyIcon5 from "../../../assets/ViewPropertyIcon5.png";
import ViewPropertyIcon6 from "../../../assets/ViewPropertyIcon6.png";
import ViewPropertyIcon7 from "../../../assets/ViewPropertyIcon7.png";
import ViewPropertyIcon8 from "../../../assets/ViewPropertyIcon8.png";
import ViewPropertyIcon9 from "../../../assets/ViewPropertyIcon9.png";

import { FaBuilding, FaCar, FaChurch, FaGasPump, FaHospital, FaHotel, FaIndustry, FaWarehouse, FaSchool, FaShoppingCart, FaStore, FaLandmark, FaHome } from "react-icons/fa";
import { MdLocalHospital, MdOutlineApartment } from "react-icons/md";
import { GiStripedSun, GiVacuumCleaner, GiParkBench, GiSelfLove, GiShoppingBag, GiOfficeChair } from "react-icons/gi";
import { TbBuildingCommunity, TbBuildingSkyscraper, TbBuildingWarehouse } from "react-icons/tb";


const propertyType = [
  { name: "All Properties", icon: <TbBuildingCommunity  className="size-7 text-gray-700 font-[900]" />  },
  { name: "Apartments / Multifamily", icon: <MdOutlineApartment className="size-7 text-gray-700 font-[900]" /> },
  { name: "Automotive Property", icon: <FaCar className="size-7 text-gray-700 font-[900]" /> },
  { name: "Church", icon: <FaChurch className="size-7 text-gray-700 font-[900]" /> },
  { name: "Gas Station", icon: <FaGasPump className="size-7 text-gray-700 font-[900]" /> },
  { name: "Healthcare Facility", icon: <MdLocalHospital className="size-7 text-gray-700 font-[900]" /> },
  { name: "Hospitality", icon: <FaHotel className="size-7 text-gray-700 font-[900]" /> },
  { name: "Industrial Building", icon: <FaIndustry className="size-7 text-gray-700 font-[900]" /> },
  { name: "Industrial Park", icon: <GiParkBench className="size-7 text-gray-700 font-[900]" /> },
  { name: "Mixed Use Property", icon: <FaBuilding className="size-7 text-gray-700 font-[900]" /> },
  { name: "Office Building", icon: <TbBuildingSkyscraper className="size-7 text-gray-700 font-[900]" /> },
  { name: "Recreation Center", icon: <GiStripedSun className="size-7 text-gray-700 font-[900]" /> },
  { name: "Retail Center", icon: <FaStore className="size-7 text-gray-700 font-[900]" /> },
  { name: "School Building", icon: <FaSchool className="size-7 text-gray-700 font-[900]" /> },
  { name: "Self-Storage Facility", icon: <GiSelfLove className="size-7 text-gray-700 font-[900]" /> },
  { name: "Senior Living Facility", icon: <FaHome className="size-7 text-gray-700 font-[900]" /> },
  { name: "Shopping Center", icon: <GiShoppingBag className="size-7 text-gray-700 font-[900]" /> },
  { name: "Single-Tenant Retail Building", icon: <FaShoppingCart className="size-7 text-gray-700 font-[900]" /> },
  { name: "Strip Center", icon: <GiStripedSun className="size-7 text-gray-700 font-[900]" /> },
  { name: "Vacant Land", icon: <FaLandmark className="size-7 text-gray-700 font-[900]" /> },
  { name: "Warehouse", icon: <TbBuildingWarehouse className="size-7 text-gray-700 font-[900]" /> },
  { name: "Other", icon: <FaBuilding className="size-7 text-gray-700 font-[900]" /> },
];

function ResponsiveTabs({ onTabSelect }) {
  const [showMoreTabs, setShowMoreTabs] = useState(false);
  const [visibleTabs, setVisibleTabs] = useState(2);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function updateTabs() {
      const width = window.innerWidth;
      if (width <= 640) setVisibleTabs(1);
      else if (width <= 720) setVisibleTabs(3);
      else if (width <= 890) setVisibleTabs(5);
      else if (width <= 900) setVisibleTabs(5);
      else if (width <= 1080) setVisibleTabs(6);
      else if (width <= 1280) setVisibleTabs(7);
      else if (width <= 1480) setVisibleTabs(8);
      else setVisibleTabs(11);
    }

    updateTabs();
    window.addEventListener("resize", updateTabs);
    return () => window.removeEventListener("resize", updateTabs);
  }, []);

  const tabItems = propertyType.map((item) => ({
    label: item.name,
    icon: item.icon,
  }));

  const mainTabs = tabItems.slice(0, visibleTabs);
  const moreTabs = tabItems.slice(visibleTabs);

  // Notify parent when selectedIndex changes
  useEffect(() => {
    if (onTabSelect) {
      const selectedTab = tabItems[selectedIndex]?.label;
      if (selectedTab) {
        onTabSelect(selectedTab);
      }
    }
  }, [selectedIndex]);

  return (
    <div className="relative">
      <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
        <TabList className="flex items-end justify-center gap-7 sm:gap-8 flex-wrap ">
          {mainTabs.map((item, idx) => (
            <Tab className={"cursor-pointer"} as={Fragment} key={idx}>
              {({ selected }) => (
                <span
                  className={classNames(
                    "flex flex-col items-center pb-3.5 cursor-pointer focus:outline-none",
                    selected
                      ? "border-b-2 font-semibold"
                      : "border-b-2 border-transparent"
                  )}
                >
                <span >{item.icon}</span>
                  {/* <img className="w-[25px]" src={item.icon} alt="" /> */}
                  <span className="text-[13.5px] mt-1 font-Urbanist font-[600]">
                    {item.label}
                  </span>
                </span>
              )}
            </Tab>
          ))}

          {moreTabs.length > 0 && (
            <div className="relative">
              <span
                className="flex items-center pb-8 text-gray-600 hover:text-Paracolor cursor-pointer"
                onClick={() => setShowMoreTabs(!showMoreTabs)}
              >
                <Grip />
              </span>

              {showMoreTabs && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-48 max-h-64 overflow-auto z-20 cursor-pointer">
                  <TabList className="flex flex-col py-4">
                    {moreTabs.map((item, idx) => (
                      <Tab className="cursor-pointer" key={visibleTabs + idx} as={Fragment}>
                        {({ selected }) => (
                          <div
                            className="flex items-center px-4 py-2 border-b-[1px] border-[#e9e9e9] hover:bg-[#ececec] hover:text-white !cursor-pointer"
                            onClick={() => {
                              setSelectedIndex(visibleTabs + idx);
                              setShowMoreTabs(false);
                            }}
                          >
                            <span>
                              {item.icon}
                            </span>
                            {/* <img className="w-[24px]" src={item.icon} alt="" /> */}
                            <span
                              className={classNames(
                                "block font-Urbanist text-[17px] font-[600] px-4 py-2 cursor-pointer rounded-md leading-[19px]",
                                selected
                                  ? "bg-Paracolor text-white"
                                  : "text-gray-800"
                              )}
                            >
                              {item.label}
                            </span>
                          </div>
                        )}
                      </Tab>
                    ))}
                  </TabList>
                </div>
              )}
            </div>
          )}
        </TabList>
      </TabGroup>
    </div>
  );
}

export default ResponsiveTabs;
