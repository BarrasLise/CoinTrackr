import React, { useEffect, useState } from 'react';

const StarIcon = ( { coinId }) => {
    const [like, setLike] = useState(false);

    useEffect(()=> {
        if(window.localStorage.coinList){
            let favList = window.localStorage.coinList.split(","); //crétion de la liste dans localstorage
            if(favList.includes(coinId)){
                setLike(true);
            } else {
                setLike(false);
            }
        }
    }, [setLike, coinId])

    const idChecker = (id) => { //ajout retire du local storage d'id de la cryptomonnai
        let favList = null;
        if(window.localStorage.coinList) { //vérifie si cette liste du localstorage existe 
            favList = window.localStorage.coinList.split(","); 
        }
        if (favList) {
            if (favList.includes(id)) { //regarde si un id est déjà dans la liste
                window.localStorage.coinList = favList.filter((coin) => coin !== id); 
                setLike(false);
            } else {
                window.localStorage.coinList = [...favList, coinId] ; //destructure le tableau actuel pour ajouter l'id a ajouter dans la liste et reconstruit un nouveau tableau
                setLike(true);
            }
        } else {
            window.localStorage.coinList = coinId ; //création de la liste
            setLike(true);
        }
    }
    return (
        <img onClick={() => idChecker(coinId)} src={like ? "./assets/star-full.svg" : "./assets/star-empty.svg" } alt="icon-star"/>
    );
};

export default StarIcon;