import React, { useEffect, useRef, useState } from "react";
// COMPONENTS
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Step2 from "./Photo&MediaStep2/Photo&Media.jsx";
import Step1 from "./PropertyDetailStep1/PropertyDetail.jsx";
import Step3 from "./PreviewPropertyStep3/PreviewProperty.jsx";
import MiniFooter from "../../Components/Footer/MiniFooter.jsx";

// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner1.1.jpg";
import axios from "axios";
import AlertModal from "../../Components/AlertModal/AlertModal.js";
import { useNavigate } from "react-router-dom";

const PropertyForm = () => {
  const stepRef = useRef(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  if (stepRef.current) {
    stepRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  const nextStep = (data) => {
    setFormData((prev) => ({ ...prev, ...data }));
    setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => setCurrentStep((prev) => prev - 1);

  const handleFinalSubmit = async () => {
    if (!formData || Object.keys(formData).length === 0) {
      console.error("Form submission failed: no data.");
      return;
    }

    console.log("Submitted Data:", formData);
    try {
      const Response = await axios.post(
        `${ApiKey}/add-update-property`,

        {
          user_id: 10,

          property_name: formData.PropertyTitle,

          listing_type: formData.propertyType,

          property_type: formData.propertyName,

          listing_status: formData.ListingStatus,

          lease_rate: formData.leaseRate,

          lease_rate_unit: formData.persf,

          lease_type: formData.leaseType,

          building_size: Number(formData.BuildingSize_sqft),

          sale_price: Number(formData.salePrice),

          address: formData.PropertyAddress,

          city: formData.City,

          state: formData.StateProvince,

          zip: formData.ZipPostalCode,

          description: formData.description,

          images: formData.fileInput,

          featured_listing: formData.FeaturedListing,

          off_market_listing: formData.OfftheMarketListing,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: "Your Form has Been Submitted",
      });
      navigate("/properties");
      console.log(Response);
    } catch (error) {
      console.log(error);
    }
  };

  const steps = [
    <Step1 onNext={nextStep} defaultValues={formData} />,
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
            className="h-[25vh] sm:h-[40vh] object-cover w-[100%]"
            src={AddPropertyBanner}
            alt=""
          />
        </div>
      </section>
      {/* BANNER END   */}

      {/* PROPERTY FORM  */}
      <section
        ref={stepRef}
        className="sm:px-7 lg:px-10 xl:px-20 py-16 lg:py-20 flex justify-center"
      >
        <div className="flex flex-col gap-8 sm:gap-10 w-[100%] 2xl:w-[85%] ">
          <div className="px-2.5 sm:px-0">
            <h1 className="text-[28px] leading-[32px] min-[400px]:text-[32px] min-[400px]:leading-[38px] font-[700] font-Urbanist text-[#1E1E1E] md:text-[35px] lg:text-[39px] xl:text-[43px] sm:leading-[48px]">
              Add New Property Listing
            </h1>
            <p className="text-[13px] min-[400px]:text-[13.5px] font-Inter font-medium text-pretty text-Paracolor mt-2 md:text-[14px]/8 sm:leading-[18px]">
              Fill out the form below to create your property listing
            </p>
          </div>

          {/* STEP TABS*/}
          <div className="flex justify-center gap-1 min-[400px]:gap-3 md:gap-5 bg-[#F3EEFF] items-center px-2 min-[420px]:px-4 py-3 rounded-[5px] mx-2.5 sm:mx-0">
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
                    className={`text-[12px] min-[400px]:text-[14px] md:text-[14.5px] lg:text-[15px] xl:text-[18px] w-full  rounded-[5px] text-center md:px-10 py-2 font-[600] font-Urbanist border border-[#cecece]  ${
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
        </div>
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PropertyForm;
