import { Link, Navigate, useNavigate } from "react-router-dom";

import Inputs from "../../Components/InputFields/Inputs";
import { useState } from "react";
// IMAGES
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";
import Image from "../../assets/ForgetPasswordImage.jpg";
import ListingRightArrow from "../../assets/ListingRightSideArrow.png";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";

const ForgetPassword = () => {
  const [loading, setloading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate()
  const [EmailID, setEmailID] = useState("");

  const ForgetPass = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/forgot-password",
        {
          email: EmailID,
        }
      );
      console.log(Response.data);
      localStorage.setItem("email", EmailID);
      setloading(false);
      setEmailID("");
      navigate('/verify-otp')
      // localStorage.setItem("type", Response.data.user.role);
    } catch (error) {
      setloading(false);
      const ErrorMessa = error.response.data.message;
      setErrorMessage(ErrorMessa);
    }
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
            <div>
              <p className="font-Urbanist  text-Paracolor font-[700] text-[15px]">
                <Link to={"/login"} className="flex items-center gap-1.5">
                  <img className="h-3 w-2" src={ListingRightArrow} alt="" />{" "}
                  Back to login
                </Link>
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h1 className="font-Poppins font-[700] text-[40px]">
                Forgot your password?
              </h1>
              <p className="font-Urbanist text-Paracolor font-[600] text-[14px]">
                Don’t worry, happens to all of us. Enter your email below to
                recover your password
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              ForgetPass(e);
            }}
            className="flex flex-col gap-8"
          >
            <div>
              <Inputs
                name={"EmailID"}
                value={EmailID}
                onChange={(e) => {
                  setEmailID(e.target.value);
                }}
                labels={"Register Email"}
                placeholder={"Enter your registered email"}
                type={"email"}
                error={ErrorMessage}
                require={"true"}
              ></Inputs>
              {ErrorMessage && (
                <p className="font-Poppins mt-2 font-[500] border-red-500 text-red-600 ml-1 text-[13px]">
                  {ErrorMessage}
                </p>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="bg-PurpleColor cursor-pointer font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]"
              >
                {loading ? (
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                ) : (
                  "Send Otp"
                )}
              </button>
            </div>
            <div className="flex justify-center items-center gap-3 mt-3">
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

export default ForgetPassword;
