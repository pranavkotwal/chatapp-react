import React, { useContext } from "react";
import styles from "../styles/home.module.css";
import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  const {selectedConversation} = useContext(ChatContext)
  const { side, text, timestamp, sender } = message;

  const pic = selectedConversation.picture

  return (
    <div className={`${styles.message} ${side === "left" ? styles.left : styles.right}`}>
      <div className={styles.messageInfo}>
        {side === "right" ? (
          <>
            <img src={sender?.picture} alt={sender?.name} />
            <span>{sender?.name}</span>
          </>
        ) : (
          <>
            <img src={pic} alt={sender?.name} />
            <span>{sender?.name}</span>
          </>
        )}
      </div>
      <div className={styles.messageContent}>
        <p>{text}</p>
        <span>{timestamp}</span>
      </div>
    </div>
  );
};

export default Message;
