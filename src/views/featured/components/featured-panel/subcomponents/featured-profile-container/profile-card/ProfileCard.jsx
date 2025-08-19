import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard({props}) {

    const [profile] = useState(props);
    const [artName, setArtName] = useState(
        (profile.art_type === "art") ? "image" :
        (profile.art_type === "music") ? "file-music" :
        (profile.art_type === "3d") ? "box" :
        "asterisk"
    );
    const [artText, setArtText] = useState(
        (profile.art_type === "art") ? "Art" :
        (profile.art_type === "music") ? "Music" :
        (profile.art_type === "3d") ? "3D Modeling" :
        "Anything"
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
                Tag 1
                Tag 2
                Tag 3
                Tag 4
                Tag 5
            </div>

            <sl-icon style={{fontSize: 2 + "rem"}} slot="icon" name={artName} title={artText}></sl-icon>
            
        </div>
    );
}

export default ProfileCard;