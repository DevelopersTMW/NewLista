import React, { useEffect, useState } from "react";
// COMPONENTS
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar";
import TopDevelopes from "../../Components/Cards/TopDevelopes/TopDevelopes";
import PropertiesCards from "../../Components/Cards/PropertiesCards/PropertiesCards";
import Testimonials from "../../Components/Testimonials/Testimonials";
// IMAGES
import HeroBg from "../../assets/HeroSecImage.jpg";
import TopDeveloper1_1 from "../../assets/TopDeveloper1.1.jpg";
import TopDeveloper1_2 from "../../assets/TopDeveloper1.2.jpg";
import TopDeveloper1_3 from "../../assets/TopDeveloper1.3.jpg";
import PropertiesImage1 from "../../assets/PropertiesImage1.png";
import PropertiesImage2 from "../../assets/PropertiesImage2.png";
import PropertiesImage3 from "../../assets/PropertiesImage3.png";
import Testimonials1 from "../../assets/Testimonials1.png";
import RevImage1 from "../../assets/RevImage1.jpg";
import RevImage2 from "../../assets/RevImage2.jpg";
import RevImage3 from "../../assets/RevImage3.jpg";
import HomeSec5_1 from "../../assets/HomeSec5.1.png";
import HomeSec5_2 from "../../assets/HomeSec5.2.png";
import InvestorCards from "../../Components/Cards/InvestorCards/InvestorCards";
import Footer from "../../Components/Footer/Footer";
import MiniFooter from "../../Components/Footer/MiniFooter";
import axios from "axios";
import SearchBar from "../../Components/SearchBar/SearchBar";
import TruncatedText from "../../Components/TruncatedText/TruncatedText";
import { Link } from "react-router-dom";
import { Map, MapPlus } from "lucide-react";
import HomeSection1 from "./HomeSections/HomeSection1";
import CardContentSection from "./HomeSections/CardContentSection";
import Carousel from "../../Components/Carousel/Carousel";
import CardCarousel from "../../Components/Carousel/Carousel";
import { useDispatch, useSelector } from "react-redux";

// BACKGORUND
const HeroBackground = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundColor: "rgb(0 0 0 / 54%)",
  backgroundBlendMode: "color",
};

const data = [
  {
    id: 1,
    user_id: 1,
    property_name: "Modern Office Space helloskjsnkjsnjksnshsjh",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "Spacious office located in the downtown business district with full amenities.",
    images: [],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-19T17:44:32.000000Z",
    updated_at: "2025-05-19T18:03:44.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 1,
    user_id: 1,
    property_name: "Modern Office Space helloskjsnkjsnjksnshsjh",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "Spacious office located in the downtown business district with full amenities.",
    images: [],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-19T17:44:32.000000Z",
    updated_at: "2025-05-19T18:03:44.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 2,
    user_id: 1,
    property_name: "Modern Office Space",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "Spacious office located in the downtown business district with full amenities.",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-19T18:06:32.000000Z",
    updated_at: "2025-05-26T19:35:38.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 3,
    user_id: 1,
    property_name: "Modern Office Space",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "This beautiful property is located in the heart of the city with easy access to all amenities, featuring spacious rooms, modern kitchen, and a lovely garden area for relaxation",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-26T17:46:35.000000Z",
    updated_at: "2025-05-26T17:46:35.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 3,
    user_id: 1,
    property_name: "Modern Office Space",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "This beautiful property is located in the heart of the city with easy access to all amenities, featuring spacious rooms, modern kitchen, and a lovely garden area for relaxation",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-26T17:46:35.000000Z",
    updated_at: "2025-05-26T17:46:35.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 3,
    user_id: 1,
    property_name: "Modern Office Space",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "This beautiful property is located in the heart of the city with easy access to all amenities, featuring spacious rooms, modern kitchen, and a lovely garden area for relaxation",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-26T17:46:35.000000Z",
    updated_at: "2025-05-26T17:46:35.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
  {
    id: 3,
    user_id: 1,
    property_name: "Modern Office Space",
    listing_type: "For Lease",
    property_type: "Office",
    listing_status: "Available",
    sale_price: null,
    lease_rate: "15.50",
    lease_rate_unit: "Per SF/Month",
    lease_type: "NNN",
    building_size: "3500.00",
    address: "123 Main Street, Suite 200",
    city: "Los Angeles",
    state: "CA",
    zip: "90001",
    description:
      "This beautiful property is located in the heart of the city with easy access to all amenities, featuring spacious rooms, modern kitchen, and a lovely garden area for relaxation",
    images: [
      "https://example.com/image1.jpg",
      "https://example.com/image2.jpg",
    ],
    featured_listing: true,
    off_market_listing: true,
    custom_fields:
      '{"parking_spaces":"10","floor_number":"2","built_year":"2015"}',
    created_at: "2025-05-26T17:46:35.000000Z",
    updated_at: "2025-05-26T17:46:35.000000Z",
    user: {
      id: 1,
      first_name: "Umer",
      last_name: "Farooq",
      email: "test@gmail.com",
      phone: "123456",
      location: "karachi",
      email_verified_at: null,
      otp: "836910",
      otp_expires_at: "2025-05-19 18:29:22",
      company_name: null,
      personal_website: null,
      title: null,
      property_interests: null,
      property_interests_custom: null,
      preferred_investment_range: null,
      preferred_locations: null,
      preferred_investment_type: null,
      preferred_cap_rate_min: null,
      preferred_cap_rate_max: null,
      investor_status: null,
      experience_level: null,
      bio: null,
      headshot: null,
      banner: null,
      created_at: "2025-05-19T17:02:49.000000Z",
      updated_at: "2025-05-19T18:21:15.000000Z",
    },
  },
];

const Home = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [Properties, setProperties] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const docWidth = document.documentElement.offsetWidth;
    document.querySelectorAll("*").forEach((el) => {
      if (el.offsetWidth > docWidth) {
        el.style.outline = "2px solid red";
        console.log("Overflowing element:", el);
      }
    });
  }, []);
 


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

  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return (
    <>
      <div className=" overflow-x-hidden">
        <TransparentNavbar></TransparentNavbar>
        <div className="flex flex-col justify-center items-center ">
          {/* HERO SECTION START */}
          <section
            style={HeroBackground}
            className="relative px-6  -mt-[40%] sm:pt-10 sm:-mt-[18%] max-[891px]:pt-12 min-[891px]:pt-18 md:-mt-[15%] lg:px-8 lg:pt-18  xl:-mt-[10%] xl:pt-14"
          >
            <div className="max-[350px]:pt-28 pt-40 pb-20 min-[480px]:pt-44 flex flex-col justify-center sm:items-center  sm:py-44 lg:py-44">
              {/* CONTENT SECTION START  */}
              <div className="sm:text-center max-[891px]:pt-7 min-[891px]:pt-10 lg:pt-20">
                <h1 className="text-[35.5px] leading-[47px] sm:text-[41px] sm:leading-[46px]  md:text-[47px]	md:leading-[53px] lg:text-[53px] lg:leading-[65px] xl:text-[60px] font-[600] font-Poppins tracking-tight lg:text-balance text-white ">
                  The Ultimate Commercial Estate Marketplace & Investor Network
                </h1>
                {/* <p className="mt-8 text-md font-medium text-pretty text-textColor sm:text-lg/8 ">
                List properties, connect with investors, and unlock exclusive
                off-the-market deals—all in one powerful platform.
              </p> */}
              </div>
              <div className="max-[350px]:w-[90%] w-[75%] sm:w-[50%] md:w-[90%] min-[800px]:w-[80%] lg:w-[100%] xl:w-[100%] 2xl:w-[80%]">
                <SearchBar></SearchBar>
              </div>
            </div>
          </section>
          {/* HERO SECTION END */}

          <HomeSection1 token={token}></HomeSection1>

          {/* SECTION 2 START  */}
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
            />
            <div className="flex flex-wrap gap-7 sm:gap-3 md:gap-5 md:w-[84%]">
              {Properties?.filter((item) => item.featured_listing)
                .slice(0, 6)
                .map((items) => (
                  <div
                    key={items.id}
                    className="sm:w-[48.5%] md:w-[47%] lg:w-[31.5%]"
                  >
                    <PropertiesCards
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
                      id={items.id}
                    />
                  </div>
                ))}
            </div>
          </section>
          {/* SECTION 2 END */}

          {/* SECTION 3 START  */}
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
              ButtonLink={"/properties"}
            />
            {/* PROPERTY CARD SECTION  */}
            <div className="flex gap-7 sm:gap-3 sm:-ml-4 md:gap-5  md:w-[84%] blur-[12px]">
              {Properties?.filter((items) => items.off_market_listing)
                .slice(0, 3)
                .map((items) => (
                  <TopDevelopes
                    key={items.id}
                    Img={items.images[0]}
                    Heading={items.property_name}
                    MiniHeading={
                      <TruncatedText text={items.address} maxLength={19} />
                    }
                    desc={
                      <TruncatedText text={items.description} maxLength={90} />
                    }
                    Price={
                      items.listing_type === "For Sale"
                        ? items.sale_price
                        : items.lease_rate
                    }
                    id={items.id}
                  ></TopDevelopes>
                ))}
            </div>
          </section>
          {/* SECTION 3 END */}
          {/* SECTION 4 START  */}
          <section className="flex flex-col justify-center items-center py-3  gap-10 px-6 sm:gap-7 sm:py-5 sm:px-8 md:px-0 lg:py-16 w-[100%] xl:w-[92%] 2xl:w-[85%]">
            {/* CONTENT SECTION  */}
            <div className="md:w-[84%]">
              <h1 className="text-[35px] leading-[39px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[48px]">
                What Our Clients Say
              </h1>

              <p className="text-[15px] font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5  ">
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
          {/* SECTION 4 END  */}
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
          <section className="flex flex-col justify-center items-center pb-28 px-6 gap-10 overflow-hidden sm:pb-20 sm:px-8 md:px-0 sm:pt-10 w-[100%] xl:w-[92%] 2xl:w-[85%]">
            {/* CONTENT SECTION  */}
            <CardContentSection
              Heading={"Expand Your Real Estate Network"}
              Desc={
                "Network with fellow investors. Exchange insights, build lasting partnerships, and discover exclusive real estate deals."
              }
              ButtonName={"View More"}
              ButtonLink={token ? "/admin/network" : "/login"}
            />
            {/* CARD SECTION  */}
            <div className="w-[98%] sm:-ml-3 md:w-[84%] flex gap-10">
              <CardCarousel />
              {/* <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={"Real Estate Investor"}
              ></InvestorCards>
              <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={"Real Estate Investor"}
              ></InvestorCards>
              <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={"Real Estate Investor"}
              ></InvestorCards>
              <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={"Real Estate Investor"}
              ></InvestorCards>
              <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={"Real Estate Investor"}
              ></InvestorCards>
              <InvestorCards
                InvesImage={Testimonials1}
                InvesUserName={"John Doe"}
                InvesDesc={" Estate Investor"}
              ></InvestorCards> */}
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
