import current_user from "@/res/placeholders/current-user-data.json";
import ppi from "@/res/placeholders/profile-info-placeholder.json"; //ppi -> profile page info
import "./InfoPanel.css";
import { useEffect, useRef, useState } from "react";

function InfoPanel() {

    const dialogRef = useRef(null);
    const introRef = useRef(null);
    const descriptionRef = useRef(null);

    const [my_ppi] = useState(ppi.profiles[10]); // Set to use current user

    const [intro, setIntro] = useState(my_ppi.header);
    const [content, setContent] = useState(my_ppi.content);

    // TODO: Send updated info to backend
    const editContent = () => {
        setIntro(introRef.current.innerHTML);
        setContent(descriptionRef.current.innerHTML);

        dialogRef.current.hide();
    }

    return (
        <div className="info-display">

            {/* Dialog for altering text*/}
            <sl-dialog className="edit-info-dialog" ref={dialogRef} label="Editing">

                <div className="edit-display">
                    <h1 ref={introRef} className="intro-text" suppressContentEditableWarning={true} contentEditable>{intro}</h1>
                    <p ref={descriptionRef} className="content-text" suppressContentEditableWarning={true} contentEditable>{content}</p>
                </div>

                <sl-button onClick={editContent} slot="footer" className="edit-finish-button">Finish</sl-button>
            </sl-dialog>

            <sl-icon-button onClick={() => {dialogRef.current.show()}} style={{display: (my_ppi.uuid === current_user.uuid ? "block" : "none")}} name="pencil" className="edit-profile-button"></sl-icon-button>

            <h1 className="intro-text">{intro}</h1>

            <p className="content-text">{content}</p>

        </div>
    );
}

export default InfoPanel;