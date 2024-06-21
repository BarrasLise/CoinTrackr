import axios from "axios";
import React, { useEffect, useState } from 'react';
import PercentChange from "./PercentChange";
import TableFilters from "./TableFilters";

const HeaderInfos = () => {
    const [headerData, setHeaderData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await axios.get("https://api.coingecko.com/api/v3/global");
            setHeaderData(res.data.data);
            localStorage.setItem('headerData', JSON.stringify(res.data.data)); 
          } catch (error) {
            console.error("Error fetching data from Coingecko API:", error);
          }
        };
      
        // Mettre à jour les données toutes les 10 minutes
        const intervalId = setInterval(fetchData, 10 * 6 * 1000);

        // Vérifier si les données sont déjà en cache
        const cachedData = localStorage.getItem('headerData');
        if (cachedData) {
            setHeaderData(JSON.parse(cachedData));
        } else {
            fetchData(); // Si les données ne sont pas en cache, les récupérer
        }
      
        // Nettoyer l'intervalle lors du démontage du composant
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="header-container">
            <ul className="title"> 
                <li>
                    <h1><img className="title-logo" src="./assets/CoinTrackr.png" alt="logo"/> <span>CoinTrackr</span></h1>
                </li>
                <li>
                    Crypto-monnaies : {""}
                    {headerData.active_cryptocurrencies && headerData.active_cryptocurrencies.toLocaleString()}
                {/* Crypto-monnaies : {headerData.active_cryptocurrencies ? headerData.active_cryptocurrencies.toLocaleString() : ""} */}
                </li>
                <li>Marchés : {headerData.markets && headerData.markets}</li>
            </ul>
            <ul className="infos-mkt">
                <li className="global-mkt">
                    Global marcket Cap : <PercentChange  percent={headerData.market_cap_change_percentage_24h_usd} />
                </li>
                <li>BTC dominance :{""} {headerData.market_cap_percentage && headerData.market_cap_percentage.btc.toFixed(1) + "%"}</li>
                <li>ETH dominance :{""} {headerData.market_cap_percentage && headerData.market_cap_percentage.eth.toFixed(1) + "%"}</li>
            </ul>
            <TableFilters />
        </div>
    );
};

export default HeaderInfos;