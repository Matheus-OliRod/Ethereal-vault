
import ProfileShowcaseCard from "./subcomponents/ProfileShowcaseCard";
import randomImages from "@/res/placeholders/random-images.json";
import "./ShowcasePanel.css";
import placeholderImg from "@/res/images/placeholderImage.webp";
import { useEffect, useRef, useState } from "react";

function ShowcasePanel() {

    const dialogRef = useRef(null);
    const thumbnailPreviewRef = useRef(null);
    const imageUploadRef = useRef(null);
    
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [thumbnailImg, setThumbnailImg] = useState(null);
    const [showcaseDisplays, setShowcaseDisplays] = useState([]);

    const addShowcaseItem = () => {
        dialogRef.current.show();
    };

    const handleFileChange = (e) => {
        const newFile = e.target.files?.[0];

        if(!newFile) return;

        if(thumbnailImg) URL.revokeObjectURL(thumbnailImg); // Deleting previous image from memory

        const imgUrl = URL.createObjectURL(newFile);
        setThumbnailFile(newFile);
        setThumbnailImg(imgUrl);

        e.target.value = ""; // Reseting image choice
        
    }

    const handlePreviewDeletion = () => {
        if(thumbnailImg) URL.revokeObjectURL(thumbnailFile); // Deleting image only if it exists in first place
        setThumbnailFile(null);
        setThumbnailImg(null);
    }

    const handlePreview = () => {
        imageUploadRef.current?.click();
    };

    return (

        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>
            <sl-dialog className="showcase-dialog" ref={dialogRef} label="Add new showcase item:">

                <div className="thumbnail-display">
                    <h1 onClick={handlePreview} style={{display: (!thumbnailImg ? "flex" : "none")}} className="add-thumbnail">+</h1>
                    <img onClick={handlePreview} style={{display: (!thumbnailImg ? "none" : "block")}} src={thumbnailImg} ref={thumbnailPreviewRef} className="thumbnail-preview"></img>
                    <input onChange={handleFileChange} ref={imageUploadRef} style={{display: "none"}} type="file" accept="image/*"></input>
                    <sl-button onClick={handlePreviewDeletion} style={{display: (!thumbnailImg ? "none" : "block")}} className="thumbnail-preview-delete" variant="danger" pill>x</sl-button>
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