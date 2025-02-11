import React, { useEffect, useState } from 'react';
import { Tooltip, Treemap } from "recharts";
import colors from "../styles/_settings.scss";
import { useWindowSize } from "./Utils";

const GlobalChart = ({ coinsData }) => {
    const { width } = useWindowSize(); // Obtenir la largeur de l'écran

    console.log(coinsData);
    const [dataArray, setDataArray] = useState([]);

    const colorPicker = (number)=> {
        if(number >= 20){
            return colors.color1;
        } else if ( number >= 5) {
            return colors.green2;
        } else if (number >= 0) {
            return colors.green1;
        } else if (number >= -5) {
            return colors.red1;
        } else if (number >=-20) {
            return colors.red2;
        } else {
            return colors.black2;
        }
    }
    // console.log(colorPicker(5)); la fonction fonctionne 

    const excludeCoin = coin => { //fonction qui exclue les "stables coins"
        if (
            coin === "usdt" || 
            coin === "usdc" ||
            coin === "busd" || 
            coin === "dai" ||
            coin === "ust" ||   
            coin === "mim" 
        ) {
            return false
        } else {
            return true
        }
    }

    useEffect(()=> {
        let chartData = [];

        if(coinsData.length>0){
            for(let i = 0; i<45; i++) { //boucle qui récuppére les 45 cryptomonaies les plus "grandes"
                if (excludeCoin(coinsData[i].symbol)){ //vérifie si c'est une monnaie stable si oui on passe au suivant si non on la push dans notre tableau
                    chartData.push({
                        name : coinsData[i].symbol.toUpperCase() + " " + coinsData[i].market_cap_change_percentage_24h.toFixed(1) + "%",
                        size : coinsData[i].market_cap, //
                        fill : colorPicker(coinsData[i].market_cap_change_percentage_24h), //couleur
                    });
                }
            }
        }
        // console.log(chartData);
        setDataArray(chartData);
    }, [coinsData]);

    const TreemapToolTip = ({active, payload}) => {
        if(active && payload && payload.length) {
           return ( 
            <div className="custom-tooltip">
                <p className="label">{payload[0].payload.name}</p>
            </div>
           )
        }
        return null;
    }

    // Définir la largeur et la hauteur en fonction de la taille de l'écran
    const treemapWidth = width <= 768 ? 500 : 730;
    const treemapHeight = width <= 768 ? 124 : 181;

    return (
        <div className="global-chart">
            <Treemap
                width={treemapWidth}
                height={treemapHeight}
                data={dataArray}
                dataKey="size" //indique que size est la donnée à utiliser pour definir la taille des blocs
                stroke="rgb(51,51,51)"
                fill="black"
                aspectRatio="1" // rapport largeur/hauteur,  afin d'obtenir des formes carrées
            >
                <Tooltip content={<TreemapToolTip />} />
            </Treemap>
        </div>
    );
};

export default GlobalChart;