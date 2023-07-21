import React, { useContext } from "react";
import styles from '../styles/home.module.css'
import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";
import { ChatContext } from "../context/ChatContext";

const Sidebar = () =>{
    // Access the chat context using the useContext hook
    const { conversations, setSelectedConversation } = useContext(ChatContext);

    // Function to handle conversation selection
    const handleConversationSelect = (conversationId) => {
        const selectedConv = conversations.find((conv) => conv.id === conversationId);
        setSelectedConversation(selectedConv);
    };

    return (
        <div className={styles.sidebar}>
            <Navbar/>
            <Search/>
            <Chats conversations={conversations} onSelectConversation={handleConversationSelect} />
        </div>
    );
};

export default Sidebar;
