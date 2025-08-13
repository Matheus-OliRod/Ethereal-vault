import { useState } from "react";
import { useUser } from "@/services/userDataFetch";
import placeholderImage from "@/res/images/placeholderImage.webp";
import { useCard } from "@/views/item-card/CardContext";

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

    /**
     * Substitutes the showcase item card information.
     */
    const callItemCard = () => {
        setCardData(d => ({
            ...props
        }));
    };

    return (
        <div onClick={() => callItemCard}>
            <h2>Hello, display</h2>
            <img src={srcImg} alt="" />
            <footer>
                <strong>{cardData.creator}</strong>
                <small>{cardData.price}</small>
            </footer>
        </div>
    );
}

export default ItemDisplay;