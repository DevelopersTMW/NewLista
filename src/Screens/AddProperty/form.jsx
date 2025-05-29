import React, { useState } from "react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Step1 from "./PropertyDetailStep1/PropertyDetail.jsx";
import Step2 from "./step2";
import Step3 from "./step3";
// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner1.1.jpg";

const StepForm = () => {
  
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleFinalSubmit = () => {
    console.log("Submitted Data:", formData);
  };

  const steps = [
    // <Step1 onNext={nextStep} defaultValues={formData} />,
    <Step2 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
    <Step3
      onBack={prevStep}
      onSubmit={handleFinalSubmit}
      formData={formData}
    />,
  ];

  return (
    <>
      <Navbar></Navbar>
      {/* BANNER START  */}
      <section>
        <div>
          <img
            className="h-[40vh] object-cover w-[100%]"
            src={AddPropertyBanner}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROPERTY FORM  */}
      <section className="px-20 py-20 flex flex-col gap-10">
        <div>
          <h1 className="text-7xl font-[700] font-Urbanist text-[#1E1E1E] sm:text-[43px] leading-[48px]">
            Add New Property Listing
          </h1>
          <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/8 sm:leading-[18px]">
            Fill out the form below to create your property listing
          </p>
        </div>

        {/* STEP TABS*/}
        <div className="flex justify-center gap-5 bg-[#F3EEFF] items-center px-4 py-3 rounded-[5px]">
          {["Property Details", "Photo & Media", "Preview & Submit"].map(
            (label, index) => (
              <div
                key={index}
                className="flex items-center gap-2 w-[100%]"
                onClick={() => {
                  if (index <= currentStep) setCurrentStep(index);
                }}
              >
                <span
                  className={`text-[18px] w-full rounded-[5px] text-center px-10 py-2 font-[600] font-Urbanist border border-[#cecece]  ${
                    currentStep === index
                      ? "text-white bg-PurpleColor"
                      : "text-Paracolor"
                  }`}
                >
                  {label}
                </span>
              </div>
            )
          )}
        </div>

        {/* Current Step Form */}
        <div>{steps[currentStep]}</div>
      </section>
      <Footer></Footer>
    </>
  );
};

export default StepForm;
