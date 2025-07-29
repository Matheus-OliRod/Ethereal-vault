import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

/**
 * Contains link access to all major pages/views of the app.
 * 
 * @returns Main Navbar of the app.
 */
function Navbar() {

    console.log("Updated"); // Helps to debug and prevent unecessary updates

    const [pageName, setPageName] = useState("Featured");
    const [isDark, setIsDark] = useState(false);
    let isDarkMode = false;

    /**
     * Toggles the theme from Light and Dark
     * 
     * Imported by the Shoelace framework
     */
    const ToggleTheme = () => {
        

        setIsDark(prev => !prev);

        // do your dark mode switching logic here
        const root = document.documentElement;
        root.classList.toggle('sl-theme-dark');
        root.classList.toggle('sl-theme-light');
    };

    const handleCurPageName = (to_page) => {
        setPageName(to_page);
    }

    return (
        <div className="navbar">

            <header>
                <Link to="/Profile" onClick={e => handleCurPageName("Profile")}><sl-skeleton classList="profile-skeleton"></sl-skeleton></Link>
            </header>

            <div className="guide">
                <sl-dropdown>
                    <sl-button slot="trigger" caret>{pageName}</sl-button>
                    <sl-menu>
                        <Link to="/"><sl-menu-item  onClick={e => handleCurPageName("Featured")}>Featured</sl-menu-item></Link>
                        <Link to="/Profile"><sl-menu-item onClick={e => handleCurPageName("Profile")}>Profile</sl-menu-item></Link>
                        <Link to="/chat"><sl-menu-item  onClick={e => handleCurPageName("Chat")}>Chat</sl-menu-item></Link>
                    </sl-menu>
                </sl-dropdown>
                <input type="text" />
            </div>

            <sl-button id="theme-toggle-button" onClick={ToggleTheme}><sl-icon name={isDark ? "sun" : "moon"} /></sl-button>
            {/*
            * toggles dark mode 
            <sl-button onClick={toggleTheme}>
                ☀️/🌙
            </sl-button> */}
        </div>
    )
}

export default Navbar;