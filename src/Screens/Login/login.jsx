import React from 'react'
import { Link } from "react-router-dom";
import Image from "../../assets/RegisterPage.jpg";
import Google from "../../assets/google.png";
import Facebook from "../../assets/facebook.png";
import Linkedin from "../../assets/linkedin.png";


const Login = () => {
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
    
              <form className="flex flex-col gap-4">
                <div>
                  <label
                    for="email"
                    className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                  >
                    Email/User ID
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                    placeholder="Enter your registered email"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    className="block mb-1 text-[15px] font-[700] text-PurpleColor"
                  >
                    Password
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-[#F3EEFF] border-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px] w-[100%] h-12 px-4 rounded-[6px] outline-none"
                    placeholder="Enter your password"
                  />
                  <Link><p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-end mt-2">Forgot Password?</p></Link>
                </div>
                <div className="mt-1">
                    <button className="bg-PurpleColor font-[700] w-[100%] h-11 text-white font-Urbanist rounded-[6px]">Log In</button>
                    <p className="font-Urbanist text-Paracolor font-[600] text-[14px] text-center mt-3">Don’t have an account? <Link to={'/register'} className="font-bold">Sign up now</Link></p>
                </div>
                <div className="flex justify-center items-center gap-3 mt-2">
                    <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
                    <p className="font-Urbanist text-Paracolor font-[600] text-[15px] text-center">or continue with </p>
                    <div className="bg-[#a5a5a5] h-0.5 w-[90px]"></div>
                </div>
                <div className="flex justify-center gap-2">
                    <Link to={'https://www.google.com/'}><img className="w-[32px] h-8 " src={Google} alt="" /></Link>
                    <Link to={'https://www.facebook.com/'}><img className="w-[33px] h-8" src={Facebook} alt="" /></Link>
                    <Link to={'https://www.linkedin.com/'}><img className="w-[34px] h-8" src={Linkedin} alt="" /></Link>
                </div>
              </form>
            </div>
          </div>
    </>
  )
}

export default Login