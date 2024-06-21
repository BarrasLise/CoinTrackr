import Navbar from "../components/Navbar.js"; 
import React, { useEffect, useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import BurgerNavbar from "../components/BurgerNavbar.js";
import Footer from "../components/Footer.js";


const Contact = () => {
    const form = useRef();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const isValidName = (name) => {
        // Regex autorisant les lettres majuscules et minuscules, les espaces et les caractères accentués
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]*$/;
        return nameRegex.test(name);
    };
      
    const validateEmail = (email) => {
        // Expression régulière pour valider le format de l'adresse e-mail
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    const isValidMessage = (message) => {
        // Regex permettant les lettres majuscules et minuscules, les chiffres, les espaces, la ponctuation et certains caractères spéciaux
        const messageRegex = /^[a-zA-Z0-9\s.,!?()&$%€@'#-]*$/;
        return messageRegex.test(message);
    };
      
    useEffect(() => {
        let successTimeout;
        let errorTimeout;
    
        if (successMessage) {
            successTimeout = setTimeout(() => {
                setSuccessMessage('');
            }, 10000); // 10 secondes
        }
    
        if (errorMessage) {
            errorTimeout = setTimeout(() => {
                setErrorMessage('');
            }, 10000); // 10 secondes
        }
    
        return () => {
            clearTimeout(successTimeout);
            clearTimeout(errorTimeout);
        };
    }, [successMessage, errorMessage]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérification du nom
        if (!isValidName(name)) {
            setErrorMessage('Veuillez saisir un nom valide.');
            return;
        }

        // Validation de l'adresse e-mail
        if (!validateEmail(email)) {
            setErrorMessage('Veuillez saisir une adresse e-mail valide.');
            return;
        }

        // Vérification du message
        if (!isValidMessage(message)) {
            setErrorMessage('Veuillez saisir un message valide.');
            return;
        }

        const templateParams = {
            from_name: name,
            from_email: email,
            message: message,
        };

        emailjs
            .send('service_7ww9yoi', 'template_orn1qsa', templateParams, 'yfEhLlcMaZ2oQ7HSx')
            .then((response) => {
                setSuccessMessage('Votre message a été envoyé avec succès!');
                setName('');
                setEmail('');
                setMessage('');
            }, (error) => {
                setErrorMessage('Une erreur s\'est produite lors de l\'envoi de votre message. Veuillez réessayer.');
            });
    };

    return ( 
        <>
         <div className="form-container">
         <div className="navbar-container">
            <Navbar/>
        </div>
        <div className="burger-navbar-container">
            <BurgerNavbar/>
        </div>
        <div className="contact-form">
            <h1>Contactez-nous</h1>
            <form ref={form} onSubmit={handleSubmit}>
                <div>
                    <label>Nom:</label>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Message:</label>
                    <textarea
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Envoyer</button>
            </form>
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errorMessage  && <p className="error-message">{errorMessage}</p>}
        </div>
        <Footer/>
        </div>
        </>
    );
}
 
export default Contact;