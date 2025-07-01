import React, { useEffect, useRef, useState } from "react";
// COMPONENTS
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import Step2 from "./Photo&MediaStep2/Photo&Media.jsx";
import Step1 from "./PropertyDetailStep1/PropertyDetail.jsx";
import Step3 from "./PreviewPropertyStep3/PreviewProperty.jsx";
import MiniFooter from "../../Components/Footer/MiniFooter.jsx";
import Spinner from "../../Components/Spinner/Spinner.jsx";

// IMAGES
import AddPropertyBanner from "../../assets/AddPropertyBanner1.1.jpg";
import axios from "axios";
import AlertModal from "../../Components/AlertModal/AlertModal.js";
import { useLocation, useNavigate } from "react-router-dom";

const PropertyForm = () => {
  const stepRef = useRef(null);

  const [loading, setloading] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const editId = queryParams.get("editId");

  const navigate = useNavigate();

  if (stepRef.current) {
    stepRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  console.log(formData);

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
    console.log("Submitted Data:", formData.fileInput);
    setloading(true);
    try {
      const form = new FormData();
      form.append("property_id", editId || "");
      form.append("property_name", formData.PropertyTitle);
      form.append("listing_type", formData.propertyType);
      form.append("property_type", formData.propertyName);
      form.append("listing_status", formData.ListingStatus);
      form.append("lease_rate", formData.leaseRate);
      form.append("lease_rate_unit", formData.persf);
      form.append("lease_type", formData.leaseType);
      form.append("building_size", formData.BuildingSize_sqft);
      form.append("sale_price", formData.salePrice || "");
      form.append("address", formData.PropertyAddress);
      form.append("city", formData.City);
      form.append("state", formData.StateProvince);
      form.append("zip", formData.ZipPostalCode);
      form.append("description", formData.description);
      form.append("featured_listing", formData.FeaturedListing ? 1 : 0);
      form.append("off_market_listing", formData.OffTheMarketListing ? 1 : 0);
      form.append("owner_financing", formData.OwnerFinancing ? 1 : 0);
      form.append("noi", formData.Noi || "");
      form.append("cap_rate", formData.CapRate || "");
      form.append("show_phone", formData.ShowNumber ? 1 : 0);
      form.append("show_email", formData.ShowEmail ? 1 : 0);

      // Split fileInput into old URLs and new files
      formData.fileInput.forEach((item) => {
        if (typeof item === "string") {
          form.append("image_urls[]", item); // Existing image URLs
        } else {
          form.append("images[]", item); // New uploaded files
        }
      });

      // Handle flat custom_fields
      const customFields = formData.custom_fields;
      if (customFields && typeof customFields === "object") {
        Object.keys(customFields).forEach((key) => {
          form.append(`custom_fields[${key}]`, customFields[key]);
        });
      }

      // Send request
      const response = await axios.post(`${ApiKey}/add-update-property`, form, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: "Your Form has Been Submitted",
      });
      navigate('/properties')
      console.log(response);
    } catch (error) {
      setloading(false);
      console.log(error);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    if (editId) {
      fetchPropertyData(editId);
    }
  }, [editId]);

  const fetchPropertyData = async (id) => {
    try {
      setloading(true);

      const response = await axios.get(`${ApiKey}/view-property/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = response.data?.data;

      if (data) {
        setFormData({
          PropertyTitle: data.property_name,
          propertyType: data.listing_type,
          propertyName: data.property_type,
          ListingStatus: data.listing_status,
          leaseRate: data.lease_rate || "",
          persf: data.lease_rate_unit || "",
          leaseType: data.lease_type || "",
          BuildingSize_sqft: data.building_size || "",
          salePrice: data.sale_price || "",
          PropertyAddress: data.address || "",
          City: data.city || "",
          StateProvince: data.state || "",
          ZipPostalCode: data.zip || "",
          description: data.description || "",
          fileInput: data.images || [],
          FeaturedListing: data.featured_listing === true,
          OffTheMarketListing: data.off_market_listing === true,
          OwnerFinancing: data.owner_financing === true,
          ShowNumber: data.show_phone === true,
          ShowEmail: data.show_email === true,
          Noi: data.noi || "",
          CapRate: data.cap_rate || "",
          custom_fields: data.custom_fields || {},
        });
      }
    } catch (error) {
      console.error("Failed to fetch property:", error);
    } finally {
      setloading(false);
    }
  };

  const steps = [
    <Step1 onNext={nextStep} defaultValues={formData} />,
    <Step2 onNext={nextStep} onBack={prevStep} defaultValues={formData} />,
    <Step3
      onBack={prevStep}
      onSubmit={handleFinalSubmit}
      formData={loading ? "loading..." : formData}
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
          {loading ? (
            <div className="h-[100vh] flex justify-center items-center">
              <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
            </div>
          ) : (
            <div>{steps[currentStep]}</div>
          )}
        </div>
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PropertyForm;
