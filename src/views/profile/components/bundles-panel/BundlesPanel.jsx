import { useState } from "react";
import "./BundlesPanel.css";
function BundlesPanel() {

    const [isVisible, setIsVisible] = useState(false);
    const [owned] = useState(true);

    const handleExtrasVisible = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div className="bundle-display">

            {/* The main will display the more privileged information (Title, item amount, price, thumbnail and how many sold (optional) */}
            <div className="main-bundle">

                <sl-avatar image="#"></sl-avatar>
                <h2 className="bundle-title">Title</h2>

                <small>item amount</small>

                <sl-button variant="success" className="buy-button">BUY</sl-button>

            </div>
            <footer>
                <p className="see-more" onClick={() => handleExtrasVisible()}>See More</p>
            </footer>

            {/* Here will display other important content, description, licenses, size, tags and release date */}
            <div style={{display: {isVisible}}} className="bundle-extras"></div>

        </div>
    );
}

export default BundlesPanel;