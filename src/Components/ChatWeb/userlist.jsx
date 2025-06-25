import React, { useEffect, useState } from "react";
import { getDatabase, ref, onValue } from "firebase/database";

export default function UserList({ users, onSelect }) {
  const [onlineUsers, setOnlineUsers] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const onlineRef = ref(db, "onlineUsers");

    const unsubscribe = onValue(onlineRef, (snapshot) => {
      const data = snapshot.val() || {};
      setOnlineUsers(data); // Object: { userId: true/false }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full sm:w-[60%] md:w-[70%] lg:w-[35%] xl:w-[25%] overflow-auto no-scrollbar">
      <div className="pt-7 pb-29 sm:py-10 bg-white rounded-[20px]">
        <h1
          id={"connection"}
          className="font-Urbanist px-6 pb-2 sm:pb-4 text-[#222222] text-[25px] sm:text-[26px] font-[700]"
        >
          Connections
        </h1>
        <div className="flex flex-col overflow-auto no-scrollbar h-[55vh]">
          {users.map((user, index) => {
            const isOnline = onlineUsers[user.id] === true;

            return (
              <button
                key={index}
                onClick={() => onSelect(user)}
                className="flex items-center py-3 px-6 text-[#222222] border-b border-[#BBBBBB] cursor-pointer group gap-4 hover:bg-[#D1BFFF] outline-none"
              >
                <div className="relative">
                  <img
                    className="h-10 w-10 rounded-full object-cover"
                    src={import.meta.env.VITE_IMAGE_KEY + user.headshot}
                    alt=""
                  />
                  <span
                    className={`absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full ${
                      isOnline ? "bg-green-500" : "bg-red-600"
                    }`}
                  ></span>
                </div>
                <h1 className="flex flex-col font-Urbanist text-[#222222] font-[500] mt-1 text-[15px]">
                  {user.first_name + " " + user.last_name}
                </h1>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
