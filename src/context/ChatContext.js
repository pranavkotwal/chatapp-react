import React, { createContext, useState } from "react";
import dummyData from '../data/dummyData.json'

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
  
  const [conversations, setConversations] = useState(dummyData);
  const [selectedConversation, setSelectedConversation] = useState(null);

  return (
    <ChatContext.Provider
      value={{
        conversations,
        setConversations,
        selectedConversation,
        setSelectedConversation,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
};

export { ChatContext, ChatProvider };
