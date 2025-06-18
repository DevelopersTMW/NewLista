import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Select, Textarea } from "@headlessui/react";
// Components
import Inputs from "../../../Components/InputFields/Inputs";
import TextAreas from "../../../Components/InputFields/TextAreas";
import AlertModal from "../../../Components/AlertModal/AlertModal";
import CountrySelector from "../../../Components/RegisterCountrySelector/CountrySelection";
// Image
import ContactImage1_1 from "../../../assets/ContactImage1.1.png";
import ContactImage1_2 from "../../../assets/ContactImage1.2.png";

const HelpSupport = () => {
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    reset,
  } = useForm();

  // CONTACT FORM
  const ContactForm = (Value) => {
    if (phone) {
      console.log("FormValue  :", Value, phone);
      AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: "Your Form has Been Submitted",
      });
    } else {
      AlertModal({
        icon: "error",
        iconColor: "red",
        title: "Failed Request",
        text: "Enter Phone Number",
      });
    }
    setPhone("");
    reset();
  };

  return (
    <>
      {/* CONTACT SECTION START   */}
      <section className=" relative gap-48 py-20 sm:py-10 md:py-16 overflow-x-hidden flex justify-center items-center  ">
        {/* SHAPE  */}
        <div className="absolute -z-10 -end-30 overflow -top-10">
          <img className="w-[80%]" src={ContactImage1_2} alt="" />
        </div>

        <div className="flex justify-cente 2xl:w-[85%]">
          {/* CONTACT FORM SECTION */}
          <div className=" w-[100%] lg:w-[70%] flex flex-col gap-8">
            {/* CONTACT INFO  */}
            <div>
              <h1 className="max-[400px]:text-[31px] text-[32px] leading-[36px] sm:text-[35px] font-[700] font-Urbanist  text-[#1E1E1E] md:text-[43px] md:leading-[48px]">
                Customer Support
              </h1>
              <p className="text-[12.5px] font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] mt-5">
                Experiencing issues or have suggestions? Our support team is
                here to help. Fill out the form below and we’ll get back to you
                as soon as possible
              </p>
            </div>

            {/* CONTACT FORM */}
            <form
              onSubmit={handleSubmit(ContactForm)}
              className="flex flex-col gap-4"
            >
              {/* Name  */}
              <div className="flex flex-wrap sm:flex-nowrap gap-5 w-[100%]">
                <span className="sm:w-[50%] w-full">
                  <Inputs
                    register={register}
                    name={"FirstName"}
                    labels={"First Name"}
                    placeholder={"Enter your first name"}
                  ></Inputs>
                </span>
                <span className=" sm:w-[50%] w-full">
                  <Inputs
                    register={register}
                    name={"LastName"}
                    labels={"Last Name"}
                    placeholder={"Enter your last name"}
                  ></Inputs>
                </span>
              </div>

              {/* Email  */}
              <div>
                <Inputs
                  register={register}
                  type={"email"}
                  name={"Email"}
                  labels={"Email Address"}
                  placeholder={"Enter a valid email (e.g., you@email.com)"}
                ></Inputs>
              </div>

              {/* Message */}
              <div>
                <TextAreas
                  require={true}
                  label={"Message"}
                  placeholder={"Please enter your message here..."}
                  register={register}
                  name={"Message"}
                ></TextAreas>
              </div>
              <div>
                <TextAreas
                  require={true}
                  label={"Error Message You Are Receiving?"}
                  placeholder={"Please enter your error message here..."}
                  register={register}
                  name={"Message"}
                ></TextAreas>
              </div>

              {/* Send Message Button */}
              <div className="mt-1">
                <button
                  className="text-[15px] sm:text-[16px] hover-btn hover-btn-purple font-[700] w-max h-11 text-white font-Urbanist rounded-[6px]"
                  type="submit"
                >
                  <span>Send Message</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END  */}
    </>
  );
};

export default HelpSupport;
