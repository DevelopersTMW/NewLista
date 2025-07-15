import { Building, DollarSign, Image, Phone } from "lucide-react";
import Checkboxs from "../../../Components/InputFields/Checkboxs";
import PropertyDetail from "./PropertyDetail/PropertyDetail";
import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import ImagesCarousel from "../../../Components/ImagesCarousel/ImagesCarousel";

const Step3 = ({ formData, onBack, onSubmit }) => {
  const {
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      confirmInfo: false,
      authorizedToList: false,
    },
  });
  useEffect(() => {
    if (formData) {
      reset();
    }
  }, [formData, reset]);

  console.log(formData);

  const handleFinalSubmit = (data) => {
    const finalData = { ...formData, ...data };
    onSubmit(finalData);
  };

  return (
    <>
      <form onSubmit={handleSubmit(handleFinalSubmit)}>
        <div className="border border-[#ececec] rounded-2xl px-3.5 sm:px-5 py-8 mx-3 sm:mx-0">
          {/* HEADER */}
          <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center md:gap-0">
            <div>
              <h1 className="text-[25px] md:text-[28px] font-[700] font-Urbanist  text-[#1E1E1E] lg:text-[30px]">
                Property Preview
              </h1>
              <p className="max-[400px]:text-[12.5px] text-[13.5px] font-Inter font-medium text-pretty text-Paracolor mt-1 md:text-[13.5px] lg:text-[14px]/8 sm:leading-[18px] ">
                Review your listing before publishing
              </p>
            </div>
            {/* <div className="flex gap-3">
              <button className="bg-transparent border-[#6C757D] cursor-pointer max-[400px]:text-[13px] text-[14px] md:text-[15px] lg:text-[16px] border-solid border-[2px] font-[600] pl-2.5 pr-2.5 min-[400px]:pl-3 min-[400px]:pr-4 py-2 text-[#6C757D] font-Urbanist rounded-[6px] flex gap-1 items-center">
                <Phone className="size-4 md:size-4.5 lg:size-5" /> Direct
                Contact
              </button>
              <button className="bg-PurpleColor font-[600] cursor-pointer max-[400px]:text-[13px] text-[14px] md:text-[15px] lg:text-[16px]  pl-2.5 pr-2.5 min-[400px]:pl-3 min-[400px]:pr-4 py-2 text-white font-Urbanist rounded-[6px] flex gap-1 items-center">
                <DollarSign className="size-4 md:size-4.5 lg:size-5" /> Make an
                Offer
              </button>
            </div> */}
          </div>

          {/* Image Preview */}
          <ImagesCarousel images={formData.fileInput || []} />

          {/* <div>
            {!formData || !formData.fileInput?.length ? (
              <div className="mt-7 rounded-lg bg-muted flex items-center justify-center bg-[#f5f5f5] max-[400px]:py-20 py-24 sm:py-28 lg:py-40">
                <div className="text-center flex flex-col justify-center items-center gap-2">
                  <Image
                    color="#737373"
                    className="max-[400px]:size-13 size-15 sm:size-16 lg:size-20"
                  />
                  <p className="text-muted-foreground font-Inter text-[16px] text-[#737373]">
                    No images uploaded
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full overflow-hidden relative h-[400px] bg-[#f5f5f5] mt-7 rounded-lg">
                <img
                  className="object-cover w-full h-full"
                  src={
                    typeof formData.fileInput[0] === "string"
                      ? import.meta.env.VITE_IMAGE_KEY + formData.fileInput[0]
                      : URL.createObjectURL(formData.fileInput[0])
                  }
                  alt="Main Preview"
                />
              </div>
            )}
          </div>

          {formData.fileInput?.length > 1 && (
            <div className="flex flex-wrap gap-4 mt-4">
              {formData.fileInput.slice(1).map((img, index) => (
                <div
                  key={index}
                  className="w-40 h-36 overflow-hidden rounded-lg bg-gray-100"
                >
                  <img
                    src={
                      typeof img === "string"
                        ? import.meta.env.VITE_IMAGE_KEY + img
                        : URL.createObjectURL(img)
                    }
                    alt={`preview-${index + 1}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )} */}

          {/* Property Details */}
          <PropertyDetail formData={formData} />

          {/* Description */}
          <div className="py-5">
            <h1 className="text-[22px] font-[700] font-Urbanist text-[#1E1E1E]">
              Description
            </h1>
            <p className="text-[13.5px] font-Inter font-medium text-Paracolor mt-1">
              {formData.description}
            </p>
          </div>

          {/* Verification Checkboxes */}
          <div className="bg-[#f5f5f5] px-5 py-5 rounded-[8px]">
            <h1 className="text-[18px] font-[600] font-Urbanist text-[#1E1E1E] flex items-center gap-2">
              <Building size={22} /> Listing Verification
            </h1>
            <div className="mt-3 flex flex-col gap-1">
              <Controller
                name="confirmInfo"
                control={control}
                rules={{ required: "You must confirm the information." }}
                render={({ field }) => (
                  <Checkboxs
                    {...field}
                    labels="I confirm that all information provided is accurate and complete"
                    error={errors.confirmInfo?.message}
                  />
                )}
              />
              <Controller
                name="authorizedToList"
                control={control}
                rules={{ required: "You must confirm authorization to list." }}
                render={({ field }) => (
                  <Checkboxs
                    {...field}
                    labels="I am authorized to list this property"
                    error={errors.authorizedToList?.message}
                  />
                )}
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex gap-2 justify-between px-1.5 py-5 mx-3 sm:mx-0">
          <button
            type="button"
            onClick={onBack}
            className="bg-transparent border-[#6C757D] text-[#6C757D] border-2 font-[600] px-5 py-2 cursor-pointer rounded-[6px]"
          >
            Back to Photo & Media
          </button>
          <button
            type="submit"
            className="bg-PurpleColor text-white font-[600] px-5 py-2 rounded-[6px] cursor-pointer"
          >
            Publish Listing
          </button>
        </div>
      </form>
    </>
  );
};

export default Step3;
