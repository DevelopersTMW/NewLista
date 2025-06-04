import { Building, DollarSign, Image, Phone } from "lucide-react";
import Checkboxs from "../../../Components/InputFields/Checkboxs";
import PropertyDetail from "./PropertyDetail/PropertyDetail";

const Step3 = ({ formData, onBack, onSubmit }) => {
  return (
    <>
      {/* <div>
        <h3 className="text-lg font-semibold">Review Your Info</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>

        <div className="flex gap-2 mt-4">
          <button onClick={onBack}>Back</button>
          <button onClick={onSubmit}>Submit</button>
        </div>
      </div> */}

      <div className="border border-[#ececec] rounded-2xl px-3.5 sm:px-5 py-8 mx-3 sm:mx-0">
        {/* HEADING  */}
        <div className="flex flex-col md:flex-row gap-4 justify-between md:items-center md:gap-0">
          <div>
            <h1 className="text-[25px] md:text-[28px] font-[700] font-Urbanist  text-[#1E1E1E] lg:text-[30px]">
              Property Preview
            </h1>
            <p className="max-[400px]:text-[12.5px] text-[13.5px] font-Inter font-medium text-pretty text-Paracolor mt-1 md:text-[13.5px] lg:text-[14px]/8 sm:leading-[18px] ">
              Review your listing before publishing
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-transparent border-[#6C757D] cursor-pointer max-[400px]:text-[13.5px] text-[14px] md:text-[15px] lg:text-[16px] border-solid border-[2px] font-[600] pl-3 pr-4 py-2 text-[#6C757D] font-Urbanist rounded-[6px] flex gap-1 items-center">
              <Phone className="size-4 md:size-4.5 lg:size-5" /> Direct Contact
            </button>
            <button className="bg-PurpleColor font-[600] cursor-pointer max-[400px]:text-[13.5px] text-[14px] md:text-[15px] lg:text-[16px]  pl-2 pr-4 py-2 text-white font-Urbanist rounded-[6px] flex gap-1 items-center">
              <DollarSign className="size-4 md:size-4.5 lg:size-5" /> Make an Offer
            </button>
          </div>
        </div>
        {/* IMAGE  */}
        <div>
          <div className="mt-7 rounded-lg bg-muted flex items-center justify-center bg-[#f5f5f5] py-24 sm:py-28 lg:py-40">
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <Image  color="#737373" className="max-[400px]:size-14 size-15 sm:size-16 lg:size-20" />
              <p className="text-muted-foreground font-Inter text-[16px] text-[#737373]">
                No images uploaded
              </p>
            </div>
          </div>
        </div>
        {/* PROPERTY DETAILS  */}
        <PropertyDetail></PropertyDetail>

        {/* DESCRIPTION  */}
        <div className="py-5">
          <h1 className="max-[400px]:text-[21px] text-[22px] font-[700] font-Urbanist  text-[#1E1E1E] md:text-[23px]">
            Description
          </h1>
          <p className="max-[400px]:text-[12.5px] text-[13.5px] font-Inter font-medium text-pretty text-Paracolor mt-1 md:text-[14px]/8 sm:leading-[18px] ">
            A detailed description of the property will appear here based on
            what you entered in the form.
          </p>
        </div>

        {/* VERFICATION CHECK BOX  */}
        <div className="bg-[#f5f5f5] px-5 py-5 rounded-[8px]">
          <h1 className="max-[400px]:text-[16px] text-[18px] font-[600] font-Urbanist  text-[#1E1E1E] md:text-[20px] flex items-center gap-2">
            <Building size={22} /> Listing Verification
          </h1>
          <div className="mt-3 flex flex-col gap-1">
            <Checkboxs
              labels={
                "I confirm that all information provided is accurate and complete"
              }
            ></Checkboxs>
            <Checkboxs
              labels={"I am authorized to list this property"}
            ></Checkboxs>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between px-1.5 py-5 mx-3 sm:mx-0">
        <button
            className="bg-transparent border-[#6C757D] cursor-pointer max-[400px]:text-[14px] text-[15.5px] lg:text-[17px] border-solid border-[2px] font-[600] px-5 py-2 sm:px-6 sm:py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]"
            onClick={onBack}
          >
           Back to Photo & Media
          </button>
          <button
            className="bg-PurpleColor font-[600] cursor-pointer max-[400px]:text-[14px] text-[15.5px] lg:text-[17px] px-5 py-2 sm:px-6 sm:py-2.5 text-white font-Urbanist rounded-[6px]"
            // onClick={onNext}
            type="submit"
          >
            Preview Listing
          </button>
      </div>
    </>
  );
};

export default Step3;
