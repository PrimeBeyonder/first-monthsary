import React from 'react';
import "../Css/Header.css";

const Header = () => {
    return (
        <header className='header'>
            <nav className='nav container'>
                <a href="index.html" className='nav__logo'>
                    first monthsary
                </a>
            </nav>
        </header>
    )
}

export default Header