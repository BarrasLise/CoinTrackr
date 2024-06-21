import React, { useEffect, useRef, useState  } from 'react';
import {  NavLink } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';


const Navbar = () => {

    // État pour suivre si le menu burger est ouvert ou fermé
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    // Fonction pour basculer l'état du menu burger
    const toggleMenu = (e) => {
        window.scrollTo(0, 0);
        e.stopPropagation(); // Empêcher la propagation de l'événement de clic
        setIsMenuOpen(!isMenuOpen);
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);


    return ( 
        <div className="tall-navbar-container">
            <div className="logo-container">
                <NavLink to={"/"} onClick={()=> window.scrollTo(0, 0)}>
                    <img src="./assets/CoinTrackr.png" alt="logo" />
                </NavLink>
            </div>
            <ul className="tall-ul"  ref={menuRef}>
                <li className="tall-nav-link home">
                    <NavLink to="/" className="home"  onClick={toggleMenu}>Accueil</NavLink>
                    {/* Sous-menu déployé lorsque "Accueil" est survolé */}
                    <ul className="tall-sub-menu">
                        <li>
                            <HashLink smooth to="/#section1" className="tall-sub-link" onClick={toggleMenu}>Introduction</HashLink>
                        </li>
                        <li>
                            <HashLink smooth  to="/#section2" className="tall-sub-link" onClick={toggleMenu}>Fonctionnement</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#section3" className="tall-sub-link" onClick={toggleMenu}>
                                Glossaire
                            </HashLink>
                        </li>
                    </ul>
                </li>
                <NavLink to="/crypto" className="tall-nav-link" onClick={toggleMenu}>
                    <li>Cryptomonnaies</li>
                </NavLink>
                <NavLink to="/contact" className="tall-nav-link" onClick={toggleMenu}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
}
 
export default Navbar;