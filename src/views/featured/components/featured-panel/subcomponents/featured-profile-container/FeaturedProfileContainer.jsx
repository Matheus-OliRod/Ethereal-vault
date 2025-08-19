import { useState } from "react";
import profile_placeholder from "@/res/placeholders/profile-placeholder.json";
import ProfileCard from "./profile-card/ProfileCard";
import "./FeaturedProfileContainer.css";
function FeaturedProfileContainer({style}) {
    
    // Mocking fetch data

    const [profiles, setProfiles] = useState([]);

    /**
     * Requests the API for a determined number of content. The content itself will be determined by tags and the the filter
     * @param {number} buffer 
     */
    function getBufferedProfiles(buffer) {
        
    }

    function getRandomProfile() {
        const profiles = profile_placeholder.profiles;
        const index = Math.floor(Math.random() * profiles.length);

        return profiles[index];
    }

    return (
        <div className="featured-profile-container" style={style}>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
            <ProfileCard props={getRandomProfile()}></ProfileCard>
        </div>
    );
}

export default FeaturedProfileContainer;