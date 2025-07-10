import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
// COMPONENTS
import Inputs from "../../Components/InputFields/Inputs";
// IMAGES
import Image from "../../assets/RegisterPage.jpg";
import { Eye, EyeOff } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;
  const ApiKey = import.meta.env.VITE_API_KEY;

  // STATES
  const [Loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const from = location.state?.from || "/admin";

  // LOGIN FORM
  const LoginForm = async (Data) => {
    try {
      setLoading(true);
      const Response = await axios.post(`${ApiKey}/login`, {
        email: Data.Email,
        password: Data.Password,
      });
      console.log(Response);
      const response = Response.data;
      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "status",
        response.subscription?.status || "inactive"
      );
      localStorage.setItem("User", JSON.stringify(Response.data.user));
      if (Response.data.profile_complete) {
        localStorage.setItem(
          "ProfileComplete",
          JSON.stringify(Response.data.profile_complete)
        );
        navigate(from, { replace: true });
        reset();
      } else {
        navigate("/admin/account-setting");
      }
      console.log(Response);
    } catch (error) {
      const errorMsg = error?.response?.data?.message || "Login failed";
      const errorDetail = error?.response?.data?.message;
      setError("Password", {
        type: "manual",
        message: "Invalid Email or Password",
      });
    } finally {
      setLoading(false);
    }
  };

  // DECODE JWT CODE
  // BCZ GOOGLE DOES NOT PROVIDE DIRECT DATA
  function decodeJwt(token) {
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  }

  // GOOGLE LOGIN
  const GoogleLogin = async (e) => {
    const idToken = e.credential;
    const userData = decodeJwt(idToken);
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
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      console.log("====================================");
      console.log(Response);
      console.log("====================================");
      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "status",
        response.subscription?.status || "inactive"
      );
      localStorage.setItem("User", JSON.stringify(Response.data.user));
      if (Response.data.profile_complete) {
        localStorage.setItem(
          "ProfileComplete",
          JSON.stringify(Response.data.profile_complete)
        );
        navigate("/admin");
      } else {
        navigate("/admin/account-setting");
      }
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
          <img
            className="w-[100%] object-cover h-[20vh] sm:h-[30vh] md:h-full"
            src={Image}
            alt=""
          />
        </div>
        {/* LOGIN FOR SECTION  */}
        <div className="flex flex-col justify-center gap-7 py-10 max-[380px]:px-6 px-8 sm:px-16 md:py-20 md:w-[70%] lg:w-[55%] lg:px-20 lg:py-20 xl:py-24 xl:px-24  2xl:px-32">
          {/* Heading Info  */}
          <div>
            <h1 className="font-Poppins font-[700] text-[32px] max-[380px]:text-[28px] sm:text-[35px] md:text-[38px] lg:text-[44px]">
              Welcome to NewLista
            </h1>
            <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12px] text-[13px] sm:text-[13.5px] lg:text-[15px] lg:pl-2">
              Log in to access exclusive real estate listings, connect with
              investors, and explore off-market deals.
            </p>
          </div>
          <form
            onSubmit={handleSubmit(LoginForm)}
            className="flex flex-col gap-4"
          >
            {/* Email  */}
            <div className="flex flex-col gap-4">
              <span className="">
                <Inputs
                  name={"Email"}
                  register={register("Email", {
                    required: "Email is required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Enter a valid email address",
                    },
                  })}
                  labels={"Email"}
                  placeholder={"Enter your registered email"}
                  error={errors.Email?.message}
                ></Inputs>
              </span>
              {/* PASSOWRD  */}
              <span className="relative">
                <Inputs
                  name={"Password"}
                  register={register("Password", {
                    required: "Password is required",
                    minLength: {
                      value: 8,
                      message: "Password must be at least 8 characters long",
                    },
                  })}
                  labels={"Password"}
                  type={showPassword ? "text" : "password"}
                  placeholder={"Enter your password"}
                  error={errors.Password?.message}
                ></Inputs>
                <button
                  type="button"
                  onClick={() => {
                    setShowPassword((prev) => !prev);
                  }}
                  className="absolute right-6 text-[#747474] top-[50px] transform -translate-y-1/2 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </span>
              <span>
                <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-end">
                  <Link to={"/reset-password"}>Forgot Password?</Link>
                </p>
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
                {Loading ? "Logging in..." : "Log In"}
              </button>
              <p className="font-Urbanist text-Paracolor font-[600] max-[380px]:text-[12.5px] text-[13.5px] sm:text-[14.5px] lg:text-[15px] text-center mt-3">
                Don't have an account?{" "}
                <Link to={"/register"} className="font-bold">
                  Sign Up now
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
            <div
              id="google-login-button"
              aria-label="Google login button"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
