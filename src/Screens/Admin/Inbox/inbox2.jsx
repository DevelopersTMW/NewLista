import React, { useState } from "react";
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
    desc: "Hi there!",
    desc2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic accusantium optio minus nulla fugit voluptatibus ipsa placeat! Id sunt et eveniet, pariatur labore enim? Beatae magnam natus quibusdam dolores cupiditate dolorem totam voluptates labore repudiandae pariatur! Ab, fuga ipsam?",
  },
  {
    name: "Jane Smith",
    img: InboxUser2,
    desc: "dolor sit amet consectetur adipisicing elit. Itaque hic accusantium",
    desc2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic accusantium optio minus nulla fugit voluptatibus ipsa placeat! Id sunt et eveniet, pariatur labore enim? Beatae magnam natus quibusdam dolores cupiditate dolorem totam voluptates labore repudiandae pariatur! Ab, fuga ipsam?",
  },
  {
    name: "Michael Lee",
    img: InboxUser3,
    desc: "Hello!",
    desc2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic accusantium optio minus nulla fugit voluptatibus ipsa placeat! Id sunt et eveniet, pariatur labore enim? Beatae magnam natus quibusdam dolores cupiditate dolorem totam voluptates labore repudiandae pariatur! Ab, fuga ipsam?",
  },
  {
    name: "Emily Johnson",
    img: InboxUser4,
    desc: "dolor sit amet consectetur adipisicing elit. Itaque hic accusantium",
    desc2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic accusantium optio minus nulla fugit voluptatibus ipsa placeat! Id sunt et eveniet, pariatur labore enim? Beatae magnam natus quibusdam dolores cupiditate dolorem totam voluptates labore repudiandae pariatur! Ab, fuga ipsam?",
  },
  {
    name: "Chris Wong",
    img: InboxUser5,
    desc: "Yo!",
    desc2: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque hic accusantium optio minus nulla fugit voluptatibus ipsa placeat! Id sunt et eveniet, pariatur labore enim? Beatae magnam natus quibusdam dolores cupiditate dolorem totam voluptates labore repudiandae pariatur! Ab, fuga ipsam?",

  },
];

const Inbox = () => {
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);
  const selectedUser = selectedUserIndex !== null ? User[selectedUserIndex] : null;

  return (

    <div className="flex flex-col sm:flex-row w-full mt-3 sm:gap-5 lg:gap-10 text-black">
      {/* Sidebar / User List */}
      <div className={`w-full sm:w-[60%] md:w-[70%] lg:w-[35%] xl:w-[25%] ${selectedUser ? "hidden lg:block" : ""}`}>
        <div className="pt-7 pb-29 sm:py-10 h-full overflow-y-auto bg-white rounded-[20px]">
          <h1 className="font-Urbanist px-6 pb-2 sm:pb-4 text-[#222222] text-[25px] sm:text-[26px] font-[700]">
            Connections
          </h1>
          <div className="flex flex-col">
            {User.map((items, index) => (
              <button
                key={index}
                onClick={() => setSelectedUserIndex(index)}
                className={`flex items-center py-3 px-6 text-[#222222] border-b-[1px] border-[#BBBBBB] border-solid cursor-pointer group gap-4 outline-none hover:bg-[#D1BFFF]`}
              >
                <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={items.img}
                  alt=""
                />
                <h1 className="font-Urbanist text-[#222222] font-[500] mt-1 text-[15px]">
                  {items.name}
                </h1>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Panel */}
      {selectedUser && (
        <div className="sm:w-[75%] sm:relative absolute w-full min-h-screen sm:min-h-min top-0 left-0 bg-white flex flex-col rounded-[10px] sm:border border-[#B9B9B9]">
          {/* Header */}
          <div className="flex justify-between border-b border-[#B9B9B9] py-5 px-5">
            <div className="flex gap-3 items-center">
              <div onClick={() => setSelectedUserIndex(null)} className="bg-[#F5F5F5] px-3 rounded-[5px] py-2">
                <img className="z-10 relative" src={RightSideImage1_2} alt="" />
              </div>
              <h1 className="font-Urbanist font-[600] text-[#000] text-[17px]">
                {selectedUser.name}
              </h1>
            </div>
            <div className="bg-[#FAFBFD] flex justify-evenly rounded-[9px] border-[#979797] border-solid border-[1px]">
              <div className="border-[#979797] px-4 py-2 border-r-[1px] border-solid">
                <img className="w-3.5 h-3.5" src={PrintIcon} alt="" />
              </div>
              <div className="border-[#979797] px-4 py-2 border-r-[1px] border-solid">
                <img className="w-3.5 h-3.5" src={StarIcon} alt="" />
              </div>
              <div className="px-4 py-2">
                <img className="w-3.5 h-3.5" src={DeleteIcon} alt="" />
              </div>
            </div>
          </div>

          {/* Chat Messages */}
          <div className="p-6 flex flex-col gap-10">
            {/* Message 1: Received */}
            <div className="flex items-end gap-2.5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src={selectedUser.img}
                alt="Jese image"
              />
              <div className="relative flex flex-col w-full max-w-[490px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-r-xl ">
                <span className="text-sm font-[500] font-Urbanist text-[13.5px] text-gray-900">
                  {selectedUser.desc}
                </span>
                <span className="text-sm mr-6 text-end font-Urbanist font-semibold text-gray-500  mt-1">
                  11:46
                </span>
              </div>
            </div>

            {/* Message 2: Sent */}
            <div className="flex justify-end px-6">
              <div className="relative flex flex-col w-full max-w-[450px] leading-1.5 p-4 border-gray-200 bg-[#4880FF] rounded-t-xl rounded-l-xl text-white">
                <p className="text-sm font-normal font-Urbanist">
                  Thanks for reaching out! I'll get back to you shortly.
                </p>
                <span className="text-sm mr-6 text-end font-Urbanist font-semibold text-white mt-1">
                  11:47
                </span>
              </div>
            </div>

            {/* Message 3: Received Again */}
            <div className="flex items-end gap-2.5 relative">
              <img
                className="w-10 h-10 rounded-full"
                src={selectedUser.img}
                alt="Jese image"
              />
              <div className="relative flex flex-col w-full max-w-[490px] leading-1.5 p-4 border-gray-200 bg-gray-100 rounded-t-xl rounded-r-xl">
                <span className="text-sm font-[500] font-Urbanist text-[13.5px] text-gray-900">
                  {selectedUser.desc2}
                </span>
                <span className="text-sm mr-6 text-end font-Urbanist font-semibold text-gray-500 mt-1">
                  11:48
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Inbox;
