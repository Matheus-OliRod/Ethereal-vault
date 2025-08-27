import { useState } from "react";
import "./BundleItem.css";
import imgs_placeholder from "@/res/placeholders/random-images.json";

function BundleItem({ owned }) {

    const [images] = useState(imgs_placeholder.images); // All the images
    const [img_url] = useState(getRandImg()); // Single random image
    
    function getRandImg() {
        const index = Math.floor(Math.random() * images.length);
        console.log("Image link: ", images[index]);
        return images[index];
    }
    
    return (
        <div className="bundle-item">

            {/* The main will display the more privileged information (Title, item amount, price, thumbnail and how many sold (optional) */}
            <div className="main-bundle">

                <img src={img_url} alt="Bundle thumbnail" />
                <h2 className="bundle-title">Title</h2>

                <small className="item-amount">item amount</small>

                <div className="buy-div">
                    <p style={{display: (owned ? "none" : "block")}} className="bundle-price">$90.90</p>
                    <sl-button variant="success" className="buy-button" outline>{(owned ? "Download" : "Buy")}</sl-button>
                </div>

            </div>

            {/* Here will display other important content, description, licenses, size, tags and release date */}
            <sl-details className="bundle-details" summary="See More"></sl-details>

        </div>
    );
}

export default BundleItem;