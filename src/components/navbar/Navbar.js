import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <div>
            {/* <div className="graph-container">
                <GraphAnimation />
            </div> */}

            <nav className='navbar'>
            <ul>
                    <li>
                        <Link className='nav-item' to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link className='nav-item' to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-item" to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>

    );
}

export default Navbar;