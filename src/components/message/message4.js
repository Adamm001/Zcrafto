// InstagramMessenger.js
import React, { useState } from "react";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/message.css";
import FriendsList from "../friendNames";
import { Outlet } from "react-router-dom";

export default function Message4() {
  const [messages, setMessages] = useState([{text:'hi',sender:'user'},{text:'hi',sender:'other'},{text:'like',sender:'user'},{text:'like',sender:'other'}]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = [...messages, { text: newMessage, sender: "user" }];
    setMessages(updatedMessages);
    setNewMessage("");
  };

  return (
    <div className="messenger-container">
      <div className="message-list">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "user" : "other"
            }`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="message-input">
        <input
          className="sendInput"
          type="text"
          placeholder="Type a message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button className="sendButton" onClick={handleSendMessage}>
          Send
        </button>
      </div>
    </div>
  );
}