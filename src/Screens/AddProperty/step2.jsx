import React, { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Checkboxs from "../../Components/InputFields/Checkboxs.jsx";
import { Facebook, Instagram, Linkedin, Twitter, Upload } from "lucide-react";
import { NavLink } from "react-router-dom";

const Step2 = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
  } = useForm({
    defaultValues,
  });
  const files = watch("fileInput"); // will be FileList
  const [previews, setPreviews] = useState([]);

  useEffect(() => {
    if (!files || files.length === 0) {
      setPreviews([]);
      return;
    }

    const urls = Array.from(files)
      .filter((file) => file.type.startsWith("image/"))
      .map((file) => URL.createObjectURL(file));

    setPreviews(urls);

    // Cleanup object URLs
    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [files]);

  const onSubmits = (value) => {
    console.log("hello");

    console.log(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmits)} action="" className="">
        <div className="border border-[#ececec] rounded-2xl px-10 py-8">
          <div className="relative">
            <label
              htmlFor={"Property Photos"}
              className="block font-[700] text-PurpleColor w-[100%] max-[1280px]:text-[16.5px] max-[1666px]:text-[16.5px] min-[1666px]:text-[16.5px]"
            >
              Property Photos
            </label>
            <div className=" mt-4 rounded-xl relative">
              <div className="flex flex-col items-center justify-center w-full py-10 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer">
                <div className="flex flex-col justify-center px-9 items-center gap-3">
                  <Upload size={55} />
                  <p className="text-center text-[22px] font-semibold w-[60%]">
                    Drag and drop your images here PNG, JPG, WEBP up to 10MB
                    each
                  </p>
                  <div className="relative w-full flex flex-col items-center">
                    <input
                      id="fileInput"
                      type="file"
                      className="hidden"
                      accept=".png,.jpg,.jpeg,.webp"
                      multiple
                      {...register("fileInput")}
                    />
                    <label
                      htmlFor="fileInput"
                      className="inline-block cursor-pointer w-max text-center bg-PurpleColor text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition hover-btn hover-btn-purple"
                    >
                      <span>Select Files</span>
                    </label>
                  </div>

                  {previews.length > 0 && (
                    <div className="flex flex-wrap gap-4 mt-4">
                      {previews.map((src, index) => (
                        <img
                          key={index}
                          src={src}
                          alt={`Preview ${index}`}
                          className="max-w-[150px] rounded shadow"
                        />
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="border-y-[1px] border-[#BBBBBB] border-solid my-10 py-9">
            <span>
              <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
                Building Features
              </h1>
            </span>
            <div className="flex gap-20">
              <div className="flex flex-col gap-2">
                <Controller
                  name="Parking"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs {...field} name="Parking" labels="Parking" />
                  )}
                />
                <Controller
                  name="SprinklerSystem"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs
                      {...field}
                      name="SprinklerSystem"
                      labels="Sprinkler System"
                    />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="SecuritySystem"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs
                      {...field}
                      name="SecuritySystem"
                      labels="Security System"
                    />
                  )}
                />
                <Controller
                  name="HVAC"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs {...field} name="HVAC" labels="HVAC" />
                  )}
                />
              </div>
              <div className="flex flex-col gap-2">
                <Controller
                  name="HighSpeedInternet"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs
                      {...field}
                      name="HighSpeedInternet"
                      labels="High Speed Internet"
                    />
                  )}
                />
                <Controller
                  name="ADACompliant"
                  control={control}
                  defaultValue={false}
                  render={({ field }) => (
                    <Checkboxs
                      {...field}
                      name="ADACompliant"
                      labels="ADA Compliant"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <div>
            <div>
              <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
                Social Media Sharing
              </h1>
            </div>
            <div className="flex gap-4">
              <button className="border border-[#703BF7] rounded-[7px] text-PurpleColor bg-transparent flex gap-2 pl-2 pr-4 py-2 font-Inter font-[500] cursor-pointer text-[15px]">
                <span className="flex gap-1.5 ">
                  <Facebook size={18} color="#703BF7" className="mt-[1px]" />
                  Facebook
                </span>
              </button>
              <button className="border border-[#703BF7] rounded-[7px] text-PurpleColor bg-transparent flex gap-2 pl-3 pr-4 py-2 font-Inter font-[500] cursor-pointer text-[15px]">
                <span className="flex gap-1.5 ">
                  <Linkedin size={18} color="#703BF7" className="mt-[1px]" />
                  Linkedin
                </span>
              </button>
              <button className="border border-[#703BF7] rounded-[7px] text-PurpleColor bg-transparent flex gap-2 pl-3 pr-4 py-2 font-Inter font-[500] cursor-pointer text-[15px]">
                <span className="flex gap-1.5 ">
                  <Twitter size={18} color="#703BF7" className="mt-[1px]" />
                  Twitter
                </span>
              </button>
              <button className="border border-[#703BF7] rounded-[7px] text-PurpleColor bg-transparent flex gap-2 pl-3 pr-4 py-2 font-Inter font-[500] cursor-pointer text-[15px]">
                <span className="flex gap-1.5 ">
                  <Instagram size={18} color="#703BF7" className="mt-[1px]" />
                  Instagram
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-2 justify-between px-1.5 py-7">
          <button
            className="bg-transparent border-[#6C757D] cursor-pointer text-[17px] border-solid border-[2px] font-[600] px-6 py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]"
            onClick={onBack}
          >
            Back to Details
          </button>
          <button
            className="bg-PurpleColor font-[600] cursor-pointer text-[17px] px-6 py-2.5 text-white font-Urbanist rounded-[6px]"
            // onClick={onNext}
            type="submit"
          >
            Preview Listing
          </button>
        </div>
      </form>
    </>
  );
};

export default Step2;
