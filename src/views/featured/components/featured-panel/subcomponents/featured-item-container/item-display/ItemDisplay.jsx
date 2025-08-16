import { useState } from "react";
import { useUser } from "@/services/userDataFetch";
import placeholderImage from "@/res/images/placeholderImage.webp";
import { useCard } from "@/views/item-card/CardContext";
import "./ItemDisplay.css";

import imgPaths from "@/res/placeholders/images.json"; // Mock rnadom image getter

// import placeHolderImage from "@/res/placeholderImage.webp";

/**
 * Displays a simple "card", that when hovered shows the creator and the price of the art content.
 * @param {*} param0 Information of the card (creator, price, and other details that comes to the card item display)
 * @returns ItemDisplay html component 
 */
function ItemDisplay({props}) {

    const {userData} = useUser();
    const { cardData, setCardData } = useCard();
    const srcImg = require("@/res/images/placeholderImage.webp"); // To change when set in production

    // Making a makeshift img loader, so i can test with different images and sizes.

    function getRandomSize() {
        return Math.floor(Math.random()*80) * 10;
    }

    /**
     * Substitutes the showcase item card information.
     */
    const callItemCard = () => {
        setCardData(d => ({
            ...props
        }));
    };

    return (
        <div onClick={() => callItemCard} className="item-display">
            <img src={`https://picsum.photos/seed/${getRandomSize()}/300`} alt="" />
            <footer>
                <strong>{cardData.creator}</strong>
                <small>{cardData.price}</small>
            </footer>
        </div>
    );
}

export default ItemDisplay;