import React, { useEffect, useState } from "react";
import axios from "axios";
import UserList from "../../../Components/ChatWeb/userlist";
import PrivateChat from "../../../Components/ChatWeb/Chat";

function Inbox() {
  const [currentUser, setCurrentUser] = useState(null);
  const [otherUsers, setOtherUsers] = useState([]);
  const [chatUser, setChatUser] = useState(null);

  useEffect(() => {
    setCurrentUser({ id: 1, name: "Bob" });
    setOtherUsers([
      { id: 2, name: "Alice" },
      { id: 3, name: "John" },
    ]);
  }, []);

  if (!currentUser) return <p>Loading...</p>;

  return (
    <div>
      <h1>Welcome, {currentUser.name}</h1>
      <UserList users={otherUsers} onSelect={setChatUser} />
      {chatUser && (
        <PrivateChat currentUser={currentUser} chatUser={chatUser} />
      )}
    </div>
  );
}

export default Inbox;
