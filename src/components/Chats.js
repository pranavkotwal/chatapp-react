import React, { useContext } from "react";
import styles from "../styles/home.module.css";
import { Link } from "react-router-dom";
import { ChatContext } from "../context/ChatContext";

const Chats = () => {
  const { conversations, setSelectedConversation } = useContext(ChatContext);
  console.log('casdcas', conversations);

  // Function to handle conversation selection
  const handleConversationSelect = (conversationId) => {
    const selectedConv = conversations.friends.find((conv) => conv.id === conversationId);
    setSelectedConversation(selectedConv);
    console.log('selectedConv', selectedConv);
  };

  return (
    <div className="Chats">
      {conversations.friends.map((conversation) => {
        const lastMessage = conversation.chatlog.length > 0
          ? conversation.chatlog[conversation.chatlog.length - 1].text
          : "No messages yet";

        // Truncate the last message to 10 characters 
        const truncatedMessage = lastMessage.length > 15
          ? lastMessage.slice(0, 15) + "..."
          : lastMessage;

        return (
          <Link
            to={`/chat/${conversation.id}`}
            key={conversation.id}
            className={styles.link}
            onClick={() => handleConversationSelect(conversation.id)}
          >
            <div className={styles.userChat}>
              <img src={conversation.picture} alt={conversation.name} />
              <div className={styles.userChatInfo}>
                <span>{conversation.name}</span>
                <p>{truncatedMessage}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Chats;
