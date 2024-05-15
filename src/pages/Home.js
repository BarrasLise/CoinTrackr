import { useEffect } from "react";
import Navbar from "../components/Navbar";

const Home = () => {

    useEffect(() => {
        // Fonction pour faire défiler la page jusqu'au terme spécifique
        const scrollToTerm = (termId) => {
            const termElement = document.getElementById(termId);
            if (termElement) {
                termElement.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        };

        // Ajoutez des gestionnaires d'événements aux liens de glossaire pour faire défiler la page
        const glossaryLinks = document.querySelectorAll('.glossary-link');
        glossaryLinks.forEach(link => {
            link.addEventListener('click', () => {
                const termId = link.getAttribute('href').substring(1); // Récupère l'ID du terme
                scrollToTerm(termId);
            });
        });

        // Nettoie les gestionnaires d'événements lorsque le composant est démonté
        return () => {
            glossaryLinks.forEach(link => {
                link.removeEventListener('click', scrollToTerm);
            });
        };
    }, []);
    return ( 
        // <div className="home-container">
        <>
        <Navbar/>
            <div id="section1" className="container1"> 
                <div className="anchor bienvenu" >
                    <p className="text">Bienvenue sur CoinTrackr, une plateforme amateur dédiée à fournir des informations simples et accessibles sur les cryptomonnaies. </p>
                    <div className="circle red"></div>
                </div>
                <div className="intro-principale">
                    <h1 className="title">introduction</h1>
                    <p className="text">
                        Ce site est composé d'un page d'accueil contenant quelques informations principales qui devraient vous permettre ensuite de comprendre les informations se trouvant dans notre tableau affichant les 250 <a href="#cryptomonnaie" className="glossary-link">cryptomonnaies</a> les plus connues. Nous vous invitons alors a lire les diverses informations ci-dessous. De plus, à la fin de cette section vous trouverez un glossaire reprennant les définitions de termes généraux liés aux <a href="#cryptomonnaie" className="glossary-link">cryptomonaies</a>.    
                    </p>
                    

                </div>
               
       
            </div> 

            <div id="section2" className="container2">
                <h1 className="anchor title">Tableau des cryptomonnaies</h1>
                <p className="text">Au dessus du tableau vous trouverez les informations prinicpales comme le nombre actuelle des nombres de <a href="#cryptomonnaie" className="glossary-link">cryptomonnaies</a> actuellement dans le monde, etc. </p>
                <p className="text">Vous trouverez également sur la droite lorsque vous vous visitez notre site, sur un grand écran, une Treemap (ou "carte des parts de marché" en français) affichant les performances des 25 premières cryptomonnaies, excluant celles qui ont peu d'évolution appelé également "<a href="#stablecoin" className="glossary-link">stablecoin</a>" en anglais. </p> 
                <h2 className="title2">Le tableau</h2>
                <p className="text">Le tableau principal offre plusieurs options de filtrage, notamment par nom, prix, capitalisation boursière (c'est la valeur totale d'une cryptomonnaie sur le marché), volume (c'est le montant total de la cryptomonnaie échangé dans une période donnée), et évolution sur différentes périodes de temps (1h, 1j, 1s, 1m, 6m, 1 an et ATH - "All-Time High" qui représente le plus haut niveau de prix historique atteint par une cryptomonnaie).</p>
                <p className="text">De plus, un petit bouton "Info" est disponible pour chaque cryptomonnaie, vous permettant d'accéder à une page détaillée sur le site de CoinGecko pour obtenir plus d'informations. Veuillez noter que ces informations proviennent d'une API tierce en version gratuite, donc certaines limitations peuvent s'appliquer en termes de fréquence de requête et de données disponibles.</p>
                
                <div className="circle gray"></div>
            </div>

            <div id="section3" className="container3">
                <h1 className="anchor title" >Glossaire</h1>
                <div id="cryptomonaie">
                    <h3 className="title3" >Cryptomonnaie :</h3>
                    <p className="text">Une cryptomonnaie est une forme de monnaie numérique qui utilise la cryptographie pour sécuriser ses transactions et pour contrôler la création de nouvelles unités. Contrairement aux monnaies traditionnelles comme l'euro ou le dollar, les cryptomonnaies sont généralement décentralisées, ce qui signifie qu'elles ne sont pas contrôlées par un gouvernement ou une banque centrale. Les cryptomonnaies peuvent être utilisées pour effectuer des transactions en ligne ou comme investissement, et elles sont stockées dans des portefeuilles numériques appelés portefeuilles de cryptomonnaies.</p>
                </div>
                <div id="stablecoin">
                    <h3 className="title3" >Stablecoin :</h3>
                    <p className="text">Un stablecoin est une forme de cryptomonnaie conçue pour maintenir une valeur stable par rapport à une devise traditionnelle comme le dollar américain ou l'euro. Contrairement à d'autres cryptomonnaies comme Bitcoin, dont la valeur peut fluctuer considérablement, les stablecoins visent à minimiser ces fluctuations de prix. Cela les rend utiles pour les transactions quotidiennes et comme moyen de stockage de valeur dans des environnements où la volatilité des cryptomonnaies est un problème. </p>
                </div>
                <div id="treemap">
                    <h3 className="title3" >Treemap :</h3>
                    <p className="text">Une treemap est une représentation graphique qui montre les différentes cryptomonnaies et leur taille relative sur le marché. Imagine une carte où chaque cryptomonnaie est représentée par une pièce, et la taille de chaque pièce indique son importance par rapport aux autres.</p>
                </div>
                
                <div className="circle blue"></div>
            </div>
            </>

        //  </div>
     );
}
 
export default Home;