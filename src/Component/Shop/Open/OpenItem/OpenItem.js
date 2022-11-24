import React from 'react';
import './OpenItem.css'
import { RiDeleteBin2Line } from 'react-icons/ri'

const OpenItem = ({el,setCart,cart}) => {

    const removeItem =(id)=>{
        setCart((cart)=>{
            return cart.filter((item)=>{
                return id !== item.idItem
            })
        })
    }

    const minus =()=>{
        if (el.count < 2){
            removeItem(el.idItem);
        }
        else{
            el.count--
        }
    }
    return (
        <div className='open-item' key={el.id}>
            <p className="open-item-delete" onClick={()=>removeItem(el.idItem)}><RiDeleteBin2Line/></p>
            <div className="open-item-top">
                <div className="open-item-top-img">
                    <img src={'./img/' + el.shoe.img} alt=""/>
                </div>
                <p className="open-item-top-right">
                    <p className="open-item-title">{el.shoe.title}</p>
                    <p className="open-item-price">{el.shoe.price}$</p>
                </p>
            </div>
            <div className="open-item-bottom">
                <div className="open-item-bottom-left">
                    <button className="open-item-btn" onClick={minus}>-</button>
                    <p className="open-item-count">{el.count}</p>
                    <button className="open-item-btn" onClick={()=>el.count++}>+</button>
                </div>
                <p className="open-item-total-price">{el.shoe.price * el.count}$</p>
            </div>
        </div>
    );
};

export default OpenItem;