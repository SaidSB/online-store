import React from 'react';
import map from './map.png'
import { RiMapPin2Line } from 'react-icons/ri'
import './Decoration.css'
import DecorationItem from "./DecorationItem/DecorationItem";
import { RiVisaFill } from 'react-icons/ri'
import { RiCoupon2Line } from 'react-icons/ri'
import {Link} from "react-router-dom";

const Decoration = ({cart,setCart}) => {
    let summa = 499;
    cart.map((el)=>{
        return summa += el.shoe.price * el.count
    })
    return (
        <div className='decoration'>
            <div className="container">
                <p className="decoration-text">Оформление заказа</p>
                <div className="decoration-box">
                    <div className="decoration-left">
                        <p className="decoration-left-text">Доставка курьером</p>
                        <img src={map} alt=""/>
                        <div className="decoration-left-row">
                            <p className="decoration-left-icon"><RiMapPin2Line/></p>
                            <p className="decoration-left-row-text">Адрес доставки</p>
                        </div>
                        <input placeholder='Город' type="text" className="decoration-left-inp-one"/>
                        <input placeholder='Улица' type="text" className="decoration-left-inp-two"/>
                        <div className="decoration-left-row-inp">
                            <input placeholder='Район' type="text"/>
                            <input placeholder='Дом' type="text"/>
                        </div>
                        <div className="decoration-left-row-inp">
                            <input placeholder='Подъезд' type="text"/>
                            <input placeholder='Квартира' type="text"/>
                        </div>
                    </div>
                    <div className="decoration-right">
                        <div className="decoration-top">
                            <p className="decoration-top-text">Ваш заказ</p>
                            {cart.map((el)=>{
                                return <DecorationItem el={el} key={el.id}/>
                            })}
                            <div className="decoration-top-row-one">
                                <p className="decoration-top-row-title">Доставка</p>
                                <p className="decoration-top-row-price">499$</p>
                            </div>
                            <div className="decoration-top-row-two">
                                <p className="decoration-top-row-title">К оплате</p>
                                <p className="decoration-top-row-price">{summa}$</p>
                            </div>
                        </div>
                        <div className="decoration-center">
                            <p className="decoration-center-text">Способ оплаты</p>
                            <div className="decoration-center-row">
                                <p className="decoration-center-icon"><RiVisaFill/></p>
                                <p className="decoration-center-title">Счет на kaspi.kz</p>
                            </div>
                            <div className="decoration-center-row-inp">
                                <p className="decoration-center-row-icon"><RiCoupon2Line/></p>
                                <input placeholder='Есть промокод?' type="text"/>
                            </div>
                        </div>
                        <div className="decoration-bottom">
                            <p className="decoration-bottom-text">Номер получателя</p>
                            <input placeholder='+996 ___ ___ ___' type="text" className="decoration-tel"/>
                        </div>
                       <button className="decoration-btn" onClick={()=>setCart([])}><Link to='/end'>Закончить оформление</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Decoration;