import React, { useEffect, useState } from 'react';
import GlobalChart from "./components/GlobalChart";
import HeaderInfos from "./components/HeaderInfos";
import axios from "axios";
import {data} from "./db.js";
import Table from "./components/Table.js";
import ToTop from "./components/ToTop.js";

const App = () => {

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

    window.addEventListener("scroll", () => { //evenement sur la navbar lors du scroll
      if (window.scrollY >145) {
        document.querySelector(".table-header").classList.add("active");
      } else {
        document.querySelector(".table-header").classList.remove("active");
      }
    })
  }, []);

  return (
    <div className="app-container">
      <header>
        <HeaderInfos />
        <GlobalChart coinsData={coinsData} />
      </header>
      <Table coinsData={coinsData}  />
      <ToTop />
    </div>
  );
};

export default App;
