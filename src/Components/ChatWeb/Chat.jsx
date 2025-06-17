import { useEffect, useState, useRef } from "react";
import { getDatabase, ref, onChildAdded, push, set } from "firebase/database";
import db from "../../Configuration/Firebase/FirebaseConfig";
import { Pen } from "lucide-react";

import RightSideImage1_2 from "../../assets/RightSideImage1.2.png";
import DeleteIcon from "../../assets/DeleteIcon.png";
import PrintIcon from "../../assets/PrintIcon.png";
import StarIcon from "../../assets/StarIcon.png";
import { Link } from "react-router-dom";

function getChatId(userId1, userId2) {
  return userId1 < userId2 ? `${userId1}_${userId2}` : `${userId2}_${userId1}`;
}

export default function PrivateChat({ currentUser, chatUser , setChatUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const chatId = getChatId(currentUser.id, chatUser.id);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    const messagesRef = ref(getDatabase(), `messages/${chatId}`);
    setMessages([]);
    onChildAdded(messagesRef, (snapshot) => {
      setMessages((prev) => [...prev, snapshot.val()]);
    });
  }, [chatId]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMsgRef = push(ref(db, `messages/${chatId}`));
    await set(newMsgRef, {
      from: currentUser.id,
      to: chatUser.id,
      text: text.trim(),
      timestamp: Date.now(),
    });

    setText("");
  };

  return (
    <div className="sm:w-[75%] sm:relative absolute w-full min-h-screen sm:min-h-min top-0 left-0 bg-white flex flex-col rounded-[10px] sm:border border-[#B9B9B9] justify-between">
      {/* Header */}
      <div className="flex justify-between border-b border-[#B9B9B9] py-5 px-5">
        <div className="flex gap-3 items-center">
          <div
            onClick={() => setChatUser(null)}
            className="bg-[#F5F5F5] px-3 rounded-[5px] py-2 cursor-pointer"
          >
            <img className="z-10 relative" src={RightSideImage1_2} alt="" />
          </div>
          <h1 className="font-Urbanist font-[600] text-[#000] text-[17px]">
            {chatUser.first_name + " " + chatUser.last_name}
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
      <div className="p-6 flex flex-col gap-3">
        {messages.map((msg, index) => {
          const isOwn = msg.from === currentUser.id;
          return (
            <div
              key={index}
              className={`flex ${
                isOwn ? "justify-end" : "justify-start"
              } gap-2 relative`}
            >
              {!isOwn && (
                <img
                  className="w-7 h-7 mt-6 rounded-full"
                  src={import.meta.env.VITE_IMAGE_KEY + chatUser.headshot}
                  alt="User"
                />
              )}
              <div
                className={`relative flex flex-col items-center w-max leading-1.5 py-3 px-4 border-gray-200 ${
                  isOwn
                    ? "bg-[#4880FF] text-white rounded-t-xl rounded-l-xl"
                    : "bg-gray-100 text-gray-900 rounded-t-xl rounded-r-xl"
                }`}
              >
                <span className="text-sm font-[500] font-Urbanist text-[13.5px]">
                  {msg.text}
                </span>
                {/* <span className="text-sm mr-6 text-end font-Urbanist font-semibold mt-1">
                  {new Date(msg.timestamp).toLocaleTimeString()}
                </span> */}
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <form
        onSubmit={sendMessage}
        className="flex items-center gap-5 p-4 border-t border-[#d8d8d8]"
      >
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type a message..."
          className="bg-[#F3EEFF]  text-[#1d1d1d] font-[600] font-Urbanist text-[14px] placeholder:text-[12.5px] sm:placeholder:text-[14px] w-full px-4 rounded-[6px] outline-none
            max-[481px]:h-11 max-[891px]:h-12 max-[1000px]:h-10.5 max-[1100px]:h-11
            max-[1280px]:h-11.5 max-[1666px]:h-12 min-[1666px]:h-14 min-[1666px]:text-[15px] min-[1666px]:placeholder:text-[15px]"
        />
        <button
          type="submit"
          className="bg-PurpleColor text-white px-9 py-2.5 rounded-[6px] hover:bg-blue-700 text-[17px] font-Urbanist font-[600] transition cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
