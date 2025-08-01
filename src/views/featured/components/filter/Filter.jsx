import "./Filter.css";

function Filter() {

    return (
        <div className="filter-container">

            <div className="filter-content">
                <sl-dropdown>
                    <sl-button variant="primary" slot="trigger" caret>Content Filter</sl-button>
                    <sl-menu>
                        <sl-menu-item value="music">Music</sl-menu-item>
                        <sl-menu-item value="art">Art</sl-menu-item>
                        <sl-menu-item value="3d">3D</sl-menu-item>
                        <sl-menu-item value="bundle">Bundles</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>


            <div id="filter-tags" className="filter-tags">
                <sl-checkbox>Tag1</sl-checkbox>
                <sl-checkbox>Tag2</sl-checkbox>
                <sl-checkbox>Tag3</sl-checkbox>
                <sl-checkbox>Tag4</sl-checkbox>
                <sl-checkbox>Tag5</sl-checkbox>
                <sl-checkbox>Tag6</sl-checkbox>
                <sl-checkbox>Tag7</sl-checkbox>
                <sl-checkbox>Tag8</sl-checkbox>
                <sl-checkbox>Tag9</sl-checkbox>
                <sl-checkbox>Tag10</sl-checkbox>
            </div>
        </div>
    );
}

export default Filter;