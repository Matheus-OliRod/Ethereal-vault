import "./ChatDisplay.css";
import ContactCard from "../contact-nav/contact-card/ContactCard";
import { useRef } from "react";
function ChatDisplay() {

    const drawerRef = useRef(null);

    const showContactDrawer = () => {
    
        if(window.innerWidth <= 768)
            drawerRef.current.show();
    };

    return (
        <div className="chat">
                <nav className="chat-nav">

                    <sl-drawer ref={drawerRef} label="Contacts" placement="bottom" className="mobile-contact-drawer">
                        <ContactCard />
                        <ContactCard />
                    </sl-drawer>
                    
                    <div className="contact-drawer-button" onClick={showContactDrawer}>
                        <sl-avatar></sl-avatar>
                        <h3>Contact Name</h3>
                    </div>
                </nav>

                <div className="message-holder"></div>
                <form className="chat-input">
                    <sl-input pill filled placeholder="Enter message"></sl-input>
                    <sl-button variant="primary" className="send-message-button">Send</sl-button>
                </form>
            </div>
    )
}

export default ChatDisplay;