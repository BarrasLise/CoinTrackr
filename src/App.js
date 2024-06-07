import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Crypto from "./pages/Crypto.js";
import Home from "./pages/Home.js";
import Contact from "./pages/Contact.js";

const App = () => {

  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crypto" element={<Crypto />} />
        <Route path="/contact" element={<Contact />} />
        {/* path="*" fonctionne si jamais l'URL ne correspond a rien de déclaré au dessus */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
