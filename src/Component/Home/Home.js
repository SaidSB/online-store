import React from 'react';
import './Home.css'
import Covers from './Сovers/Сovers'
import Headphones from "./Headphones/Headphones";
import Wireless from "./Wireless/Wireless";
import {Link} from "react-router-dom";

const Home = ({cards,setCards}) => {
    return (
        <main>
            <section className="sec1-home">
                <div className="container">
                    <div className="sec1-box-home">
                        <p className="sec1-text-home">Аксессуары для <br/>
                            Iphone 13 Pro Max</p>
                    </div>
                </div>
            </section>
            <section className="sec2-home">
                <div className="container">
                    <div className="sec2-box-home">
                        <p className="sec2-text-home">Чехлы</p>
                        <div className="sec2-carts-home">
                            {cards.filter((el)=>{
                                return el.category === 'Чехлы'
                            }).map((el)=>(
                                <Link key={el.id} to={`/${el.id}`}><Covers el={el} key={el.id}/></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <section className="sec3-home">
                <div className="container">
                    <div className="sec3-box-home">
                        <p className="sec3-text-home">Наушники</p>
                        <div className="sec3-carts-home">
                            {cards.filter((el)=>{
                                return el.category === 'Наушники'
                            }).map((el)=>(
                                <Link key={el.id} to={`/${el.id}`}><Headphones el={el} key={el.id}/></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            <div className="sec4-home">
                <div className="container">
                    <div className="sec4-box">
                        <p className="sec4-text-home">Беспроводные наушники</p>
                        <div className="sec4-carts-home">
                            {cards.filter((el)=>{
                                return el.category === 'Беспроводные'
                            }).map((el)=>(
                                <Link key={el.id} to={`/${el.id}`}><Wireless el={el} key={el.id}/></Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Home;