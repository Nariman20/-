import React from 'react';
import './App.css';
import logo1 from './components/img/logo1.jpg';
import burger from './components/img/burger.jpg';
import Carts from './components/Carts';



const App = () => {
    return (
        <div className='app-wrapper'>

            <header className='header'>
            </header>
            <nav className='nav'>
                <img src={logo1} alt='logo' />
                <a href='#'> Главная </a>
                <a href='#'> Меню </a>
                <a href='#'> Как заказать </a>
                <a href='#'> Моё портфолио </a>
                <a href='#'> О компании </a>
            </nav>
            <div className='position'>
                <Carts />
            </div>
            <div className='content'>
                <img src={burger} />
            </div>

        </div>
    );

}

export default App;