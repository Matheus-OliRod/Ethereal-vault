import current_user from "@/res/placeholders/current-user-data.json";
import ppi from "@/res/placeholders/profile-info-placeholder.json"; //ppi -> profile page info
import { useEffect, useState } from "react";

function InfoPanel() {

    const my_ppi = ppi.profiles[10];

    const [intro, setIntro] = useState(my_ppi.header);
    const [content, setContent] = useState(my_ppi.content);

    return (
        <div className="info-display">

            <h1 className="intro-text" contentEditable={my_ppi.uuid === current_user.uuid}>{intro}</h1>

            <p className="content-text" contentEditable={my_ppi.uuid === current_user.uuid}>{content}</p>

        </div>
    );
}

export default InfoPanel;