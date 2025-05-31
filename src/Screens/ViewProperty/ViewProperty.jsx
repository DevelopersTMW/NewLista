import React, { useEffect, useMemo, useState } from "react";
import {
  MenuButton,
  MenuItems,
  Select,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import { Menu } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import MiniFooter from "../../Components/Footer/MiniFooter";
// IMAGES
import PropertiesImage1 from "../../assets/PropertiesImage1.png";
import PropertiesImage2 from "../../assets/PropertiesImage2.png";
import FilterIcon2 from "../../assets/FilterIcon2.png";
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
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";
import TruncatedText from "../../Components/TruncatedText/TruncatedText";
import EmptyCards from "../../Components/EmptyCard/EmptyCard";
import ResponsiveTabList from "./PropertyTabs/PropertyTabs";


// BACKGORUND
const BannerBackground = {
  backgroundImage: `url(${AddPropertyBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#0009",
};

const ViewProperty = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [Properties, setProperties] = useState([]);
  const [FilterValue, setFilterValue] = useState("");
  const isLoggedIn = localStorage.getItem("token");
  const [ShowEmpty, setShowEmpty] = useState(false);


  const [selectedIndex, setSelectedIndex] = useState(0);


  useEffect(() => {
    async function GetProperty() {
      try {
        const GetPropertyData = await axios.get(`${ApiKey}/properties`);
        const Response = GetPropertyData.data.data;
        setProperties(Response);
      } catch (error) {
        console.log(error);
      }
    }
    GetProperty();
  }, []);

  // CHECK IF USER EXIST THEN SHOW OFF MARKET
  const filteredProperties = useMemo(() => {
    let filtered = [];

    if (FilterValue === "Off Market Properties") {
      if (isLoggedIn) {
        filtered = Properties.filter((item) => item.off_market_listing);
      } else {
        filtered = [];
      }
    } else if (FilterValue === "Features Property") {
      filtered = Properties.filter((item) => item.featured_listing);
    } else if (FilterValue === "Filter") {
      if (isLoggedIn) {
        filtered = Properties.filter(
          (item) => item.featured_listing || item.off_market_listing
        );
      } else {
        filtered = Properties.filter((item) => item.featured_listing);
      }
    } else {
      filtered = Properties.filter((item) => item.featured_listing);
    }

    setShowEmpty(filtered.length === 0);
    return filtered;
  }, [Properties, isLoggedIn, FilterValue]);

  return (
    <>
      <Navbar></Navbar>
      {/* BANNER START  */}
      <section style={BannerBackground}>
        <div className="px-10 pt-16 pb-20 sm:py-28 sm:px-12">
          <SearchBar></SearchBar>
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROPERTY TABS START */}
      <section>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="flex gap-8 px-8 pt-6 items-end  justify-center  border-b-[1px] border-[#BBBBBB] border-solid">
            <div>
            <ResponsiveTabList/>

            </div>

            <div className="flex justify-center gap-2 font-Poppins border-[1px] px-4  border-solid border-[#bebebe] rounded-[6px] text-Paracolor text-[15px] items-center font-semibold mb-6 ">
              <img className="w-5 h-5" src={FilterIcon2} alt="" />
              <Select
                className={
                  "appearance-none outline-none focus:outline-none w-14 px-1 py-2.5 cursor-pointer"
                }
                name="status"
                aria-label="Project status"
                value={FilterValue}
                onChange={(e) => {
                  setFilterValue(e.target.value);
                }}
              >
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Filter"
                >
                  Filter
                </option>
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Features Property"
                >
                  Features Property
                </option>
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Off Market Properties"
                >
                  Off Market Properties
                </option>
              </Select>
            </div>
          </div>

          <TabPanels>
            <TabPanel
              id="offmarket"
              className="w-[100%] flex flex-wrap justify-center gap-8 py-14 px-10 sm:py-12 lg:py-16 xl:my-1 sm:gap-4 sm:px-13 md:gap-10 md:px-16 lg:gap-5 xl:gap-5 2xl:gap-10"
            >
              {ShowEmpty ? (
                <EmptyCards
                  Title={
                    "Unlock hidden opportunities by upgrading to a premium membership"
                  }
                />
              ) : (
                Properties.slice(0, 6).map((items) => (
                  <div key={items.id} className="sm:w-[48.5%] md:w-[43%] lg:w-[31%] xl:w-[23.5%] 2xl:w-[20.5%]">
                    {
                      <PropertiesCards2
                        Img={PropertiesImage3}
                        Heading={items.property_name}
                        desc={items.description}
                        Status={items.listing_type}
                        Price={
                          items.listing_type === "For Sale"
                            ? items.sale_price
                            : items.lease_rate
                        }
                        id={items.id}
                        images={items.images[0]}
                      ></PropertiesCards2>
                      
                    }
                    
                  </div>
                ))
              )}
            </TabPanel>
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
