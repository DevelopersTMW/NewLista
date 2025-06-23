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
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";

const HelpSupport = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [loading, setloading] = useState(false);
  const [phone, setPhone] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // CONTACT FORM
  const ContactForm = async (data) => {
    try {
      setloading(true);
      const response = await axios.post(
        `${ApiKey}/support`,
        {
          first_name: data.FirstName,
          last_name: data.LastName,
          email: data.Email,
          message: data.Message,
          error_message: data.ErrMessageBox,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: response.data.message,
      });
    } catch (error) {
      console.log(error);
      setloading(false);
      AlertModal({
        icon: "error",
        iconColor: "red",
        title: "Failed Request",
        text: error.data.message,
      });
    } finally {
      setloading(false);
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
            {loading ? (
              <div className="flex justify-center items-center !h-[75vh]">
                <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
              </div>
            ) : (
              <form
                onSubmit={handleSubmit(ContactForm)}
                className="flex flex-col gap-4"
              >
                {/* Name  */}
                <div className="flex flex-wrap sm:flex-nowrap gap-5 w-[100%]">
                  <span className="sm:w-[50%] w-full">
                    <Inputs
                      name={"FirstName"}
                      register={register("FirstName", {
                        required: "First name is required",
                      })}
                      error={errors.FirstName?.message}
                      labels={"First Name"}
                      placeholder={"Enter your first name"}
                    ></Inputs>
                  </span>
                  <span className=" sm:w-[50%] w-full">
                    <Inputs
                      register={register("LastName", {
                        required: "Last name is required",
                      })}
                      name={"LastName"}
                      labels={"Last Name"}
                      placeholder={"Enter your last name"}
                      error={errors.LastName?.message}
                    ></Inputs>
                  </span>
                </div>

                {/* Email  */}
                <div>
                  <Inputs
                    register={register("Email", {
                      required: "Email is required",
                    })}
                    type={"email"}
                    name={"Email"}
                    labels={"Email Address"}
                    error={errors.Email?.message}
                    placeholder={"Enter a valid email (e.g., you@email.com)"}
                  ></Inputs>
                </div>

                {/* Message */}
                <div>
                  <TextAreas
                    label={"Message"}
                    placeholder={"Please enter your message here..."}
                    register={register("Message", {
                      required: "Message is required",
                    })}
                    name={"Message"}
                    error={errors.Message?.message}
                  ></TextAreas>
                </div>
                <div>
                  <TextAreas
                    name={"ErrMessageBox"}
                    label={"Error Message You Are Receiving?"}
                    placeholder={"Please enter your error message here..."}
                    register={register("ErrMessageBox")}
                  />
                </div>

                {/* Send Message Button */}
                <div className="mt-1">
                  <button
                    className="text-[15px] sm:text-[16px] hover-btn hover-btn-purple font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]"
                    type="submit"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
      {/* CONTACT SECTION END  */}
    </>
  );
};

export default HelpSupport;
