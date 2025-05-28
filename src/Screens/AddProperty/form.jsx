import React, { useState } from "react";
// COMPONENTS
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Step1 from "./step1";
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

      {/* PROPERTY FORM SECTION */}
      <section className="px-20 py-20 flex flex-col gap-10">
        <div>
            <h1 className="text-7xl font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[43px] leading-[48px]">
              Add New Property Listing
            </h1>
            <p className="text-md font-Inter font-medium text-pretty text-Paracolor mt-2 sm:text-[14px]/8 sm:leading-[18px] ">
              Fill out the form below to create your property listing
            </p>
          </div>
        <div className="">
          {steps[currentStep]}
        </div>
      </section>
      {/* PROPERTY FORM SECTION */}

      <Footer></Footer>
    </>
  );
};

export default StepForm;
