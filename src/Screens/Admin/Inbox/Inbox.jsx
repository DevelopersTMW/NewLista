import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../../../Components/ChatWeb/userlist";
import PrivateChat from "../../../Components/ChatWeb/Chat";
import Spinner from "../../../Components/Spinner/Spinner";
import {
  getDatabase,
  ref,
  set,
  onDisconnect,
  onValue,
} from "firebase/database";
import db from "../../../Configuration/Firebase/FirebaseConfig";

function Inbox() {
  const [currentUser, setCurrentUser] = useState(null);
  const [otherUsers, setOtherUsers] = useState([]);
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [chatUser, setChatUser] = useState(null);
  const [Loading, setLoading] = useState(false);

  const tokens = localStorage.getItem("token");

  const [unreadCounts, setUnreadCounts] = useState({});

  console.log(unreadCounts);

  const [latestMessages, setLatestMessages] = useState({});

  useEffect(() => {
    if (!currentUser || otherUsers.length === 0) return;

    const db = getDatabase();
    const messagesRef = ref(db, "messages");

    const unsubscribe = onValue(messagesRef, (snapshot) => {
      const allMens = snapshot.val() || {};
      const counts = {};
      const latest = {};

      Object.entries(allMens).forEach(([chatId, msgGroup]) => {
        Object.entries(msgGroup).forEach(([msgId, msg]) => {
          if (msg.to === currentUser.id && msg.read === false && msg.from) {
            counts[msg.from] = (counts[msg.from] || 0) + 1;
          }

          const otherUserId = msg.from === currentUser.id ? msg.to : msg.from;

          if (!latest[otherUserId] || msg.timestamp > latest[otherUserId]) {
            latest[otherUserId] = msg.timestamp;
          }
        });
      });

      setUnreadCounts(counts);
      setLatestMessages(latest);
    });

    return () => unsubscribe();
  }, [currentUser, otherUsers]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("User"));
    if (storedUser) {
      setCurrentUser(storedUser);
      const userStatusRef = ref(getDatabase(), `onlineUsers/${storedUser.id}`);
      set(userStatusRef, true);
      onDisconnect(userStatusRef).set(false);
      return () => {
        set(userStatusRef, false);
      };
    } else {
      console.error("No user found ");
    }
  }, []);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`${ApiKey}/users`, {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        });

        const connections = response.data.my_connections;
        setOtherUsers(connections);

        // Automatically select the first user if exists
        if (connections && connections.length > 0) {
          setChatUser(connections[0]);
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (!currentUser) return <p>Loading...</p>;

  return (
    <>
      {!Loading ? (
        otherUsers ? (
          <div className="flex flex-col sm:flex-row w-full mt-3 sm:gap-5 lg:gap-10 text-black">
            <UserList
              users={otherUsers}
              onSelect={setChatUser}
              unreadCounts={unreadCounts}
              latestMessages={latestMessages}
            />

            {!chatUser ? (
              <div className="w-full sm:w-[75%] flex items-center justify-center text-center">
                <p className="text-[18px] font-Urbanist text-gray-500 font-semibold">
                  Select a user to start chatting.
                </p>
              </div>
            ) : (
              <PrivateChat
                currentUser={currentUser}
                chatUser={chatUser}
                setChatUser={setChatUser}
              />
            )}
          </div>
        ) : (
          <div className="relative flex items-center justify-center text-center">
            <p className="absolute top-50 text-[18px] font-Urbanist text-gray-500 font-semibold">
              No User Found
            </p>
          </div>
        )
      ) : (
        <div className="flex justify-center items-center !h-[75vh]">
          <Spinner style={"w-14 h-20 text-PurpleColor z-50"} />
        </div>
      )}
    </>
  );
}

export default Inbox;
