import React, { useContext, useState } from "react";
import styles from '../styles/home.module.css';
import { ChatContext } from "../context/ChatContext";

const Input = () => {
  const { selectedConversation, setSelectedConversation } = useContext(ChatContext);
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      return;
    }

    
    const newMessage = {
      message_id: Date.now(), 
      text: message,
      timestamp: new Date().toLocaleString(),
      side: "right", 
      sender: {
        id: 1,
        name: "Pranav",
        picture: "https://image.ibb.co/k0wVTm/profile_pic.jpg",
      }
    };

    // Add the new message to the chatlog of the selected conversation
    setSelectedConversation((prevConversation) => ({
      ...prevConversation,
      chatlog: [...prevConversation.chatlog, newMessage],
    }));

    // Reset the input
    setMessage("");
  };

  return (
    <div className={styles.input}>
      <input
        type="text"
        placeholder="Enter a message..."
        value={message}
        onChange={handleMessageChange}
      />
      <div className={styles.send}>
        <img
          src="https://cdn-icons-png.flaticon.com/32/2908/2908214.png"
          alt="Send"
          onClick={handleSendMessage}
        />
        <input type="file" style={{ display: "none" }} id="file" />
        <label htmlFor="file">
          <img
            src="https://cdn-icons-png.flaticon.com/32/4211/4211763.png"
            alt="Attach"
          />
        </label>
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
}

export default Input;
