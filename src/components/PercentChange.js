import React, { useState } from 'react';
import colors from"../styles/_settings.scss"; //Recupération des couleurs dans le fichier sass
import { useEffect } from "react";

const PercentChange = ({ percent }) => {
    const [color, setColor] = useState();

    //Change la couleur dynamiquement en fonction du pourcentage reçu
    useEffect(()=> {
        if(percent) {
            if (percent >= 0){
                setColor(colors.green1);
            } else {
                setColor(colors.red1);
            }
        } else {
            setColor(colors.white1);
        }
    }, [percent]);

    return (
      <p className="percent-change-container" style={{ color }}>
        {percent ? percent.toFixed(1) + "%" : "-"} {/* Arrondir à 1 chiffre après la virgule */}
      </p>
    );
};

export default PercentChange;