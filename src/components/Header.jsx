import React, { Component } from 'react';
import logo from './img/logo1.jpg';

class Header extends Component {
    render() {
        return (
            <header>
                <div className='container h-flex'>
                    <a href='#' className='logo'>
                        <img alt='logo' src={logo}></img>
                    </a>
                    <nav className='links'>
                        <ul>
                            <li>
                                <a  href='#' className='menu__links'>
                                    Главная
                                </a>
                            </li>
                            <li>
                                <a  href='#' className='menu__links'>
                                    Ещё что то
                                </a>
                            </li>
                            <li>
                                <a  href='#' className='menu__links'>
                                    Контакты
                                </a>
                            </li>
                            <li>
                                <a  href='#' className='menu__links'>
                                    Продукция
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        )
    }
}

export default Header;