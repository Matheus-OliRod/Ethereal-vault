import { useEffect, useState } from "react";
import ItemDisplay from "./item-display/ItemDisplay";
import "./FeaturedItemContainer.css";
import { useCard } from "@/views/item-card/CardContext";

function FeaturedItemContainer({style}) {
    const [cards, setCards] = useState([]);
    const { cardData } = useCard();

    return (
        <div style={style} className="item-display-container">
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
            <ItemDisplay props={cardData} />
        </div>
    );
}

export default FeaturedItemContainer;