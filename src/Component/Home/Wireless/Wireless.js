import React from 'react';
import './Wireless.css'

const Wireless = ({el}) => {
    return (
        <div className='wireless-cart'>
            <img src={'./img/' + el.img} alt=""/>
            <p className="wireless-text">{el.title}</p>
        </div>
    );
};

export default Wireless;