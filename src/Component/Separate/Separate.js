import React, {useEffect, useState} from 'react';
import './Separate.css'
import {Link, useParams} from "react-router-dom";
import axios from 'axios'
import {IoIosArrowDown, IoIosArrowUp} from "react-icons/io";
import {RiShoppingCart2Line, RiTelegramLine} from "react-icons/ri";

const Separate = ({cards,setCards,addToCart}) => {
    const {id} = useParams()
    const [apple,setApple] = useState([null])
    useEffect(()=>{
        axios(`http://localhost:3001/cart/${id}`)
            .then(({data})=>setApple(data))
    },[id])
    const [selected,setSelected] = useState(null)
    const toggle =(i)=>{
        if (selected == i) {
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div className='separate'>
            <div className="container">
                <div className="separate-box">
                    {apple && (
                        <p className="separate-category">{apple.category === 'Беспроводные' ? 'Беспроводные Наушнкики' : `${apple.category}`}</p>
                    )}
                    <div className="separate-top">
                        <img src={'./img/' + apple.img} alt=""/>
                        <div className="separate-top-row">
                            <p className="separate-top-title">{apple.title}</p>
                            <p className="separate-top-price">{apple.price}$</p>
                        </div>
                    </div>
                    <div className="separate-bottom">
                        {data.map((el,i)=>(
                            <div className="separate-left" key={el.id}>
                                <div className="separate-left-top" onClick={()=>toggle(i)}>
                                    <p className="separate-left-text">{el.title}</p>
                                    <span>{selected === i ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                                </div>
                                <p className={ selected === i ? 'separate-left-content active' : 'separate-left-content'}>Чехол Glass Case для iPhone выполнен из стеклянной задней панели и силиконовой пластика (TPU) краев. <br/> <br/>

                                    На задней стеклянной панели, так же как у iPhone имеется фирменное яблоко Apple.Чехол имеет высокие края (защита экрана) , качественные вырезы под динамики и зарядку, легко нажимаются кнопки. <br/> <br/>

                                    Особенности <br/>
                                    • Чехол-накладка, задняя панель выполнена из стекла <br/>
                                    • Закрывает нижнюю часть телефона <br/>
                                    • Логотип бренда на задней части чехла <br/>
                                    Материал: Стекло</p>
                            </div>
                        ))}
                        <div className="separate-right">
                            <button className="separate-btn-one" onClick={()=>addToCart(apple)}><RiShoppingCart2Line className='separate-btn-icon'/> Добавить в корзину </button>
                            <button className="separate-btn-two" onClick={()=>addToCart(apple)}><Link to='/shop'>Купить!</Link></button>
                            <button className="separate-btn-three"><RiTelegramLine className='separate-btn-three-icon'/></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const data = [
    {
        title: 'Описание и характеристики',
    }
]

export {Separate}