import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../../../Components/ChatWeb/userlist";
import PrivateChat from "../../../Components/ChatWeb/Chat";

function Inbox() {
  const [currentUser, setCurrentUser] = useState(null);
  const [otherUsers, setOtherUsers] = useState([]);
  const ApiKey = import.meta.env.VITE_API_KEY;
  const [chatUser, setChatUser] = useState(null);

  const tokens = localStorage.getItem('token')

  useEffect(() => {
    // Fetch current user from localStorage
    const storedUser = JSON.parse(localStorage.getItem("User"));
    if (storedUser) {
      setCurrentUser(storedUser);
    } else {
      console.error("No user found ");
    }
  }, []);

  useEffect(() => {
    // Fetch other users from API
    const fetchUsers = async () => {
      try {
        const response = await axios.get(`${ApiKey}/users`, {
          headers: {
            Authorization: `Bearer ${tokens}`,
          },
        });
        setOtherUsers(response.data.my_connections);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div className="flex flex-col sm:flex-row w-full mt-3 sm:gap-5 lg:gap-10 text-black">
      <UserList users={otherUsers} onSelect={setChatUser} />
      {chatUser && (
        <PrivateChat currentUser={currentUser} chatUser={chatUser} />
      )}
    </div>
  );
}

export default Inbox;
