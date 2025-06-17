import React from "react";

export default function UserList({ users, onSelect }) {

  return (
    <div className={`w-full sm:w-[60%] md:w-[70%] lg:w-[35%] xl:w-[25%]`}>
      <div className="pt-7 pb-29 sm:py-10 h-[75vh] overflow-y-auto bg-white rounded-[20px]">
        <h1 id={"connection"} className="font-Urbanist px-6 pb-2 sm:pb-4 text-[#222222] text-[25px] sm:text-[26px] font-[700]">
          Connections
        </h1>
        <div className="flex flex-col">
          {users.map((items, index) => (
            <button
              key={index}
              onClick={() => onSelect(items)}
              className={`flex items-center py-3 px-6 text-[#222222] border-b-[1px] border-[#BBBBBB] border-solid cursor-pointer group gap-4 outline-none hover:bg-[#D1BFFF]`}
            >
              <img
                  className="h-10 w-10 rounded-full object-cover"
                  src={import.meta.env.VITE_IMAGE_KEY + items.headshot}
                  alt=""
                />
              <h1 className="font-Urbanist text-[#222222] font-[500] mt-1 text-[15px]">
                {items.first_name + " " + items.last_name}
              </h1>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
