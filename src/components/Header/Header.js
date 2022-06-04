import { signOut } from 'firebase/auth';
import React from 'react';
import { Button } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import logo from "../../images/Logo.svg"
import "./Header.css";

const Header = () => {
    const [user, loading, error] = useAuthState(auth);
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div className='nav-item'>
                <div className='menu'>
                    <Link to="/shop">Shop</Link>
                    <Link to="/orders">orders</Link>
                    <Link to="/inventory">Inventory</Link>
                    <Link to="/about">About</Link>
                    {user ? <Button onClick={handleSignOut}>Sign out </Button> : <Link to="/login">Login</Link>}
                </div>

            </div>
        </nav>
    );
};

export default Header;