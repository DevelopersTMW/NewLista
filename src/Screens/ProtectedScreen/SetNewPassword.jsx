import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { Link } from "react-router-dom";

// COMPONENTS
import Inputs from "../../Components/InputFields/Inputs";
import Spinner from "../../Components/Spinner/Spinner";
import PasswordChangeSuccesFully from "../../Components/PasswordChangeSuccesFully/PasswordChangeSuccesFully";

// IMAGE
import Image from "../../assets/SetNewPassword.jpg";

const SetNewPassword = () => {
  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const email = localStorage.getItem("ForgetUser");

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
  } = useForm();

  const SetNewPassword = async (data) => {

    console.log(data);
    
    setLoading(true);
    clearErrors(); // clear old errors

    // Front-end validations
    if (data.NewPassword.length < 8 || data.ReEnterNewPassword.length < 8) {
      setError("NewPassword", {
        message: "Password must be at least 8 characters long",
      });
      setLoading(false);
      return;
    }

    if (!/[!@#$%^&*()<>,."]/.test(data.NewPassword)) {
      setError("NewPassword", {
        message: "Password must contain a special character",
      });
      setLoading(false);
      return;
    }

    if (!/[A-Z]/.test(data.NewPassword)) {
      setError("NewPassword", {
        message: "Password must include at least one capital letter",
      });
      setLoading(false);
      return;
    }

    if (data.NewPassword !== data.ReEnterNewPassword) {
      setError("ReEnterNewPassword", {
        message: "Passwords do not match",
      });
      setLoading(false);
      return;
    }

    // API Call
    try {
      const response = await axios.post(
        "https://newlista.secureserverinternal.com/api/reset-password",
        {
          email,
          password: data.NewPassword,
        }
      );
      console.log(response);
      

      if (response.data.message === "Password reset successful") {
        localStorage.removeItem("ForgetUser");
        setShowSuccess(true);
        reset(); 
      }
    } catch (error) {
      const errorMsg =
        error?.response?.data?.message || "Something went wrong. Try again.";
      setError("NewPassword", { message: errorMsg });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const isSuccess = localStorage.getItem("passwordResetSuccess") === "true";
    if (isSuccess) setShowSuccess(true);
  }, []);

  return (
    <>
      {!showSuccess ? (
        <div className="flex">
          {/* IMAGE SECTION */}
          <div className="w-[44%] min-h-screen">
            <img className="h-full object-cover" src={Image} alt="Reset Password" />
          </div>

          {/* FORM SECTION */}
          <div className="w-[58%] px-36 flex flex-col justify-center gap-7">
            <div className="flex flex-col">
              <h1 className="font-Poppins font-bold text-[40px]">Set a password</h1>
              <p className="font-Urbanist text-Paracolor font-semibold text-[14px]">
                Your previous password has been reset. Please set a new password.
              </p>
            </div>

            <form
              onSubmit={handleSubmit(SetNewPassword)}
              className="flex flex-col gap-5"
            >
             <span>
               <Inputs
                name="NewPassword"
                register={register("NewPassword", {
                  required: "New password is required",
                })}
                labels="Create New Password"
                placeholder="Enter new password"
                type="password"
                error={errors.NewPassword?.message}
              />
             </span>

              <span>
                <Inputs
                name="ReEnterNewPassword"
                register={register("ReEnterNewPassword", {
                  required: "Please re-enter your password",
                })}
                labels="Re-enter New Password"
                placeholder="Re-enter new password"
                type="password"
                error={errors.ReEnterNewPassword?.message}
              />
              </span>

              <button
                type="submit"
                className="bg-PurpleColor font-bold text-white h-11 w-full rounded-[6px] font-Urbanist"
              >
                {loading ? (
                  <div className="flex justify-center">
                    <Spinner />
                  </div>
                ) : (
                  "Save new password"
                )}
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="transition-opacity duration-700 ease-in-out">
          <PasswordChangeSuccesFully />
        </div>
      )}
    </>
  );
};

export default SetNewPassword;
