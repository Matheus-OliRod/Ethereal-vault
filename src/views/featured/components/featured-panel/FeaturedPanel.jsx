import FeaturedItemContainer from "./subcomponents/featured-item-container/FeaturedItemContainer";
import FeaturedProfileContainer from "./subcomponents/featured-profile-container/FeaturedProfileContainer";
import "./FeaturedPanel.css";
import { useContext } from "react";
import { ToggleVisible } from "../../FeaturedContext";

/**
 * It returns the container of the profile and item holder. Allowing to switch between each on mobile.
 * @returns Item holder and Profile holder container
 */

function FeaturedPanel() {
    const {isItemVisible} = useContext(ToggleVisible);

    return (
        <div className="fp-container">
            <FeaturedItemContainer style={{display: isItemVisible ? "flex" : "none"}} />
            <FeaturedProfileContainer style={{display: isItemVisible ? "none" : "flex"}} />
        </div>
    );
}

export default FeaturedPanel;