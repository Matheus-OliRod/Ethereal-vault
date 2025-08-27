import { useState } from "react";
import "./BundlesPanel.css";
import BundleItem from "./bundle-item/BundleItem";

function BundlesPanel() {

    const [owned] = useState(true);
    
    return (
        <div className="bundle-display">
            <BundleItem owned={owned}/>
            <BundleItem owned={!owned}/>
        </div>
    );
}

export default BundlesPanel;