import { useState } from "react";
import ItemDisplay from "./item-display/ItemDisplay";

function FeaturedItemContainer() {
    const [cards, setCards] = useState([]);

    return (
        <div>
            <ItemDisplay />
            <ItemDisplay />
            <ItemDisplay />
            <ItemDisplay />
        </div>
    );
}

export default FeaturedItemContainer;