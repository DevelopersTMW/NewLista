import React from "react";

export default function UserList({ users, onSelect }) {
  return (
    <div>
      <h3>Chat with:</h3>
      {users.map(user => (
        <button key={user.id} onClick={() => onSelect(user)}>
          {user.name}
        </button>
      ))}
    </div>
  );
}
