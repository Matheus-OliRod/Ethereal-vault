import { useState } from "react";
import { useUser } from "../../../../../../services/userDataFetch";
import placeholderImage from "@/res/images/placeholderImage.webp";

// import placeHolderImage from "@/res/placeholderImage.webp";

function ItemDisplay() {

    const {userData} = useUser();

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