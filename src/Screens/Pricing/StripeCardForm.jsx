import React, { useState } from "react";
import { CardElement } from "@stripe/react-stripe-js";
import AlertModal from "../../Components/AlertModal/AlertModal";

const StripeCardForm = () => {
  const [isCardComplete, setIsCardComplete] = useState(false);

  const handleChange = (event) => {
    setIsCardComplete(event.complete);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isCardComplete) {
       AlertModal({
        icon: "success",
        title: "Thank You",
        iconColor: "#703BF7",
        text: "Package Buy Successfully",
      });
      // Here you would call your payment intent or form submission
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Enter Card Details</h2>

      <div className="p-4 border border-gray-300 rounded-md bg-gray-50 mb-6">
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
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        disabled={!isCardComplete}
        className={`w-full py-2 px-4 rounded-md text-white font-medium transition ${
          isCardComplete ? "bg-blue-600 hover:bg-blue-700" : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Buy Now
      </button>
    </form>
  );
};

export default StripeCardForm;
