import { useState } from "react";
import { useUser } from "@/services/userDataFetch";
import { useCard } from "@/views/item-card/CardContext";
import randomImages from "@/res/placeholders/random-images.json";
import "./ItemDisplay.css";

// import placeHolderImage from "@/res/placeholderImage.webp";

/**
 * Displays a simple "card", that when hovered shows the creator and the price of the art content.
 * @param {*} param0 Information of the card (creator, price, and other details that comes to the card item display)
 * @returns ItemDisplay html component 
 */
function ItemDisplay({props}) {

    const {userData} = useUser();
    const { cardData, setCardData } = useCard();
    const [imageURL] = useState(getRandomImg);

    // Making a makeshift img loader, so i can test with different images and sizes.

    function getRandomImg() {
        const randIndex = Math.floor(Math.random() * randomImages.images.length);
        return randomImages.images[randIndex];
    }


    /**
     * Substitutes the showcase item card information.
     */
    const callItemCard = () => {
        setCardData(d => ({
            ...props,
            isVisible : true,
            img_placeholder : imageURL
        }));
    };

    const toFixedDecimal = (num, decimals = 2) => {
        return (Math.round(num * 100) / 100).toFixed(decimals);
    };

    return (
        <div onClick={() => callItemCard()} className="item-display">
            <img src={imageURL} alt="" />
            <footer>
                <strong>{props.creator}</strong>
                <small>{`$${toFixedDecimal(props.price)}`}</small>
            </footer>
        </div>
    );
}

export default ItemDisplay;