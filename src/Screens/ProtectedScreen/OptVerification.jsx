import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// IMAGES
import Image from "../../assets/OptVerificationImage.jpg";
import ListingRightArrow from "../../assets/ListingRightSideArrow.png";
import OtpInput from "../../Components/OtpSender/OtpSender";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";

const OptVerification = () => {
  const [ErrorMessage, setErrorMessage] = useState("");
  const [otpValue, setOtpValue] = useState("");
  const [loading, setloading] = useState(false);
  const [OtpSendMess , setOtpSendMess] = useState("")
  const email = localStorage.getItem("email");
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (otpValue.length === 6) {
      setloading(true)
      setOtpSendMess("")
      try {
        const Response = await axios.post(
          "https://newlista.secureserverinternal.com/api/verify-reset-otp",
          {
            otp: otpValue,
            email: email,
          }
        );
        setloading(false)
        navigate("/set-new-password")
      } catch (error) {
        setloading(false)
        if (error.response.data.message === "Invalid OTP") {
          setErrorMessage("Invalid OTP");
        }
      }
    } else {
      setErrorMessage("Please enter the full 6-digit code");
    }
  };


  const ResendCode = async (e)=>{
    e.preventDefault();
    setloading(true);
    setErrorMessage("")
    try {
      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/forgot-password",
        {
          email: email,
        }
      );
      console.log(Response.data);
      localStorage.setItem("email", email);
      setOtpSendMess("Otp Send SuccessFully")
      setloading(false);
    } catch (error) {
      setloading(false);
      const ErrorMessa = error.response.data.message;
      setErrorMessage(ErrorMessa);
    }
  }

  return (
    <>
      <div className="flex">
        {/* IMAGE SECTION  */}
        <div className="w-[42%] min-h-screen ">
          <img className="h-[100%] object-cover" src={Image} alt="" />
        </div>

        {/* LOGIN FOR SECTION  */}
        <div className="w-[58%] px-36 flex flex-col justify-center gap-7 ">
          <div>
            <div>
              <p className="font-Urbanist  text-Paracolor font-[700] text-[15px]">
                <Link to={"/login"} className="flex items-center gap-1.5">
                  <img className="h-3 w-2" src={ListingRightArrow} alt="" />{" "}
                  Back to login
                </Link>
              </p>
            </div>
            <div className="flex flex-col ">
              <h1 className="font-Poppins font-[700] text-[40px]">
                Verify code
              </h1>
              <p className="font-Urbanist text-Paracolor font-[600] text-[14px]">
                An authentication code has been sent to your email.
              </p>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
            className="flex flex-col gap-5"
          >
            <div>
                 {OtpSendMess && (
                <p className="font-Poppins mb-2 font-[500] border-green-500 text-green-500  text-[13px]">
                  {OtpSendMess}
                </p>
              )}
              <OtpInput
                onChangeOtp={(otp) => {
                  setOtpValue(otp);
                }}
                error={ErrorMessage}
              />
              <p className="font-Urbanist text-Paracolor mt-3 font-[700] text-[14px]">
                Didn’t receive a code?{" "}
                <Link onClick={ResendCode} className="text-[#FF8682]">Resend</Link>
              </p>
              {ErrorMessage && (
                <p className="font-Poppins mt-2 font-[500] border-red-500 text-red-600  text-[13px]">
                  {ErrorMessage}
                </p>
              )}
             
            </div>

            <div className="mt-1">
              <button
                type="submit"
                className="bg-PurpleColor cursor-pointer font-[700] w-[90%] h-11 text-white font-Urbanist rounded-[6px]"
              >
                {loading ? (
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                ) : (
                  "Verify"
                )}
                
              </button>
            </div>
          </form>

          <div></div>
        </div>
      </div>
    </>
  );
};

export default OptVerification;
