import React, { useContext } from "react";
import styles from "../styles/home.module.css";
import { ChatContext } from "../context/ChatContext";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  const { selectedConversation } = useContext(ChatContext);

  if (!selectedConversation) {
    return <div className={styles.chat}>No conversation selected</div>;
  }

  return (
    <div className={styles.chat}>
      <div className={styles.chatInfo}>
        <span>{selectedConversation.name}</span>
        
      </div>
      <Messages selectedConversation={selectedConversation} />
      <Input />
    </div>
  );
};

export default Chat;
