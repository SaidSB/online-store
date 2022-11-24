import React from 'react';
import './DecorationItem.css'

const DecorationItem = ({el}) => {
    return (
        <div className='decoration-item'>
            <p className="decoration-item-count">{el.count}x</p>
            <p className="decoration-item-title">{el.shoe.title}</p>
            <p className="decoration-item-price">{el.shoe.price * el.count}$</p>
        </div>
    );
};

export default DecorationItem;