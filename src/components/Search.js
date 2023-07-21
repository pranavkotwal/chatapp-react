import React, { useContext, useState } from "react";
import styles from "../styles/home.module.css";
import { ChatContext } from "../context/ChatContext";

const Search = () => {
  const { conversations, setConversations, setSelectedConversation } = useContext(ChatContext);
  const allFriends = conversations

  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearchChange = (event) => {
    setSearchText(event.target.value);
    // Filter the friends based on the search text
    const filteredFriends = allFriends.filter(
      (friend) =>
        friend.name.toLowerCase().includes(searchText.toLowerCase()) // Case-insensitive search
    );
  
    // Create a new array with minimal data for rendering the search results
    const minimalDataResults = filteredFriends.map((friend) => ({
      id: friend.id,
      name: friend.name,
      picture: friend.picture,
    }));

    setSearchResults(minimalDataResults);
  };
  const startConversation = (friend) => {
    // Check if the conversation already exists in the conversations array
    const existingConversation = conversations.find(
      (conversation) => conversation.id === friend.id
    );
  
    // If the conversation exists, set it as the selected conversation
    if (existingConversation) {
      setSelectedConversation(existingConversation);
    } else {
      // If the conversation does not exist, create a new conversation object
      const newConversation = {
        id: friend.id,
        name: friend.name,
        picture: friend.picture,
        chatlog: [],
      };
  
      // Add the new conversation to the conversations array
      setConversations((prevConversations) => ({
        ...prevConversations,
        friends: [...prevConversations.friends, newConversation],
      }));
  
      // Set the new conversation as the selected conversation
      setSelectedConversation(newConversation);
    }
  };
  
  

  return (
    <div className={styles.search}>
      <div className={styles.searchForm}>
        <input
          type="text"
          placeholder="Find a user"
          value={searchText}
          onChange={handleSearchChange}
        />
      </div>
      {searchResults.map((friend) => (
        <div
          className={styles.userChat}
          key={friend.id}
          onClick={() => startConversation(friend)}
        >
          <img src={friend.picture} alt={friend.name} />
          <div className={styles.userChatInfo}>
            <span>{friend.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Search;
