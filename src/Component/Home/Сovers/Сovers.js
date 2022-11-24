import React from 'react';
import './Cover.css'
const Сovers = ({el}) => {
    return (
        <div className='covers-cart'>
            <img src={'./img/' + el.img} alt=""/>
            <p className="covers-text">{el.title}</p>
        </div>
    );
};

export default Сovers;