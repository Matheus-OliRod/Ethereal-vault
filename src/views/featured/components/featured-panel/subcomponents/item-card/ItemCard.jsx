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

    const [isVisible, setIsVisible] = useState(true);

    const toggleVisible = () => {
        setIsVisible(!isVisible);
    }

    return (
        <div style={{display: (isVisible) ? "flex" : "none"}} className="card-popup">
            <div className="glass-pane">
                <sl-card>

                    <div slot="header" className="image-holder">
                        <sl-button onClick={toggleVisible} variant="danger">X</sl-button>
                        <img src={placeholderImage} alt="A piece of art" />
                    </div>

                    
                        <i>Art name</i> - <strong>Creator</strong> <br /> <br />

                    
                    <p>This is the description:
                        As perhaps you may have thought, you weren't supposed to be seeing this...Hi?
                    </p>

                </sl-card>
            </div>
        </div>
    );
}

export default ItemCard;