import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/LoginPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import axios from "axios";

import "intl-tel-input/build/js/utils"; // Optional: for validation

import "intl-tel-input/build/css/intlTelInput.css";
import intlTelInput from "intl-tel-input";
import CountrySelector from "../../Components/RegisterCountrySelector/CountrySelection";
import { Controller, useForm } from "react-hook-form";
import Inputs from "../../Components/InputFields/Inputs";
// import { Phone } from "lucide-react";

const register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    control,
    setError,
    reset,
  } = useForm();

  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const ApiKey = import.meta.env.VITE_API_KEY;
  const navigate = useNavigate();
  const [ErrorMessage, setErrorMessage] = useState("");
  const [Loading, setLoading] = useState(false);

  const RegisterForm = async (Data) => {
    console.log("RegisterUser :", Data);
    if (Data.Password.length < 8) {
      setError("Password", {
        type: "manual",
        message: "Password must be 8 characters long",
      });
      return;
    }
    if (Data.Password !== Data.ConfirmPassword) {
      setError("ConfirmPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    if (!/[!@#$%^&*()<>,."]/.test(Data.Password)) {
      setError("Password", {
        type: "manual",
        message: "Password must contain any special character",
      });
      return;
    }
    if (!/[A-Z]/.test(Data.Password)) {
      setError("Password", {
        type: "manual",
        message: "Password must contain any capital letter",
      });
      return;
    }
    try {
      setLoading(true);
      const Response = await axios.post(
        `${ApiKey}/register`,
        {
          first_name: Data.FirstName,
          last_name: Data.LastName,
          email: Data.Email,
          phone: Data.phone,
          location: Data.Location,
          password: Data.Password,
        },
        {
          contenttype: "application/json",
        }
      );
      console.log(Response.data);
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message?.toLowerCase().includes("email")) {
        setError("Email", {
          type: "manual",
          message: "Email already exists",
        });
      } else {
        alert(message || "An unexpected error occurred");
      }
    } finally {
      setLoading(false);
    }
    setErrorMessage("");
  };

  const GoogleLogin = async (e) => {
    const idToken = e.credential;
    const base64Url = idToken.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map(function (c) {
          return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
        })
        .join("")
    );
    const userData = JSON.parse(jsonPayload);
    try {
      setLoading(true);
      const Response = await axios.post(
        `${ApiKey}/social-login`,
        {
          email: userData.email,
          first_name: userData.given_name,
          last_name: userData.family_name,
          profile_photo: userData.picture,
        },
        {
          contenttype: "application/json",
        }
      );
      localStorage.setItem("token", Response.data.token);
      navigate("/admin");
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      console.log(error.response.data.errors[0].msg);
      alert(error.response.data.errors[0].msg);
    }
  };

  // CHECK GOOGLE API AND RENDER BUTTON
  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: GoogleLogin,
      });
      window.google.accounts.id.renderButton(
        document.getElementById("google-login-button"),
        {
          theme: "outline",
          size: "large",
          shape: "pill",
        }
      );
    }
  }, []);

  return (
    <>
      <div className=" md:flex ">
        {/* IMAGE SECTION  */}
        <div className="md:w-[30%] min-[900px]:!w-[45%] lg:!w-[43%] xl:!w-[48%]">
          <img className="w-[100%] object-cover h-[20vh] sm:h-[30vh] md:h-full" src={Image} alt="" />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="flex flex-col justify-center gap-7 py-10 max-[380px]:px-6 px-8 sm:px-16 md:py-20 md:w-[70%] lg:w-[55%] lg:px-20 lg:py-20 xl:py-24 xl:px-24  2xl:px-32">
          {/* Heading Info  */}
          <div>
            <h1 className="font-Poppins font-[700] text-[32px] max-[380px]:text-[28px] sm:text-[35px] md:text-[38px] lg:text-[44px]">
              Join NewLista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12px] text-[13px] sm:text-[13.5px] lg:text-[15px] lg:pl-2">
              Sign up to list properties, connect with top investors, and
              explore off-market deals.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(RegisterForm)}
            className="flex flex-col gap-4"
          >
            {/* Name  */}
            <div className="grid  min-[400px]:grid-cols-2 gap-5 w-[100%]">
              <span className="">
                <Inputs
                  name={"FirstName"}
                  register={register("FirstName", {
                    required: "First name is required",
                  })}
                  labels={"First Name"}
                  error={errors.FirstName?.message}
                  placeholder={"Enter your first name"}
                ></Inputs>
              </span>
              <span className="">
                <Inputs
                  name={"LastName"}
                  register={register("LastName", {
                    required: "Last name is required",
                  })}
                  labels={"Last Name"}
                  error={errors.LastName?.message}
                  placeholder={"Enter your last name"}
                ></Inputs>
              </span>
            </div>

            {/* Email  */}
            <div className="flex flex-col gap-4">
              <span className="">
                <Inputs
                  name={"Email"}
                  register={register("Email", {
                    required: "Email is required",
                  })}
                  labels={"Email"}
                  placeholder={"Enter your email"}
                  error={errors.Email?.message}
                ></Inputs>
              </span>

              {/* Phone Number*/}
              <Controller
                name="phone"
                control={control}
                rules={{ required: "Phone number is required" }}
                render={({ field }) => (
                  <CountrySelector
                    phone={field.value}
                    setPhone={field.onChange}
                    error={errors.phone?.message}
                  />
                )}
              />
              {/* LOCATION */}
              <span className="">
                <Inputs
                  name={"Location"}
                  register={register("Location", {
                    required: "Location is required",
                  })}
                  labels={"Location"}
                  placeholder={"Enter your city"}
                  error={errors.Location?.message}
                ></Inputs>
              </span>
              {/* PASSOWRD  */}
              <span className="">
                <Inputs
                  name={"Password"}
                  register={register("Password", {
                    required: "Password is required",
                  })}
                  labels={"Password"}
                  type={"password"}
                  placeholder={"Create a strong password"}
                  error={errors.Password?.message}
                ></Inputs>
              </span>
              {/* CONFIRM PASSWORD  */}
              <span className="">
                <Inputs
                  name={"ConfirmPassword"}
                  register={register("ConfirmPassword", {
                    required: "Please confirm your password",
                  })}
                  labels={"ConfirmPassword"}
                  type={"password"}
                  placeholder={"Re-enter your password"}
                  error={errors.ConfirmPassword?.message}
                ></Inputs>
              </span>
            </div>
            {/* Sign Up Button */}
            <div className="mt-1">
              <button
                type="submit"
                disabled={Loading}
                className={`bg-PurpleColor w-full h-11 cursor-pointer mt-3 text-white font-Urbanist rounded-[6px] font-[700] ${
                  Loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {Loading ? "Signing Up..." : "Sign Up"}
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12.5px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-center mt-3">
                Already have an account?{" "}
                <Link to={"/"} className="font-bold">
                  Sign in now
                </Link>
              </p>
            </div>

            {/* Other Info */}
            <div className="flex justify-center items-center gap-3 mt-2">
              <div className="bg-[#a5a5a5] h-0.5 max-[380px]:w-[70px]  w-[80px] sm:w-[90px]"></div>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[13px] text-[15px] sm:text-[16px] text-center">
                or continue with{" "}
              </p>
              <div className="bg-[#a5a5a5] h-0.5 max-[380px]:w-[70px] w-[80px] sm:w-[90px]"></div>
            </div>
          </form>
          <div className="flex justify-center gap-2">
            <div id="google-login-button"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default register;
