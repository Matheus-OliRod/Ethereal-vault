
/**
 * It returns the container of the profile and item holder. Allowing to switch between each on mobile.
 * @returns Item holder and Profile holder container
 */

function FeaturedPanel() {

    return (
        <div className="featured-panel">

            <div id="featured-content" className="featured-section featured-left">

            </div>
            <sl-divider vertical></sl-divider>
            <div id="featured-profiles" className="featured-section featured-right">

            </div>
        </div>
    );
}

export default FeaturedPanel;