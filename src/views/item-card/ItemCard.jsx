import "./itemCard.css";
import { useState } from "react";
import {useCard} from "./CardContext";

/**
 * A simple and unique item card. The should be only one on the entire page.
 * 
 *  Its information is set to the clicked itemDisplay, so it is never recreated or deleted.
 * @returns A sl-card tag containing the items information and content.
 */
function ItemCard() {

    const { cardData, setCardData } = useCard();

    /**
     * Formats a number to have x decimal cases.
     * 
     * Examples:
     * 
     * @example
     * // Returns 1.00
     * format(1.0, 2);
     * 
     * @example
     * // Returns 1.2
     * format(1.23);
     * 
     * @param {number} num : The number to format
     * @param {number} decimalCase : The minimun decimal cases it should have
     * @returns {String} The fixed decimal
     */

    function formatValue(num, decimalCase = 0) {
            return (Math.round(num * 100) / 100).toFixed(decimalCase);
        }

    const imagePath = require(`@/res/images/placeholderImage.webp`); console.info("Deprecate before production");

    const toggleVisible = () => {
        setCardData(d => (
            {
                ...cardData,
                isVisible: !d.isVisible
            }
        ));
    }

    return (
        <div style={{display: (cardData.isVisible) ? "flex" : "none"}} className="card-popup">
            <div className="glass-pane">
                <div style={{position:"relative"}}>

                    <sl-button onClick={toggleVisible} variant="text">X</sl-button>
                    <sl-card>

                            <img slot="image" src={imagePath} alt="A piece of art" />

                        
                            <i>{cardData.title}</i> - <strong>{cardData.creator}</strong> <br /> <br />

                        
                        <p>{cardData.description}</p>

                        <br /><br />

                        <div slot="footer">
                            <div className="buy-div">
                                <small>{"$" + formatValue(cardData.price, 2)}</small>
                                <sl-button variant="success" outline>BUY</sl-button>
                            </div>
                            <sl-rating value={cardData.rating}></sl-rating>
                        </div>

                    </sl-card>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;