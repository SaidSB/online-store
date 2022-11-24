import React from 'react';
import './Header.css'

import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiShoppingCart2Line } from 'react-icons/ri'
import {Link, NavLink} from "react-router-dom";


const Header = ({cart,setCart,setMenuActive,menuActive}) => {

    let count = 0

    return (
        <header className='header'>
            <div className="container">
                <div className="header-box">
                    <Link to='/'><p className="header-logo">Qpick</p></Link>
                    <div className="header-right">
                        <div className="header-right-favorite">
                            <p className="header-icon-favorite"><MdOutlineFavoriteBorder/></p>
                            {count === 0 ?
                                '' : <div className="header-circle-favorite">
                                        <p className="header-count-favorite">2</p>
                                </div>}
                        </div>
                        <div className="header-right-cart">
                            <p className="header-icon-cart"><NavLink to='/shop'><RiShoppingCart2Line/></NavLink></p>
                            {cart.length === 0 ?
                                '' : <div className="header-circle-cart">
                                    <p className="header-count-cart">{cart.length}</p>
                                </div>}
                        </div>
                        <div className="header-burger" onClick={()=>setMenuActive(!menuActive)}>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;