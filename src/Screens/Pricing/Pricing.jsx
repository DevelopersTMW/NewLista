import React, { useEffect, useState } from "react";
// Components
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import PlansTabs from "../../Components/OurPlans/PlansTabs";
// IMAGE
import Shape from "../../assets/Shape.png";
import Shape2 from "../../assets/Shape2.png";
import PricingSec2_1 from "../../assets/PricingSec2.1.png";
import HomeSec5_2 from "../../assets/HomeSec5.2.png";
import { Link, useNavigate } from "react-router-dom";
import AlertModal from "../../Components/AlertModal/AlertModal";
import Spinner from "../../Components/Spinner/Spinner";
import axios from "axios";
import { CheckIcon } from "@heroicons/react/20/solid";
import { X } from "lucide-react";

const freebenefits = [
  {
    label: "View Featured Listings",
    checked: true,
  },
  {
    label: "Basic Listings",
    checked: true,
  },
  {
    label: "View Off-Market Listings",
    checked: false,
  },
  {
    label: "Create & Expand Investor Network",
    checked: false,
  },
  {
    label: "Send and receive messages directly through your private dashboard",
    checked: false,
  },
  {
    label: "Analytics on Listings & Profile Views",
    checked: false,
  },
  {
    label: "Make Direct Property Offers and Receive Instant Notifications",
    checked: false,
  },
  {
    label: "Exclusive Early-Access Listings",
    checked: false,
  },
  {
    label: "Premium Customer Support",
    checked: false,
  },
];

const benefits = [
  {
    label: "View Featured Listings",
    checked: true,
  },
  {
    label: "Basic Listings",
    checked: true,
  },
  {
    label: "View Off-Market Listings",
    checked: true,
  },
  {
    label: "Create & Expand Investor Network",
    checked: true,
  },
  {
    label: "Send and receive messages directly through your private dashboard",
    checked: true,
  },
  {
    label: "Analytics on Listings & Profile Views",
    checked: true,
  },
  {
    label: "Make Direct Property Offers and Receive Instant Notifications",
    checked: true,
  },
  {
    label: "Exclusive Early-Access Listings",
    checked: true,
  },
  {
    label: "Premium Customer Support",
    checked: true,
  },
];

const Pricing = () => {
  const ApiKey = import.meta.env.VITE_API_KEY;
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [PricingData, setPricingData] = useState([]);
  const [Loading, setLoading] = useState(false);

  const [checked, setchecked] = useState();

  useEffect(() => {
    const GetPricing = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ApiKey}/plans`);
        setPricingData(response.data.plans);
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    GetPricing();
  }, []);
  useEffect(() => {
    const CurrentPricing = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ApiKey}/current-subscribtion`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setchecked(response.data.subscription);
        console.log(response);
        localStorage.setItem(
          "status",
          response.data.subscription.status !== null &&
            response.data.subscription.status
        );
      } catch (error) {
        setLoading(false);
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    CurrentPricing();
  }, []);

  const Subscription = async (id) => {
    try {
      setLoading(true);
      const response = await axios.post(
        `${ApiKey}/subscribe`,
        {
          plan_id: id,
          success_url: `${window.location.origin}/pricing?session_id={CHECKOUT_SESSION_ID}`,
          cancel_url: `${window.location.origin}/pricing`,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      window.location.href = response.data.checkout_url;
      console.log(response.data.checkout_url);
      CurrentPricing();
    } catch (error) {
      setLoading(false);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar></Navbar>
      {/* PRICING SECTION  */}
      <section>
        <div className="relative isolate max-[350px]:px-4 px-6 py-24 sm:py-32 lg:px-8 flex flex-col justify-center items-center overflow-hidden">
          {/* SHAPE START  */}
          <div
            className="absolute left-[74%]  w-[50%]  inset-x-0 -top-[10%] -z-10 transform-gpu overflow-hidden  blur-3xl"
            aria-hidden="true"
          >
            <img src={Shape} alt="" />
          </div>
          <div
            className="absolute -left-[15%]  w-[50%]  inset-x-0 top-[25%] -z-10 transform-gpu overflow-hidden  blur-3xl"
            aria-hidden="true"
          >
            <img src={Shape2} alt="" />
          </div>
          {/* SHAPE END  */}
          {/* HEADER SECTION  */}
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="max-[350px]:text-[13.5px] text-base/7 font-semibold text-indigo-600">
              Pricing
            </h2>
            <p className="lg:mt-2 max-[350px]:text-[28px] max-[350px]:leading-[33px] text-[33px] leading-[36px] sm:leading-[45px] sm:text-[40px] font-Urbanist  tracking-tight text-balanc text-gray-900 lg:text-5xl font-[700]">
              Choose Your Plan & Grow Your Network
            </p>
          </div>
          <p className="mx-auto mt-4 lg:mt-6 max-w-3xl text-center text-[14.5px] sm:text-lg font-medium text-pretty text-gray-600 sm:text-md/8 font-Urbanist">
            Make offers, get insights, and build your real estate empire
          </p>

          {/* HEADER SECTION END  */}

          {/* TABS SEC START  */}
          {!Loading ? (
            <div className="">
              <div className="grid px-0 min-[400px]:px-3 mt-10 grid-cols-1 items-center gap-y-6 sm:gap-y-10 md:grid-cols-2 lg:gap-y-0 sm:px-24 md:px-0 min-[800px]:!px-8 lg:!px-0 xl:!px-8 2xl:!px-[6%]  lg:grid-cols-3 gap-6">
                <PlansTabs
                  features={freebenefits}
                  featured={
                    token
                      ? !checked || checked?.plan_id === null
                        ? true
                        : false
                      : false
                  }
                  PlanName={"Free"}
                  Pricing={"0 "}
                  Duration={""}
                  ButtonText={
                    !token
                      ? "Get Started"
                      : !checked || checked?.plan_id === null
                      ? "Activated"
                      : checked?.status === "active"
                      ? "Downgrade"
                      : "Upgrade"
                  }
                  disabled={
                    !token ? false : !checked || checked?.status === "active"
                  }
                  buttonLink={
                    !token
                      ? "/login"
                      : !checked || checked?.plan_id === null
                      ? ""
                      : checked?.status === "active"
                      ? "/admin/subscription"
                      : ""
                  }
                  Onclick={
                    token &&
                    checked?.status !== "active" &&
                    checked?.plan_id !== null
                      ? () => Subscription(freePlanId) // Optional if free plan is subscribable
                      : undefined
                  }
                />

                {PricingData?.map((items) => {
                  const isCurrentPlan = checked?.plan_id === items?.id;
                  const isActive = checked?.status === "active";

                  let buttonText = "Get Started";
                  let disabled = false;
                  let buttonLink = "/login";
                  let onClick = null;

                  if (token) {
                    if (!checked || checked?.plan_id === null) {
                      buttonText = "Upgrade";
                      buttonLink = ""; 
                      onClick = () => Subscription(items.id);
                    } else if (isCurrentPlan && isActive) {
                      buttonText = "Activated";
                      disabled = true;
                      buttonLink = "";
                    } else if (!isCurrentPlan && isActive) {
                      buttonText = "Manage";
                      buttonLink = "/admin/subscription";
                    }
                  }
                 
                  return (
                    <PlansTabs
                      key={items.id}
                      features={benefits}
                      featured={token && isCurrentPlan && isActive}
                      PlanName={items.title}
                      Pricing={`${items.price} `}
                      Duration={`/ ${items.type}`}
                      ButtonText={buttonText}
                      disabled={disabled}
                      buttonLink={buttonLink}
                      Onclick={onClick}
                      id={items?.id}
                    />
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center !h-[75vh]">
              <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
            </div>
          )}

          {/* TABS SEC END   */}
        </div>
      </section>
      {/* PRICING SECTION END */}

      {/* SECTION 2 START  */}

      <section className="flex justify-center items-center">
        <div className="flex flex-col justify-center gap-6 px-5 pb-16 sm:py-20 sm:pt-12 sm:gap-10 sm:pb-9 lg:pb-20 sm:px-8 md:px-0 md:items-center w-[100%] xl:w-[92%] 2xl:w-[85%]">
          <div className="md:w-[84%]">
            <h1 className=" text-center sm:text-start text-[30px]  leading-[38px] font-[700] font-Urbanist  text-[#1E1E1E] sm:text-[37px] sm:leading-[48px]">
              Unlock Your Full Real Estate Potential
            </h1>
          </div>
          <div className="md:w-[84%] border-solid border-[1px] border-[#BBBBBB] flex flex-col items-center rounded-[10px] pb-7 pt-3 md:py-4 lg:py-5 xl:py-0  md:flex-row relative">
            <div className="w-[55%] sm:w-[35%]  md:w-[24%] sm:h-[90%]">
              <img className="" src={PricingSec2_1} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-5 py-2 px-5 sm:px-10 md:w-[50%] md:px-3 lg:px-5 xl:px-20 ">
              <h1 className="font-Inter font-bold text-[20px] leading-[29px] sm:text-[24px] md:text-[20px] lg:text-[22px] sm:leading-[25px]">
                Not sure which plan is right for you? Contact Us for a
                personalized recommendation.{" "}
              </h1>
              <Link className="w-full" to={"/contact-us"}>
                <button className="hover-btn-purple hover-btn py-2 text-[16px] text-white font-Inter rounded-[8px] w-full cursor-pointer">
                  <span>Contact Us</span>
                </button>
              </Link>
            </div>
            <div className="hidden md:block  w-[25%] h-[90%]">
              <img className="" src={HomeSec5_2} alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* SECTION 2 END  */}

      <Footer></Footer>
    </>
  );
};

export default Pricing;
