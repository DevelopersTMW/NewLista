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
import PropertiesCards2 from "../../Components/Cards/PropertiesCards/PropertiesCards2";
import SearchBar from "../../Components/SearchBar/SearchBar";
import axios from "axios";
import TruncatedText from "../../Components/TruncatedText/TruncatedText";
import EmptyCards from "../../Components/EmptyCard/EmptyCard";
import ResponsiveTabList from "./PropertyTabs/PropertyTabs";
import Spinner from "../../Components/Spinner/Spinner";
import { useLocation } from "react-router-dom";

// BACKGORUND
const BannerBackground = {
  backgroundImage: `url(${AddPropertyBanner})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "#0009",
};

const ViewProperty = () => {
  const location = useLocation();
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [Properties, setProperties] = useState([]);
  const [searchFilters, setSearchFilters] = useState(null);
  const [FilterValue, setFilterValue] = useState("AllProperties");
  const isLoggedIn = localStorage.getItem("status");
  const [selectedTab, setSelectedTab] = useState("");
  const [Loading, setLoading] = useState(false);

  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    async function GetProperty() {
      try {
        setLoading(true);
        const GetPropertyData = await axios.get(`${ApiKey}/properties`);
        const Response = GetPropertyData.data.data;
        console.log(Response);

        setProperties(Response);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    GetProperty();
  }, []);

  useEffect(() => {
    if (location?.state?.filterType) {
      switch (location.state.filterType) {
        case "offmarket":
          setFilterValue("Off Market Properties");
          setSelectedIndex(0);
          break;
        case "feature":
          setFilterValue("Features Property");
          setSelectedIndex(0);
          break;
        default:
          setFilterValue("AllProperties");
          setSelectedIndex(0);
          break;
      }
    }
  }, [location?.state?.filterType]);

  const filteredProperties = useMemo(() => {
    if (!Properties || Properties.length === 0) return [];

    let result = [...Properties];

    if (FilterValue === "Standard Property") {
      result = result.filter(
        (p) => p.off_market_listing === false && p.featured_listing === false
      );
    }

    // Dropdown filtering
    if (FilterValue === "Features Property") {
      result = result.filter((p) => {
        if (p.featured_listing) {
          if (p.off_market_listing && isLoggedIn !== "active") {
            return false;
          }
          return true;
        }
        return false;
      });
    }

    if (FilterValue === "Off Market Properties") {
      result =
        isLoggedIn === "active"
          ? result.filter((p) => p.off_market_listing)
          : [];
    }

    if (FilterValue === "AllProperties") {
      if (!selectedTab || selectedTab.toLowerCase() === "all properties") {
        result =
          isLoggedIn === "active"
            ? result
            : result.filter((p) => !p.off_market_listing);
      } else {
        result = result.filter(
          (p) =>
            p.property_type?.toLowerCase().trim() ===
            selectedTab.toLowerCase().trim()
        );
      }
    }

    // 🔍 Apply SearchBar filters if provided
    if (searchFilters) {
      const { listingType, propertyType, state, city, priceRange } =
        searchFilters;

      if (listingType && listingType !== "Select") {
        result = result.filter(
          (p) => p.listing_type?.toLowerCase() === listingType.toLowerCase()
        );
      }

      if (propertyType && propertyType !== "Select Your Property") {
        result = result.filter(
          (p) => p.property_type?.toLowerCase() === propertyType.toLowerCase()
        );
      }

      if (state) {
        result = result.filter(
          (p) => p.state?.toLowerCase() === state.toLowerCase()
        );
      }

      if (city) {
        result = result.filter(
          (p) => p.city?.toLowerCase() === city.toLowerCase()
        );
      }

      if (priceRange && priceRange !== "") {
        result = result.filter((p) => {
          const price =
            p.listing_type === "For Sale" ? p.sale_price : p.lease_rate;

          if (price === null || price === undefined) return false;

          switch (priceRange) {
            case "Under $250K":
              return price < 250000;
            case "$250K – $500K":
              return price >= 250000 && price <= 500000;
            case "$500K – $1M":
              return price >= 500000 && price <= 1000000;
            case "$1M – $2.5M":
              return price >= 1000000 && price <= 2500000;
            case "$2.5M – $5M":
              return price >= 2500000 && price <= 5000000;
            case "$5M – $10M":
              return price >= 5000000 && price <= 10000000;
            case "$10M – $25M":
              return price >= 10000000 && price <= 25000000;
            case "$25M – $50M":
              return price >= 25000000 && price <= 50000000;
            case "Over $50M":
              return price > 50000000;
            default:
              return true;
          }
        });
      }
    }

    return result;
  }, [Properties, isLoggedIn, FilterValue, selectedTab, searchFilters]);

  console.log(selectedTab);
  const handleFilterChange = (filters) => {
    console.log("Filters selected:", filters);
    setSearchFilters(filters);
  };

  return (
    <>
      <Navbar></Navbar>
      {/* BANNER START  */}
      <section
        style={BannerBackground}
        className="flex items-center justify-center"
      >
        <div className=" pt-16 pb-20 ml-10 sm:ml-0 md:py-16 lg:py-28 lg:px-12  max-[350px]:w-[90%] w-[75%] sm:w-[50%] md:w-[90%] min-[800px]:w-[80%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%]">
          <SearchBar handleFilterChange={handleFilterChange}></SearchBar>
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROPERTY TABS START */}
      <section>
        <TabGroup selectedIndex={selectedIndex} onChange={setSelectedIndex}>
          <div className="flex gap-5 sm:gap-8 px-4 sm:px-8 pt-6 items-end  justify-center  border-b-[1px] border-[#BBBBBB] border-solid ">
            <div>
              <ResponsiveTabList
                onTabSelect={(tab) => {
                  setSelectedTab(tab);
                  setFilterValue("AllProperties");
                }}
              />
            </div>

            <div className="flex justify-center gap-2 font-Poppins border-[1px] px-3 sm:px-4  border-solid border-[#bebebe] rounded-[6px] text-Paracolor text-[15px] items-center font-semibold mb-5 sm:mb-6  ">
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
                  value="AllProperties"
                >
                  Filter
                </option>
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Standard Property"
                >
                  Standard Listing
                </option>
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Features Property"
                >
                  Features Listing
                </option>
                <option
                  className="text-[#1a1919] text-[11.5px] font-[500] font-Urbanist sm:text-[15px]"
                  value="Off Market Properties"
                >
                  Off Market Listing
                </option>
              </Select>
            </div>
          </div>

          <TabPanels className={"flex justify-center"}>
            {!Loading ? (
              <TabPanel
                id="offmarket"
                className="w-[100%] flex flex-wrap justify-center gap-8 py-14 px-6 min-[350px]:px-10 sm:py-12 lg:py-16 xl:my-1 sm:gap-4 sm:px-13 md:gap-10 md:px-16 lg:gap-5 xl:gap-5 2xl:gap-10  2xl:w-[90%]"
              >
                {filteredProperties.length === 0 ? (
                  <EmptyCards
                    Title={
                      isLoggedIn
                        ? "No properties match the selected filter."
                        : "Unlock hidden opportunities by upgrading to a premium membership"
                    }
                  />
                ) : (
                  filteredProperties.map((items) => (
                    <div
                      key={items.id}
                      className="sm:w-[48.5%] md:w-[43%] lg:w-[31%] xl:w-[23.5%] 2xl:w-[20.5%]"
                    >
                      <PropertiesCards2
                        PropertyType={items.property_type}
                        Area={items.building_size}
                        type={items.listing_type}
                        Img={items.images[0]}
                        Heading={items.property_name}
                        desc={
                          <TruncatedText
                            text={items.description}
                            maxLength={90}
                          />
                        }
                        Status={items.listing_type}
                        Price={
                          <TruncatedText
                            text={
                              items.listing_type === "For Sale"
                                  ? items.sale_price
                                  : items.lease_rate
                            }
                            maxLength={10}
                          />
                        }
                        forsale={items.sale_price && items.sale_price}
                        forlease={items.lease_rate && items.lease_rate}
                        id={items.id}
                        images={items.images[0]}
                        CheckProperty={
                          items.off_market_listing ? "Off Market Property" : ""
                        }
                      />
                      {console.log(items)}
                    </div>
                  ))
                )}
              </TabPanel>
            ) : (
              <div className="flex justify-center items-center !h-[75vh]">
                <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
              </div>
            )}
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
