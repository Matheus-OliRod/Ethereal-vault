import "./itemCard.css";
import { useState } from "react";
import placeholderImage from "@/res/images/placeholderImage.webp";

/**
 * A simple and unique item card. The should be only one on the entire page.
 * 
 *  Its information is set to the clicked itemDisplay, so it is never recreated or deleted.
 * @returns A sl-card tag containing the items information and content.
 */
function ItemCard() {

    /**
     * Formats a number to have x int cases and y decimal cases.
     * 
     * Examples:
     * 
     * format(1.0, 2, 2) -> 01.00
     * 
     * format(102.23, 5, 1) -> 00102.23
     * @param {number} num : The number to format
     * @param {number} intCase : The minimun int cases it should have
     * @param {number} decimalCase : The minimun decimal cases it should have
     */

    function formatValue(num, intCase = 0, decimalCase = 0) {

        if(!Number.isInteger(intCase) || !Number.isInteger(decimalCase)) {
            console.error("Case input value must be Integer");
            return;
        }

        let hasIntCase = 0, hasDecimalCase = 0; // Counting the amount of already existing cases
        let isDecimal = false; // Will switch the adding from int to decimal
        num = num + "";

        for(let i = 0; i < num.length; i++) {
            if(num[i] == ".") isDecimal = !isDecimal;
            if(!isDecimal) hasIntCase++;
            else hasDecimalCase++;
        }

        intCase -= hasIntCase; // Verifying the amount of new cases to put
        decimalCase -= hasDecimalCase;

        if(!num.includes(".")) num = num + "."; // Adding the decimal separator

        while(intCase != 0 && decimalCase != 0) {
            if(intCase > 0) {
                num = "0" + num;
                intCase--;
            }

            if(decimalCase > 0) {
                num = num + "0";
                decimalCase--;
            }
        }

        return num;
    }

    const [isVisible, setIsVisible] = useState(true);
    const [price, setPrice] = useState(0.0);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{display: (isVisible) ? "flex" : "none"}} className="card-popup">
            <div className="glass-pane">
                <div style={{position:"relative"}}>

                    <sl-button onClick={toggleVisible} variant="text">X</sl-button>
                    <sl-card>

                            <img slot="image" src={placeholderImage} alt="A piece of art" />

                        
                            <i>Art name</i> - <strong>Creator</strong> <br /> <br />

                        
                        <p>This is the description:
                            As perhaps you may have thought, you weren't supposed to be seeing this...Hi?
                        </p>

                        <br /><br />

                        <div slot="footer">
                            <div className="buy-div">
                                <small>{"$" + formatValue(price, 0, 2)}</small>
                                <sl-button variant="success" outline>BUY</sl-button>
                            </div>
                            <sl-rating></sl-rating>
                        </div>

                    </sl-card>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;