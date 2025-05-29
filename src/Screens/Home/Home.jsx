import React, { useEffect, useState } from "react";
// COMPONENTS
import TransparentNavbar from "../../Components/Navbar/TransparentNavbar";
import TopDevelopes from "../../Components/Cards/TopDevelopes/TopDevelopes";
import PropertiesCards from "../../Components/Cards/PropertiesCards/PropertiesCards";
import Testimonials from "../../Components/Testimonials/Testimonials";
// IMAGES
import HeroBg from "../../assets/HeroSecImage.jpg";
import HomeSec1_1 from "../../assets/HomeSec1.1.png";
import HomeSec1_2 from "../../assets/HomeSec1.2.png";
import HomeSec1_3 from "../../assets/HomeSec1.3.png";
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

// BACKGORUND
const HeroBackground = {
  backgroundImage: `url(${HeroBg})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundBlendMode: "black",
  backgroundColor: "rgb(0 0 0 / 54%)",
  backgroundBlendMode: "color"
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
      <TransparentNavbar></TransparentNavbar>
      <div>
        {/* HERO SECTION START */}
        <section
          style={HeroBackground}
          className="relative isolate px-6 pt-14 lg:px-8 -mt-[10%]"
        >
          <div className="mx-auto max-w-7xl py-28 sm:py-44 lg:py-44">
            {/* CONTENT SECTION START  */}
            <div className="text-center pt-20">
              <h1 className="text-7xl font-[600] font-Poppins tracking-tight text-balance text-white sm:text-[60px] leading-[67px]">
                The Ultimate Commercial Real Estate Marketplace & Investor
                Network
              </h1>
              {/* <p className="mt-8 text-md font-medium text-pretty text-textColor sm:text-lg/8 ">
                List properties, connect with investors, and unlock exclusive
                off-the-market deals—all in one powerful platform.
              </p> */}
            </div>
            <div>
              <SearchBar></SearchBar>
            </div>
          </div>
        </section>
        {/* HERO SECTION END */}

        {/* SECTION 1 START  */}
        <section className="flex flex-col items-center justify-center py-14 gap-10 ">
          <div className="flex flex-col justify-center items-center w-[60%] text-center">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              Seamless Real Estate Investing Starts Here
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-md/8 ">
              NewLista connects real estate investors—buyers and sellers—on one
              platform built to list properties, showcase exclusive off-market
              deals, grow your network, and close more deals.
            </p>
          </div>
          <div className="flex gap-8 w-[83%]">
            {/* CARD 1  */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px] justify-between">
              <div>
                <img src={HomeSec1_1} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[22px]">
                  List & Promote
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Post properties and attract serious buyers.
                </p>
              </div>
              <div className="mt-3">
                <Link to={"/form"}>
                  <button className="w-[100%] border-[1px] border-solid border-textColor py-2.5 text-textColor font-Inter rounded-[6px] cursor-pointer hover-btn hover-btn-purple hover:border-black">
                    <span> Add a Property</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px] justify-between">
              <div>
                <img src={HomeSec1_2} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[22px]">
                 Connect & Collaborate
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Build your network and form partnerships.
                </p>
              </div>
              <div className="mt-3">
                <Link to={"/admin/network"}>
                  <button className="w-[100%] border-[1px] border-solid border-textColor py-2.5 text-textColor font-Inter rounded-[6px] cursor-pointer hover-btn hover-btn-purple hover:border-black">
                    <span>Create a Network</span>
                  </button>
                </Link>
              </div>
            </div>
            {/* CARD 3 */}
            <div className="w-[33%] bg-PurpleColor rounded-[10px] px-5.5 py-8 flex flex-col gap-4 min-h-[200px]">
              <div className="w-[100px]">
                <img src={HomeSec1_3} alt="" />
              </div>
              <div className="flex flex-col gap-3">
                <h1 className="text-textColor font-Inter font-semibold text-[23px] leading-[27px]">
                  Search for Off-Market Properties
                </h1>
                <p className="text-textColor font-Inter text-[16px]">
                  Access off-market deals and make direct offers.
                </p>
              </div>
              <div className="mt-3">
                <Link to={token ? "/view-property" : "/pricing"}>
                  <button className="hover-btn hover-btn-purple w-[100%] border-[1px] border-solid border-textColor hover:border-black py-2.5 text-textColor font-Inter rounded-[6px] cursor-pointer">
                    <span>Find Off Market Properties</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        {/* SECTION 1 END   */}

        {/* SECTION 2 START  */}
        <section className="flex flex-col justify-center items-center py-14 gap-10">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Featured Properties
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Check out investment properties handpicked and listed by
                Investors. Explore current opportunities and connect directly to
                learn more or make an offer
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <Link to={"/view-property"}>
                <button className="hover-btn hover-btn-black px-5 font-Inter py-3 rounded-[7px] cursor-pointer">
                  <span>View All Properties</span>
                </button>
              </Link>
            </div>
          </div>
          {/* PROPERTY CARD SECTION  */}
          <div className="flex flex-wrap gap-7 w-[84%]">
            {Properties?.filter((item) => item.featured_listing)
              .slice(0, 6)
              .map((items) => (
                  <div key={items.id} className="w-[31%]">
                    <PropertiesCards
                      Img={PropertiesImage1}
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
                      Price={items.listing_type === "For Sale" ? items.sale_price  : items.lease_rate    }
                      id={items.id}
                    />
                  </div>
              ))}
          </div>
        </section>
        {/* SECTION 2 END */}

        {/* SECTION 3 START  */}
        <section className="flex flex-col justify-center items-center py-20 gap-10">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Off-Market Properties
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Access exclusive off-market deals not available to the public.
                To view full property details, you must be a subscriber.
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <Link to={token ? "/view-property" : "/pricing"}>
                <button className="hover-btn hover-btn-black px-5 font-Inter py-3 rounded-[7px] cursor-pointer">
                  <span>View All Off-Market Properties</span>
                </button>
              </Link>
            </div>
          </div>
          {/* PROPERTY CARD SECTION  */}
          <div className="flex gap-7 w-[84%] blur-[4px]">
            {Properties?.filter((items) => items.off_market_listing)
              .slice(0, 3)
              .map((items) => (
                <TopDevelopes
                  key={items.id}
                  Img={TopDeveloper1_1}
                  Heading={items.city}
                  MiniHeading={items.state}
                  desc={
                    <TruncatedText text={items.description} maxLength={90} />
                  }
                  Price={items.listing_type === "For Sale" ? items.sale_price  : items.lease_rate  }
                  id={items.id}
                ></TopDevelopes>
              ))}
          </div>
        </section>
        {/* SECTION 3 END */}
        {/* SECTION 4 START  */}
        <section className="flex flex-col justify-center items-center py-16 gap-10">
          {/* CONTENT SECTION  */}
          <div className="w-[84%]">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              What Our Clients Say
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5  ">
              Read the success stories and heartfelt testimonials from our
              valued clients. Discover why they chose NewLista for their real
              estate needs
            </p>
          </div>
          {/* CARDSECTION  */}
          <div className="flex justify-center gap-7 w-[84%]">
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
        <section className="flex flex-col justify-center items-center gap-10 pt-12 pb-20">
          <div className="w-[84%]">
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
              Have a property to sell?
            </h1>
          </div>
          <div className="w-[84%] border-solid border-[1px] border-[#BBBBBB] flex rounded-[10px]">
            <div className="w-[25%] h-[90%]">
              <img className="" src={HomeSec5_1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-center px-20 gap-5 w-[50%] py-2">
              <h1 className="font-Inter font-bold text-[22px] leading-[25px]">
                Reach serious buyers, close deals faster, and maximize your
                property's potential.{" "}
              </h1>
              <Link className="w-full" to={"/add-property3"}>
                <button className="hover-btn-purple hover-btn py-2 text-[16px] text-white font-Inter rounded-[8px] w-full cursor-pointer">
                  <span>Sell your Property</span>
                </button>
              </Link>
            </div>
            <div className="w-[25%] h-[90%]">
              <img className="" src={HomeSec5_2} alt="" />
            </div>
          </div>
        </section>
        {/* SECTION 5 END  */}
        {/* SECTION 6 START  */}
        <section className="flex flex-col justify-center items-center pb-28 pt-10 gap-10 overflow-hidden">
          {/* CONTENT SECTION  */}
          <div className="flex justify-center items-center w-[84%]">
            <div className="w-[65%]">
              <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
                Expand Your Real Estate Network
              </h1>
              <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/5.5 ">
                Network with fellow investors. Exchange insights, build lasting
                partnerships, and discover exclusive real estate deals.
              </p>
            </div>
            <div className="w-[35%] flex justify-end">
              <Link to={"/admin/network"}>
                <button className="hover-btn hover-btn-black px-5 font-Inter py-3 rounded-[7px] cursor-pointer">
                  <span>View more</span>
                </button>
              </Link>
            </div>
          </div>
          {/* CARD SECTION  */}
          <div className="w-[84%] flex gap-10">
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
              InvesDesc={"Real Estate Investor"}
            ></InvestorCards>
            <InvestorCards
              InvesImage={Testimonials1}
              InvesUserName={"John Doe"}
              InvesDesc={"Real Estate Investor"}
            ></InvestorCards>
          </div>
        </section>
        {/* SECTION 6 END  */}
      </div>
      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default Home;
