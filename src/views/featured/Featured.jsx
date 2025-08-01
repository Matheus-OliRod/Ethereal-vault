import Filter from "./components/filter/Filter";
import FeaturedPanel from "./components/featured-panel/FeaturedPanel";
import "./Featured.css";

function Featured() {

    return (
        <div className="featured-container">
            <Filter />
            <FeaturedPanel />
        </div>
    );
}

export default Featured;