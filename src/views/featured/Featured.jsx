import Filter from "../../components/filter/Filter";
import FeaturedPanel from "../../components/featured-panel/FeaturedPanel";

function Featured() {

    return (
        <div className="featured-container">
            <Filter />
            <FeaturedPanel />
        </div>
    );
}

export default Featured;