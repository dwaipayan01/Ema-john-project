import React from 'react';
import { Link } from 'react-router-dom';
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
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                </div>

            </div>
        </nav>
    );
};

export default Header;