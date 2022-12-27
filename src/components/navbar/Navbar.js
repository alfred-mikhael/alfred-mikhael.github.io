import "./Navbar.css";
import React from 'react';


const Navbar = () => {
    return (
        <nav className='navbar'>
            <a className="site-title" href='/'>
                Home
            </a>
                <ul>
                    <li>
                        <a className='nav-item' href="/about">
                            About
                        </a>
                    </li> 
                    <li>
                        <a className='nav-item' href='/projects'>
                            Projects
                        </a>
                    </li>
                </ul>
        </nav>
    );
}

export default Navbar;