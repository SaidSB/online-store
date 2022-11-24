import React, {useState} from 'react';
import './Burger.css'

import { AiOutlineMobile } from 'react-icons/ai'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'
import { MdOutlineFavoriteBorder } from 'react-icons/md'
import { RiFileList3Line } from 'react-icons/ri'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineLanguage } from 'react-icons/md'

const Burger = ({menuActive,setMenuActive}) => {

    const [selected,setSelected] = useState(null)

    const toggle =(i)=>{
        if (selected == i){
            return setSelected(null)
        }
        setSelected(i)
    }

    return (
        <div onClick={()=>setMenuActive(!menuActive)} className={menuActive ? 'burger active' : 'burger'}>
            <div className="burger-blur"/>
           <div className="burger-content" onClick={(e)=>e.stopPropagation()}>
               <div className="burger-top-row">
                   <p className="burger-top-icon"><AiOutlineMobile/></p>
                   <p className="burger-top-title">Выбрать модель телефона</p>
                   <p className="burger-top-down"><IoIosArrowDown/></p>
               </div>
               <div className="burger-accordion">
                   {data.map((el,i)=>(
                       <div className="burger-item" key={el.id}>
                           <div className="burger-item-title" onClick={()=>toggle(i)}>
                               <span>{selected === i ? <IoIosArrowUp/> : <IoIosArrowDown/>}</span>
                               <p className="burger-item-title-text">{el.title}</p>
                           </div>
                           <ul className={ selected === i ? 'burger-item-content show' : 'burger-item-content'}>
                               <li>{el.one}</li>
                               <li >{el.two}</li>
                               <li >{el.three}</li>
                               <li >{el.four}</li>
                               <li >{el.five}</li>
                               <li >{el.six}</li>
                           </ul>
                       </div>
                   ))}
               </div>
               <ul className="burger-content-category">
                   <li><MdOutlineFavoriteBorder className='burger-content-category-icon'/>Избранное </li>
                   <li><RiFileList3Line className='burger-content-category-icon'/>Условия сервиса</li>
                   <li><BsTelephone className='burger-content-category-icon'/>Контакты</li>
               </ul>
               <div className="burger-bottom-row">
                   <p className="burger-bottom-row-icon"><MdOutlineLanguage/></p>
                   <ul>
                       <li>Каз</li>
                       <li>Рус</li>
                       <li>Eng</li>
                   </ul>
               </div>
           </div>
        </div>
    );
};
const data = [
    {
        title: 'Apple',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',

    },
    {
        title: 'INOI',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Nokia',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Oppo',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Realme',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Samsung',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Sony',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Vivo',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    },
    {
        title: 'Xiaomi',
        one: 'iPhone 12',
        two: 'iPhone 12 Max',
        three: 'iPhone 13',
        four: 'iPhone 13 Max',
        five: 'iPhone 13 Pro Max',
        six: 'iPhone 14',
    }
]
export default Burger;