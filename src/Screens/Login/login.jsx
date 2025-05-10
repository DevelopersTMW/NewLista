import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/RegisterPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();

  // CONDITION
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [EmailError, setEmailError] = useState("");

  // FORM VALUES
  const [formData, setFormData] = useState({
    Email: "",
    Password: "",
  });

  // GET VALUE AND SAVED IN STATE
  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "Email") setEmailError("");
    if (name === "Password") setErrorMessage("");
  };

  // SUBMIT FORM
  const LoginForm = async (e) => {
    e.preventDefault();
    console.log(formData);
    if (formData.Password.length < 8) {
      setErrorMessage("Password must be 8 characters long");
      return;
    }
    try {
      setLoading(true);
      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/login",
        {
          email: formData.Email,
          password: formData.Password,
        }
      );
      console.log(Response.data);
      localStorage.setItem("token", Response.data.token);
      // localStorage.setItem("type", Response.data.user.role);
      // localStorage.setItem("uid", Response.data.user._id);
      navigate("/admin");

      setLoading(false);
    } catch (error) {
      setLoading(false);
      const errorMsg = error?.response?.data?.message;
      const errorDetail = error?.response?.data?.errors?.[0]?.msg;
      console.log(error.response.data.message);
      if (errorDetail === "Email does not exist") {
        setEmailError("Email does not exist");
        return;
      }
      setErrorMessage(errorMsg + " " + "plz register first");
      setEmailError("");
      if (error.response.data.errors[0].msg === "Invalid password") {
        setErrorMessage("Invalid password");
        return;
      }

    }
    setErrorMessage("");
  };

  return (
    <>
      <div className="flex">
        {/* IMAGE SECTION  */}
        <div className="w-[44%] min-h-screen ">
          <img className="h-[100%]" src={Image} alt="" />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="w-[55%] px-32 flex flex-col justify-center gap-7 ">
          <div>
            <h1 className="font-Poppins font-[700] text-[40px]">
              Welcome to NewLista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] text-[14px] pl-2">
              Log in to access exclusive real estate listings, connect with
              investors, and explore off-market deals.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              LoginForm(e);
            }}
            className="flex flex-col gap-5"
          >
            <div>
              <label
                // for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Email/User ID
              </label>
              <input
                onChange={handleChanges}
                value={formData.Email}
                name="Email"
                type="email"
                className={`bg-[#F3EEFF] border text-[#000] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px]  ${
                  EmailError ? " border-red-400" : "border-[#F3EEFF] outline-none"
                } `}
                placeholder="Enter your registered email"
                required
              />
              {EmailError && (
                <p className="mt-2 font-Roboto border-red-500 text-red-600 ml-1 text-[13px]">
                  {EmailError}
                </p>
              )}
            </div>
            <div>
              <label
                for="email"
                className="block mb-1 text-[15px] font-[700] text-PurpleColor"
              >
                Password
              </label>
              <input
                onChange={handleChanges}
                value={formData.Password}
                name="Password"
                type="password"
                className={`bg-[#F3EEFF] border  text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px]  ${
                  ErrorMessage ? " border-red-400" : "border-[#F3EEFF]  outline-none"
                }`}
                placeholder="Enter your password"
                required
              />
              {ErrorMessage && (
                <p className="mt-2 font-Roboto border-red-500 text-red-600 ml-1 text-[13px]">
                  {ErrorMessage}
                </p>
              )}
              <Link>
                <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-end mt-2 mb-3">
                  Forgot Password?
                </p>
              </Link>
            </div>

            <div className="mt-1">
              <button
                type="submit"
                className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]"
              >
                Log In
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-center mt-3">
                Don’t have an account?{" "}
                <Link to={"/register"} className="font-bold">
                  Sign up now
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-2">
              <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
              <p className="font-Urbanist text-Paracolor font-[600] text-[15px] text-center">
                or continue with{" "}
              </p>
              <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
            </div>
            <div className="flex justify-center gap-2">
              <Link to={"https://www.google.com/"}>
                <img className="w-[32px] h-8 " src={Google} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img className="w-[33px] h-8" src={Facebook} alt="" />
              </Link>
              <Link to={"https://www.linkedin.com/"}>
                <img className="w-[34px] h-8" src={Linkedin} alt="" />
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
