
import ProfileShowcaseCard from "./subcomponents/ProfileShowcaseCard";
import randomImages from "@/res/placeholders/random-images.json";
import "./ShowcasePanel.css";
import { useState } from "react";

function ShowcasePanel() {

    const [showcaseDisplays, setShowcaseDisplays] = useState([]);
    
    const getRandomImg = () => {
        const randIndex = Math.floor(Math.random() * randomImages.images.length);
        return randomImages.images[randIndex];
    };

    return (
        <div className="showcase-display">

            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />
            <ProfileShowcaseCard />

        </div>
    );
}

export default ShowcasePanel;