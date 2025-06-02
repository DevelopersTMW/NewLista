import {
  Disclosure,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { BellIcon } from "@heroicons/react/24/outline";
import HomeIcon from "../../assets/HomeIcon.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function AdminNavbar() {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <Disclosure as="nav" className="bg-white rounded-[15px]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex gap-2 min-[350px]:gap-10 justify-end sm:gap-0 sm:flex-row sm:items-center sm:justify-between py-4">
          {/* Top Row: Welcome + Search */}
          <div className="flex items-center w-[80% justify-end sm:justify-between sm:gap-0 sm:w-full">
            {/* Welcome Message */}
            <div className="sm:w-[30%]">
              <h1 className="text-[#111111] font-Urbanist text-[17px] min-[350px]:text-[20px] font-medium">
                Welcome, Marko!
              </h1>
            </div>

            {/* Desktop Search */}
            <div className="hidden sm:block sm:w-[70%]">
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
          </div>

          {/* Bottom Row: Actions */}
          <div className="flex items-center w-[40% justify-end gap-4  sm:mt-0 sm:w-[50%]">
            {/* Go Home (Desktop Only) */}
            <Link to="/" className="hidden sm:flex">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#EBEBEB] text-[#666666] rounded-full">
                <img className="h-3.5 w-3.5" src={HomeIcon} alt="Home" />
                <span className="font-Urbanist font-medium text-[#222222] text-sm">
                  Go Home
                </span>
              </button>
            </Link>

            {/* Notification Icon */}
            <button className="p-1 text-[#666666] rounded-full">
              <span className="sr-only">View notifications</span>
              <BellIcon className="h-7 w-7" aria-hidden="true" />
            </button>

            {/* Profile Menu */}
            <Menu as="div" className="relative">
              <MenuButton className="flex rounded-full overflow-hidden">
                <span className="sr-only">Open user menu</span>
                <img
                  className=" w-12.5 h-12.5 sm:h-10 sm:w-10 object-cover rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  alt="User"
                />
              </MenuButton>
              <MenuItems className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black/5 py-1 z-20">
                <MenuItem>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>

          {/* Mobile Search Input (Toggle) */}
          {showSearch && (
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
          )}
        </div>
      </div>
    </Disclosure>
  );
}

export default AdminNavbar;
