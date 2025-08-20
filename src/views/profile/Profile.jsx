import { useState } from "react";
import InfoPanel from "./components/info-panel/InfoPanel";
import ShowcasePanel from "./components/showcase-panel/ShowcasePanel";
import BundlesPanel from "./components/showcase-panel/ShowcasePanel";
import "./Profile.css";
import { useParams } from "react-router-dom";

function Profile() {

    const [profileData, setProfileData] = useState({});
    const {id} = useParams();

    return (
        <div>
                <sl-tab-group>
                    <sl-tab slot="nav" panel="info-panel">INFO</sl-tab>
                    <sl-tab slot="nav" panel="showcase-panel">SHOWCASE</sl-tab>
                    <sl-tab slot="nav" panel="bundles-panel">BUNDLES</sl-tab>

                    <sl-tab-panel name="info-panel"><InfoPanel /></sl-tab-panel>
                    <sl-tab-panel name="showcase-panel"><ShowcasePanel /></sl-tab-panel>
                    <sl-tab-panel name="bundles-panel"><BundlesPanel /></sl-tab-panel>
                </sl-tab-group>
        </div>
    );
}

export default Profile;