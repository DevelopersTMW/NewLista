import { Building, DollarSign, Image, Phone } from "lucide-react";
import Checkboxs from "../../Components/InputFields/Checkboxs";

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

      <div className="border border-[#ececec] rounded-2xl px-5 py-8">
        {/* HEADING  */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[30px]">
              Property Preview
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-1 sm:text-[14px]/8 sm:leading-[18px] ">
              Review your listing before publishing
            </p>
          </div>
          <div className="flex gap-3">
            <button className="bg-transparent border-[#6C757D] cursor-pointer text-[16px] border-solid border-[2px] font-[600] pl-3 pr-4 py-2 text-[#6C757D] font-Urbanist rounded-[6px] flex gap-1 items-center">
              <Phone size={18} /> Direct Contact
            </button>
            <button className="bg-PurpleColor font-[600] cursor-pointer text-[16px] pl-2 pr-4 py-2 text-white font-Urbanist rounded-[6px] flex gap-1 items-center">
              <DollarSign size={20} /> Make an Offer
            </button>
          </div>
        </div>
        {/* IMAGE  */}
        <div>
          <div className="mt-7 rounded-lg bg-muted flex items-center justify-center bg-[#f5f5f5] py-40">
            <div className="text-center flex flex-col justify-center items-center gap-2">
              <Image size={60} color="#737373" />
              <p className="text-muted-foreground font-Inter text-[16px] text-[#737373]">
                No images uploaded
              </p>
            </div>
          </div>
        </div>
        {/* PROPERTY DETAILS  */}
        <div className="flex gap-10 py-10">
          {/* PROPERTY DETAILS  */}
          <div className="w-[50%] flex flex-col justify-between">
            <div className="mb-2">
              <h1 className="text-[23px] font-[700] font-Urbanist  text-[#1E1E1E]">
                Property Details:
              </h1>
            </div>
            <div className="mb-2">
              <div className="flex justify-between mb-2">
                <h1 className="text-[18px] font-[700] font-Urbanist  text-[#1E1E1E]">
                  Type:
                </h1>
                <p className="text-md font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                  Not specified
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="text-[18px] font-[700] font-Urbanist  text-[#1E1E1E]">
                  Status:
                </h1>
                <p className="text-md font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                  Available
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="text-[18px] font-[700] font-Urbanist  text-[#1E1E1E]">
                  Sale Price:
                </h1>
                <p className="text-md font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                  $2,500,000
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="text-[18px] font-[700] font-Urbanist  text-[#1E1E1E]">
                  Building Size:
                </h1>
                <p className="text-md font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                  10,000 sq ft
                </p>
              </div>
              <div className="flex justify-between mb-2">
                <h1 className="text-[18px] font-[700] font-Urbanist  text-[#1E1E1E]">
                  Lease Type:
                </h1>
                <p className="text-md font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                  NNN (Triple Net)
                </p>
              </div>
            </div>
          </div>
          {/* LOCATION  */}
          <div className="w-[50%]">
            <div className="flex flex-co justify-between items-center mb-2 ">
              <h1 className="text-[22px] font-[700] font-Urbanist  text-[#1E1E1E]">
                Location:
              </h1>
              <p className="font-Inter font-medium text-pretty text-Paracolor sm:text-[14px]/8 sm:leading-[18px] ">
                123 Main Street Anytown, CA 12345
              </p>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps?q=404 123 Main Street Anytown, CA 12345
                &output=embed"
                className="w-full h-[200px]"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* DESCRIPTION  */}
        <div className="py-5">
          <h1 className="text-3xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[23px]">
            Description
          </h1>
          <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-1 sm:text-[14px]/8 sm:leading-[18px] ">
            A detailed description of the property will appear here based on
            what you entered in the form.
          </p>
        </div>

        {/* VERFICATION CHECK BOX  */}
        <div className="bg-[#f5f5f5] px-5 py-5 rounded-[8px]">
          <h1 className="text-3xl font-[600] font-Urbanist  text-[#1E1E1E] sm:text-[20px] flex items-center gap-2">
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
      <div className="flex gap-2 justify-between px-1.5 py-5">
        <button
          className="bg-transparent border-[#6C757D] cursor-pointer text-[17px] border-solid border-[2px] font-[600] px-6 py-2.5 text-[#6C757D] font-Urbanist rounded-[6px]"
          onClick={onBack}
        >
          Back to Photo & Media
        </button>
        <button
          className="bg-PurpleColor font-[600] cursor-pointer text-[17px] px-6 py-2.5 text-white font-Urbanist rounded-[6px]"
          type="submit"
        >
          Preview Listing
        </button>
      </div>
    </>
  );
};

export default Step3;
