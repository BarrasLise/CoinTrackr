import React, { useState,  useEffect, useRef  } from 'react';
import {  NavLink } from "react-router-dom";
import { FaAlignJustify, FaXmark } from "react-icons/fa6";
import { HashLink } from 'react-router-hash-link';

const BurgerNavbar = () => {
    // État pour suivre si le menu burger est ouvert ou fermé
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const menuRef = useRef(null);

    // Fonction pour basculer l'état du menu burger
    const toggleMenu = (e) => {
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
        <div className="burger-navbar-container">
            <div className="burger-logo-container">
                <img src="./assets/CoinTrackrFullName.png" alt="logo" />
            </div>
            {/* Bouton pour ouvrir/fermer le menu burger */}
            <button aria-label="burger-menu" className="burger-menu" onClick={toggleMenu}>
                {/* Utilisation d'une condition ternaire pour déterminer quelle classe appliquer */}
                {/* <span className={isMenuOpen ? "burger-icon open" : "burger-icon"}>{isMenuOpen ? " ": String.fromCharCode(9776)}</span> */}
                {isMenuOpen ? <FaXmark className={isMenuOpen ? "burger-icon open" : "burger-icon"}/>: <FaAlignJustify className="burger-icon" />}
            </button>
            {/* Menu de navigation */}
            <ul className={isMenuOpen ? "nav-menu active" : "nav-menu"} ref={menuRef}>
               
                <li className="nav-link home">
                    <NavLink to="/" className="home"  onClick={toggleMenu}>Accueil</NavLink>
                    {/* Sous-menu déployé lorsque "Accueil" est survolé */}
                    <ul className="sub-menu">
                        <li>
                            <HashLink smooth to="/#section1" className="sub-link" onClick={toggleMenu}>Introduction</HashLink>
                        </li>
                        <li>
                            <HashLink smooth  to="/#section2" className="sub-link" onClick={toggleMenu}>Fonctionnement</HashLink>
                        </li>
                        <li>
                            <HashLink smooth to="/#section3" className="sub-link" onClick={toggleMenu}>
                                Glossaire
                            </HashLink>
                        </li>
                    </ul>
                </li>
                <NavLink to="/crypto" className="nav-link" onClick={toggleMenu}>
                    <li>Cryptomonnaies</li>
                </NavLink>
                <NavLink to="/contact" className="nav-link" onClick={toggleMenu}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
     );
}
 
export default BurgerNavbar;