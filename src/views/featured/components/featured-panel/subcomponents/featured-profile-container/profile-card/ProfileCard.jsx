import { useState } from "react";
import art from "@/res/images/art-icon.svg";
import music from "@/res/images/music-icon.svg";
import model from "@/res/images/3d-icon.svg"; // Calling model as i cannot set as 3d
import anything from "@/res/images/anything-icon.svg";
import "./ProfileCard.css";

function ProfileCard({props}) {

    const [profile] = useState(props);
    const [artType, setArtType] = useState(
        (profile.art_type === "art") ? art :
        (profile.art_type === "music") ? music :
        (profile.art_type === "3d") ? model :
        "asterisk"
    );
    const [artText, setArtText] = useState(
        (profile.art_type === "art") ? "Art" :
        (profile.art_type === "music") ? "Music" :
        (profile.art_type === "3d") ? "3D Modeling" :
        anything
    );
    
    return (
        <div className="profile-display">
            <div className="profile-info">
                <sl-avatar
                    image={profile.profile_pic_url}
                    label={profile.username}
                    loading="lazy"
                ></sl-avatar>

                <h3>{profile.username}</h3>
            </div>
            <div className="tag-holder">
                <p>Tag 1</p>
                <p>Tag 2</p>
                <p>Tag 3</p>
                <p>Tag 4</p>
                <p>Tag 5</p>
            </div>

            <img src={artType} alt={artText} title={artText} />
            
        </div>
    );
}

export default ProfileCard;