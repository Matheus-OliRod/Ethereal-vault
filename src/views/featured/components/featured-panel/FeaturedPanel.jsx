import FeaturedItemContainer from "./subcomponents/FeaturedItemContainer/FeaturedItemContainer";
import FeaturedProfileContainer from "./subcomponents/FeaturedProfileContainer/FeaturedProfileContainer";

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