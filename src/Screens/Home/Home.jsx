import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// COMPONENTS
import Footer from "../../Components/Footer/Footer";
import HomeSection1 from "./HomeSections/HomeSection1";
import AntiInspect from "../ProtectedScreen/AntiInspect";
import MiniFooter from "../../Components/Footer/MiniFooter";
import SearchBar from "../../Components/SearchBar/SearchBar";
import CardCarousel from "../../Components/Carousel/Carousel";
import EmptyCards from "../../Components/EmptyCard/EmptyCard";
import ProtectedSection from "./HomeSections/ProtectiveSection";
import CardContentSection from "./HomeSections/CardContentSection";
import Testimonials from "../../Components/Testimonials/Testimonials";
import TruncatedText from "../../Components/TruncatedText/TruncatedText";
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar";
import TopDevelopes from "../../Components/Cards/TopDevelopes/TopDevelopes";
import PropertiesCards from "../../Components/Cards/PropertiesCards/PropertiesCards";

// IMAGES
import HeroBg from "../../assets/HeroSecImage.jpg";
import RevImage1 from "../../assets/RevImage1.jpg";
import RevImage2 from "../../assets/RevImage2.jpg";
import RevImage3 from "../../assets/RevImage3.jpg";
import HomeSec5_1 from "../../assets/HomeSec5.1.png";
import HomeSec5_2 from "../../assets/HomeSec5.2.png";

// BACKGORUND
const HeroBackground = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgb(0 0 0 / 54%)",
  backgroundBlendMode: "color",
};

const Home = () => {
  // KEYS
  const navigate = useNavigate();
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  // STATES
  const [Properties, setProperties] = useState([]);
  const [searchFilters, setSearchFilters] = useState(null);

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

    const docWidth = document.documentElement.offsetWidth;
    document.querySelectorAll("*").forEach((el) => {
      if (el.offsetWidth > docWidth) {
        el.style.outline = "2px solid red";
        console.log("Overflowing element:", el);
      }
    });

    document.documentElement.classList.add("dark");
  }, []);

  const applyFilters = (properties) => {
    if (!searchFilters) return properties;

    const { propertyType, listingType, city, state, priceRange } =
      searchFilters;

    return properties.filter((item) => {
      const price =
        item.listing_type === "For Sale" ? item.sale_price : item.lease_rate;

      const matchesType =
        propertyType && propertyType !== "Select Your Property"
          ? item.property_type?.toLowerCase() === propertyType.toLowerCase()
          : true;

      const matchesListingType =
        listingType && listingType !== "Select"
          ? item.listing_type?.toLowerCase() === listingType.toLowerCase()
          : true;

      const matchesCity =
        city && city.trim() !== ""
          ? item.city?.toLowerCase().includes(city.toLowerCase())
          : true;

      const matchesState =
        state && state !== "Select Your State"
          ? item.state?.toLowerCase().includes(state.toLowerCase())
          : true;

      const matchesRange = (() => {
        if (!priceRange || price == null) return true;

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
      })();

      return (
        matchesType &&
        matchesListingType &&
        matchesCity &&
        matchesState &&
        matchesRange
      );
    });
  };

  const filteredProperties = applyFilters(Properties);

  const handleFilterChange = (filters) => {
    setSearchFilters(filters);
  };

  const OffMarketProperties = () => {
    if (filteredProperties.length === 0) {
      return <EmptyCards Title={"No matching properties found"} />;
    }

    const offMarket = filteredProperties
      .filter((items) => items.off_market_listing)
      .slice(0, 3);

    if (offMarket.length === 0) {
      return <EmptyCards Title={"No off-market listings available"} />;
    }

    return offMarket.map((items) => (
      <TopDevelopes
        key={items.id}
        Img={items.images[0]}
        Heading={items.property_name}
        MiniHeading={<TruncatedText text={items.address} maxLength={19} />}
        desc={<TruncatedText text={items.description} maxLength={90} />}
        Price={
          items.listing_type === "For Sale"
            ? items.sale_price
            : items.lease_rate
        }
        forsale={items.sale_price && items.sale_price}
        forlease={items.lease_rate && items.lease_rate}
        Status={items.listing_status}
        type={items.listing_type}
        id={items.id}
        OffMarketProperties="Off Market Property"
      />
    ));
  };

  const goToViewProperties = (filterType) => {
    if (filterType === "offmarket") {
      if (token) {
        if (status === "active") {
          navigate("/properties", { state: { filterType } });
        } else {
          navigate("/pricing");
        }
      } else {
        navigate("/login");
      }
    } else {
      navigate("/properties", {
        state: { filterType },
      });
    }
  };

  const NetWorkView = () => {
    if (!token) {
      navigate("/login");
    } else if (status !== "active") {
      navigate("/pricing");
    } else {
      navigate("/admin/network");
    }
  };

  return (
    <>
      {/* <AntiInspect /> */}
      <div className=" overflow-x-hidden">
        <TransparentNavbar></TransparentNavbar>
        <div className="flex flex-col justify-center items-center ">
          {/* HERO SECTION START */}
          <section
            style={HeroBackground}
            className="relative px-6  -mt-[40%] sm:pt-10 sm:-mt-[18%] max-[891px]:pt-12 min-[891px]:pt-18 md:-mt-[15%] lg:px-8 lg:pt-18  xl:-mt-[10%] xl:pt-14"
          >
            <div className="max-[350px]:pt-28 pt-40 pb-20 min-[480px]:pt-44 flex flex-col justify-center sm:items-center  sm:py-44 lg:py-44">
              <div className="sm:text-center max-[891px]:pt-7 min-[891px]:pt-10 lg:pt-20">
                <h1 className="text-[35.5px] leading-[47px] sm:text-[41px] sm:leading-[46px]  md:text-[47px]	md:leading-[53px] lg:text-[53px] lg:leading-[65px] xl:text-[60px] font-[600] font-Poppins tracking-tight lg:text-balance text-white ">
                  The Ultimate Commercial Estate Marketplace & Investor Network
                </h1>
              </div>
              <div className="max-[350px]:w-[90%] w-[75%] sm:w-[50%] md:w-[90%] min-[800px]:w-[80%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%]">
                <SearchBar handleFilterChange={handleFilterChange}></SearchBar>
              </div>
            </div>
          </section>
          {/* HERO SECTION END */}

          {/* CARDS SECTION   */}
          <HomeSection1
            onclick={() => goToViewProperties("offmarket")}
            token={token}
          ></HomeSection1>

          {/* FEATUES PROPERTIES */}
          <section
            id="featurelisting"
            className="flex flex-col justify-center items-center py-3 sm:py-8 lg:py-14 px-6 sm:px-8 gap-10 md:px-0 sm:gap-6 w-[100%] xl:w-[94%] 2xl:w-[85%]"
          >
            {/* CONTENT SECTION  */}
            <CardContentSection
              Heading={"Featured Properties"}
              Desc={
                "Check out investment properties handpicked and listed by Investors. Explore current opportunities and connect directly to learn more or make an offer"
              }
              ButtonName={"View All Properties"}
              ButtonLink={"/properties"}
              onClick={() => goToViewProperties("feature")}
            />

            <div className="flex flex-wrap gap-7 sm:gap-3 md:gap-5 md:w-[84%]">
              {filteredProperties.length === 0 ? (
                <EmptyCards Title={"No matching properties found"} />
              ) : (
                filteredProperties
                  .filter((item) => item.featured_listing)
                  .slice(0, 6)
                  .map((items) => (
                    <div
                      key={items.id}
                      className="sm:w-[48.5%] md:w-[47%] lg:w-[31.5%]"
                    >
                      <PropertiesCards
                        PropertyType={items.property_type}
                        Area={items.building_size}
                        Img={items.images[0]}
                        Heading={
                          <TruncatedText
                            text={items.property_name}
                            maxLength={23}
                          />
                        }
                        desc={
                          <TruncatedText
                            text={items.description}
                            maxLength={90}
                          />
                        }
                        Status={items.listing_status}
                        type={items.listing_type}
                        Price={
                          items.listing_type === "For Sale"
                            ? items.sale_price
                            : items.lease_rate
                        }
                        forsale={items.sale_price && items.sale_price}
                        forlease={items.lease_rate && items.lease_rate}
                        id={items.id}
                      />
                    </div>
                  ))
              )}
            </div>
          </section>
          {/* FEATURES END */}

          {/* OFF MARKET PROPERTIES START  */}
          <section
            id="OffMarketingListing"
            className="flex flex-col justify-center items-center py-20 px-6 sm:px-8 sm:py-14 md:px-0  gap-10 sm:gap-6 w-[100%] xl:w-[92%] 2xl:w-[85%]"
          >
            {/* CONTENT SECTION  */}
            <CardContentSection
              Heading={"Off-Market Properties"}
              Desc={
                "Access exclusive off-market deals not available to the public. To view full property details, you must be a subscriber."
              }
              ButtonName={"View All Off-Market Properties"}
              onClick={() => goToViewProperties("offmarket")}
            />
            {/* PROPERTY CARD SECTION  */}
            <div
              className={`flex gap-7 sm:gap-3 sm:-ml-4 md:gap-5  md:w-[84%] ${
                status === "active" ? "" : "blur-xl"
              } `}
            >
              {status === "active" ? (
                OffMarketProperties()
              ) : (
                <ProtectedSection>{OffMarketProperties()}</ProtectedSection>
              )}
            </div>
          </section>
          {/* OFF MARKET PROPERTIES  3 END */}

          {/* TESTIMONIAL START  */}
          <section className="flex flex-col justify-center items-center py-3  gap-10 px-6 sm:gap-7 sm:py-5 sm:px-8 md:px-0 lg:py-16 w-[100%] xl:w-[92%] 2xl:w-[85%]">
            {/* CONTENT SECTION  */}
            <div className="md:w-[84%]">
              <h1 className="text-[35px] leading-[39px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[48px]">
                What Our Clients Say
              </h1>

              <p className="text-[16px] font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[15px]/5.5  ">
                Read the success stories and heartfelt testimonials from our
                valued clients. Discover why they chose NewLista for their real
                estate needs
              </p>
            </div>
            {/* CARDSECTION  */}
            <div className="flex flex-col gap-7 sm:gap-4 sm:flex-row sm:flex-wrap md:w-[84%] md:gap-5">
              <Testimonials
                RevTitle={""}
                RevParagraph={
                  "Newlista has transformed my real estate investing. It connected me with exclusive off-market deals, including a commercial property I recently closed. The platform is efficient, easy to use, and has opened up networking and deal opportunities I never thought possible"
                }
                Stars={5}
                RevImage={RevImage1}
                UserName={"Mike O"}
                Desination={"Investor "}
              ></Testimonials>
              <Testimonials
                RevTitle={""}
                RevParagraph={
                  "As a seasoned real estate investor, I'm always looking for an edge. NewLista's networking features and exclusive off-market listings have given me just that. The tailored notifications save me time, and the ability to share my own listings with a select group of professionals has led to quicker, more profitable deals. It's become an indispensable tool in my investment arsenal."
                }
                Stars={5}
                RevImage={RevImage2}
                UserName={"Charles K"}
                Desination={"Investor"}
              ></Testimonials>
              <Testimonials
                RevTitle={""}
                RevParagraph={
                  "Newlista is revolutionizing how I connect with fellow real estate investors. The platform's focus on facilitating networking among professionals is a game-changer. I'm particularly excited about the potential to share and discover off-market listings exclusively with other investors. This feature alone could be invaluable for finding hidden gem properties."
                }
                Stars={5}
                RevImage={RevImage3}
                UserName={"Michael M"}
                Desination={"Investor"}
              ></Testimonials>
            </div>
          </section>
          {/* TESTIMONIAL 4 END  */}

          {/* SECTION 5 START  */}
          <section className="flex flex-col justify-center gap-6 px-6 py-20 sm:pt-12 sm:gap-10 sm:pb-9 lg:pb-20 sm:px-8 md:px-0 md:items-center w-[100%] xl:w-[92%] 2xl:w-[85%]">
            <div className="md:w-[84%]">
              <h1 className="text-[35px] leading-[38px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[48px]">
                Have a Property to Sell?
              </h1>
            </div>
            <div className="md:w-[84%] border-solid border-[1px] border-[#BBBBBB] flex flex-col items-center rounded-[10px] pb-7 pt-3 md:py-4 lg:py-5 xl:py-0  md:flex-row relative">
              <div className="w-[65%] sm:w-[40%]  md:w-[25%] sm:h-[90%]">
                <img className="" src={HomeSec5_1} alt="" />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-5 py-2 px-5 sm:px-10 md:w-[50%] md:px-3 lg:px-5 xl:px-20 ">
                <h1 className="font-Inter font-bold text-[24px] leading-[29px] sm:text-[24px] md:text-[20px] lg:text-[22px] sm:leading-[25px]">
                  Reach serious buyers, close deals faster, and maximize your
                  property's potential.{" "}
                </h1>
                <Link className="w-full" to={"/create-property"}>
                  <button className="hover-btn-purple hover-btn py-2 text-[16px] text-white font-Inter rounded-[8px] w-full cursor-pointer">
                    <span>Sell your Property</span>
                  </button>
                </Link>
              </div>
              <div className="hidden md:block  w-[25%] h-[90%]">
                <img className="" src={HomeSec5_2} alt="" />
              </div>
            </div>
          </section>
          {/* SECTION 5 END  */}

          {/* SECTION 6 START  */}
          <section className="flex flex-col justify-center items-center pb-20 px-6 gap-10 overflow-hidden sm:pb-16 sm:px-8 md:px-0 sm:pt-10 w-[100%] xl:w-[92%] 2xl:w-[85%]">
            {/* CONTENT SECTION  */}
            <CardContentSection
              Heading={"Expand Your Real Estate Network"}
              Desc={
                "Network with fellow investors. Exchange insights, build lasting partnerships, and discover exclusive real estate deals."
              }
              ButtonName={"View More"}
              onClick={() => {
                NetWorkView();
              }}
            />
            {/* CARD SECTION  */}
            <div className="w-[98%] sm:-ml-3 md:w-[84%] flex gap-">
              <CardCarousel />
            </div>
          </section>

          {/* SECTION 6 END  */}
        </div>
        <MiniFooter></MiniFooter>
        <Footer></Footer>
      </div>
    </>
  );
};

export default Home;
