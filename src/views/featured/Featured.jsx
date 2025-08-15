import { useState } from "react";
import Filter from "./components/filter/Filter";
import FeaturedPanel from "./components/featured-panel/FeaturedPanel";
import "./Featured.css";
import { ToggleVisible } from "./FeaturedContext";

function Featured() {
    const [isItemVisible, setIsItemVisible] = useState(true);

    return (
        <ToggleVisible value={{isItemVisible, setIsItemVisible}} className="featured-container">
            <Filter />
            <FeaturedPanel />
        </ToggleVisible>
    );
}

export default Featured;