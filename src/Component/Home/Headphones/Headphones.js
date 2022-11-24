import React from 'react';
import './Headphones.css'

const Headphones = ({el}) => {
    return (
        <div className="headphones-cart">
            <img src={'./img/' + el.img} alt=""/>
            <p className="headphones-text">{el.title}</p>
        </div>
    );
};

export default Headphones;