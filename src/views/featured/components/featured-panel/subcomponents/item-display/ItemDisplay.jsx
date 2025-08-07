import { useState } from "react";
import ItemCard from "../item-card/ItemCard";
import { useUser } from "../../../../../../services/userDataFetch";
import placeholderImage from "@/res/images/placeholderImage.webp";

// import placeHolderImage from "@/res/placeholderImage.webp";

function ItemDisplay() {

    const {userData} = useUser();
    
    // const placeholderData = {
    //     "imgSrc" : placeHolderImage,
    //     "creatorName" : "Name",
    //     "price" : 0.0
    // }

    /**
     * Substitutes the showcase item card information.
     */
    const callItemCard = () => {

    };

    return (
        <div onClick={callItemCard()}>
            <img src={null} alt="" />
            <footer>
                <strong>{"#"}</strong>
                <small>{"#"}</small>
            </footer>
        </div>
    );
}

export default ItemDisplay;