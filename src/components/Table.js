import React, { useState } from 'react';
import TableLine from "./TableLine";
import ToTop from "./ToTop";
import { useSelector } from "react-redux";
import { isStableCoin } from "./Utils";

const Table = ({ coinsData }) => {
    const [rangeNumber, setRangeNumber] = useState(100);
    const [orderBy, setOrderBy] = useState("");
    const [searchQuery, setSearchQuery] = useState("");
    const showStable = useSelector((state) => state.stableReducer.showStable); //recupere le true au false de l'input via le store de redux
    const showFavList = useSelector((state)=> state.listReducer.showList);
    const tableHeader = ["Prix", "MarketCap", "Volume", "1h", "1j", "1s", "1m", "6m", "1a", "ATH"];

    // console.log(searchQuery);
    

    return (
        <div className="table-container">
            <ul className="table-header">
                <div className="range-container">
                    <span>Top <input type="text" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)}/></span>
                    <input type="range" min="1" max="250" value={rangeNumber} onChange={(e) => setRangeNumber(e.target.value)}/>
                    <input className="input-search" type="text"  placeholder="Recherche" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                    <ToTop />
                </div>
                {tableHeader.map((el)=> (
                    <li key={el}>
                        <input type="radio" name="header-el" id={el}  defaultChecked={
                            el === orderBy || el === orderBy + "reverse" ? true : false // permettra de trier par orderBy dans un sens et dans l'autre (='reverse')
                            }
                            onClick={()=>{
                                if(orderBy === el) {
                                    setOrderBy(el + "reverse"); // trie du plus petit au plus grand si el est deja dans le state
                                } else {
                                    setOrderBy(el); //trie du plus grand au plus petit 
                                }                          
                            }}
                        />
                        <label htmlFor={el}>{el}</label>
                    </li>
                ))}
            </ul>
            {coinsData && coinsData
            .filter((coin) => {
              if (searchQuery === "") {
                  return coin; // Si la recherche est vide, retourne toutes les pièces
              } else {
                  // Sinon, vérifie si le nom ou le symbole de la pièce contient la valeur de recherche
                  return coin.name.toLowerCase().includes(searchQuery.toLowerCase()) || coin.symbol.toLowerCase().includes(searchQuery.toLowerCase());
              }
            })
            .slice(0, rangeNumber)
            .filter((coin) => {
              if(showStable) {
                return coin; // Retourne toutes les crypto-monnaies si le filtre StableCoin est activé
              } else {
                if(isStableCoin(coin.symbol)){
                  return coin; // Retourne la crypto-monnaie si elle est considérée comme stable
                } else {
                  return null; // Retourne null si la crypto-monnaie n'est pas stable et que le filtre StableCoin est désactivé
                }
              }
            })
            .filter((coin) => {
              if(showFavList) {
                let list = window.localStorage.coinList.split(",");
                if(list.includes(coin.id)){
                  return coin;
                } else {
                  return null;
                }
              } else {
                return coin;
              }
            })
            .sort((a, b) => {
                switch (orderBy) {
                  case "Prix":
                    return b.current_price - a.current_price;
                  case "Volume":
                    return b.total_volume - a.total_volume;
                  case "MarketCap":
                    return b.market_cap - a.market_cap;
                  case "1h":
                    return (
                      b.price_change_percentage_1h_in_currency -
                      a.price_change_percentage_1h_in_currency
                    );
                  case "1j":
                    return (
                      b.market_cap_change_percentage_24h -
                      a.market_cap_change_percentage_24h
                    );
                  case "1s":
                    return (
                      b.price_change_percentage_7d_in_currency -
                      a.price_change_percentage_7d_in_currency
                    );
                  case "1m":
                    return (
                      b.price_change_percentage_30d_in_currency -
                      a.price_change_percentage_30d_in_currency
                    );
                  case "6m":
                    return (
                      b.price_change_percentage_200d_in_currency -
                      a.price_change_percentage_200d_in_currency
                    );
                  case "1a":
                    return (
                      b.price_change_percentage_1y_in_currency -
                      a.price_change_percentage_1y_in_currency
                    );
                  case "ATH":
                    return b.ath_change_percentage - a.ath_change_percentage;
                  case "Prixreverse":
                    return a.current_price - b.current_price;
                  case "Volumereverse":
                    return a.total_volume - b.total_volume;
                  case "MarketCapreverse":
                    return a.market_cap - b.market_cap;
                  case "1hreverse":
                    return (
                      a.price_change_percentage_1h_in_currency -
                      b.price_change_percentage_1h_in_currency
                    );
                  case "1jreverse":
                    return (
                      a.market_cap_change_percentage_24h -
                      b.market_cap_change_percentage_24h
                    );
                  case "1sreverse":
                    return (
                      a.price_change_percentage_7d_in_currency -
                      b.price_change_percentage_7d_in_currency
                    );
                  case "1mreverse":
                    return (
                      a.price_change_percentage_30d_in_currency -
                      b.price_change_percentage_30d_in_currency
                    );
                  case "6mreverse":
                    return (
                      a.price_change_percentage_200d_in_currency -
                      b.price_change_percentage_200d_in_currency
                    );
                  case "1areverse":
                    return (
                      a.price_change_percentage_1y_in_currency -
                      b.price_change_percentage_1y_in_currency
                    );
                  case "ATHreverse":
                    return a.ath_change_percentage - b.ath_change_percentage;
                  default:
                    return null;
                }
            })
            .map((coin, index) => 
                <TableLine coin={coin} index={index} key={index} />
            )}
        </div>
    );
};

export default Table;