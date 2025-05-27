import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  PopoverGroup,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
// IMAGES
import Logo from "../../assets/WhiteLogo.png";

function Navbar() {

  //  MOBILE NAVBAR CHECK
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#0F0F0F] relative z-10">
        <nav
          aria-label="Global"
          className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        >
          {/* LOGO SECTION  */}
          <div className="flex lg:flex-1">
            <Link to={"/"} className="-m-1.5 p-1.5">
              <span className="sr-only">New Lista</span>
              <img alt="" src={Logo} className="h-16 w-auto" />
            </Link>
          </div>
          {/* MENU ICON MOBILE  */}
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          {/* MAIN MENU SECTION  */}
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Link
              to={"/about-us"}
              className="text-sm/6 font-[500] text-textColor font-Inter"
            >
              About Us
            </Link>
            <Link
              to={"/pricing"}
              className="text-sm/6 font-[500] text-textColor font-Inter"
            >
              Pricing
            </Link>
            <Link
              to={"/view-property"}
              className="text-sm/6 font-[500]  text-textColor  font-Inter "
            >
              Properties
            </Link>
            <Link
              to={"/contact-us"}
              className="text-sm/6 font-[500] text-textColor font-Inter"
            >
              Contact Us
            </Link>
           
          </PopoverGroup>
          {/* MAIN MENU SECTION  END  */}
          {/* BUTTONS  */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3 items-center">
            <div>
              <Link
                to={"/add-property"}
                className="text-sm/6 font-semibold text-gray-900"
              >
                <button className="hover-btn-yellow hover-btn px-5 py-2 rounded-md font-Inter cursor-pointer">
                  <span>Add a Property</span>
                </button>
              </Link>
            </div>
            <div>
              <Link
                to={"/login"}
                className="text-sm/6 font-semibold text-gray-900"
              >
                <button className="bg-transparent hover-btn hover-btn-purple hover:border-[#1E1E1E] border-[1px] border-solid text-textColor border-textColor px-5 py-2 rounded-md cursor-pointer">
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
          <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link className="-m-1.5 p-1.5">
                <img alt="" src={Logo} className="h-8 w-auto" />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                {/* MAIN MENU SECTION START  */}
                <div className="space-y-2 py-6">
                  {/* DROP DOWN MENU START  */}
                  <Disclosure as="div" className="-mx-3">
                    <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter">
                      <Link to={"/about-us"}>About US</Link>
                    </DisclosureButton>
                  </Disclosure>
                  {/* DROP DOWN MENU END  */}
                  <Link
                    to={"/pricing"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter"
                  >
                    Pricing
                  </Link>
                  <Link
                    to={"/contact-us"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter"
                  >
                    Contact
                  </Link>
                  <Link
                    to={"/view-property"}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter"
                  >
                    Networking
                  </Link>
                </div>
                {/* MAIN MENU SECTION START  */}

                <div className="py-6">
                  <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                    <div>
                      <Link
                        to={"/add-property"}
                        className="text-sm/6 font-semibold text-gray-900"
                      >
                        <button className="bg-YellowColor px-5 py-2 rounded-md font-Inter">
                          Add a Property
                        </button>
                      </Link>
                    </div>
                    <div>
                      <Link
                        to={"/login"}
                        className="text-sm/6 font-semibold text-gray-900"
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
    </>
  );
}

export default Navbar;
