import { useEffect } from "react";
import Navbar from "../components/Navbar";
import BurgerNavbar from "../components/BurgerNavbar";

const Home = () => {

    useEffect(() => {
        // const scrollToTerm = (termId) => {
        //     const termElement = document.getElementById(termId);
        //     if (termElement) {
        //         const offset = 80; // Décalage correspondant à la hauteur de la navbar
        //         const elementPosition = termElement.getBoundingClientRect().top + window.scrollY;
        //         const offsetPosition = elementPosition + offset;

        //         console.log(elementPosition);
        //         console.log(offsetPosition);

        //         window.scrollTo({
        //             top: offsetPosition,
        //             behavior: "smooth"
        //         });
        //     }
        // };
        const scrollToTerm = (termId) => {
            const termElement = document.getElementById(termId);
            if (termElement) {
                const offset = 80; // Décalage correspondant à la hauteur de la navbar
                const elementPosition = termElement.getBoundingClientRect().top + window.scrollY;
                const offsetPosition = elementPosition - offset;

                setTimeout(() => {
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth"
                    });
                }, 0);
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
         <div className="navbar-container">
            <Navbar/>
        </div>
        <div className="burger-navbar-container">
            <BurgerNavbar/>
        </div>
            <div id="section1" className="container1"> 
                <div className="anchor bienvenu" >
                    <div className="bienvenu">
                        <div className="bienvenu-text">
                            <h1><span>CoinTrackr</span></h1>
                            <p className="text intro">La crypto pour tous,</p>
                            <p className="text">même pour ceux qui pensent que Bitcoin est un genre de biscuit ! </p>

                        </div>
                        
                        <img src="./assets/illustrationBitcoin.png" alt="" />
                    </div>
                    
                    <div className="circle red"></div>
                </div>
                <div className="intro-part2">
                    <h1 className="title">Notre histoire</h1>
                    <p className="text">
                        Bienvenue sur CoinTrackr ! 
                        Ici, vous allez plonger dans l'univers fascinant des cryptomonnaies, 
                        le tout de manière ludique et pédagogique. Ce site a été conçu pour vous,
                        que vous soyez un passionné de longue date ou un débutant curieux.
                        Mon objectif en créant CoinTrackr était d'apprendre et de partager mes découvertes sur les
                        <a href="#cryptomonnaie" className="glossary-link">cryptomonnaies</a>. 
                        J'espère que vous trouverez cet outil aussi utile et 
                        captivant que je l'ai trouvé stimulant à développer.    
                    </p>
                    

                </div>
               
       
            </div> 

            <div id="section2" className="container2">
                <h1 className="anchor title">Tableau des cryptomonnaies</h1>
                <p className="text">Au dessus du tableau vous trouverez les informations prinicpales comme le nombre actuelle des nombres de <a href="#cryptomonnaie" className="glossary-link">cryptomonnaies</a> actuellement dans le monde, etc. </p>
                <p className="text">Vous trouverez également sur la droite lorsque vous vous visitez notre site, sur un grand écran, une Treemap (ou "carte des parts de marché" en français) affichant les performances des 25 premières cryptomonnaies, excluant celles qui ont peu d'évolution appelé également "<a href="#stablecoin" className="glossary-link">stablecoin</a>" en anglais. </p> 
                {/* ----------------- Treemap --------------- */}
                <h2 className="title2">Le Treemap</h2>
                <h3 className="title3">Comprendre le treemap</h3>
                <p className="text">1. Rectangles et tailles :</p> 
                <p className="text">Chaque rectangle représente une cryptomonnaie. La taille de chaque rectangle est proportionnelle à la valeur de cette cryptomonnaie. Plus le rectangle est grand, plus la valeur de cette cryptomonnaie est élevée.</p>
                <p className="text">2. Couleur : </p>
                <p className="text">Les couleurs indiquent la performance global sur le marché.</p> <p className="text"> Le rouge clair : a une baisse faible. Le rouge foncé : une baisse importante. Le vert clair : augmentation faible. Le vert foncé : augmentation importante. </p>



                {/* ------------ Tableau ------------ */}
                <h2 className="title2">Le tableau</h2>
                <p className="text">Le tableau principal offre plusieurs options de filtrage, notamment par nom, prix, capitalisation boursière (c'est la valeur totale d'une cryptomonnaie sur le marché), volume (c'est le montant total de la cryptomonnaie échangé dans une période donnée), et évolution sur différentes périodes de temps (1h, 1j, 1s, 1m, 6m, 1 an et ATH - "All-Time High" qui représente le plus haut niveau de prix historique atteint par une cryptomonnaie).</p>
                <p className="text">De plus, un petit bouton "Info" est disponible pour chaque cryptomonnaie, vous permettant d'accéder à une page détaillée sur le site de CoinGecko pour obtenir plus d'informations. Veuillez noter que ces informations proviennent d'une API tierce en version gratuite, donc certaines limitations peuvent s'appliquer en termes de fréquence de requête et de données disponibles.</p>
                
                <div className="circle gray"></div>
            </div>
            
            <div id="section3" className="container3">
                <h1 className="anchor title" >Glossaire</h1>
                <div id="cryptomonnaie">
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
                
                <div className="circle blue "></div>
            </div>
            </>

        //  </div>
     );
}
 
export default Home;