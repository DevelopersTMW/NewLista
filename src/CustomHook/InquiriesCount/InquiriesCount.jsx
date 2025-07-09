import { useEffect, useState } from "react";
import axios from "axios";

const useUnreadMessageCount = () => {
  const [unreadCount, setUnreadCount] = useState(0);
  const token = localStorage.getItem("token");

  useEffect(() => {
    const fetchUnreadMessages = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_KEY}/messages`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.data?.conversations) {
          const total = res.data.conversations.reduce((count, conv) => {
            const unreadMsgs = conv.messages.filter((msg) => msg.type === "received").length;
            return count + unreadMsgs;
          }, 0);

          setUnreadCount(total);
        }
      } catch (err) {
        console.error("Error fetching unread messages:", err);
        setUnreadCount(0);
      }
    };

    fetchUnreadMessages();
  }, []);

  return unreadCount;
};

export default useUnreadMessageCount;
