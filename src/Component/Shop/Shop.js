import React from 'react';
import Empty from "./Empty/Empty";
import Open from "./Open/Open";

const Shop = ({cart,setCart}) => {

    return (
        <div className='shop'>
            <div className="container">
                <div className="shop-box">
                    {cart.length < 1 ?
                        <Empty/> : <Open cart={cart} setCart={setCart}/>}
                </div>
            </div>
        </div>
    );
};

export default Shop;