import React, { useContext } from "react";
import styles from "../styles/home.module.css";
import Message from "./Message";
import { ChatContext } from "../context/ChatContext";

const Messages = ({ selectedConversation }) => {
  const { conversations } = useContext(ChatContext);
  const { chatlog } = selectedConversation;
  console.log('sasdfasd',conversations.profile.friends[0].lastChat)
  console.log('freinasdf',selectedConversation)
  const pic = selectedConversation.picture

  if (chatlog.length === 0) {
    console.log("id",selectedConversation.id)
    const lastMessage =
      conversations.profile.friends[selectedConversation.id-2].lastChat
      console.log("lm",lastMessage)

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
