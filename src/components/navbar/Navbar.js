import "./Navbar.css";
import React from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    function onToggle() {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <nav className='navbar'>
                <ul className={`navbar-items ${isOpen ? "open" : ""}`}>
                    <li>
                        <Link onClick={onToggle} className={`nav-item`} to="/">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onToggle} className={`nav-item`} to="/experience">
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onToggle} className={`nav-item`} to='/projects'>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onToggle} className={`nav-item`} to="/research">
                            Research
                        </Link>
                    </li>
                    <li>
                        <Link onClick={onToggle} className={`nav-item`} to="/education">
                            Education
                        </Link>
                    </li>
                </ul>
                <button onClick={onToggle} className="hamburger-button">
                    <div className={`hamburger ${isOpen ? "open" : ""}`}>
                        <span className={`hamburger-bar ${isOpen ? "open" : ""}`}></span>
                        <span className={`hamburger-bar middle ${isOpen ? "open" : ""}`}></span>
                        <span className={`hamburger-bar ${isOpen ? "open" : ""}`}></span>
                    </div>
                </button>
            </nav>
        </div>

    );
}

export default Navbar;