import React from 'react';
import './Empty.css'
import cart from  './cart.png'
import {Link} from "react-router-dom";

const Empty = () => {
    return (
        <div className='empty'>
            <div className="container">
                <div className="empty-box">
                    <img src={cart} alt=""/>
                    <p className="empty-text">Корзина пуста</p>
                    <p className="empty-content">Но это никогда не поздно исправить :)</p>
                    <Link to='/'><button className="empty-btn">В каталог товаров</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Empty;