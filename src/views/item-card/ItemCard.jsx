import "./itemCard.css";
import {useCard} from "./CardContext";

/**
 * A simple and unique item card. The should be only one on the entire page.
 * 
 *  Its information is set to the clicked itemDisplay, so it is never recreated or deleted.
 * @returns A sl-card tag containing the items information and content.
 */
function ItemCard() {

    const { cardData, setCardData } = useCard();

    const toggleVisible = () => {
        setCardData(d => (
            {
                ...cardData,
                isVisible: false
            }
        ));
    }

    return (
        <div style={{display: (cardData.isVisible) ? "flex" : "none"}} className="card-popup">
            <div className="glass-pane">
                <div style={{position:"relative"}}>

                    <sl-button onClick={toggleVisible} variant="text">X</sl-button>
                    <sl-card>

                            <img slot="image" src={cardData.img_placeholder} alt="A piece of art" />

                        
                            <i>{cardData.title}</i> - <strong>{cardData.creator}</strong> <br /> <br />

                        
                        <p>{cardData.description}</p>

                        <br /><br />

                        <div slot="footer">
                            <sl-rating value={cardData.rating}></sl-rating>
                        </div>

                    </sl-card>
                </div>
            </div>
        </div>
    );
}

export default ItemCard;