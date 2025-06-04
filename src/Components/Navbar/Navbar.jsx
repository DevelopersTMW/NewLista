import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// IMAGES
import Logo from "../../assets/WhiteLogo.png";
import YellowLogo from "../../assets/Logo.png";



function Navbar() {

  const token = localStorage.getItem("token")
  // MOBILE MENU CHECK
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#0F0F0F] relative z-1">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 md:px-12 lg:px-8"
      >
        {/* LOGO SECTION  */}
        <div className="flex lg:flex-1">
          <Link to={"/"} className="-m-1.5 p-1.5">
            <span className="sr-only">New Lista</span>
            <img alt="" src={Logo} className="h-12 sm:h-16 w-auto" />
          </Link>
        </div>
        {/* MENU ICON MOBILE  */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2 inline-flex items-center justify-center rounded-md p-3 text-white"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-7.5 md:size-8 font-bold" />
          </button>
        </div>
        {/* MAIN MENU SECTION  */}
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <Link
            to={"/about-us"}
            className="text-sm/6 font-[500] text-textColor font-Inter hover:text-[#c4c4c4]"
          >
            About Us
          </Link>
          <Link
            to={"/pricing"}
            className="text-sm/6 font-[500] text-textColor font-Inter hover:text-[#c4c4c4]"
          >
            Pricing
          </Link>
          
          <Link
            to={"/properties"}
            className="text-sm/6 font-[500]  text-textColor  font-Inter hover:text-[#c4c4c4] "
          >
            Properties
          </Link>
          <Link
            to={token ? "/admin/network" : "/login"}
            className="text-sm/6 font-[500]  text-textColor  font-Inter hover:text-[#c4c4c4] "
          >
            Networking
          </Link>
          <Link
            to={"/contact-us"}
            className="text-sm/6 font-[500] text-textColor font-Inter hover:text-[#c4c4c4]"
          >
            Contact
          </Link>
        </PopoverGroup>
        {/* MAIN MENU SECTION  END  */}
        {/* BUTTONS  */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3 items-center">
          {/* <div>
            <Switch
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </div> */}
          <div>
            <Link
              to={"/form"}
              className="text-sm/6 font-semibold text-gray-900"
            >
              <button className="hover-btn-yellow hover-btn text-black px-5 py-2 rounded-md font-Inter cursor-pointer">
                <span>Add a Property</span>
              </button>
            </Link>
          </div>
          <div>
            <Link
              to={"/login"}
              className="text-sm/6 font-semibold text-gray-900"
            >
              <button className="bg-transparent hover-btn-yellow hover-btn hover:border-black border-[1px] border-solid text-textColor border-textColor px-5 py-2 rounded-md cursor-pointer">
                <span>Log in</span>
              </button>
            </Link>
          </div>
        </div>
      </nav>

      {/* MOBILE DRAWER SECTION  */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto px-6 py-8 bg-black sm:px-6 sm:py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link className="-m-1.5 p-1.5">
              <img alt="" src={Logo} className="h-12 w-auto" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5  text-white"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-7 " />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              {/* MAIN MENU SECTION START  */}
              <div className="space-y-2 pt-10 pb-4">
                {/* DROP DOWN MENU END  */}
                <Link
                  to={"/about-us"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-[500] text-[#e9e9e9] hover:bg-gray-50 font-Inter"
                >
                  About Us
                </Link>
                <Link
                  to={"/pricing"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-[500] text-[#e9e9e9] hover:bg-gray-50 font-Inter"
                >
                  Pricing
                </Link>
                
                <Link
                  to={"/properties"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-[500] text-[#e9e9e9] hover:bg-gray-50 font-Inter"
                >
                  Properties
                </Link>
                <Link
                  to={"/admin/network"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-[500] text-[#e9e9e9] hover:bg-gray-50 font-Inter"
                >
                  Networking
                </Link>
                <Link
                  to={"/contact-us"}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-[500] text-[#e9e9e9] hover:bg-gray-50 font-Inter"
                >
                  Contact
                </Link>
              </div>
              {/* MAIN MENU SECTION START  */}

              <div className="py-4 border-t-[1px] border-[#e9e9e9]">
                <Link className="-mx-2  rounded-lg px-3 py-2.5 text-base/7 font-semibold text-[#e9e9e9] hover:bg-gray-50 gap-4 flex flex-col">
                  <div>
                    <Link
                      to={"/properties"}
                      className="text-sm/7 font-[500] text-gray-900"
                    >
                      <button className="bg-YellowColor px-5 py-2 text-[15px]  rounded-md font-Inter">
                        Add a Property
                      </button>
                    </Link>
                  </div>
                  <div>
                    <Link
                      to={"/login"}
                      className="text-sm/6 font-[500] text-gray-900"
                    >
                      <button className="bg-transparent border-[1px] border-solid text-white border-white px-5 py-2 rounded-md font-Inter">
                        Log in
                      </button>
                    </Link>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}

export default Navbar;
