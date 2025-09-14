
import ProfileShowcaseCard from "./subcomponents/ProfileShowcaseCard";
import "./ShowcasePanel.css";
import placeholderImg from "@/res/images/placeholderImage.webp";
import { useRef, useState } from "react";
import { useUser } from "@/services/userDataFetch";
import showcase_placeholder from "@/res/placeholders/showcase-item-placeholder.json";

function ShowcasePanel() {

    const { userData } = useUser();

    const alertRef = useRef(null);
    const dialogRef = useRef(null);
    const thumbnailPreviewRef = useRef(null);
    const imageUploadRef = useRef(null);
    const titleInputRef = useRef(null);
    const descriptionInputRef = useRef(null);
    
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
        
    };

    const handlePreviewDeletion = () => {
        if(thumbnailImg) URL.revokeObjectURL(thumbnailFile); // Deleting image only if it exists in first place
        setThumbnailFile(null);
        setThumbnailImg(null);
    };

    const handlePreview = () => {
        imageUploadRef.current?.click();
    };

    const handleShowcaseCreation = () => {
        
        if(!titleInputRef.current.innerHTML || !descriptionInputRef.current.innerHTML) {
            alertRef.current.show();
            return;
        }

        const newItem = {...showcase_placeholder, 
            creator : userData.username,
            creator_uuid : userData.uuid,
            title : titleInputRef.current.innerHTML,
            description : descriptionInputRef.current.innerHTML,
            creator_profile_img : userData.profile_pic_url,
            showcase_thumbnail : (!thumbnailImg ? placeholderImg : thumbnailImg),
            rating : 0, // Rating starts at 0. TODO: Add rating calculation and incrementation on bakcend
            showcase_uid : "random ID" // TODO: Add UID generation
        }

        setShowcaseDisplays(pSD => ({...pSD, newItem}));
        console.log(showcaseDisplays);

    };

    return (

        <div style={{display: "flex",flexDirection: "column", alignItems: "center"}}>

            

            <sl-dialog className="showcase-dialog" ref={dialogRef} label="Add new showcase item:">

                <sl-alert ref={alertRef} variant="warning" duration="5000" closable>
                    <sl-icon style={{ fontSize: "1.5rem" }} slot="icon" name="triangle-alert"></sl-icon>
                    Some of the input fields are empty!
                </sl-alert>

                <div className="thumbnail-display">
                    <h1 onClick={handlePreview} style={{display: (!thumbnailImg ? "flex" : "none")}} className="add-thumbnail">+</h1>
                    <img onClick={handlePreview} style={{display: (!thumbnailImg ? "none" : "block")}} src={thumbnailImg} ref={thumbnailPreviewRef} className="thumbnail-preview"></img>
                    <input onChange={handleFileChange} ref={imageUploadRef} style={{display: "none"}} type="file" accept="image/*"></input>
                    <sl-button onClick={handlePreviewDeletion} style={{display: (!thumbnailImg ? "none" : "block")}} className="thumbnail-preview-delete" variant="danger" pill>x</sl-button>
                </div>

                    <sl-input ref={titleInputRef} type="text" placeholder="Title" required></sl-input>
                    <sl-textarea ref={descriptionInputRef} type="text" placeholder="Description" required></sl-textarea>
                    <sl-button onClick={handleShowcaseCreation} style={{width: "fit-content"}} slot="footer">Finish</sl-button>

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