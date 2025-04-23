import { useEffect, useState } from "react";
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Switch,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
import Logo from "../../assets/WhiteLogo.png";

const products = [
  {
    name: "Analytics",
    description: "Get a better understanding of your traffic",
    href: "#",
    icon: ChartPieIcon,
  },
  {
    name: "Engagement",
    description: "Speak directly to your customers",
    href: "#",
    icon: CursorArrowRaysIcon,
  },
  {
    name: "Security",
    description: "Your customers’ data will be safe and secure",
    href: "#",
    icon: FingerPrintIcon,
  },
  {
    name: "Integrations",
    description: "Connect with third-party tools",
    href: "#",
    icon: SquaresPlusIcon,
  },
  {
    name: "Automations",
    description: "Build strategic funnels that will convert",
    href: "#",
    icon: ArrowPathIcon,
  },
];
const callsToAction = [
  { name: "Watch demo", href: "#", icon: PlayCircleIcon },
  { name: "Contact sales", href: "#", icon: PhoneIcon },
];

function TransparentNavbar() {
  const [enabled, setEnabled] = useState(false)
  console.log(enabled);  
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(()=>{
    if(enabled){
      console.log('Black');
    }else{
      console.log("White");
      
    }

  },  [enabled])


  
  return (
    <header className="bg-[#0F0F0F] relative z-10">
      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      >
        {/* LOGO SECTION  */}
        <div className="flex lg:flex-1">
          <Link className="-m-1.5 p-1.5">
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
          {/* DROP DOWN MENU START  */}
          {/* <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-[500] font-Inter text-textColor">
              About Us
              <ChevronDownIcon
                aria-hidden="true"
                className="size-5 flex-none text-gray-400"
              />
            </PopoverButton>
            <PopoverPanel
              transition
              className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
            >
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        aria-hidden="true"
                        className="size-6 text-gray-600 group-hover:text-indigo-600"
                      />
                    </div>
                    <div className="flex-auto">
                      <a
                        href={item.href}
                        className="block font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon
                      aria-hidden="true"
                      className="size-5 flex-none text-gray-400"
                    />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover> */}
          {/* DROP DOWN MENU END */}
          <Link className="text-sm/6 font-[500] text-textColor font-Inter">
            About Us
          </Link>
          <Link className="text-sm/6 font-[500] text-textColor font-Inter">
            Pricing
          </Link>
          <Link className="text-sm/6 font-[500] text-textColor font-Inter">
            Contact
          </Link>
          <Link className="text-sm/6 font-[500]  text-textColor  font-Inter ">
            Networking
          </Link>
        </PopoverGroup>
        {/* MAIN MENU SECTION  END  */}
        {/* BUTTONS  */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-3 items-center">
        {/* <div>
            <Switch
              checked={enabled}
              onChange={setEnabled}
              className="group inline-flex h-6 w-11 items-center rounded-full bg-gray-200 transition data-[checked]:bg-blue-600"
            >
              <span className="size-4 translate-x-1 rounded-full bg-white transition group-data-[checked]:translate-x-6" />
            </Switch>
          </div> */}
          <div>
            <Link className="text-sm/6 font-semibold text-gray-900">
              <button className="bg-YellowColor px-5 py-2 rounded-md font-Inter cursor-pointer">
                Add a Property
              </button>
            </Link>
          </div>
          <div>
            <Link
              to={"/login"}
              className="text-sm/6 font-semibold text-gray-900"
            >
              <button className="bg-transparent border-[1px] border-solid text-textColor border-textColor px-5 py-2 rounded-md cursor-pointer">
                Log in
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
                    About US
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="size-5 flex-none group-data-open:rotate-180"
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {[...products, ...callsToAction].map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm/7 font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                {/* DROP DOWN MENU END  */}

                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter">
                  Pricing
                </Link>
                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter">
                  Contact
                </Link>
                <Link className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 font-Inter">
                  Networking
                </Link>
              </div>
              {/* MAIN MENU SECTION START  */}

              <div className="py-6">
                <Link className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">
                  <div>
                    <Link className="text-sm/6 font-semibold text-gray-900">
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
  );
}

export default TransparentNavbar;
