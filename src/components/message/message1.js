// InstagramMessenger.js
import React, { useState } from "react";
import "C:/Users/moko/OneDrive - mk.edu.mn/Documents/Procon/Zcrafto/src/css/message.css";
import FriendsList from "../friendNames";
import { Outlet } from "react-router-dom";
import { Khsblg } from "../../js/messegeData";

export default function Message1() {
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    const updatedMessages = { text: newMessage, sender: "user" };
    Khsblg.push(updatedMessages);
    setNewMessage("");
  };

  return (
    <div className="messenger-container">
      <div className="message-list">
        {Khsblg.map((message, index) => (
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