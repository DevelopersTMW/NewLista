import React, { useEffect, useState } from "react";
import { CheckIcon, X } from "lucide-react";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";
import { useNavigate } from "react-router-dom";

const freebenefits = [
  { label: "View Featured Listings", checked: true },
  { label: "Basic Listings", checked: true },
  { label: "View Off-Market Listings", checked: false },
  { label: "Create & Expand Investor Network", checked: false },
  {
    label: "Send and receive messages directly through your private dashboard",
    checked: false,
  },
  { label: "Analytics on Listings & Profile Views", checked: false },
  {
    label: "Make Direct Property Offers and Receive Instant Notifications",
    checked: false,
  },
  { label: "Exclusive Early-Access Listings", checked: false },
  { label: "Premium Customer Support", checked: false },
];

const premiumBenefits = [
  { label: "View Featured Listings", checked: true },
  { label: "Basic Listings", checked: true },
  { label: "View Off-Market Listings", checked: true },
  { label: "Create & Expand Investor Network", checked: true },
  { label: "Premium Customer Support", checked: true },
  { label: "Analytics on Listings & Profile Views", checked: true },
  { label: "Exclusive Early-Access Listings", checked: true },
  {
    label: "Make Direct Property Offers and Receive Instant Notifications",
    checked: true,
  },
  {
    label: "Send and receive messages directly through your private dashboard",
    checked: true,
  },
];

const SubscriptionSetting = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const status = localStorage.getItem("status");
  const navigate = useNavigate()

  const [loading, setLoading] = useState(false);
  const [CurrentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    const fetchCurrentPlan = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${ApiKey}/current-subscribtion`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setCurrentPlan(response.data.subscription);
        console.log("Fetched Plan:", response.data.subscription);
      } catch (error) {
        setLoading(false);
        console.error("Error fetching subscription:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCurrentPlan();
  }, []);

  // Plan data fallback
  const planName = CurrentPlan?.plan.title || "Free";
  const planPrice = CurrentPlan?.plan.price || 0;
  const planDuration = CurrentPlan?.plan.type || "Unlimited";
  const planStatus = CurrentPlan?.status || "Active";
  const planBenefits = CurrentPlan ? premiumBenefits : freebenefits;

  const handleManageSubscription = async () => {
    if (!token) {
      navigate("/login");
      return;
    }
    if (status !== "active") {
      navigate("/pricing");
      return;
    }
    try {
      setLoading(true);
      const response = await axios.post(
        `${ApiKey}/manage-subscribtion`,
        {
          return_url: `${window.location.origin}/admin/subscription`,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      // Redirect to Stripe portal (or whatever URL the API returns)
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Manage subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Heading Section */}
      <section className="p flex justify-between items-start mt-8 pb-5">
        <div className="flex flex-wrap max-[350px]:gap-3 gap-5 sm:flex-row justify-between items-center">
          <h1 className="font-Urbanist text-[#222222] text-[35px] font-[700]">
            Subscription Setting
          </h1>
        </div>
      </section>

      {!loading ? (
        <>
          <section>
            <div className="flex flex-col gap-2">
              <div className="bg-[#ffffff] px-5 py-4 rounded-[10px] flex justify-between">
                <div>
                  <h2 className="font-Urbanist text-[#222222] text-[24px] font-[700]">
                    {planName}
                  </h2>
                  <p className="font-Urbanist text-Paracolor text-[19px] font-[600]">
                    {"Duration"}
                  </p>
                  <p className="font-Urbanist text-Paracolor text-[19px] font-[600]">
                    {!planDuration  ? "Unlimited" : `Billed ${planDuration}` }
                  </p>
                </div>
                <div className="text-end flex flex-col gap-1">
                  <h1 className="font-Inter text-[#222222] text-[24px] font-[700]">
                    ${planPrice}
                  </h1>
                  <p className="font-Urbanist text-Paracolor font-semibold flex items-center justify-end">
                    {planDuration}
                  </p>
                  <p className="font-Urbanist text-[#2e7200] font-semibold flex items-center justify-end gap-1">
                    <span className="w-2 h-2 rounded-full bg-[#2e7200] relative" />
                    {planStatus}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Benefits + Plan Pricing Section */}
          <section className="mt-7">
            <div className="flex flex-col items-center gap-5 md:flex-row bg-transparent border-[#d3d3d3] border rounded-2xl p-3 md:pl-7">
              {/* Left: Plan Benefits */}
              <div className="flex flex-col gap-2 w-[60%] py-8 font-Urbanist">
                <p className="text-PurpleColor font-bold text-[16px] leading-[19px]">
                  Current Plan
                </p>
                <h2 className="font-[700] text-[35px]">{planName}</h2>

                <div>
                  <h3 className="font-semibold mb-2 flex gap-0 items-center justify-start">
                    <span className="w-[25%]">What’s Included</span>
                    <span className="w-[68%] h-[1px] bg-Paracolor"></span>
                  </h3>
                  {planBenefits.map((feature, index) => (
                    <li
                      key={index}
                      className="flex gap-x-3 font-[600] text-[15px]"
                    >
                      {feature.checked ? (
                        <CheckIcon className="h-6 w-5 text-PurpleColor" />
                      ) : (
                        <X className="h-6 w-5 text-red-600" />
                      )}
                      {feature.label}
                    </li>
                  ))}
                </div>
              </div>

              {/* Right: Price Card */}
              <div className="text-white bg-black py-14 rounded-xl px-6 flex justify-center items-center flex-col gap-2 text-center w-[40%] mr-3">
                <p className="font-Urbanist font-semibold">
                  <span className="font-Inter font-bold text-[50px]">
                    ${planPrice}
                  </span>{" "}
                  <span className="text-[15px]">USD</span>
                </p>

                <button
                  onClick={handleManageSubscription}
                  className="hover-btn hover-btn-purple font-Urbanist font-semibold mb-2 bg-[#e9e9e9] text-black border-[#e9e9e9] hover:border-Paracolor"
                >
                  <span>
                    {token
                      ? status === "active"
                        ? "Manage"
                        : "Upgrade now"
                      : "Upgrade now"}
                  </span>
                </button>

                <p className="font-Urbanist font-semibold text-[16px]">
                  Invoices and receipts available for easy company reimbursement
                </p>
              </div>
            </div>
          </section>
        </>
      ) : (
        <div className="flex justify-center items-center !h-[75vh]">
          <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
        </div>
      )}
    </>
  );
};

export default SubscriptionSetting;
