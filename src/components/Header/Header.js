import React from 'react';
import logo from "../../images/Logo.svg"
import "./Header.css";

const Header = () => {
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id='toggle'></input>
                <div className='menu'>
                    <a href="/shop">Shop</a>
                    <a href="/orders">orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>

            </div>
        </nav>
    );
};

export default Header;