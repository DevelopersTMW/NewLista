import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ConfirmationModal from "../ConfirmationModal/ConfirmationModal";
import { useConfirmation } from "../../Screens/Admin/AccountSetting/Fields/Confirmation";
import { UserRoundCheck } from "lucide-react";
import { useSelector } from "react-redux";

// IMAGES
import DummyLogo from "../../../public/Images/UnknowUser.png";
import axios from "axios";
import Spinner from "../Spinner/Spinner";

function AdminNavbar() {
  const [showSearch, setShowSearch] = useState(false);
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [loading, setloading] = useState(false);
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  const { user, error } = useSelector((state) => state.auth);

  const { isOpen, confirm, handleConfirm, handleCancel } = useConfirmation();

  const handleConfirmation = async () => {
    const confirmed = await confirm();
    if (confirmed) {
      setloading(true);
      localStorage.removeItem("token");
      navigate("/login");

      try {
        const response = await axios.post(`${ApiKey}/logout`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "content-type": "application/json",
          },
        });
        console.log(response);
      } catch (error) {
        console.error(error);
        setloading(false);
      } finally {
        setloading(false);
      }
    }
  };

  return (
    <>
      <Disclosure as="nav" className="bg-white rounded-[15px]">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="flex gap-2 min-[350px]:gap-10 justify-between m:gap-0 sm:flex-row sm:items-center sm:justify-between py-4">
            {/* Top Row: Welcome + Search */}
            <div className="flex items-center ml-10 min-[890px]:ml-0 sm:gap-0 md:w-full">
              {/* Welcome Message */}
              <div className="min-[1170px]:w-[50%]">
                <h1 className="text-[#111111] font-Urbanist text-[17px] min-[350px]:text-[20px] font-medium">
                  Welcome,{" "}
                  {user
                    ? user?.first_name + " " + user?.last_name || "Guest"
                    : "loading.."}
                  !
                </h1>
              </div>

              {/* Desktop Search */}
              {/* <div className="hidden min-[1170px]:block min-[1170px]:w-[70%]">
              <div className="flex items-center bg-[#F3EEFF] rounded-[10px] px-4 py-3">
                <svg
                  className="w-4 h-4 text-[#444444] mr-3"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <input
                  type="search"
                  placeholder="Search"
                  className="w-full bg-transparent outline-none text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold text-[15px]"
                />
              </div>
            </div> */}
            </div>

            {/* Bottom Row: Actions */}
            <div className="flex items-center justify-end gap-4  sm:mt-0 sm:w-[50%]  md:w-[100%] xl:w-[50%]">
              {/* Go Home (Desktop Only) */}
              <Link to="/" className="hidden sm:flex">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] text-[#666666] hover-btn hover-btn-white rounded-full">
                  <span className="font-Urbanist font-[600]  text-sm cursor-pointer ">
                    Return to Home
                  </span>
                </button>
              </Link>

              {/* Notification Icon */}
              <button className="p-1 text-[#666666] rounded-full">
                <span className="sr-only">View notifications</span>
                <BellIcon
                  className="max-[380px]:w-5.5 h-7 w-7"
                  aria-hidden="true"
                />
              </button>
              {/* Profile Menu */}
              <Menu as="div" className="relative">
                <MenuButton className="flex rounded-full overflow-hidden">
                  <span className="sr-only">Open user menu</span>
                  {loading ? (
                    <Spinner style={"w-5 h-12 text-PurpleColor z-50"} />
                  ) : (
                    <img
                      className="max-[380px]:w-10 max-[380px]:h-10 w-12.5 h-12.5 sm:h-10 sm:w-10 object-cover rounded-full cursor-pointer"
                      src={
                        user?.headshot
                          ? import.meta.env.VITE_IMAGE_KEY + user.headshot
                          : DummyLogo
                      }
                      onError={(e) => {
                        e.target.onerror = null; // prevent loop
                        e.target.src = DummyLogo;
                      }}
                    />
                  )}
                </MenuButton>
                <MenuItems className="absolute right-0 mt-2 border-none w-48 text-[18px] font-[500] bg-[#fcfcfc] rounded-md shadow-lg font-Urbanist py-1 z-20">
                  <MenuItem>
                    <Link
                      to={"/admin/account-setting"}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Your Profile
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleConfirmation}>
                    <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Sign out
                    </Link>
                  </MenuItem>
                </MenuItems>
              </Menu>
            </div>

            {/* Mobile Search Input (Toggle) */}
            {/* {showSearch && (
              <div className="sm:hidden mt-3">
                <div className="flex items-center bg-[#F3EEFF] rounded-[10px] px-4 py-3">
                  <svg
                    className="w-4 h-4 text-[#444444] mr-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <input
                    type="search"
                    placeholder="Search"
                    className="w-full bg-transparent outline-none text-[#444444] placeholder:text-[#444444] font-Urbanist font-semibold text-[15px]"
                  />
                </div>
              </div>
            )} */}
          </div>
        </div>
      </Disclosure>
      <ConfirmationModal
        isOpen={isOpen}
        onClose={handleCancel}
        onConfirm={handleConfirm}
        message="Do you want to Logout?"
        confirmLabel="Yes, Logout"
        icon={
          <UserRoundCheck className="size-20 text-PurpleColor  bg-amber-50 PurpleColor px-3.5 py-3.5 rounded-full" />
        }
        style="bg-PurpleColor"
      />
    </>
  );
}

export default AdminNavbar;
