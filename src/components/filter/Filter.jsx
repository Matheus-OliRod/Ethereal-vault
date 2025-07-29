
function Filter() {

    return (
        <div className="filter-container">
            <div className="filter-content">
                <sl-dropdown>
                    <sl-button slot="trigger" caret>Content Filter</sl-button>
                    <sl-menu>
                        <sl-menu-item value="music">Music</sl-menu-item>
                        <sl-menu-item value="art">Art</sl-menu-item>
                        <sl-menu-item value="3d">3D</sl-menu-item>
                        <sl-menu-item value="bundle">Bundles</sl-menu-item>
                    </sl-menu>
                </sl-dropdown>
            </div>
            <div id="filter-tags" className="filter-tags">
                
            </div>
        </div>
    );
}

export default Filter;