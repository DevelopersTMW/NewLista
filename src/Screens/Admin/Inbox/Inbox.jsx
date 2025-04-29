import React from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import InboxUser1 from "../../../assets/InboxUser1.png";
import InboxUser2 from "../../../assets/InboxUser2.png";
import InboxUser3 from "../../../assets/InboxUser3.png";
import InboxUser4 from "../../../assets/InboxUser4.png";
import InboxUser5 from "../../../assets/InboxUser5.png";
import RightSideImage1_2 from "../../../assets/RightSideImage1.2.png";
import DeleteIcon from "../../../assets/DeleteIcon.png";
import PrintIcon from "../../../assets/PrintIcon.png";
import StarIcon from "../../../assets/StarIcon.png";

const User = [
  {
    name: "John Doe",
    img: InboxUser1,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6.30 pm",
    desc2: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
  },
  {
    name: "Jane Smith",
    img: InboxUser2,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    time: "6.30 pm",
    desc2: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content .",
  },
  {
    name: "Michael Lee",
    img: InboxUser3,
    desc: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6.30 pm",
    desc2: "making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
  },
  {
    name: "John Doe",
    img: InboxUser4,
    desc: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.",
    time: "6.30 pm",
    desc2: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
  },
  {
    name: "Michael Lee",
    img: InboxUser5,
    desc: "?????",
    time: "6.30 pm",
    desc2: "The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default.Contrary to popular belief, Lorem Ipsum is not simply random text is the model text for your company.",
  },
];

const Inbox = () => {
  return (
    <>
      <section>
        <TabGroup>
          <div className="flex w-[100%] mt-3 gap-10 text-black">
            <TabList className={"w-[25%] "}>
              <div class=" py-10 h-[100%]  overflow-y-auto bg-white rounded-[20px] dark:bg-gray-800 ">
                <h1 className="font-Urbanist px-6 pb-4 text-[#222222] text-[26px] font-[700]">
                  Connections
                </h1>
                <div className="flex flex-col ">
                  {User.map((items) => (
                    <Tab  className={({ selected }) =>
                        `flex items-center py-3 px-6 text-[#222222] border-b-[1px] border-[#BBBBBB] border-solid cursor-pointer dark:text-white group gap-4 outline-none ${
                          selected ? "bg-[#D1BFFF]" : ""
                        }`
                      }>
                      <img
                        className="h-10 w-10 rounded-full object-cover"
                        src={items.img}
                        alt=""
                      />
                      <h1 className="font-Urbanist text-[#222222] font-[500] mt-1 text-[15px]">
                        {items.name}
                      </h1>
                    </Tab>
                  ))}
                </div>
              </div>
            </TabList>
            <TabPanels
              className={
                "w-[75%] bg-white border-[#B9B9B9] border-solid border-[1px] flex flex-col rounded-t-[10px]"
              }
            >
              <div className="flex justify-between border-[#B9B9B9] border-solid border-b-[1px] py-5 px-5">
                <div className="flex gap-2 items-center">
                  <div className="bg-[#F5F5F5] px-3 rounded-[5px] py-2 ">
                    <img
                      className=" z-10 relative"
                      src={RightSideImage1_2}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="font-Urbanist font-[600] text-[] text-[#000]">
                      John Doe
                    </h1>
                  </div>
                </div>
                <div className="bg-[#FAFBFD] flex justify-evenly rounded-[9px] border-[#979797] border-solid border-[1px]">
                  <div className="border-[#979797] px-4 py-2 border-r-[1px] border-solid">
                    <img className="w-3.5 h-3.5" src={PrintIcon} alt="" />
                  </div>
                  <div className="border-[#979797] px-4 py-2 border-r-[1px] border-solid">
                    <img className="w-3.5 h-3.5" src={StarIcon} alt="" />
                  </div>
                  <div className=" px-4 py-2 ">
                    <img className="w-3.5 h-3.5" src={DeleteIcon} alt="" />
                  </div>
                </div>
              </div>
              {User.map((items) => (
                <TabPanel>
                    <div className="flex flex-col gap-10 py-10">

                    <div className="px-3">
                      <div class="flex items-end gap-2.5 relative">
                        <img
                          class="w-10 h-10 rounded-full"
                          src={items.img}
                          alt="Jese image"
                        />
                        <div class="relative flex flex-col w-full max-w-[490px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-r-xl dark:bg-gray-700">
                          <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span class="text-sm font-[500] font-Urbanist text-[13.5px] text-gray-900 dark:text-white">
                              {items.desc}
                            </span>
                          </div>
                          <p class="text-sm font-normal py-1 text-gray-900 dark:text-white">
                            {items.decs}
                          </p>
                          <span class="text-sm  mr-6 text-end font-Urbanist font-semibold text-gray-500 dark:text-gray-400">
                            11:46
                          </span>
                          <button
                            id="dropdownMenuIconButton"
                            data-dropdown-toggle="dropdownDots"
                            data-dropdown-placement="bottom-start"
                            class="inline-flex absolute bottom-2.5 end-2  p-2 text-sm font-medium text-center text-gray-900  "
                            type="button"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 4 15"
                            >
                              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="px-6 flex justify-end">
                      <div class="flex items-end gap-2.5 relative">
                        
                        <div class="relative flex flex-col w-full max-w-[450px] leading-1.5 p-4 border-gray-200 bg-[#4880FF] rounded-t-xl rounded-l-xl dark:bg-gray-700">
                          <div class="flex items-center space-x-2 rtl:space-x-reverse">
                         
                          </div>
                          <p class="text-sm font-normal py-1 text-white dark:text-white">
                          Lorem ipsum dolor sit amet consectetur. At convallis
                            quis viverra tristique. Arcu viverra quis at est
                            pellentesque scelerisque orci. Mi morbi malesuada
                            tellus ipsum sed velit. Sed.
                          </p>
                          <span class="text-sm  mr-6 text-end font-Urbanist font-semibold text-white dark:text-gray-400">
                            11:46
                          </span>
                          <button
                            id="dropdownMenuIconButton"
                            data-dropdown-toggle="dropdownDots"
                            data-dropdown-placement="bottom-start"
                            class="inline-flex absolute bottom-2.5 end-2  p-2 text-sm font-medium text-center text-gray-900  "
                            type="button"
                          >
                            <svg
                              class="w-4 h-4 text-[#fff] dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 4 15"
                            >
                              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                          </button>
                        </div>
                       
                      </div>
                    </div>
                    <div className="px-3">
                      <div class="flex items-end gap-2.5 relative">
                        <img
                          class="w-10 h-10 rounded-full"
                          src={items.img}
                          alt="Jese image"
                        />
                        <div class="relative flex flex-col w-full max-w-[490px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-r-xl dark:bg-gray-700">
                          <div class="flex items-center space-x-2 rtl:space-x-reverse">
                            <span class="text-sm font-[500] font-Urbanist text-[13.5px] text-gray-900 dark:text-white">
                              {items.desc2}
                            </span>
                          </div>
                          <p class="text-sm font-normal py-1 text-gray-900 dark:text-white">
                            {items.decs2}
                          </p>
                          <span class="text-sm  mr-6 text-end font-Urbanist font-semibold text-gray-500 dark:text-gray-400">
                            11:46
                          </span>
                          <button
                            id="dropdownMenuIconButton"
                            data-dropdown-toggle="dropdownDots"
                            data-dropdown-placement="bottom-start"
                            class="inline-flex absolute bottom-2.5 end-2  p-2 text-sm font-medium text-center text-gray-900  "
                            type="button"
                          >
                            <svg
                              class="w-4 h-4 text-gray-500 dark:text-gray-400"
                              aria-hidden="true"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="currentColor"
                              viewBox="0 0 4 15"
                            >
                              <path d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    </div>

                </TabPanel>
              ))}
              <TabPanel>Content 2</TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 3</TabPanel>
              <TabPanel>Content 3</TabPanel>
            </TabPanels>
          </div>
        </TabGroup>
      </section>
    </>
  );
};

export default Inbox;
