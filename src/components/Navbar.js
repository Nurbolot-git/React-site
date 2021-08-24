import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="image">
                    <img src={Logo} alt="logo" />
                </div>
            </div>
            <div className="rightSide">
                <Link to='/'>home </Link>
                <Link to='/about'>about </Link>
                <Link to='/menu'>menu </Link>
                <Link to='/contact'>contact </Link>
            </div>
        </div>
    )
}
export default Navbar;