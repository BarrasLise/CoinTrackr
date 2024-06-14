import React, { useEffect, useState } from 'react';

import axios from "axios";
import {data} from "../db.js";
import Table from "../components/Table.js";
import ToTop from "../components/ToTop.js";
import GlobalChart from "../components/GlobalChart.js";
import HeaderInfos from "../components/HeaderInfos.js";
import BurgerNavbar from "../components/BurgerNavbar";
import Navbar from "../components/Navbar.js";
import Footer from "../components/Footer.js";


const Crypto = () => {
    
  const[coinsData, setCoinsData] = useState([]);

  useEffect(() => {
    // Vérifier si les données du fichier db.js existent
    if (data && data.length > 0) {
      // Utiliser les données du fichier db.js
      setCoinsData(data);
    } else {
      // Si les données du fichier db.js n'existent pas, faire une requête à l'API Coingecko
      axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d%2C14d%2C30d%2C200d%2C1y"
        )
        .then((res) => setCoinsData(res.data))
        .catch((error) =>
          console.error("Error fetching data from Coingecko API:", error)
        );

      
    }

    // window.addEventListener("scroll", () => { //evenement sur la navbar lors du scroll
    //   if (window.scrollY >145) {
    //     document.querySelector(".table-header").classList.add("active");
    //   } else {
    //     document.querySelector(".table-header").classList.remove("active");
    //   }
    // })

    const handleScroll = () => {
        const tableHeader = document.querySelector(".table-header");
        if (tableHeader) {
          if (window.scrollY > 145) {
            tableHeader.classList.add("active");
          } else {
            tableHeader.classList.remove("active");
          }
        }
      };
    
      window.addEventListener("scroll", handleScroll);
    
      // Nettoyer l'écouteur d'événement lors du démontage du composant
      return () => {
        window.removeEventListener("scroll", handleScroll);
    };

    
  }, []);

  return (
    <>
    <div className="app-container">
      {/* <BurgerNavbar /> */}
      <div className="navbar-container">
        <Navbar />
      </div>
      <div className="burger-navbar-container">
        <BurgerNavbar />
      </div>
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData} />
      <ToTop />
    </div>
    <Footer />
    </>
  );
}
 
export default Crypto;