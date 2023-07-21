// Parent component (e.g., Home.js)
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "../components/Chat";
import styles from "../styles/home.module.css";

const Home = ({ conversations }) => {
  console.log(conversations)
  const [selectedConversation, setSelectedConversation] = useState(null);

  const handleConversationSelect = (conversationId) => {
    const selectedConv = conversations.find((conv) => conv.id === conversationId);
    
    setSelectedConversation(selectedConv);
  };
  console.log('selected conv',selectedConversation)

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <Sidebar conversations={conversations} onSelectConversation={handleConversationSelect} />
        <Chat selectedConversation={selectedConversation} />
      </div>
    </div>
  );
};

export default Home;
