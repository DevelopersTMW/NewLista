import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Image from "../../assets/RegisterPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import axios from "axios";
import Inputs from "../../Components/InputFields/Inputs";

const Login = () => {
  const navigate = useNavigate();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const ApiKey = import.meta.env.VITE_API_KEY;

  const [formData, setFormData] = useState({ Email: "", Password: "" });
  const [Loading, setLoading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [EmailError, setEmailError] = useState("");

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (name === "Email") setEmailError("");
    if (name === "Password") setErrorMessage("");
  };

  const LoginForm = async (e) => {
    e.preventDefault();

    // Simple validation
    if (!formData.Email) {
      setEmailError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.Email)) {
      setEmailError("Enter a valid email address");
      return;
    }
    if (formData.Password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long");
      return;
    }

    try {
      setLoading(true);
      const res = await axios.post(
        `${ApiKey}/login`,
        {
          email: formData.Email,
          password: formData.Password,
        }
      );
      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch (error) {
      const errorMsg = error?.response?.data?.message || "Login failed";
      const errorDetail = error?.response?.data?.errors?.[0]?.msg;

      if (errorDetail === "Email does not exist") {
        setEmailError("Email does not exist");
      } else if (errorDetail === "Invalid password") {
        setErrorMessage("Invalid password");
      } else {
        setErrorMessage(errorMsg + " - Please register first");
      }
    } finally {
      setLoading(false);
    }
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
      <div className="flex max-[891px]:flex-col">
        {/* IMAGE SECTION  */}
        <div className="max-[580px]:h-[25vh] max-[891px]:h-[30vh] max-[891px]:w-[100%] min-[891px]:min-h-screen max-[1666px]:w-[46%] min-[1666px]:w-[46%]">
          <img
            className="max-[891px]:h-[100%] max-[891px]:w-[100%] object-cover min-[891px]:h-[100%]"
            src={Image}
            alt=""
          />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="flex flex-col justify-center gap-7 max-[480px]:px-[10%] max-[891px]:w-[100%] max-[891px]:py-16 max-[891px]:px-[12%] max-[891px]:gap-7 max-[1000px]:gap-5 max-[1000px]:px-[7%] max-[1100px]:gap-6 max-[1100px]:px-20 max-[1666px]:px-28 max-[1666px]:py-20 max-[1666px]:w-[54%] min-[1666px]:w-[50%] min-[1666px]:pt-10 min-[1666px]:px-36 ">
          <div>
            <h1 className="font-Poppins font-[700] max-[380px]:text-[31px] max-[481px]:text-[30px] max-[481px]:leading-[39px] max-[891px]:text-[40px] max-[1000px]:text-[32px] max-[1100px]:text-[35px] max-[1280px]:text-[38px] max-[1666px]:text-[40px] min-[1666px]:text-[49px]">
              Welcome to NewLista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] pl-2 max-[380px]:text-[12px] max-[481px]:text-[13.5px] max-[891px]:mt-2 max-[891px]:text-[14px] max-[1000px]:text-[13px] max-[1100px]:text-[13.5px] max-[1100px]:leading-[18px] max-[1280px]:pl-1  max-[1280px]:text-[14px] max-[1666px]:text-[15px] max-[1666px]:leading-[20px] min-[1666px]:text-[17px]">
              Log in to access exclusive real estate listings, connect with
              investors, and explore off-market deals.
            </p>
          </div>

          <form
            onSubmit={(e) => {
              LoginForm(e);
            }}
            className="flex flex-col gap-5 max-[891px]:gap-4"
          >
            <div>
              <Inputs
                labels={" Email/User ID"}
                placeholder={"Enter your registered email"}
                type={"email"}
                value={formData.Email}
                name="Email"
                onChange={handleChanges}
                error={EmailError}
              ></Inputs>
              {EmailError && (
                <p className="mt-2 font-Roboto border-red-500 text-red-600 ml-1 text-[13px]">
                  {EmailError}
                </p>
              )}
            </div>
            <div>
              <Inputs
                labels={"Password"}
                placeholder={"Enter your password"}
                type={"password"}
                value={formData.Password}
                name="Password"
                onChange={handleChanges}
                error={ErrorMessage}
              ></Inputs>
              {ErrorMessage && (
                <p className="mt-2 font-Roboto border-red-500 text-red-600 ml-1 text-[13px]">
                  {ErrorMessage}
                </p>
              )}
              <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-end max-[481px]:text-[14px] max-[891px]:text-[15px] max-[1100px]:text-[13px] max-[1280px]:text-[14px] max-[1280px]:mt-3 max-[1666px]:mt-4 max-[1666px]:text-[15px] min-[1666px]:text-[16px] min-[1666px]:mt-3 min-[1666px]:mb-2">
                <Link to={"/reset-password"}>Forgot Password?</Link>
              </p>
            </div>

            <div className="mt-1">
              <button
                type="submit"
                className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]  max-[891px]:h-10 max-[1000px]:h-10 max-[1100px]:h-10.5 max-[1100px]:text-[14.5px] min-[1666px]:h-12.5 min-[1666px]:text-[19px]"
              >
                Log In
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] text-center max-[481px]:text-[14px] max-[891px]:text-[15px]  max-[1000px]:text-[13.5px]  max-[1100px]:text-[14px] max-[1666px]:mt-5 max-[1666px]:text-[15px] min-[1666px]:text-[17px] min-[1666px]:mt-5">
                Don’t have an account?{" "}
                <Link to={"/register"} className="font-bold">
                  Sign up now
                </Link>
              </p>
            </div>
            <div className="flex justify-center items-center gap-3 mt-2 max-[1100px]:mt-1">
              <div className="bg-[#a5a5a5] h-0.5 w-[90px] max-[890px]:w-[50px]"></div>
              <p className="font-Urbanist text-Paracolor font-[600] text-[15px] text-center max-[481px]:text-[14.5px] max-[891px]:text-[17px] min-[1666px]:text-[17px]">
                or continue with{" "}
              </p>
              <div className="bg-[#a5a5a5] h-0.5 w-[90px] max-[890px]:w-[50px]"></div>
            </div>
            <div className="flex justify-center gap-2 max-[481px]:gap-4">
              <div id="google-login-button"></div>
              {/* <Link to={"https://www.facebook.com/"}>
                <img className="max-[481px]:h-8 max-[481px]:w-[33px] max-[891px]:h-10 max-[891px]:w-[39px] max-[1666px]:w-[33px] max-[1666px]:h-8 min-[1666px]:w-[39px] min-[1666px]:h-9" src={Facebook} alt="" />
              </Link>
              <Link to={"https://www.linkedin.com/"}>
                <img className="max-[481px]:h-8 max-[481px]:w-[33px] max-[891px]:w-[40px] max-[891px]:h-10 max-[1666px]:w-[34px] max-[1666px]:h-8 min-[1666px]:w-[39px] min-[1666px]:h-9.5" src={Linkedin} alt="" />
              </Link> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
