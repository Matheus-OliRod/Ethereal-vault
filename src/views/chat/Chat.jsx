import { useState } from "react";
import ContactNav from "./contact-nav/ContactNav";
import ChatDisplay from "./chat-display/ChatDisplay";
import "./Chat.css";

function Chat() {

    const [contacts] = useState([]);
    const [messages] = useState([]); // Message blocks

    return (
        <div className="chat-panel">
            
            <ContactNav />

            <ChatDisplay />
        </div>
    );
}

export default Chat;