import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/LoginPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import CountrySelector from "../../Components/RegisterCountrySelector/RegisterCountrySelector";
import axios from "axios";

const countries = [
  { code: "+91", label: "India", flag: "https://flagcdn.com/w40/in.png" },
  { code: "+1", label: "USA", flag: "https://flagcdn.com/w40/us.png" },
  { code: "+44", label: "UK", flag: "https://flagcdn.com/w40/gb.png" },
  { code: "+61", label: "Australia", flag: "https://flagcdn.com/w40/au.png" },
];

const register = () => {
  const [phone, setPhone] = useState("");
  const [countryCode, setCountryCode] = useState("+91");
  
  const selectedCountry = countries.find((c) => c.code === countryCode);

  const navigate = useNavigate();
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  // FORM VALUES
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    // PhoneNum: {countryCode , phone},
    Location: "",
    Password: "",
    ConfirmPassword: "",
    Email: "",
  });

  // CHANGE VALUE IN STRING AND ALSO SET IN FORMDATA OBJECT
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const RegisterForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.Password.length < 8) {
      setErrorMessage("Password must be 8 characters Long");
      return;
    }
    if (formData.Password !== formData.ConfirmPassword) {
      setErrorMessage("Password must be Same");
      return;
    }
    if (!/[!@#$%^&*()<>,."]/.test(formData.Password)) {
      setErrorMessage("Password must contain any special character");
      return;
    }
    if (!/[A-Z]/.test(formData.Password)) {
      setErrorMessage("Password must contain any capital letter");
      return;
    }
    console.log( countryCode  + phone);
    try {
      setLoading(true);
      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/register",
        {
          first_name: formData.FirstName,
          last_name: formData.LastName,
          email: formData.Email,
          phone: countryCode  + phone,
          location: formData.Location,
          password: formData.Password,
        },
        {
          contenttype: "application/json",
        }
      );
     
      
      console.log(Response.data);
      localStorage.setItem("token", Response.data.token);
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error.response.data.errors[0].msg);
      alert(error.response.data.errors[0].msg);
    }
    setErrorMessage("");
    // setFormData({
    //   FullName:'',
    //   Email:'',
    //   Password:'',
    //   ConfirmPassword:'',
    //   Image: '',
    // })
  };

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

          <form
            onSubmit={(e) => {
              RegisterForm(e);
            }}
            className="flex flex-col gap-4"
          >
            {/* Name  */}
            <div className="flex gap-5 w-[100%]">
              <span className="w-[50%]">
                <label
                  // for="email"
                  className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                >
                  First Name
                </label>
                <input
                  type="text"
                  onChange={handleChanges}
                  value={formData.FirstName}
                  name="FirstName"
                  className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                  placeholder="Enter your first name"
                  required
                />
              </span>
              <span className="w-[50%]">
                <label className="block mb-1 text-[15px] font-[700] text-PurpleColor">
                  Last Name
                </label>
                <input
                  type="text"
                  onChange={handleChanges}
                  value={formData.LastName}
                  name="LastName"
                  className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                  placeholder="Enter your last name"
                  required
                />
              </span>
            </div>

            {/* Email  */}
            <div>
              <label
                // for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Email Address
              </label>
              <input
                type="email"
                onChange={handleChanges}
                value={formData.Email}
                name="Email"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Enter a valid email (e.g., you@email.com)"
                required
              />
            </div>

            {/* Phone Number*/}
            <CountrySelector
              phone={phone}
              setPhone={setPhone}
              countryCode={countryCode}
              setCountryCode={setCountryCode}
            />
            {/* Location  */}
            <div>
              <label className="block mb-1 text-[15px] font-[700] text-PurpleColor">
                Location
              </label>
              <input
                type="text"
                onChange={handleChanges}
                value={formData.Location}
                name="Location"
                className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                placeholder="Enter your city"
                required
              />
            </div>
            {/* Password */}
            <div>
              <label className="block mb-1 text-[15px] font-[700] text-PurpleColor">
                Password
              </label>
              <input
                type="password"
                onChange={handleChanges}
                value={formData.Password}
                name="Password"
                className={`bg-[#F3EEFF] outline-none border text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px]   ${
                  ErrorMessage === "Password must be Same"
                    ? " border-red-400"
                    : "border-[#F3EEFF]  outline-none"
                }`}
                placeholder="Create a strong password"
                required
              />
            </div>
            <div>
              <label
                // for="password"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Confirm Password
              </label>
              <input
                type="password"
                onChange={handleChanges}
                value={formData.ConfirmPassword}
                name="ConfirmPassword"
                className={`bg-[#F3EEFF] outline-none border text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px]   ${
                  ErrorMessage === "Password must be Same"
                    ? " border-red-400"
                    : "border-[#F3EEFF]  outline-none"
                }`}
                placeholder="Re-enter your password"
                required
              />
            </div>
            {ErrorMessage && (
              <p className="text-red-500 font-medium text-[14px]  font-Urbanist tracking-wide">
                {ErrorMessage}
              </p>
            )}
            {/* Sign Up Button */}
            <div className="mt-1">
              <button
                type="submit"
                className="bg-PurpleColor font-[700] w-[100%] h-11 mt-3 text-white font-Urbanist rounded-[6px]"
              >
                Sign Up
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] text-[15px] text-center mt-3">
                Already have an account?{" "}
                <Link to={"/"} className="font-bold">
                  Sign in now
                </Link>
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
