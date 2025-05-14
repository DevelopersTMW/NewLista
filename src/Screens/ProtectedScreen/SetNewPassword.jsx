import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Inputs from "../../Components/InputFields/Inputs";
// IMAGES
import Image from "../../assets/SetNewPassword.jpg";
import PasswordChangeSuccesFully from "../../Components/PasswordChangeSuccesFully/PasswordChangeSuccesFully";
import axios from "axios";
import Spinner from "../../Components/Spinner/Spinner";

const SetNewPassword = () => {
  const [NewPassword, setNewPassword] = useState("");
  const [ReEnterNewPassword, setReEnterNewPassword] = useState("");
  const [ErrorMessage, setErrorMessage] = useState("");
  const [loading, setloading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const email = localStorage.getItem("email");

  //   SET NEW PASSWORD
  const SetNewPassword = async (e) => {
    e.preventDefault();
    setloading(true);
    try {
      if (NewPassword.length < 8 || ReEnterNewPassword.length < 8) {
        setErrorMessage("");
        setErrorMessage("Password must be 8 characters Long");
        setloading(false);
        return;
      }
      if (!/[!@#$%^&*()<>,."]/.test(NewPassword)) {
        setErrorMessage("");
        setErrorMessage("Password must contain any special character");
        setloading(false);
        return;
      }
      if (!/[A-Z]/.test(NewPassword)) {
        setErrorMessage("");
        setErrorMessage("Password must contain any capital letter");
        setloading(false);
        return;
      }
      if (NewPassword !== ReEnterNewPassword) {
        setErrorMessage("");
        setErrorMessage("Password must be Same");
        setloading(false);
        return;
      }

      const Response = await axios.post(
        "https://newlista.secureserverinternal.com/api/reset-password",
        {
          email: email,
          password: NewPassword,
        }
      );
      setShowSuccess(true);
      localStorage.setItem("passwordResetSuccess", "true");
      if (Response.data.message === "Password reset successful") {
        localStorage.removeItem("email");
      }
      setErrorMessage("");
      setNewPassword("");
      setReEnterNewPassword("");
      setloading(false);
    } catch (error) {
      setloading(false);
      const ErrorMess = error.response.data.message;
      setErrorMessage(ErrorMess);
    }
  };

  useEffect(() => {
    const isSuccess = localStorage.getItem("passwordResetSuccess") === "true";

    if (isSuccess) {
      setShowSuccess(true);
    }
  }, []);

  return (
    <>
      {!showSuccess ? (
        <div className="flex ">
          {/* IMAGE SECTION  */}

          <div className="w-[44%] min-h-screen ">
            <img className="h-[100%] object-cover" src={Image} alt="" />
          </div>

          {/* LOGIN FOR SECTION  */}

          <div className="w-[58%] px-36 flex flex-col justify-center gap-7 ">
            <div>
              <div className="flex flex-col ">
                <h1 className="font-Poppins font-[700] text-[40px]">
                  Set a password
                </h1>

                <p className="font-Urbanist text-Paracolor font-[600] text-[14px]">
                  Your previous password has been reseted. Please set a new
                  password for your account.
                </p>
              </div>
            </div>

            <form
              onSubmit={(e) => {
                SetNewPassword(e);
              }}
              className="flex flex-col gap-5"
            >
              <div>
                <Inputs
                  name={"NewPassword"}
                  value={NewPassword}
                  onChange={(e) => {
                    setNewPassword(e.target.value);
                  }}
                  labels={"Create New Password"}
                  placeholder={"Enter New Password"}
                  type={"password"}
                  error={ErrorMessage}
                ></Inputs>
              </div>

              <div>
                <Inputs
                  name={"ReEnterNewPassword"}
                  value={ReEnterNewPassword}
                  onChange={(e) => {
                    setReEnterNewPassword(e.target.value);
                  }}
                  labels={"Re Enter New Password"}
                  placeholder={"Re Enter New Password"}
                  type={"password"}
                  error={ErrorMessage}
                ></Inputs>
                {ErrorMessage && (
                  <p className="font-Poppins mt-2 font-[500] border-red-500 text-red-600  text-[13px]">
                    {ErrorMessage}
                  </p>
                )}
              </div>

              <div className="mt-1">
                <button
                  type="submit"
                  className="bg-PurpleColor cursor-pointer font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]"
                >
                  {loading ? (
                    <div className="flex justify-center">
                      <Spinner />
                    </div>
                  ) : (
                    "Save new password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className={`transition-opacity duration-700 ease-in-out`}>
          <PasswordChangeSuccesFully />
        </div>
      )}
    </>
  );
};

export default SetNewPassword;
