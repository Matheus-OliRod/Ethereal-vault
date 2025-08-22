import { useCard } from "@/views/item-card/CardContext";
import "./ShowcasePanel.css";

function ShowcasePanel() {
    const {cardData, setCardData} = useCard();

    return (
        <div className="showcase-display">

        </div>
    );
}

export default ShowcasePanel;