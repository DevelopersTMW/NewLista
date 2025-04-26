import React from "react";
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

// TABS PANELS
const SeeMoreProducts = (
  <div className="w-[100%] mt-8 flex flex-wrap gap-4 ">
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
  </div>
);

const PropertyDetails = () => {
  return (
    <>
      <Navbar></Navbar>

      {/* PROPERTY DETAIL  */}
      <section className="px-20 pt-20 pb-10">
        {/* ADDRESS AND SOCIAL ICONS  */}
        <div className="flex justify-between">
          <div className="flex gap-3 justify-center items-center">
            <h1 className="font-Urbanist text-[27px] font-[700]">
              Downtown Office Tower
            </h1>
            <p className="border-solid border-[1px] border-[#222222] flex items-center font-Urbanist gap-1 font-[550] px-2 text-[13.5px] py-1 w-max rounded-[5px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                  clip-rule="evenodd"
                />
              </svg>
              123 Main Street, New York, NY 10001
            </p>
            <button className="bg-[#28A745] text-white font-Inter px-4 py-1.5 text-[14px] rounded-[8px]">
              Active
            </button>
          </div>
          <div className="flex justify-center items-center gap-2">
            <h1 className="font-Poppins text-[20px] font-[500] text-[#222222]">
              Share
            </h1>
            <button className="bg-PurpleColor  flex justify-center items-center gap-2 text-white font-Inter px-3 py-1.5 ml-2 text-[14px] rounded-[8px] ">
              <img className="w-[14px] h-[14px]" src={SocialIcons6} alt="" />
              Network
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
      </section>

      {/* DETAIL SECTION  */}

      <section className="px-20 flex gap-3">
        {/* LEFT SIDE START  */}
        <div className="w-[50%] flex flex-col gap-12 ">
          <div>
            <img
              className="w-[93%] h-[600px] object-cover rounded-[8px]"
              src={PropertyDetail1_1}
              alt=""
            />
          </div>
          <div className="flex gap-5 justify-start items-center">
            <img
              className="w-[20.5%] h-[120px] rounded-[6px]"
              src={PropertyDetail1_2}
              alt=""
            />
            <img
              className="w-[20.5%] h-[120px] rounded-[6px]"
              src={PropertyDetail1_3}
              alt=""
            />
            <img
              className="w-[20.5%] h-[120px] rounded-[6px]"
              src={PropertyDetail1_4}
              alt=""
            />
            <img
              className="w-[20.5%] h-[120px] rounded-[6px]"
              src={PropertyDetail1_5}
              alt=""
            />
          </div>
          <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px] w-[92%] px-5 py-6 flex flex-col justify-center gap-4">
            <h1 className="text-[#222222] font-Urbanist text-[25px] font-[700]">
              Key Features & Amenities
            </h1>
            <div className="w-full ">
              <div className="flex flex-col gap-3">
                <Disclosure
                  as="div"
                  className="py-4.5 px-5 mx-auto w-full max-w-lg  rounded-[8px] bg-[#F1F1F1]"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-[15px] font-[600] font-Urbanist text-black flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Ample Parking
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3 font-[500] text-sm/5 font-Urbanist text-[#272727]">
                    If you're unhappy with your purchase, we'll refund you in
                    full.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="py-4.5 px-5 mx-auto w-full max-w-lg  rounded-[8px] bg-[#F1F1F1]"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-[15px] font-[600] font-Urbanist text-black flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Modern Elevator Access
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3 font-[500] text-sm/5 font-Urbanist text-[#272727]">
                    If you're unhappy with your purchase, we'll refund you in
                    full.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="py-4.5 px-5 mx-auto w-full max-w-lg  rounded-[8px] bg-[#F1F1F1]"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-[15px] font-[600] font-Urbanist text-black flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      24/7 Security Surveillance
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3 font-[500] text-sm/5 font-Urbanist text-[#272727]">
                    If you're unhappy with your purchase, we'll refund you in
                    full.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="py-4.5 px-5 mx-auto w-full max-w-lg  rounded-[8px] bg-[#F1F1F1]"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-[15px] font-[600] font-Urbanist text-black flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      Green & Open Spaces
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3 font-[500] text-sm/5 font-Urbanist text-[#272727]">
                    If you're unhappy with your purchase, we'll refund you in
                    full.
                  </DisclosurePanel>
                </Disclosure>
                <Disclosure
                  as="div"
                  className="py-4.5 px-5 mx-auto w-full max-w-lg  rounded-[8px] bg-[#F1F1F1]"
                >
                  <DisclosureButton className="group flex w-full items-center justify-between">
                    <span className="text-[15px] font-[600] font-Urbanist text-black flex gap-2 items-center ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="size-5"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                      High-Speed Internet Connectivity
                    </span>
                  </DisclosureButton>
                  <DisclosurePanel className="mt-3 font-[500] text-sm/5 font-Urbanist text-[#272727]">
                    If you're unhappy with your purchase, we'll refund you in
                    full.
                  </DisclosurePanel>
                </Disclosure>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE  */}
        <div className="w-[50%] flex flex-col gap-8 pt-6">
          <div>
            <h5 className="font-Urbanist text-[#222222] font-semibold text-[17px]">
              Price
            </h5>
            <h1 className="font-Poppins text-[#222222] font-[650] text-[36px] mb-4">
              $1,250,000
            </h1>
            <button className="bg-PurpleColor  flex justify-center items-center gap-2 text-white font-Inter px-3.5 py-2 text-[13px] rounded-[8px] ">
              Apply for a Loan
            </button>
          </div>
          <div className="flex flex-col gap-5">
            <span className="flex items-center gap-3">
              <img
                className="rounded-full w-[65px]"
                src={ProfileImage}
                alt=""
              />
              <span>
                <h1 className="font-Urbanist text-[21px] font-[700]">
                  Esther Howard
                </h1>
                <p className="font-Urbanist text-[16px] flex items-center gap-1">
                  {" "}
                  <img
                    className="w-[15px] h-[14px]"
                    src={SocialIcons7}
                    alt=""
                  />{" "}
                  Manhattan
                </p>
              </span>
            </span>
            <span>
              <p className="font-Urbanist text-[17px] font-semibold">
                Phone Number: +1 (123) 456-7890
              </p>
              <p className="font-Urbanist text-[17px] font-semibold">
                Email: example@email.com
              </p>
            </span>
            <span>
              <button className="flex border-[1px] border-solid border-[#2E70FF] px-3.5 py-1.5 justify-center items-center gap-2 font-semibold text-[#2E70FF] rounded-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="#2E70FF"
                  class="size-4.5"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clip-rule="evenodd"
                  />
                </svg>
                Inquire Now
              </button>
            </span>
          </div>
          <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px]  px-5 py-6 flex flex-col justify-center gap-2">
            <div className="border-b-[1px] border-solid border-[#BBBBBB] pb-7">
              <h1 className="text-[#222222] font-Urbanist text-[25px] font-[700] mb-3">
                Description
              </h1>
              <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                Discover your own piece of paradise with the Seaside Serenity
                Villa. T With an open floor plan, breathtaking ocean views from
                every room, and direct access to a pristine sandy beach, this
                property is the epitome of coastal living.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <div className="w-[33%] border-r-[1px] border-solid border-[#BBBBBB] flex flex-col gap-1">
                <span className="flex gap-2  items-center">
                  <img className="w-[20px] h-5" src={PropertyIcon} alt="" />{" "}
                  <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                    {" "}
                    Year Built
                  </p>
                </span>
                <p className="font-Urbanist font-[700] text-[25px] text-[#222222]">
                  2008
                </p>
              </div>
              <div className="w-[33%] border-r-[1px] border-solid border-[#BBBBBB] flex flex-col gap-1">
                <span className="flex gap-2  items-center">
                  <img className="w-[20px] h-5" src={PropertyIcon2} alt="" />{" "}
                  <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                    {" "}
                    Property Type
                  </p>
                </span>
                <p className="font-Urbanist font-[700] text-[21px] text-[#222222]">
                  {" "}
                  Office Building
                </p>
              </div>
              <div className="w-[33%] flex flex-col gap-1">
                <span className="flex gap-2  items-center">
                  <img className="w-[20px] h-5" src={PropertyIcon} alt="" />{" "}
                  <p className="font-Urbanist font-[500] text-[15px] text-[#222222]">
                    {" "}
                    Area
                  </p>
                </span>
                <p className="font-Urbanist font-[700] text-[20px] text-[#222222]">
                  2,500 Square Feet
                </p>
              </div>
            </div>
          </div>
          <div className="border-[1px] border-solid border-[#BBBBBB] rounded-[8px]  px-5 py-6 flex flex-col justify-center gap-2">
            <h1 className="text-[#222222] font-Urbanist text-[25px] font-[700] mb-3">
              Property Overview
            </h1>
            <p className="font-Urbanist font-[600] text-[#222222]">
              💰 Net Operating Income (NOI):{" "}
              <span className="font-bold">$10,000</span>
            </p>
            <p className="font-Urbanist font-[600] text-[#222222]">
              📈 Cap Rate:<span className="font-bold">6%</span>
            </p>
            <p className="font-Urbanist font-[600] text-[#222222]">
              💳 Owner Financing: <span className="font-bold">No</span>
            </p>
          </div>
          <div className="">
            <img
              className="w-[100%] object-cover h-[305px] rounded-[7px]"
              src={PropertyDetailMap}
              alt=""
            />
          </div>
        </div>
      </section>

      <section className="px-20 py-28">
        <div>
          <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] leading-[48px]">
            Other Properties you might like
          </h1>
        </div>
        <div className="w-[100%]">{SeeMoreProducts}</div>
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PropertyDetails;
