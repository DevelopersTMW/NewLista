import React, { useRef, useState } from "react";

const OtpInput = ({ length = 6, onChangeOtp , error }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value.replace(/\D/, ""); // Allow only digits

    if (!value) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto-focus next input
    if (index < length - 1) {
      inputsRef.current[index + 1].focus();
    }

    // Call parent on change
    onChangeOtp(newOtp.join(""));
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const newOtp = [...otp];

      if (otp[index]) {
        newOtp[index] = "";
      } else if (index > 0) {
        inputsRef.current[index - 1].focus();
        newOtp[index - 1] = "";
      }

      setOtp(newOtp);
      onChangeOtp(newOtp.join(""));
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, length).split("");

    const newOtp = [...otp];
    pastedData.forEach((char, i) => {
      if (i < length && /\d/.test(char)) {
        newOtp[i] = char;
      }
    });

    setOtp(newOtp);
    onChangeOtp(newOtp.join(""));

    // Focus last filled input
    const lastFilledIndex = pastedData.length - 1;
    if (inputsRef.current[lastFilledIndex]) {
      inputsRef.current[lastFilledIndex].focus();
    }
  };

  return (
    <div className="flex gap-4">
      {otp.map((digit, index) => (
        <input
          key={index}
          ref={(el) => (inputsRef.current[index] = el)}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleChange(e, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
          onPaste={handlePaste}
          className={`w-11 h-12 text-center border outline-none rounded-md text-lg font-medium ${error ? "border-red-600" : "border-gray-300"}`}
        />
      ))}
    </div>
  );
};

export default OtpInput;
