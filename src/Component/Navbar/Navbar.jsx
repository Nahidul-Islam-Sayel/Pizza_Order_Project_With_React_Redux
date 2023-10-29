import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/pizzalogo.png';
const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };
    return (
        <nav className="bg-gradient-to-r bg-blue-950 p-4 shadow-lg">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-3xl font-bold h-28 w-28"><img src={logo} alt="" srcset="" /></div>
                <div className="space-x-6 text-lg">
                    <Link to="/" className="text-white hover:text-blue-200 transition duration-300 ease-in-out" >Home</Link>
                    <Link to="/Card" className="text-white hover:text-blue-200 transition duration-300 ease-in-out">Card</Link>
                    <a className="text-white hover:text-blue-200 transition duration-300 ease-in-out" href="/services">Services</a>
                    <a className="text-white hover:text-blue-200 transition duration-300 ease-in-out" href="/contact">Contact</a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;