import { useState } from "react";
import { CircleCheck, UserRoundCheck, X } from "lucide-react";

// IMAGES
import CallIcon from "../../../assets/CallIcon.png";
import MessageIcon2 from "../../../assets/MessageIcon2.png";
import InvestorIcon1 from "../../../assets/InvestorIcon1.png";
import InvestorIcon2 from "../../../assets/InvestorIcon2.png";
import InvestorIcon3 from "../../../assets/InvestorIcon3.png";
import UnkownUser from "/public/Images/UnknowUser.png";

// COMPONENTS
import TruncatedText from "../../TruncatedText/TruncatedText";
import ConfirmationModal from "../../ConfirmationModal/ConfirmationModal";
import { Link } from "react-router-dom";

const AddToNetwork = ({
  id,
  InvesImage,
  InvesUserName,
  InvesDesc,
  location,
  propertyTypes,
  memberSince,
  email,
  phone,
  onReject,
  onViewProfile,
  type,
  AddtoNetwork,
  PendingRequest,
  button,
}) => {
  const [openModal, setOpenModal] = useState(false);
  const [modalData, setModalData] = useState({
    title: "",
    message: "",
    confirmLabel: "",
    onConfirm: () => {},
  });

  console.log("https://newlista.secureserverinternal.com/public/storage/" + InvesImage);
  

  // SEND CONNECTION REQUEST
  const openConfirmation = (actionType) => {
    let data = {};
    switch (actionType) {
      case "add":
        data = {
          icon: (
            <UserRoundCheck className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
          ),
          message: "You want to add this user to your network?",
          confirmLabel: "Add",
          style: "bg-PurpleColor",
          onConfirm: () => {
            AddtoNetwork(id);
            setOpenModal(false);
          },
        };
        break;

      case "accept":
        data = {
          icon: (
            <CircleCheck className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
          ),
          message: "You want to accept this request?",
          confirmLabel: "Accept",
          style: "bg-[#43B274]",
          onConfirm: () => {
            PendingRequest("accepted", id);
            setOpenModal(false);
          },
        };
        break;

      case "decline":
        data = {
          icon: (
            <X className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
          ),
          message: "You want to decline this request?",
          confirmLabel: "Decline",
          style: "bg-[#F61418]",
          onConfirm: () => {
            PendingRequest("declined", id);
            setOpenModal(false);
          },
        };
        break;
      default:
        return;
    }

    setModalData(data);
    setOpenModal(true);
  };

  // INFO ITEMS
  const renderInfoItem = (icon, text, maxLength = null) => (
    <li className="flex gap-3 justify-center items-center">
      <img className="w-5 h-5" src={icon} alt="" />
      <p className="font-Inter text-[15px] text-Paracolor font-[600]">
        {maxLength ? <TruncatedText text={text} maxLength={maxLength} /> : text}
      </p>
    </li>
  );

  // RENDER BUTTONS
  const renderButtons = () => {
    if (type === "addToNetwork") {
      return (
        <>
          <button
            onClick={() => openConfirmation("add")}
            disabled={button === "pending"}
            className={`font-Inter text-[#fff] font-semibold text-[12px] sm:text-[12.5px] sm:px-2.5 sm:py-1.5 px-2.5 py-1.5 lg:px-3.5 lg:py-2 rounded-full border-solid border-[2px] ${
              button === "pending"
                ? "bg-gray-400 border-gray-400 cursor-not-allowed"
                : "bg-PurpleColor border-PurpleColor cursor-pointer 64AAE9"
            }`}
          >
            {button === "pending" ? "Already Sent" : "Add to Network"}
          </button>

          {/* {button === "pending" ? (
            " "
          ) : (
            <button
              onClick={() => onReject(id)}
              className="font-Inter cursor-pointer text-[#fff] font-semibold text-[12px] px-4 py-1.5 sm:text-[12.5px] sm:px-2.5 sm:py-1 lg:px-3.5 rounded-full border-solid border-[2px] border-[#F61418] bg-[#F61418]"
            >
              Reject
            </button>
          )} */}
        </>
      );
    }
    if (type === "myNetwork") {
      return (
        <Link to={"/admin/inbox"}>
        <button  className="font-Inter text-[#fff] font-semibold text-[15px] px-7 py-1.5 rounded-full border-solid border-[2px] border-[#43B274] bg-[#43B274] cursor-pointer">
          Message
        </button>
        </Link>
        
        
      );
    }
    if (type === "pending") {
      return (
        <>
          <button
            onClick={() => openConfirmation("accept")}
            className="font-Inter text-[#fff] font-semibold text-[15px] px-6 py-1.5 rounded-full border-solid border-[2px] border-[#43B274] bg-[#43B274] cursor-pointer"
          >
            Accept
          </button>
          <button
            onClick={() => openConfirmation("decline")}
            className="font-Inter cursor-pointer text-[#fff] font-semibold text-[12px]  px-6 py-1.5  sm:text-[14.5px] sm:px-2.5 sm:py-1 lg:px-5 lg:py-1.5 rounded-full border-solid border-[2px] border-[#F61418] bg-[#F61418]"
          >
            Decline
          </button>
        </>
      );
    }
    return null;
  };

  return (
    <>
      <div className="max-[400px]:w-[280px]  w-[305px] border-[1px] border-solid border-[#BBBBBB] px-7 py-7 rounded-[8px] sm:w-[290px] md:w-[280px]  lg:w-[300px] xl:w-[290px] 2xl:w-[310px]">
        {/* IMAGES AND USERNAME  */}
        <div
          onClick={() => onViewProfile?.()}
          className="flex justify-start items-center gap-3 border-b-[1px] border-solid border-Paracolor pb-7 cursor-pointer"
        >
          <span>
            <img
              className="w-[68px] h-[70px] object-cover rounded-full"
              src={
                InvesImage
                  ? `${import.meta.env.VITE_IMAGE_KEY
                  }${InvesImage}`
                  : UnkownUser
              }
              alt="Investor Profile"
            />
          </span>
          <span>
            <h4 className="font-Inter font-bold text-[20px]">
              <TruncatedText text={InvesUserName} maxLength={11} />
            </h4>
            <h6 className="font-Inter text-[14px] font-[500]">{InvesDesc}</h6>
          </span>
        </div>
        <div className="pt-7">
          {/* FEATURES  */}
          <ul className="flex justify-start items-start flex-col gap-3">
            {renderInfoItem(InvestorIcon1, location, 20)}
            {renderInfoItem(InvestorIcon2, propertyTypes, 10)}
            {renderInfoItem(InvestorIcon3, `Member since ${memberSince}`)}
            {renderInfoItem(MessageIcon2, email, 20)}
            {renderInfoItem(CallIcon, phone, 15)}
          </ul>
          {/* BUTTONS  */}
          <div className="flex gap-1 sm:gap-3 pt-5">{renderButtons()}</div>
        </div>
      </div>

      <ConfirmationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
        style={modalData.style}
        message={modalData.message}
        confirmLabel={modalData.confirmLabel}
        onConfirm={modalData.onConfirm}
        icon={modalData.icon}
      />
    </>
  );
};

export default AddToNetwork;
