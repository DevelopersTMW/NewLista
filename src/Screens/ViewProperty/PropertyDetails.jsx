import React, { useEffect, useMemo, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
import PropertiesCards2 from "../../Components/Cards/PropertiesCards/PropertiesCards2";
// IMAGES
import BlockUserIcon from "../../../public/Images/BlockUserIcon.png";
import SocialIcons1 from "../../assets/SocialIcons1.png";
import SocialIcons2 from "../../assets/SocialIcons2.png";
import SocialIcons3 from "../../assets/SocialIcons3.png";
import SocialIcons4 from "../../assets/SocialIcons4.png";
import SocialIcons5 from "../../assets/SocialIcons5.png";
import SocialIcons6 from "../../assets/SocialIcons6.png";
import SocialIcons7 from "../../assets/SocialIcons7.png";
import PropertyIcon from "../../assets/PropertyIcon.png";
import ProfileImage from "../../assets/ProfileImage.png";
import PropertyIcon2 from "../../assets/PropertyIcon2.png";
import PropertiesImage1 from "../../assets/PropertiesImage1.png";
import PropertiesImage2 from "../../assets/PropertiesImage2.png";
import PropertiesImage3 from "../../assets/PropertiesImage3.png";
import PropertyDetail1_1 from "../../assets/PropertyDetail1.1.jpg";
import PropertyDetail1_2 from "../../assets/PropertyDetail1.2.jpg";
import PropertyDetail1_3 from "../../assets/PropertyDetail1.3.jpg";
import PropertyDetail1_4 from "../../assets/PropertyDetail1.4.jpg";
import PropertyDetail1_5 from "../../assets/PropertyDetail1.5.jpg";
import PropertyDetailMap from "../../assets/PropertyDetailMap.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";
import { AlignLeft, FlagOff, Link, MapPin } from "lucide-react";
import EmptyCards from "../../Components/EmptyCard/EmptyCard";
import TruncatedText from "../../Components/TruncatedText/TruncatedText";
import KeyFeatures from "./KeyFeatures&Amenities/KeyFeatures";
import InquiryForm from "../../Components/InquiryForm/InquiryForm";
import DummyLogo from "../../../public/Images/UnknowUser.png";
import MakeOffer from "../../Components/MakeAnOffer/MakeOffer";
import { useSelector } from "react-redux";
import SocialPage from "./SocialIcons/SocialIcons";
import PropertyChat from "../../Components/PropertyChat/PropertyChat";
import ReportUserModal from "../../Components/ReportModal/ReportModal";
import PropertyGallery from "../../Components/Carousel/PropertyGallery/PropertyGallery";

const features = [
  "Ample Parking",
  "Modern Elevator Access",
  "24/7 Security Surveillance",
  "Green & Open Spaces",
  "High-Speed Internet Connectivity",
];

const visibleFieldsByType = {
  Default: [
    "Currency",
    "MonthlyRental",
    "BuildingLevels",
    "Tenancy",
    "ParkingSpace",
    "CAM",
    "NumberOfUnits",
    "BuildingClass",
    "PercentageLeased",
    "HVAC",
    "Parking",
  ],
  Land: [
    "Currency",
    "Monthly-Rental",
    "Fenced",
    "LandScape",
    "LandScapeNumber",
    "LandScapeAcres",
    "LandScapeNumber2",
    "HVAC",
    "Parking",
  ],
};

const PropertyDetails = () => {
  const params = useParams();
  const token = localStorage.getItem("token");
  const ApiKey = import.meta.env.VITE_API_KEY;
  const status = localStorage.getItem("status");
  const [UserId, setUserId] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [Properties, setProperties] = useState([]);
  const [SingleProperty, setSingleProperty] = useState();
  const [Loading, setLoading] = useState(true);

  useEffect(() => {
    async function GetSingleProperty() {
      try {
        const GetSingleProperty = await axios.get(
          `${ApiKey}/view-property/${params.id}`
        );
        const Response = GetSingleProperty.data.data;
        setSingleProperty(Response);
        console.log(Response);
        const GetPropertyData = await axios.get(`${ApiKey}/properties`);
        const Responses = GetPropertyData.data.data;
        setProperties(Responses);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
    GetSingleProperty();
  }, [params.id]);

  console.log(SingleProperty);

  const currentFields = visibleFieldsByType["Default"] || [];

  useEffect(() => {
    const FindId = async () => {
      try {
        setLoading(true);
        const res = await axios.get(`${ApiKey}/user`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (res) {
          setUserId(res.data.id);
        } else {
          setLoading(true);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    FindId();

    const ViewCounter = async () => {
      try {
        const response = await axios.post(
          `${ApiKey}/listing/view/${params.id}`,
          {}
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    ViewCounter();
  }, []);

  const [selectedOption, setSelectedOption] = useState("sale");

  const handleToggle = (e) => {
    setSelectedOption((prev) => (prev === "sale" ? "lease" : "sale"));
  };

  return (
    <>
      <Navbar></Navbar>
      {Loading && (
        <div className="flex justify-center items-center py-60">
          <Spinner style={"w-14 h-20 text-PurpleColor"} />
        </div>
      )}

      <section className="flex flex-col justify-center items-center">
        {SingleProperty && (
          <>
            {/* PROPERTY DETAIL  */}
            <section className="pt-20 pb-10 w-[100%] lg:px-20 2xl:w-[87%] ">
              {/* ADDRESS AND SOCIAL ICONS  */}
              <div className="flex flex-col lg:flex-row justify-between max-[400px]:px-5 px-8 sm:px-10 lg:px-0">
                <div className="flex flex-col flex-wrap  md:flex-row gap-3 xl:justify-center md:items-center">
                  <h1 className="font-Urbanist max-[400px]:text-[22px] text-[25px] sm:text-[28px] lg:text-[26px] font-[700]">
                    {SingleProperty.property_name}
                  </h1>
                  <div className="flex flex-wrap gap-3">
                    <p className="border-solid border-[1px] border-[#222222] flex items-center font-Urbanist gap-1 font-[550] px-2 text-[12.5px] sm:text-[13.5px] lg:text-[13px] py-1 w-max rounded-[5px]">
                      <MapPin size={15} />
                      {SingleProperty.address +
                        " " +
                        SingleProperty.state +
                        " " +
                        SingleProperty.city}
                    </p>

                    <div className="top-8 end-8">
                      {"Available" === SingleProperty.listing_status ? (
                        <button className="bg-[#28A745] text-white font-Inter px-4 py-1.5 text-[14px] rounded-[8px]">
                          Available
                        </button>
                      ) : "Sold" === SingleProperty.listing_status ? (
                        <button className="bg-[#DC3545] text-white font-Inter px-4 py-1.5 text-[14px] rounded-[8px]">
                          Sold
                        </button>
                      ) : (
                        <button className="bg-[#FFC107] text-white font-Inter px-4 py-1.5 text-[14px] rounded-[8px]">
                          {SingleProperty.listing_status}
                        </button>
                      )}
                    </div>
                  </div>
                </div>
                <SocialPage setLoading={setLoading} id={params.id} />
              </div>
            </section>

            {/* DETAIL SECTION  */}
            <section className="max-[400px]:px-5 px-8 sm:px-10  lg:px-20 flex flex-col min-[850px]:!flex-row gap-3 w-[100%] 2xl:w-[87%]">
              {/* LEFT SIDE START  */}
              <div className=" flex gap-8 flex-col sm:gap-12 min-[850px]:!w-[50%] ">
                <PropertyGallery images={SingleProperty.images}/>

                <div className="w-full px-0 lg:px-1  md:w-[94%]">
                  <div className="max-w-4xl mx-auto border border-[#BBBBBB] rounded-lg py-6 max-[400px]:px-3 px-6  lg:px-6 md:px-4 sm:p-6 bg-white">
                    <h2 className="text-[21px] md:text-[28px] leading-[34px] lg:text-3xl font-bold font-Urbanist text-[#222222] mb-4 lg:mb-6">
                      Key Features & Amenities
                    </h2>

                    <KeyFeatures SingleProperty={SingleProperty}></KeyFeatures>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE  */}
              <div className="min-[850px]:!w-[50%] flex flex-col gap-8 pt-6 relative">
                <div>
                  <h5 className="font-Urbanist text-[#222222] font-semibold text-[20px]">
                    Price
                  </h5>
                  {SingleProperty.listing_type === "For Sale" && (
                    <h1 className="font-Poppins text-[#222222] font-[650] text-[30px] sm:text-[36px] flex  gap-6 items-center relative">
                      {"$" + SingleProperty.sale_price}
                    </h1>
                  )}
                  {SingleProperty.listing_type === "For Lease" && (
                    <h1 className="font-Poppins text-[#222222] font-[650] text-[30px] sm:text-[36px] flex  gap-6 items-center relative">
                      {"$" + SingleProperty.lease_rate}
                    </h1>
                  )}
                  <div className="mb-6">
                    {SingleProperty.listing_type ===
                      "Both (For Sale & For Lease)" && (
                      <>
                        <h1 className="font-Poppins text-[#222222] font-[650] text-[30px] sm:text-[36px] flex  gap-10 items-center relative">
                          <div className="flex flex-col leading-[40px]">
                            <span className="text-[23px]">Sale:</span>
                            <span>${SingleProperty.sale_price}</span>
                          </div>
                          <div className="flex flex-col leading-[40px] border-l-[1px] pl-10 border-gray-300">
                            <span className="text-[23px]">Lease:</span>
                            <div>
                              ${SingleProperty.lease_rate}
                              <span className="text-[20px]">
                                {"/ " + SingleProperty.lease_rate_unit}
                              </span>
                            </div>
                          </div>
                        </h1>
                      </>
                    )}
                  </div>
                  {UserId !== SingleProperty.user.id && (
                    <div className="flex gap-4">
                      <InquiryForm
                        id={params.id}
                        propertyAddress={
                          SingleProperty.address +
                          " " +
                          SingleProperty.city +
                          " " +
                          SingleProperty.state
                        }
                      />
                      <PropertyChat
                        propertyName={SingleProperty.property_name}
                        id={params.id}
                      />
                    </div>
                  )}
                </div>
                {token && (
                  <button
                    onClick={() => setShowReportModal(true)}
                    title="Report User"
                    className="absolute right-0"
                  >
                    
                    <span className="bg-red-500">
                      <FlagOff className="bg-red-500 text-white px-2 rounded-full size-8 cursor-pointer" />
                    </span>
                  </button>
                )}

                <div className="flex flex-col gap-5">
                  <div className="flex justify-between items-center">
                    <span className="flex items-center gap-3">
                      <span className="">
                        <img
                          className="rounded-full w-[65px] h-[65px] object-cover"
                          src={
                            import.meta.env.VITE_IMAGE_KEY +
                              SingleProperty.user.headshot || DummyLogo
                          }
                          alt=""
                        />
                      </span>

                      <span>
                        <h1 className="font-Urbanist text-[18.5px] sm:text-[21px] font-[700]">
                          {SingleProperty.user.first_name +
                            " " +
                            SingleProperty.user.last_name}
                        </h1>

                        <p className="font-Urbanist text-[15px] sm:text-[16px] flex items-center gap-1">
                          {" "}
                          <img
                            className="w-[15px] h-[14px]"
                            src={SocialIcons7}
                            alt=""
                          />{" "}
                          {SingleProperty.user.city +
                            " " +
                            SingleProperty.user.state}
                        </p>
                      </span>
                    </span>
                  </div>
                  {status === "active" && (
                    <span>
                      {SingleProperty.show_phone && (
                        <p className="font-Urbanist  text-[16px] sm:text-[17px] font-semibold">
                          Phone: {SingleProperty.user.phone}
                        </p>
                      )}

                      {SingleProperty.show_email && (
                        <p className="font-Urbanist  text-[16px] sm:text-[17px] font-semibold">
                          Email: {SingleProperty.user.email}
                        </p>
                      )}
                    </span>
                  )}

                  {UserId !== SingleProperty.user.id && (
                    <MakeOffer id={params.id} />
                  )}
                </div>

                <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px]  px-5 py-6 flex flex-col justify-center gap-2">
                  <div className="border-b-[1px] border-solid border-[#BBBBBB] pb-7">
                    <h1 className="text-[#222222] font-Urbanist text-[22px] sm:text-[25px] font-[700] mb-3">
                      Description
                    </h1>

                    <p className="font-Urbanist font-[500] text-[13.5px] sm:text-[15px] text-[#222222]">
                      {SingleProperty.description}
                    </p>
                  </div>

                  <div className="grid xl:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[850px]:!grid-cols-1 lg:!grid-cols-2 2xl:!grid-cols-3 gap-6 sm:gap-0 lg:gap-4 pt-4  ">
                    {/* Year Built */}
                    {SingleProperty.custom_fields && (
                      <div className="flex flex-col gap-1 border-b sm:border-b-0 lg:mr-5 lg:border-r border-[#BBBBBB] pb-4 lg:pb-0 xl:w-[25%] ">
                        <span className="flex gap-2 items-center">
                          <img
                            className="w-[20px] h-5"
                            src={PropertyIcon}
                            alt=""
                          />
                          <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                            Year Built
                          </p>
                        </span>
                        <p className="font-Urbanist font-[700] text-[23px] sm:text-[25px] text-[#222222]">
                          {SingleProperty.custom_fields.YearBuilt || "Guest"}
                        </p>
                      </div>
                    )}

                    <div className="flex flex-col gap-1 border-b sm:border-b-0 pb-4 lg:border-r border-[#BBBBBB] lg:pb-0 xl:w-[30%] justify-start">
                      <span className="flex gap-2 items-center">
                        <img
                          className="w-[20px] h-5"
                          src={PropertyIcon2}
                          alt=""
                        />
                        <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                          Property Type
                        </p>
                      </span>
                      <p className="font-Urbanist font-[700] text-[20px] sm:text-[21px] text-[#222222]">
                        {SingleProperty.property_type}
                      </p>
                    </div>

                    {/* BuildingSize */}
                    {SingleProperty.building_size && (
                      <div className="flex flex-col gap-1 pl-4  xl:w-[30%]">
                        <span className="flex gap-2 items-center">
                          <img
                            className="w-[20px] h-5"
                            src={PropertyIcon}
                            alt=""
                          />
                          <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                            Area
                          </p>
                        </span>

                        <p className="font-Urbanist font-[700] text-[20px] sm:text-[21px] text-[#222222]">
                          {SingleProperty.building_size}
                          {SingleProperty.custom_fields?.BuildingSize &&
                            " " + SingleProperty.custom_fields.BuildingSize}
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px]  px-5 py-6 flex flex-col justify-center gap-2">
                  <h1 className="text-[#222222] font-Urbanist text-[22px] sm:text-[25px] font-[700] sm:mb-3">
                    Property Overview
                  </h1>

                  {(SingleProperty.listing_type === "For Sale" ||
                    SingleProperty.listing_type ===
                      "Both (For Sale & For Lease)") && (
                    <>
                      <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                        💰 Net Operating Income (NOI) :
                        <span className="font-bold">
                          ${SingleProperty.noi || "None"}
                        </span>
                      </p>

                      <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                        📈 Cap Rate :{" "}
                        <span className="font-bold">
                          {Math.round(SingleProperty.cap_rate) || "0"}%
                        </span>
                      </p>
                    </>
                  )}

                  {(SingleProperty.listing_type === "For Lease" ||
                    SingleProperty.listing_type ===
                      "Both (For Sale & For Lease)") && (
                    <>
                      <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                        ✔ Lease Type :{" "}
                        <span className="font-bold">
                          {SingleProperty.lease_type || "0"}
                        </span>
                      </p>
                      <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                        〽 Lease Rate & Unit :{" "}
                        <span className="font-bold">
                          {SingleProperty.lease_rate +
                            " " +
                            SingleProperty.lease_rate_unit || "None"}
                        </span>
                      </p>
                    </>
                  )}

                  <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                    💳 Owner Financing :{" "}
                    <span className="font-bold">
                      {SingleProperty.owner_financing === true ? "Yes" : "No"}
                    </span>
                  </p>
                </div>

                {console.log(
                  SingleProperty.address +
                    SingleProperty.city +
                    SingleProperty.state +
                    SingleProperty.zip
                )}

                <div className="flex justify-center items-center">
                  <iframe
                    src={`https://www.google.com/maps?q=404 ${
                      SingleProperty.address +
                      SingleProperty.city +
                      SingleProperty.state +
                      SingleProperty.zip
                    }&output=embed`}
                    className="w-full h-[220px] sm:h-[300px] md:h-[250px] lg:h-[300px] rounded-[8px]"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </section>

            <section className="max-[370px]:px-5 px-8 py-14 sm:px-10 lg:px-20 sm:py-28 w-[100%] 2xl:w-[88%]">
              <div>
                <h1 className="text-center sm:text-start max-[370px]:text-[28px] text-[32px] leading-[35px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[33px] lg:text-[38px] sm:leading-[48px]">
                  Other Properties you might like
                </h1>
              </div>
              <div className="w-[100%] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-5 gap-5 sm:mt-5 lg:mt-10 place-items-center sm:place-items-start">
                {Properties &&
                  Properties.slice(0, 4).map((items) =>
                    Number(items.id) !== Number(params.id) ? (
                      <div
                        key={items.id}
                        className="max-[400px]:w-[270px] w-[300px] sm:w-[275px] md:w-[300px] xl:w-[275px]"
                      >
                        <PropertiesCards2
                          PropertyType={items.property_type}
                          Area={items.building_size}
                          Img={PropertiesImage3}
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
                              maxLength={9}
                            />
                          }
                          forsale={items.sale_price && items.sale_price}
                          forlease={items.lease_rate && items.lease_rate}
                          id={items.id}
                          images={items.images[0]}
                        />
                      </div>
                    ) : null
                  )}
              </div>
            </section>
          </>
        )}

        {/* Move this OUTSIDE Dialog */}
        {showReportModal && (
          <ReportUserModal
            isOpen={showReportModal}
            onClose={() => setShowReportModal(false)}
            userId={SingleProperty.user.id}
            from={`From ${SingleProperty.property_name} Property:`}
          />
        )}
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PropertyDetails;
