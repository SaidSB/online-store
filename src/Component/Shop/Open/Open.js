import React from 'react';
import './Open.css'
import OpenItem from "./OpenItem/OpenItem";
import {Link} from "react-router-dom";

const Open = ({cart,setCart}) => {
    let summa = 0;
    cart.map((el)=>{
        return summa += el.shoe.price * el.count
    })
    return (
        <div className='open'>
            <div className="container">
                <p className="open-text">Корзина</p>
                <div className="open-box">
                    <div className="open-left">
                        <div className="open-left-carts">
                            {cart.map((el)=>(
                                <OpenItem el={el} key={el.id} cart={cart} setCart={setCart}/>
                            ))}
                        </div>
                    </div>
                    <div className="open-right">
                        <div className="open-right-row">
                            <p className="open-right-text">ИТОГО</p>
                            <p className="open-right-total-price">{summa}$</p>
                        </div>
                        <button className="open-right-btn"><Link to='/decoration'>Перейти к оформлению</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Open;