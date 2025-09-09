import ContactCard from "./contact-card/ContactCard";
import "./ContactNav.css";
function ContactNav() {

    return (
        <nav className="contact-nav">
            <ContactCard />
            <ContactCard />
        </nav>
    );
}

export default ContactNav;