"use client";

import { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import Inputs from "../InputFields/Inputs";
import { Controller, useForm } from "react-hook-form";
import CountrySelector from "../RegisterCountrySelector/CountrySelection";
import NumberInputs from "../InputFields/NumberInputs";
import TextAreas from "../InputFields/TextAreas";
import axios from "axios";
import AlertModal from "../AlertModal/AlertModal";
import { AtSign, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

function PropertyChat({ id, propertyName }) {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const token = localStorage.getItem("token");
  const [Loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm();

  const ContactSubmission = async (data) => {
    console.log(data);
    try {
      setLoading(true);
      const response = await axios.post(
        `${ApiKey}/messages/send`,
        {
          property_id: id,
          message: data.Message,
          property_url: `${window.location.origin}/properties/${id}`,
          action_url: `${window.location.origin}/admin/inquiry`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response);
      reset();
      setOpen(false);
      AlertModal({
        icon: "success",
        title: "Message sent successfully",
        iconColor: "#703BF7",
        text: "Please allow us some time to process your request. A team member will get back to you shortly",
      });
    } catch (error) {
      setLoading(false);
      setOpen(false);
      AlertModal({
        icon: "error",
        title: "Thank You",
        iconColor: "#703BF7",
        text: error.response.data.message,
      });
      console.log(error);
    } finally {
      setOpen(false);
      setLoading(false);
    }
    reset();
  };

  const handleMakeOfferClick = () => {
    if (!token) {
      navigate("/login", { state: { from: location.pathname } });
    } else {
      setOpen(true);
    }
  };

  return (
    <div>
      <button
        onClick={handleMakeOfferClick}
        className="bg-black  flex justify-center items-center gap-2 text-white font-Urbanist px-3.5 py-2 text-[14px] rounded-[8px] cursor-pointer font-[600] hover-btn hover-btn-black"
      >
        <span>Contact Us</span>
      </button>
      <Dialog open={open} onClose={setOpen} className="relative z-10">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95 "
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-7 right-6  cursor-pointer"
              >
                <X className="size-6 bg-PurpleColor p-[2px] rounded-full  text-white" />
              </button>
              <form
                onSubmit={handleSubmit(ContactSubmission)}
                className="flex flex-col gap-5 px-7 py-14"
              >
                <div>
                  <h1 className="text-[33px] font-[700] font-Inter ">
                    Contact Form
                  </h1>
                  <p className="font-Urbanist font-[500] leading-[18px] text-[14.5px]">
                    Have questions or need assistance? Our team is here to help.
                    Reach out, and we'll get back to you as soon as possible.
                  </p>
                </div>

                <span className="relative">
                  <span>
                    <div className="block mb-1 font-[700] text-PurpleColor w-full max-[1280px]:text-[14px] max-[1666px]:text-[15px] min-[1666px]:text-[16px] ">
                      Property Name
                    </div>
                    <div className="bg-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-full px-4 rounded-[6px] h-12 flex items-center cursor-not-allowed">
                      {propertyName}
                    </div>
                  </span>
                </span>
                <span>
                  <TextAreas
                    label={"Message"}
                    placeholder={
                      "Describe the property, its features, location advantages, and any unique selling points."
                    }
                    register={register("Message", {
                      required: false,
                    })}
                    error={errors.Message?.message}
                  ></TextAreas>
                </span>
                {/* Sign Up Button */}
                <div className="mt-1">
                  <button
                    type="submit"
                    disabled={Loading}
                    className={`bg-PurpleColor w-full h-11 cursor-pointer mt-3 text-white font-Urbanist rounded-[6px] font-[700] ${
                      Loading ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {Loading ? "Submitting..." : "Submit"}
                  </button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
}

export default PropertyChat;
