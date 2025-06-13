import { useForm } from "react-hook-form";
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import AddPhotoSection from "./AddPhotoSection/AddPhotoSection.jsx";
import Features from "./Features/Features.jsx";

const socialPlatforms = [
  { name: "Facebook", icon: Facebook },
  { name: "Linkedin", icon: Linkedin },
  { name: "Twitter", icon: Twitter },
  { name: "Instagram", icon: Instagram },
];

const Step2 = ({ onNext, onBack, defaultValues }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    defaultValues,
  });

  const FormSubmit = async (Data) => {
    console.log(Data);
    if (Data) {
      onNext(Data);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit(FormSubmit)} action="" className="">
        <div className="border border-[#ececec] rounded-2xl px-4.5 sm:px-10 py-8 mx-3.5 sm:mx-0">
          <div className="relative">
            <AddPhotoSection
              setValue={setValue}
              //  register={register("fileInput", {
              //   required: "atleast One Image is required",
              // })}
              register={register}
              error={errors.fileInput}
            ></AddPhotoSection>
          </div>
          <div className="border-y-[1px] border-[#BBBBBB] border-solid mt-10 py-9">
            <Features errors={errors} control={control}></Features>
          </div>
          {/* <div>
            <div>
              <h1 className="font-Urbanist font-[500] mb-2 text-[#242424] text-[17px]">
                Social Media Sharing
              </h1>
            </div>
            <div className="grid grid-cols-2 min-[480px]:grid-cols-3 md:grid-cols-4 gap-4 w-fit">
              {socialPlatforms.map(({ name, icon: Icon }) => (
                <button
                  key={name}
                  className="border border-[#703BF7] rounded-[7px] text-PurpleColor bg-transparent flex gap-2 pl-3 pr-4 py-2 font-Inter font-[500] cursor-pointer text-[15px] justify-center "
                  aria-label={`Share on ${name}`}
                >
                  <span className="flex gap-1.5 items-center">
                    <Icon color="#703BF7" className="size-4.5 sm:size-5" />
                    <span className="text-[14.5px] sm:text-[15px]">{name}</span>
                  </span>
                </button>
              ))}
            </div>
          </div> */}
        </div>
        <div className="flex gap-2 justify-between px-1.5 py-7 mx-3 sm:mx-0">
          <button
            className="bg-transparent border-[#6C757D] cursor-pointer text-[15.5px] lg:text-[17px] border-solid border-[2px] font-[600] px-5 py-2 sm:px-6 sm:py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]"
            onClick={onBack}
          >
            Back to Details
          </button>
          <button
            className="bg-PurpleColor font-[600] cursor-pointer text-[15.5px] lg:text-[17px] px-5 py-2 sm:px-6 sm:py-2.5 text-white font-Urbanist rounded-[6px]"
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
