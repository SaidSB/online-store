import React, {useEffect, useState} from 'react';
import './App.css';
import axios from 'axios';
import {Routes,Route} from 'react-router-dom';
import Header from "./LayOut/Header/Header";
import Footer from "./LayOut/Footer/Footer";
import Home from "./Component/Home/Home";
import Service from "./Component/Service/Service";
import {Separate} from "./Component/Separate/Separate";
import Shop from "./Component/Shop/Shop";
import Decoration from "./Component/Decoration/Decoration";
import End from "./Component/End/End";
import Burger from "./Component/Burger/Burger";



function App() {

    const [cards,setCards] = useState([])

    const [cart,setCart] = useState([])

    const [menuActive,setMenuActive] = useState(false)

    const [favoriteClick,setFavoriteClick] = useState(false)

    const addToCart =(id)=>{
        setCart([...cart,{
            shoe: id ,
            count : 1,
            idItem: Math.floor(Math.random() * 1000),
        }])
    }

    useEffect(()=>{
        axios('http://localhost:3001/cart')
            .then(({data})=>setCards(data))
    })

  return (
    <div className="App">
        <Header 
            menuActive={menuActive}
            setMenuActive={setMenuActive}
            cart={cart} setCart={setCards}
          />
        <Burger 
            menuActive={menuActive} 
            setMenuActive={setMenuActive}/>
            <Routes>
                <Route path='/' element={<Home cards={cards} setCads={setCards}/>}/>
                <Route path='/:id' element={<Separate setFavoriteClick={setFavoriteClick} favoriteClick={favoriteClick}  addToCart={addToCart} cards={cards} setCards={setCards}/>}/>
                <Route path='/serves' element={<Service/>}/>
                <Route path='/shop' element={<Shop cart={cart} setCart={setCart}/>}/>
                <Route path='/decoration' element={<Decoration setCart={setCart} cart={cart}/>}/>
                <Route path='/end' element={<End/>}/>
            </Routes>
        <Footer/>
    </div>
  );
}

export default App;
