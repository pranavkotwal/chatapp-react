import React, { useContext } from "react";
import styles from '../styles/home.module.css'
import { ChatContext } from "../context/ChatContext";


const Navbar = () =>{
    const {conversations,selectedConversation} = useContext(ChatContext)
    console.log('selectedConversations',selectedConversation)

    return (
        <div className={styles.navbar}>
            <span className={styles.logo}>pChat</span>
            <div className={styles.user}>
                {/* <img src={selectedConversation.picture}/> */}
                <span>Pranav</span>
                <button>Logout</button>
            </div>
        </div>
    )
}

export default Navbar;