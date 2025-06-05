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
import { MapPin } from "lucide-react";
import EmptyCards from "../../Components/EmptyCard/EmptyCard";

const features = [
  "Ample Parking",
  "Modern Elevator Access",
  "24/7 Security Surveillance",
  "Green & Open Spaces",
  "High-Speed Internet Connectivity",
];

const PropertyDetails = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const params = useParams();
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
        console.log("====================================");
        console.log(Response);
        console.log("====================================");

        const GetPropertyData = await axios.get(`${ApiKey}/properties`);
        const Responses = GetPropertyData.data.data;
        const filtered = Responses.filter(
          (item) =>
            item.property_type === Response.property_type &&
            item.id !== params.id
        );

        setProperties(filtered);
      } catch (error) {
        setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    }
    GetSingleProperty();
  }, [params.id]);

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
                <div className="flex lg:justify-center md:items-center flex-col sm:flex-row mt-4 lg:mt-0 gap-2">
                  <h1 className="font-Poppins text-[20px] font-[500] text-[#222222]">
                    Share
                  </h1>
                  <div className="flex gap-2">
                    <button className="bg-PurpleColor  flex justify-center items-center gap-2 text-white font-Inter px-2 sm:px-3 sm:py-1.5 sm:ml-2 text-[14px] rounded-[5px] sm:rounded-[8px] ">
                      <img
                        className="w-[14px] h-[14px]"
                        src={SocialIcons6}
                        alt=""
                      />
                      <span className="hidden sm:block">Network</span>
                    </button>
                    <div className="flex gap-2">
                      <img src={SocialIcons1} className="w-[30px]" alt="" />
                      <img src={SocialIcons2} className="w-[30px]" alt="" />
                      <img src={SocialIcons3} className="w-[30px]" alt="" />
                      <img src={SocialIcons4} className="w-[30px]" alt="" />
                      <img src={SocialIcons5} className="w-[30px]" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* DETAIL SECTION  */}
            <section className="max-[400px]:px-5 px-8 sm:px-10  lg:px-20 flex flex-col min-[850px]:!flex-row gap-3 w-[100%] 2xl:w-[87%]">
              {/* LEFT SIDE START  */}
              <div className=" flex gap-8 flex-col sm:gap-12 min-[850px]:!w-[50%] ">
                <div className="flex flex-col sm:flex-row min-[850px]:!flex-col gap-8 md:gap-0 min-[850px]:!gap-8 md:pr-10 min-[850px]:!pr-0 ">
                  <div className="sm:w-[75%] md:w-full xl:w-[99%]">
                    <img
                      className="w-full md:w-[93%] h-[280px] sm:h-[400px] md:h-[535px] lg:h-[600px] object-cover rounded-[8px]"
                      src={SingleProperty.images[0]}
                      alt=""
                    />
                  </div>

                  <div className="grid max-[400px]:grid-cols-2 grid-cols-3 sm:grid-cols-1 min-[850px]:!grid-cols-2 lg:!grid-cols-3 xl:!grid-cols-4 gap-5 justify-start items-center sm:w-[25%] min-[850px]:!w-[94%] xl:!w-[93%]">
                    <img
                      className="w-[100%] h-[110px] md:h-[120px] rounded-[6px]"
                      src={SingleProperty.images[1]}
                      alt=""
                    />

                    <img
                      className="w-[100%] h-[110px] sm:h-[120px] rounded-[6px]"
                      src={PropertyDetail1_3}
                      alt=""
                    />

                    <img
                      className="w-[100%] h-[110px] sm:h-[120px] rounded-[6px]"
                      src={PropertyDetail1_4}
                      alt=""
                    />

                    <img
                      className="w-[100%] h-[110px] sm:h-[120px] rounded-[6px]"
                      src={PropertyDetail1_5}
                      alt=""
                    />
                  </div>
                </div>

                <div className="w-full px-0 lg:px-1 lg:px-0 md:w-[94%]">
                  <div className="max-w-4xl mx-auto border border-[#BBBBBB] rounded-lg py-6 max-[400px]:px-3 px-6  lg:px-6 md:px-4 sm:p-6 bg-white">
                    <h2 className="text-[21px] md:text-[28px] leading-[34px] lg:text-3xl font-bold font-Urbanist text-[#222222] mb-4 lg:mb-6">
                      Key Features & Amenities
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 sm:gap-5">
                      {features.map((feature, index) => (
                        <Disclosure key={index}>
                          {({ open }) => (
                            <div className="bg-[#F1F1F1] rounded-lg px-4 py-3">
                              <Disclosure.Button className="flex w-full justify-between items-center font-Urbanist text-[13px] md:text-base font-semibold text-[#000000]">
                                <span className="flex items-center text-start gap-2">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    className="w-5 h-5"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                  {feature}
                                </span>
                              </Disclosure.Button>

                              <Disclosure.Panel className="mt-2 text-[12px] text-[#272727] font-Urbanist font-medium">
                                This amenity ensures convenience, comfort, and
                                efficiency for your business operations.
                              </Disclosure.Panel>
                            </div>
                          )}
                        </Disclosure>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT SIDE  */}
              <div className="min-[850px]:!w-[50%] flex flex-col gap-8 pt-6">
                <div>
                  <h5 className="font-Urbanist text-[#222222] font-semibold text-[17px]">
                    Price
                  </h5>

                  <h1 className="font-Poppins text-[#222222] font-[650] text-[30px] sm:text-[36px] mb-4">
                    $
                    {SingleProperty.listing_type === "For Sale"
                      ? SingleProperty.sale_price
                      : SingleProperty.lease_rate}
                  </h1>

                  <button className="bg-PurpleColor  flex justify-center items-center gap-2 text-white font-Inter px-3.5 py-2 text-[13px] rounded-[8px] ">
                    Apply for a Loan
                  </button>
                </div>

                <div className="flex flex-col gap-5">
                  <span className="flex items-center gap-3">
                    <img
                      className="rounded-full w-[60px] sm:w-[65px]"
                      src={ProfileImage}
                      alt=""
                    />

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
                        {SingleProperty.user.location}
                      </p>
                    </span>
                  </span>

                  <span>
                    <p className="font-Urbanist text-[16px] sm:text-[17px] font-semibold">
                      Phone Number: {SingleProperty.user.phone}
                    </p>

                    <p className="font-Urbanist  text-[16px] sm:text-[17px] font-semibold">
                      Email: {SingleProperty.user.email}
                    </p>
                  </span>

                  <span>
                    <button className="flex border-[1px] text-[15px] sm:text-[16px] border-solid border-[#2E70FF] px-3.5 py-1.5 justify-center items-center gap-2 font-semibold text-[#2E70FF] rounded-[10px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#2E70FF"
                        className="size-4.5"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                          clipRule="evenodd"
                        />
                      </svg>
                      Inquire Now
                    </button>
                  </span>
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

                  <div className="grid xl:flex grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-[850px]:!grid-cols-1 lg:!grid-cols-2 2xl:!grid-cols-3 gap-6 sm:gap-0 lg:gap-4 pt-4 xl:justify-between ">
                    {/* Year Built */}
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
                        2008
                      </p>
                    </div>

                    {/* Property Type */}
                    <div className="flex flex-col gap-1 border-b sm:border-b-0 lg:border-r border-[#BBBBBB] pb-4 lg:pb-0 xl:w-[33%]">
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
                        Office Building
                      </p>
                    </div>

                    {/* Area */}
                    <div className="flex flex-col gap-1 ">
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
                        2,500 Square Feet
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px]  px-5 py-6 flex flex-col justify-center gap-2">
                  <h1 className="text-[#222222] font-Urbanist text-[22px] sm:text-[25px] font-[700] sm:mb-3">
                    Property Overview
                  </h1>

                  <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                    💰 Net Operating Income (NOI):{" "}
                    <span className="font-bold">$10,000</span>
                  </p>

                  <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                    📈 Cap Rate:<span className="font-bold">6%</span>
                  </p>

                  <p className="font-Urbanist font-[600] text-[14px] sm:text-[16px] text-[#222222]">
                    💳 Owner Financing: <span className="font-bold">No</span>
                  </p>
                </div>

                <div className="flex justify-center items-center">
                  <iframe
                    src={`https://www.google.com/maps?q=404${SingleProperty.address}&output=embed`}
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
                  Properties.slice(0, 4).map((items) => (
                    <div
                      key={items.id}
                      className="max-[400px]:w-[270px] w-[300px] sm:w-[275px] md:w-[300px] xl:w-[275px]"
                    >
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
                  ))}
              </div>
            </section>
          </>
        )}
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PropertyDetails;
