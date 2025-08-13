import { useState } from "react";
import ItemDisplay from "./item-display/ItemDisplay";
import { useCard } from "@/views/item-card/CardContext";

function FeaturedItemContainer() {
    const [cards, setCards] = useState([]);
    const { cardData } = useCard();

    return (
        <div>
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
        </div>
    );
}

export default FeaturedItemContainer;