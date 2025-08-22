import { useState } from "react";
import ProfileNav from "./components/profile-nav/ProfileNav";
import InfoPanel from "./components/info-panel/InfoPanel";
import ShowcasePanel from "./components/showcase-panel/ShowcasePanel";
import BundlesPanel from "./components/showcase-panel/ShowcasePanel";
import "./Profile.css";
import { useParams } from "react-router-dom";

function Profile({props}) {

    const [profileData, setProfileData] = useState({});
    const {id} = useParams(props);

    return (
        <div>

            <ProfileNav />

                <sl-tab-group>
                    <div className="tab-name-holder">
                        <sl-tab slot="nav" panel="info-panel">INFO</sl-tab>
                        <sl-tab slot="nav" panel="showcase-panel">SHOWCASE</sl-tab>
                        <sl-tab slot="nav" panel="bundles-panel">BUNDLES</sl-tab>
                    </div>

                    <sl-tab-panel name="info-panel"><InfoPanel /></sl-tab-panel>
                    <sl-tab-panel name="showcase-panel"><ShowcasePanel /></sl-tab-panel>
                    <sl-tab-panel name="bundles-panel"><BundlesPanel /></sl-tab-panel>
                </sl-tab-group>
        </div>
    );
}

export default Profile;