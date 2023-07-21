import React from "react";
import styles from "../styles/home.module.css";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";

const Messages = ({ selectedConversation }) => {
  const { conversations } = React.useContext(ChatContext);
  const { chatlog } = selectedConversation;
  const pic = selectedConversation.picture;

  if (chatlog.length === 0) {
    const lastMessage =
      conversations[selectedConversation.id - 2]?.lastChat || null; // Use optional chaining and provide a fallback value

    return (
      <div className={styles.messages}>
        {lastMessage && (
          <div className={`${styles.message} ${styles.left}`}>
            <div className={styles.messageInfo}>
              <img src={pic} alt="" />
            </div>
            <div className={styles.messageContent}>
              <p>{lastMessage}</p>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={styles.messages}>
      {chatlog.map((message) => (
        <Message key={message.message_id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
