// IMAGES
import CallIcon from "../../../../../assets/CallIcon.png";
import MessageIcon2 from "../../../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../../../assets/InvestorIcon1.png";
import DummyLogo from "../../../../../../public/Images/UnknowUser.png";

// REDUX 
import { useSelector } from "react-redux";


const ProfileSection = () => {

    const { user } = useSelector((state) => state.auth);

    console.log(user);
    


  return (
    <>
      <section className="flex flex-col items-center gap-0 sm:gap-7 sm:flex-row ">
        <div className=" z-10 relative py-3 ml-3 sm:py-5 sm:w-[20%]">
          <img
            className="border-solid  border-PurpleColor w-[90%] h-[100%] border-[3px] object-cover  rounded-full"
            src={user.headshot !== null ? import.meta.env.VITE_IMAGE_KEY + user.headshot : DummyLogo}
            alt=""
          />
        </div>

        <div className="flex items-center gap-2 flex-col sm:items-start sm:gap-2">
          <h4 className="font-Inter font-bold text-[35px] sm:text-[43px]">
            {user.first_name + " " + user.last_name || "Guest"}
          </h4>
          <h6 className="font-Inter text-[18px] font-[500] text-center sm:text-start">
           {user.title || "Not Provided"}
          </h6>
          <ul className="flex flex-wrap items-center justify-center gap-4 sm:justify-start sm:items-start sm:gap-5 ">
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={InvestorIcon1} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                {user.state || "Not Provided"}
              </p>
            </li>
            <li className="flex gap-2 justify-center items-center">
              <img className="w-4 h-4 " src={MessageIcon2} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                {user.email || "guest@guest.com"}
              </p>
            </li>
            <li className="flex gap-2 -mt-2 sm:mt-0 justify-center items-center">
              <img className="w-4 h-4" src={CallIcon} alt="" />
              <p className="font-Inter text-[14px] text-Paracolor font-[600]">
                {user.phone || "123456789"}
              </p>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default ProfileSection;
