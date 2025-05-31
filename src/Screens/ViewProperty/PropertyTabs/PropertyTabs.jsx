import React, { useState, useEffect, Fragment } from "react";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import classNames from "classnames";
import ViewPropertyIcon1 from "../../../assets/ViewPropertyIcon1.png";
import ViewPropertyIcon2 from "../../../assets/ViewPropertyIcon2.png";
import ViewPropertyIcon3 from "../../../assets/ViewPropertyIcon3.png";
import ViewPropertyIcon4 from "../../../assets/ViewPropertyIcon4.png";
import ViewPropertyIcon5 from "../../../assets/ViewPropertyIcon5.png";
import ViewPropertyIcon6 from "../../../assets/ViewPropertyIcon6.png";
import ViewPropertyIcon7 from "../../../assets/ViewPropertyIcon7.png";
import ViewPropertyIcon8 from "../../../assets/ViewPropertyIcon8.png";
import ViewPropertyIcon9 from "../../../assets/ViewPropertyIcon9.png";
import {
  Building2,
  Church,
  Ellipsis,
  EllipsisVertical,
  Grip,
  Hotel,
  RectangleEllipsis,
  RollerCoaster,
  Warehouse,
} from "lucide-react";

const propertyType = [
  { name: "All Properties", icon: ViewPropertyIcon1 },
  { name: "Church", icon: ViewPropertyIcon9 },
  { name: "Condominium", icon: ViewPropertyIcon2 },
  { name: "Gas Station", icon: ViewPropertyIcon3 },
  { name: "Hotel", icon: ViewPropertyIcon6 },
  { name: "Industrial Park", icon: ViewPropertyIcon4 },
  { name: "Medical Building", icon: ViewPropertyIcon5 },
  { name: "Mixed Use", icon: ViewPropertyIcon6 },
  { name: "Mobile Home Park", icon: ViewPropertyIcon2 },
  { name: "Motel", icon: ViewPropertyIcon7 },
  { name: "Multifamily", icon: ViewPropertyIcon8 },
  { name: "Office Building", icon: ViewPropertyIcon1 },
  { name: "Recreation Center", icon: ViewPropertyIcon9 },
  { name: "Retail Center", icon: ViewPropertyIcon1 },
  { name: "Self-Storage Facility", icon: ViewPropertyIcon2 },
  { name: "School Building", icon: ViewPropertyIcon3 },
  { name: "Senior Living Facility", icon: ViewPropertyIcon4 },
  { name: "Shopping Center", icon: ViewPropertyIcon5 },
  { name: "Single Tenant Retail Building", icon: ViewPropertyIcon6 },
  { name: "Storage Facility", icon: ViewPropertyIcon7 },
  { name: "Townhomes", icon: ViewPropertyIcon8 },
  { name: "Vacant Land", icon: ViewPropertyIcon9 },
  { name: "Warehouse", icon: ViewPropertyIcon3 },
  { name: "Other", icon: ViewPropertyIcon2 },
];

// Dummy icon as a colored square (replace with your actual icons)
const DummyIcon = () => <div className="w-6 h-6 bg-Paracolor rounded"></div>;

function ResponsiveTabs() {
  const [visibleTabs, setVisibleTabs] = useState(2);
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    function updateTabs() {
      const width = window.innerWidth;
      if (width <= 640) setVisibleTabs(1);
      else if (width <= 720) setVisibleTabs(3);
      else if (width <= 890) setVisibleTabs(5);
      else if (width <= 900) setVisibleTabs(6);
      else if (width <= 1080) setVisibleTabs(7);
      else if (width <= 1280) setVisibleTabs(8);
      else if (width <= 1480) setVisibleTabs(10);
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

  return (
    <div className="relative">
      {/* <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}> */}
        <TabList className="flex items-end justify-center gap-7 sm:gap-8 md: flex-wrap">
          {mainTabs.map((item, idx) => (
            <Tab as={Fragment} key={idx}>
              {({ selected }) => (
                <span
                  className={classNames(
                    "flex flex-col items-center pb-3.5 cursor-pointer focus:outline-none",
                    selected
                      ? "border-b-2  font-semibold"
                      : "border-b-2 border-transparent "
                  )}
                >
                  <img className="w-[25px]" src={item.icon} alt="" />
                  <span className="text-[13.5px] mt-1 font-Urbanist font-[600]">
                    {item.label}
                  </span>
                </span>
              )}
            </Tab>
          ))}

          {moreTabs.length > 0 && (
            <div className="relative group cursor-pointer">
              <span className="flex  items-center pb-8 text-gray-600 hover:text-Paracolor">
                <Grip />
              </span>

              <div className="absolute top-full left-1/2 -translate-x-1/2 hidden group-hover:block bg-white border border-gray-200 rounded-md shadow-lg mt-1 w-48 max-h-64 overflow-auto z-20">
                <TabList className="flex flex-col py-4">
                  {moreTabs.map((item, idx) => (
                    <Tab key={visibleTabs + idx} as={Fragment}>
                      {({ selected }) => (
                        <div className="flex items-center px-4 py-2 border-b-[1px] border-[#e9e9e9] hover:bg-[#ececec] hover:text-white ">
                          <span>
                            <img className="w-[24px]" src={item.icon} alt="" />
                          </span>
                          <span
                            className={classNames(
                              "block font-Urbanist text-[17px] font-[600] px-4 py-2 cursor-pointerrounded-md leading-[19px]",
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
            </div>
          )}
        </TabList>
      {/* </TabGroup> */}
    </div>
  );
}

export default ResponsiveTabs;
