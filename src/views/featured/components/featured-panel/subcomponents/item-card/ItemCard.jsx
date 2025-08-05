import { useState } from "react";

/**
 * A simple and unique item card. The should be only one on the entire page.
 * 
 *  Its information is set to the clicked itemDisplay, so it is never recreated or deleted.
 * @returns A sl-card tag containing the items information and content.
 */
function ItemCard() {

    const [isVisible, setIsVisible] = useState(false);

    return (
        <div style={{display: (isVisible) ? "flex" : "none"}} className="card-popup">
            <div className="glass-pane"></div>
            <sl-card>

                

            </sl-card>
        </div>
    );
}

export default ItemCard;