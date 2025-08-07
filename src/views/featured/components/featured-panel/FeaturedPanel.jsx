import FeaturedItemContainer from "./subcomponents/featured-item-container/FeaturedItemContainer";
import FeaturedProfileContainer from "./subcomponents/featured-profile-container/FeaturedProfileContainer";

/**
 * It returns the container of the profile and item holder. Allowing to switch between each on mobile.
 * @returns Item holder and Profile holder container
 */

function FeaturedPanel() {

    return (
        <sl-split-panel>
            <FeaturedItemContainer slot="start" />
            <FeaturedProfileContainer slot="end" />
        </sl-split-panel>
    );
}

export default FeaturedPanel;