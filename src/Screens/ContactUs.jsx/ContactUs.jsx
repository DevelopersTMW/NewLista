import React, { useState } from "react";
import { Select, Textarea } from "@headlessui/react";
// Components
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
import CountrySelector from "../../Components/RegisterCountrySelector/CountrySelection";
// Image
import ContactImage1_1 from "../../assets/ContactImage1.1.png";
import ContactImage1_2 from "../../assets/ContactImage1.2.png";
import Inputs from "../../Components/InputFields/Inputs";

const ContactUs = () => {
  const [phone, setPhone] = useState("");

  return (
    <>
      <Navbar></Navbar>
      {/* CONTACT SECTION START   */}
      <section className=" relative px-7 sm:px-16 md:px-20 gap-28 py-20 sm:py-24 md:py-32 overflow-x-hidden flex justify-center items-center  ">
        {/* SHAPE  */}
        <div className="absolute -z-10 -end-30 overflow -top-10">
          <img className="w-[80%]" src={ContactImage1_2} alt="" />
        </div>

        <div className="flex justify-center 2xl:w-[85%]">
          {/* CONTACT FORM SECTION */}
          <div className=" w-[100%] lg:w-[58%] flex flex-col gap-8">
            {/* CONTACT INFO  */}
            <div>
              <h1 className="max-[400px]:text-[] text-[32px] leading-[36px] sm:text-[35px] font-[700] font-Urbanist  text-[#1E1E1E] md:text-[43px] md:leading-[48px]">
                Get in Touch with NewLista
              </h1>
              <p className="text-[12.5px] font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/8 sm:leading-[18px] ">
                Have questions or need assistance? Our team is here to help.
                Reach out, and we'll get back to you as soon as possible.
              </p>
            </div>

            {/* CONTACT FORM */}
            <form className="flex flex-col gap-4">
              {/* Name  */}
              <div className="flex gap-5 w-[100%]">
                <span className="w-[50%]">
                  <label
                    for="email"
                    className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                    placeholder="Enter your first name"
                  />
                </span>
                <span className="w-[50%]">
                  <label
                    for="email"
                    className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="email"
                    className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                    placeholder="Enter your last name"
                  />
                </span>
              </div>

              {/* Email  */}
              <div>
                <label
                  for="email"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                  placeholder="Enter a valid email (e.g., you@email.com)"
                />
              </div>

              {/* Phone Number*/}
              <CountrySelector setPhone={setPhone} phone={phone} />
              {/* Location  */}
              <div>
                <Inputs
                  labels={"Subject"}
                  placeholder={"Enter General Inquiry"}
                ></Inputs>
              </div>

              {/* Message */}
              <div>
                <label
                  for="text"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  Message
                </label>
                <Textarea
                  className={
                    "bg-[#F3EEFF] border-[#F3EEFF] text-[#868686] font-[500] font-Urbanist text-[15px] w-[100%]  px-4 rounded-[6px] outline-none py-5"
                  }
                  rows={6}
                  name="description"
                  placeholder="Please enter your message here..."
                ></Textarea>
              </div>

              {/* Send Message Button */}
              <div className="mt-1">
                <button className=" hover-btn hover-btn-purple font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]">
                  <span>
                    Send Message
                  </span>
                </button>
              </div>
            </form>
          </div>
          {/* IMAGE SECTION  */}
          <div className="w-[42%] hidden lg:flex lg:ml-10 xl:ml-0 justify-center items-center">
            <span>
              <img src={ContactImage1_1} alt="" />
            </span>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END  */}
      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default ContactUs;
