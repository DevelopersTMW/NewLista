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
import { useForm } from "react-hook-form";

const ForgetPassword = () => {
  const [loading, setloading] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [EmailID, setEmailID] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const ForgetPass = async (data) => {
    setloading(true);
    try {
      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/forgot-password",
        {
          email: data.EmailID,
        }
      );
      console.log(Response.data);
      localStorage.setItem("ForgetUser", data.EmailID);
      setloading(false);
      setEmailID("");
      navigate("/forget-otp");
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
            onSubmit={handleSubmit(ForgetPass)}
            className="flex flex-col gap-8"
          >
            <div>
              <Inputs
                name={"EmailID"}
                register={register("EmailID", {
                  required: "Email is required",
                })}
                labels={"Register Email"}
                placeholder={"Enter your registered email"}
                type={"email"}
                require={"true"}
                error={errors.EmailID?.message}
              ></Inputs>
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
          </form>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
