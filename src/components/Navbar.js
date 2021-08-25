import React from 'react';
import Logo from '../assets/pizzaLogo.png';
import { Link } from 'react-router-dom';
import ReorderIcon from '@material-ui/icons/Reorder';

function Navbar() {
    return (
        <div className="navbar">
            <div className="leftSide">
                <div className="image">
                    <img src={Logo} alt="logo" />
                    <div className="hiddenLinks">
                        <Link to='/'>home </Link>
                        <Link to='/about'>about </Link>
                        <Link to='/menu'>menu </Link>
                        <Link to='/contact'>contact </Link>
                    </div>
                </div>
            </div>
            <div className="rightSide">
                <Link to='/'>home </Link>
                <Link to='/about'>about </Link>
                <Link to='/menu'>menu </Link>
                <Link to='/contact'>contact </Link>
                <button>
                    <ReorderIcon />
                </button>
            </div>
        </div>
    )
}
export default Navbar;