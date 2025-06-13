import React from "react";
import { CardElement } from "@stripe/react-stripe-js";

const StripeCardForm = () => {
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Card Details</h2>

      <div className="p-4 border border-gray-300 rounded-md bg-gray-50">
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#1a202c",
                fontFamily: "inherit",
                "::placeholder": {
                  color: "#a0aec0",
                },
              },
              invalid: {
                color: "#e53e3e",
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default StripeCardForm;
