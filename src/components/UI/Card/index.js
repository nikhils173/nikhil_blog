import React from 'react';
import './style.css';


const Cards = (props) => {
    return (
        <div className="card" {...props}>
            {props.children}
        </div>
    )
}

export default Cards
