import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import GraphAnimation from "../graphAnimation/GraphAnimation.js";


const Navbar = () => {
    return (
        <div>
            <div className="graph-container">
                <GraphAnimation />
            </div>

            <nav className='navbar'>
                <Link className="site-title" to='/'>
                    Home
                </Link>
                <ul>
                    <li>
                        <Link className='nav-item' to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item' to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/contact">
                            Resume
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;