import React from 'react';
import './Footer.css'
import { MdOutlineLanguage } from 'react-icons/md'
import {Link,NavLink} from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="footer-box">
                    <div className="footer-logo"><Link to="/">Qpick</Link></div>
                    <ul className="footer-content-one">
                        <li><NavLink to='shop'>Корзина</NavLink></li>
                        <li><NavLink to="/serves">Условия сервиса</NavLink></li>
                    </ul>
                    <div className="footer-content-two">
                        <div className="footer-row">
                            <p className="footer-icon"><MdOutlineLanguage/></p>
                            <ul>
                                <li>Каз</li>
                                <li>Рус</li>
                                <li>Eng</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;