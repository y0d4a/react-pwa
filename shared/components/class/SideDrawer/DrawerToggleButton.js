import React from 'react';
import './DrawerToggleButton.scss';

const DrawerToggleButton = props => (
    <div className="d-drawer-toggle-button" onClick={props.click}>
        <div className="d-drawer-toggle-button-line"></div>
        <div className="d-drawer-toggle-button-line"></div>
        <div className="d-drawer-toggle-button-line"></div>
    </div>
);

export default DrawerToggleButton;