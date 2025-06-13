import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import MiniFooter from "../../Components/Footer/MiniFooter";
import Footer from "../../Components/Footer/Footer";
import AddPropertyBanner from "../../assets/AddPropertyBanner1.1.jpg";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import StripeCardForm from "./StripeCardForm.jsx";

const stripePromise = loadStripe(
  "pk_test_51QNhA3CZMEjSlLSVVEV7gw1olyfTdOOYIQRYE5X2lXYofRmkNPrT4h3eiO9vcQIjDGq7sneF3PheuW7dfVv8nJKX000xZhH6aL"
);



const PremiumMonthly = () => {
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

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#fafafa] p-8 rounded-xl">
            {/* Stripe Card Form */}
            <div>
              <h2 className="text-2xl font-Urbanist text-[35px] font-bold text-gray-800 mb-6">
                Secure Payment
              </h2>
              <Elements stripe={stripePromise}>
                <StripeCardForm />
              </Elements>
            </div>

            {/* Package Details */}
            <div className="border-l md:pl-8 pl-0">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Package Summary
              </h2>
              <div className="space-y-4 text-gray-700">
                <div className="flex justify-between">
                  <span className="font-medium">Plan:</span>
                  <span>New Investor Pro Pricing (Save $61)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Price:</span>
                  <span>$299.00 USD</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium">Duration:</span>
                  <span>1 Year</span>
                </div>
                <div>
                  <span className="font-medium block mb-1">Features:</span>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>View Featured Listings</li>
                    <li>Basic Listings</li>
                     <li>View Off-Market Listings</li>
                    <li>Create & Expand Investor Network</li>
                    <li>Send & Receive Messages</li>
                    <li>Analytics on Listings & Profile Views</li>
                    <li>Make Direct Offers on Properties</li>
                    <li>Exclusive Early-Access Listings</li>
                    <li>Premium Customer Support</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <MiniFooter></MiniFooter>
      <Footer></Footer>
    </>
  );
};

export default PremiumMonthly;
