import { useState } from "react";
import ItemCard from "../item-card/ItemCard";
import { useUser } from "../../../../../../services/userDataFetch";

function ItemDisplay() {

    const {userData} = useUser();

    /**
     * Substitutes the showcase item card information.
     */
    const updateItemCard = () => {

    };

    return (
        <div onClick={updateItemCard()}>
            <img src={"#"} alt="" />
            <footer>
                <strong>{"#"}</strong>
                <small>{"#"}</small>
            </footer>
        </div>
    );
}

export default ItemDisplay;