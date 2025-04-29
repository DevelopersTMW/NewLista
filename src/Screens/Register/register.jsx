import React, { useState } from "react";
import { Link } from "react-router-dom";
import Image from "../../assets/LoginPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import CountrySelector from "../../Components/RegisterCountrySelector/RegisterCountrySelector";

const countries = [
  { code: "+91", label: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "+1", label: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+44", label: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+61", label: "Australia", flag: "https://flagcdn.com/w40/au.png" },
];

const register = () => {
  const [countryCode, setCountryCode] = useState("+91");
  const [phone, setPhone] = useState("");

  const selectedCountry = countries.find((c) => c.code === countryCode);
  return (
    <>
      <div className="flex">
        {/* IMAGE SECTION  */}
        <div className="w-[43%]">

          <img className="w-[100%] object-cover h-full" src={Image} alt="" />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="w-[55%] px-28 py-24 flex flex-col justify-center gap-7 ">

          {/* Heading Info  */}
          <div>
            <h1 className="font-Poppins font-[700] text-[44px]">
              Join NewLista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] text-[15px] pl-2">
              Sign up to list properties, connect with top investors, and
              explore off-market deals.
            </p>
          </div>

          <form className="flex flex-col gap-4">
            {/* Name  */}
            <div className="flex gap-5 w-[100%]">
              <span className="w-[50%]">
                <label
                  for="email"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                  placeholder="Enter your first name"
                />
              </span>
              <span className="w-[50%]">
                <label
                  for="email"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="email"
                  className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                  placeholder="Enter your last name"
                />
              </span>
            </div>

            {/* Email  */}
            <div>
              <label
                for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Enter a valid email (e.g., you@email.com)"
              />
            </div>

            {/* Phone Number*/}
            <CountrySelector />
            {/* Location  */}
            <div>
              <label
                for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Location
              </label>
              <input
                type="text"
                id="email"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Enter your city"
              />
            </div>
            {/* Password */}
            <div>
              <label
                for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Password
              </label>
              <input
                type="password"
                id="email"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Create a strong password"
              />
            </div>
            <div>
              <label
                for="password"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="email"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Re-enter your password"
              />
            </div>
            {/* Sign Up Button */}
            <div className="mt-1">
              <button className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]">
                Sign Up
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] text-[15px] text-center mt-3">
                Already have an account?{" "}
                <Link to={'/'} className="font-bold">Sign in now</Link> 
              </p>
            </div>

            {/* Other Info */}
            <div className="flex justify-center items-center gap-3 mt-2">
              <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
              <p className="font-Urbanist text-Paracolor font-[600] text-[16px] text-center">
                or continue with{" "}
              </p>
              <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
            </div>
            <div className="flex justify-center gap-2">
              <img className="w-[32px] h-8" src={Google} alt="" />
              <img className="w-[33px] h-8" src={Facebook} alt="" />
              <img className="w-[33px] h-8" src={Linkedin} alt="" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default register;
