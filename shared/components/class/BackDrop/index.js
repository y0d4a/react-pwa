import React from 'react';
import './index.scss';


const BackDrop = props => (
    <div className="d-backdrop" onClick={props.click}/>
);

export default BackDrop;