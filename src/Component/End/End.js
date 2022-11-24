import React, {useState} from 'react';
import './End.css'
const End = () => {
    const [count,setCount] = useState(Math.floor(Math.random()*100000))
    return (
        <div className='end'>
            <div className="container">
                <div className="end-box">
                    <div className="end-con">
                        <p className="end-text">Номер вашего заказа №{count}, с Вами свяжется наш менеджер.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default End;