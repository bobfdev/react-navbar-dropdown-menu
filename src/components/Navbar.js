import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
import Dropdown from './Dropdown';
import './Navbar.css';

function Navbar() {
    // menu bars (hamburger) will be not showing as default
    const [click, setClick] = useState(false);
    // default value of the dropdown is set to false
    const [dropdown, setDropdown] = useState(false);
    // showing the menu bars, opposite to not showing
    const handleClick = () => setClick(!click);

    const closeMenu = () => setClick(false);

    return (
       <>
        <nav className='navbar'>
            <Link to='/' className='navbar-logo'>
                EPIC
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                {/* if else statement if menu bars are showing or not what icons to show */}
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMenu}>
                        Home
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/services' className='nav-links' onClick={closeMenu}>
                        Services <i className='fas fa-caret-down' />
                    </Link>
                    {dropdown && <Dropdown />}
                </li>
                <li className='nav-item'>
                    <Link to='/contact' className='nav-links' onClick={closeMenu}>
                        Contact Us
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/signup' className='nav-links-mobile' onClick={closeMenu}>
                        Sign Up
                    </Link>
                </li>
            </ul>
            <Button />
        </nav>  
       </>
    )
}

export default Navbar
