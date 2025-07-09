import React, { useState, useRef, useEffect } from "react";
import TruncatedText from "../../../Components/TruncatedText/TruncatedText";
import UnkownUser from "../../../../public/Images/UnknowUser.png";
import axios from "axios";
import Spinner from "../../../Components/Spinner/Spinner";

const Inquiry = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedChatIndex, setSelectedChatIndex] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [sending, setSending] = useState(false);
  const [unreadCounts, setUnreadCounts] = useState({});
  const messagesEndRef = useRef(null);

  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_KEY}/messages`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.data?.status) {
          const convs = response.data.conversations;

          const unreadMap = {};
          convs.forEach((conv, idx) => {
            const unread = conv.messages.filter(
              (msg) => msg.type === "receive"
            ).length;
            unreadMap[idx] = unread;
          });

          setConversations(convs);
          setUnreadCounts(unreadMap);
        } else {
          setConversations([]);
          setUnreadCounts({});
        }
      } catch (error) {
        console.error("Failed to fetch conversations:", error);
        setConversations([]);
        setUnreadCounts({});
      } finally {
        setLoading(false);
      }
    };

    fetchConversations();
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [selectedChatIndex, conversations]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim() || selectedChatIndex === null) return;

    setSending(true);

    const selectedConversation = conversations[selectedChatIndex];

    const newMessage = {
      property_id: selectedConversation.property.id,
      property_url: "https://yourdomain.com/property/luxury-villa-dha",
      message: text.trim(),
      action_url: "hello",
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_KEY}/messages/send`,
        newMessage,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.data?.status) {
        const updated = [...conversations];
        updated[selectedChatIndex].messages.push({
          id: Date.now(),
          message: text,
          created_at: new Date().toISOString(),
          type: "send",
        });
        setConversations(updated);
        setText("");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="flex gap-8 h-[76vh] rounded-[10px] overflow-hidden my-5">
      {/* Left: Conversation List */}
      <div className="w-[25%] bg-white flex flex-col rounded-[10px]">
        <h1 className="text-3xl font-bold pl-5 pt-9 pb-7 text-gray-800">
          Inquiries
        </h1>
        <div className="flex flex-col overflow-auto no-scrollbar flex-grow">
          {loading ? (
            <div className="flex justify-center items-center h-full">
              <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
            </div>
          ) : conversations.length === 0 ? (
            <div className="flex justify-center items-center h-full text-gray-500 font-semibold">
              <h1 className="-mt-12">No inquiries found.</h1>
            </div>
          ) : (
            conversations.map((conv, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedChatIndex(idx);
                  setUnreadCounts((prev) => ({
                    ...prev,
                    [idx]: 0,
                  }));
                }}
                className={`flex items-center py-3.5 px-4 justify-between text-[#222222] border-b border-[#BBBBBB] cursor-pointer gap-3 hover:bg-[#D1BFFF] outline-none ${
                  selectedChatIndex === idx ? "bg-[#efe9ff]" : ""
                }`}
              >
                <div className="flex gap-2.5 items-center w-full">
                  <img
                    className="h-12 w-12 rounded-full object-cover"
                    src={
                      conv.with_user.image
                        ? import.meta.env.VITE_IMAGE_KEY +
                          "/" +
                          conv.with_user.image
                        : UnkownUser
                    }
                    alt="User"
                  />
                  <div className="flex flex-col text-start flex-grow">
                    <h1 className="font-Urbanist text-[#222222] font-[500] text-[15px]">
                      <TruncatedText
                        text={`${conv.with_user.first_name} ${conv.with_user.last_name}`}
                        maxLength={15}
                      />
                    </h1>
                    <p className="text-sm text-gray-500">
                      <TruncatedText text={conv.property.name} maxLength={18} />
                    </p>
                  </div>

                  {/* Unread Count Badge */}
                  {unreadCounts[idx] > 0 && (
                    <span className="min-w-[20px] h-[20px] bg-red-500 text-white rounded-full text-xs font-bold flex items-center justify-center px-1">
                      {unreadCounts[idx]}
                    </span>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Right: Chat Window */}
      <div className="flex-1 flex flex-col relative justify-between bg-white rounded-[10px] w-[70%]">
        {selectedChatIndex === null ? (
          <div className="flex justify-center items-center h-full text-gray-400 font-semibold">
            Select User To Check Inquiry
          </div>
        ) : (
          <>
            {/* Chat Header */}
            <div className="flex items-center gap-4 p-5 border-b border-[#B9B9B9]">
              <img
                className="h-13 w-13 rounded-full object-cover border border-[#e6e6e6]"
                src={
                  conversations[selectedChatIndex].with_user.image
                    ? import.meta.env.VITE_IMAGE_KEY +
                      "/" +
                      conversations[selectedChatIndex].with_user.image
                    : UnkownUser
                }
                alt="User"
              />
              <div>
                <h1 className="font-Urbanist font-[600] text-[#000] text-[19px]">
                  {`${conversations[selectedChatIndex].with_user.first_name} ${conversations[selectedChatIndex].with_user.last_name}`}
                </h1>
              </div>
            </div>

            {/* Messages */}
            <div className="p-6 flex flex-col gap-3 overflow-y-auto no-scrollbar relative overflow-hidden">
              {conversations[selectedChatIndex]?.messages?.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${
                    msg.type === "send" ? "justify-end" : "justify-start"
                  }`}
                >
                  <div
                    className={`relative max-w-[80%] py-3 px-4 leading-1.5 break-words whitespace-pre-wrap ${
                      msg.type === "send"
                        ? "bg-[#4880FF] text-white rounded-t-xl rounded-l-xl"
                        : "bg-gray-100 text-gray-900 rounded-t-xl rounded-r-xl"
                    }`}
                  >
                    <p className="text-sm font-[500] font-Urbanist text-[13.5px]">
                      {msg.message}
                    </p>
                    <span
                      className={`block mt-1.5 text-[10px] text-right ${
                        msg.type === "send" ? "text-gray-100" : "text-gray-400"
                      }`}
                    >
                      {new Date(msg.created_at).toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </span>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <form
              onSubmit={sendMessage}
              className="flex items-center gap-5 p-4 border-t border-[#d8d8d8]"
            >
              <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // Prevent new line
                    sendMessage(e); // Trigger send
                  }
                }}
                placeholder="Type a message..."
                disabled={sending}
                className="bg-[#F3EEFF] text-[#1d1d1d] font-[600] font-Urbanist text-[14px]
    placeholder:text-[12.5px] sm:placeholder:text-[14px]
    w-full px-4 py-3.5 h-[48px] rounded-[6px] outline-none resize-none
    max-h-[110px] overflow-hidden break-words whitespace-pre-wrap
    leading-[20px] disabled:opacity-50 no-scrollbar"
              />
              <button
                type="submit"
                disabled={sending}
                className="bg-purple-600 text-white px-9 py-2.5 rounded-[6px] hover:bg-purple-700 text-[17px] font-Urbanist font-[600] transition cursor-pointer disabled:cursor-not-allowed disabled:bg-purple-400"
              >
                {sending ? "Sending..." : "Send"}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default Inquiry;
