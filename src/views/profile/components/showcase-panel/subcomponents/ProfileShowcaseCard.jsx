import { useCard } from "@/views/item-card/CardContext";
import "./ProfileShowcaseCard.css";
import { useState } from "react";
import randomImg from "@/res/placeholders/random-images.json";

function ProfileShowcaseCard() {

const {cardData, setCardData} = useCard();
const [image] = useState(randomImg.images[Math.floor(Math.random()* randomImg.images.length)]);

const handleCard = () => {

    setCardData(pC => (
        {
            ...cardData,
            img_placeholder: image,
            isVisible: true
        }
    ));

};

    return (
        <div className="showcase-item" onClick={() => handleCard()}>
            <img src={image} />
            <footer><p>{cardData.title}</p></footer>
        </div>
    );
}

export default ProfileShowcaseCard;