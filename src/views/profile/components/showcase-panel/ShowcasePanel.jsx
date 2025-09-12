
import ProfileShowcaseCard from "./subcomponents/ProfileShowcaseCard";
import randomImages from "@/res/placeholders/random-images.json";
import "./ShowcasePanel.css";
import placeholderImg from "@/res/images/placeholderImage.webp";
import { useEffect, useRef, useState } from "react";

function ShowcasePanel() {

    const dialogRef = useRef(null);
    const thumbnailPreviewRef = useRef(null);
    const imageUploadRef = useRef(null);
    
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [showcaseDisplays, setShowcaseDisplays] = useState([]);

    const addShowcaseItem = () => {
        dialogRef.current.show();
    };

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];

        if(file) {

        }
    }

    const handlePreview = () => {
        imageUploadRef.current?.click();
    };

    return (

        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <sl-dialog className="showcase-dialog" ref={dialogRef} label="Add new showcase item:">

                <div onClick={handlePreview} className="thumbnail-display">
                    <h1 style={{display: (thumbnailImg != null) ? "none" : "block"}} className="add-thumbnail">+</h1>
                    <div ref={thumbnailPreviewRef} className="thumbnail-preview"></div>
                    <sl-input onChange={handleFileChange} ref={imageUploadRef} style={{display: "none"}} type="file" accept="image/*"></sl-input>
                </div>

                <form action="" method="post">
                    <sl-input type="text" placeholder="Title" required></sl-input>
                    <sl-textarea type="text" placeholder="Description" required></sl-textarea>
                    <sl-button style={{width: "fit-content"}} type="submit" slot="footer">Finish</sl-button>
                </form>

            </sl-dialog>

            <sl-icon-button onClick={addShowcaseItem} className="showcase-dialog-open" name="plus"></sl-icon-button>

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
        </div>
    );
}

export default ShowcasePanel;