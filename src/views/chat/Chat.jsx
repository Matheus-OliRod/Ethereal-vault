import { useState } from "react";
import ContactCard from "./contact-card/ContactCard";
import "./Chat.css";

function Chat() {

    const [messages] = useState({}); // Message blocks

    return (
        <div className="chat-panel">
            <nav className="chat-contacts">
                <ContactCard />
                <ContactCard />
            </nav>

            <div className="chat">
                <nav className="chat-nav">
                    <sl-details summary="Contact 1"></sl-details>
                </nav>

                <div className="message-holder"></div>
                <form className="chat-input">
                    <sl-input pill filled placeholder="Enter message"></sl-input>
                    <sl-button variant="primary" className="send-message-button">Send</sl-button>
                </form>
            </div>
        </div>
    );
}

export default Chat;