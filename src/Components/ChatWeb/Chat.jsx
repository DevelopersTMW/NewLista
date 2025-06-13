import { useEffect, useState } from "react";
import { getDatabase, ref, onChildAdded, push, set } from "firebase/database";
import db from "../../Configuration/Firebase/FirebaseConfig";

function getChatId(userId1, userId2) {
  return userId1 < userId2
    ? `${userId1}_${userId2}`
    : `${userId2}_${userId1}`;
}

export default function PrivateChat({ currentUser, chatUser }) {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState("");
  const chatId = getChatId(currentUser.id, chatUser.id);

  useEffect(() => {
    const messagesRef = ref(getDatabase(), `messages/${chatId}`);
    setMessages([]); // Clear messages when switching user
    onChildAdded(messagesRef, (snapshot) => {
      setMessages(prev => [...prev, snapshot.val()]);
    });
  }, [chatId]);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!text.trim()) return;

    const newMsgRef = push(ref(db, `messages/${chatId}`));
    await set(newMsgRef, {
      from: currentUser.id,
      to: chatUser.id,
      text: text,
      timestamp: Date.now(),
    });

    setText("");
  };

  return (
    <div>
      <h4>Chat with {chatUser.name}</h4>
      <div style={{ height: 250, overflowY: "auto", border: "1px solid gray" }}>
        {messages.map((msg, i) => (
          <p key={i}>
            <strong>{msg.from === currentUser.id ? "Me" : chatUser.name}:</strong> {msg.text}
          </p>
        ))}
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
