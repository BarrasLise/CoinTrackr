import { useEffect } from "react";
import Navbar from "../components/Navbar";
import BurgerNavbar from "../components/BurgerNavbar";
import Footer from "../components/Footer";
import { NavLink } from "react-router-dom";

const Home = () => {

    useEffect(() => {
        
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

        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-on-scroll');
                    entry.target.classList.remove('invisible');
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the element is visible
        });

        elements.forEach(element => {
            element.classList.add('invisible'); // Ensure elements are invisible initially
            observer.observe(element);
        });

        // Nettoie les gestionnaires d'événements lorsque le composant est démonté
        return () => {
            glossaryLinks.forEach(link => {
                link.removeEventListener('click', scrollToTerm);
            });
            elements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);
    return ( 
        // <div className="home-container">
        <div className="home">
        <div className="navbar-container">
            <Navbar/>
        </div>
        <div className="burger-navbar-container">
            <BurgerNavbar/>
        </div>
            <section id="section1" className="container1"> 
                <div className="anchor bienvenu" >
                    <div className="bienvenu">
                        <div className="bienvenu-text">
                            <h1><span>CoinTrackr</span></h1>
                            <p className="text intro">La crypto pour tous,</p>
                            <p className="text">même pour ceux qui pensent que Bitcoin est un genre de biscuit ! </p>
                        </div>
                        <img src="./assets/illustrationBitcoin.png" alt="illustration cryptomonnaies" />
                    </div>
                    <div className="circle red"></div>
                </div>
                <div className="intro-part2 ">
                   <h1 className="title-home "><span>Notre histoire</span></h1>
                    <p className="text ">
                        Bienvenue sur CoinTrackr ! Ici, vous allez plonger dans l'univers fascinant des <a href="#cryptomonnaie" className="glossary-link"> cryptomonnaies</a>,
                        le tout de manière ludique et pédagogique. Ce site a été conçu pour vous,
                        que vous soyez un passionné de longue date ou un débutant curieux.
                        Mon objectif en créant CoinTrackr était d'apprendre et de partager mes découvertes sur les
                        <a href="#cryptomonnaie" className="glossary-link"> cryptomonnaies</a>.
                        J'espère que vous trouverez cet outil aussi utile et captivant que je l'ai trouvé stimulant à développer.
                    </p>
                    <div className="paragraphe-img ">
                        <p className="text">
                            Les <a href="#cryptomonnaie" className="glossary-link"> cryptomonnaies</a> ont été créées en 2009 par une personne ou un groupe sous le pseudonyme de Satoshi Nakamoto. 
                            Elles existent depuis plus de dix ans et ont pour but de fournir une alternative décentralisée aux monnaies traditionnelles.
                            Utilisées pour les transactions en ligne et comme investissement, elles fonctionnent sur une technologie appelée <a href="#blockchain" className="glossary-link"> blockchain</a>,
                            qui garantit la sécurité et la transparence des échanges.
                        </p>
                        <div className="image-container">
                            <img id="img-blockchain" src="./assets/blockchain2.png" alt="Illustration Blockchain" />
                        </div>
                    </div>
                </div>
            </section> 
            <section id="section2" className="container2">
                
                <h1 className="anchor title-home"><span>Explorer CoinTrackr</span></h1>
                
                <div className="monde-crypto">
                    <div className="image-container">
                        <img id="img-monde-crypto" src="./assets/Decouvrir-le-monde-des-cryptomonnaies.png" alt="Illustration monde crypto" />
                    </div>
                    <div>
                        <p className="text">
                        Sur cette page d'accueil, vous trouverez :
                        </p>
                        <ul className="text circle-list ">
                            <li className="circle-list " >Une introduction aux concepts fondamentaux des cryptomonnaies.</li>
                            <li className="circle-list " >Un glossaire complet avec des définitions simples et claires. Cliquez sur les termes mis en valeur pour obtenir des définitions rapides. C'est comme avoir un professeur privé à portée de clic !</li>
                        </ul>
                        <p className="text">
                            Depuis le menu, en cliquant sur la page "Cryptomonnaies", vous serez dirigé vers une page où se trouvent :
                        </p>
                        <ul className="text circle-list">
                            <li className="circle-list " >Une treemap interactive affichant les performances des 45 premières cryptomonnaies.</li>
                            <li className="circle-list " >Un tableau interactif affichant les 250 cryptomonnaies les plus connues.</li>
                        </ul>
                    </div>
                </div>
                <p className="text">
                    Découvrez par vous-même la magie des cryptomonnaies en cliquant sur le bouton ci-dessous :
                </p>
                <div className="center-container">
                    <NavLink to="/crypto" className="tall-nav-link" onClick={()=> window.scrollTo(0, 0)}>
                        <button href="/crypto" className="button">Découvrez les cryptomonnaies</button>
                    </NavLink> 
                </div>
                <h1 className="anchor title-home"><span>Tableau des cryptomonnaies</span></h1>
                <p className="text">
                    Au-dessus du tableau, vous trouverez les informations principales, comme le nombre actuel de cryptomonnaies dans le monde.
                </p>
                <p className="text">
                    Vous trouverez également sur la droite de notre site, lorsqu'affiché sur un grand écran, une Treemap ("carte des parts de marché" en français) affichant les performances des 25 premières cryptomonnaies, excluant celles qui ont peu d'évolution, appelées "<a href="#stablecoin" className="glossary-link">stablecoin</a>".
                </p>
                
                <h2 className="title2">La Treemap</h2>
                <h3 className="title3">Comprendre la Treemap</h3>
                <p className="text">
                    1. Rectangles et tailles : Chaque rectangle dans la treemap représente une cryptomonnaie, sa taille étant proportionnelle à sa valeur respective. Ainsi, plus un rectangle est grand, plus la valeur de la cryptomonnaie qu'il représente est élevée. Par exemple, Bitcoin (BTC), avec une dominance de marché supérieure à 50 % actuellement, est le plus grand rectangle dans la treemap. Sa taille est telle qu'il occupe près de la moitié de l'espace total de la treemap.
                </p>
                <p className="text">
                    2. Couleurs : Les couleurs indiquent la performance globale sur le marché.
                </p>
                <ul className="text circle-list">
                    <li className="circle-list " >Le rouge clair indique une baisse faible.</li>
                    <li className="circle-list " >Le rouge foncé indique une baisse importante.</li>
                    <li className="circle-list " >Le vert foncé montre une augmentation faible.</li>
                    <li className="circle-list " >Le vert clair montre une augmentation importante.</li>
                </ul>
                <p className="text">
                    Explorez la treemap en détail et découvrez les tendances actuelles du marché !
                </p>
                <div className="center-container">
                    <NavLink to="/crypto" className="tall-nav-link" onClick={()=> window.scrollTo(0, 0)}>
                        <button href="/crypto" className="button">Voir la Treemap</button>
                    </NavLink> 
                </div>
                <h2 className="title2">Le tableau</h2>
                <p className="text">
                    Le tableau principal offre plusieurs options de filtrage, notamment par :
                </p>
                <ul className="text circle-list">
                    <li className="circle-list " >Nom</li>
                    <li className="circle-list " >Prix</li>
                    <li className="circle-list " >Capitalisation boursière</li>
                    <li className="circle-list " >Volume </li>
                    <li className="circle-list " >Évolution sur différentes périodes de temps (1h, 1j, 1s, 1m, 6m, 1 an et ATH)</li>
                </ul>
                <p className="text">
                    De plus, un petit bouton "Info" est disponible pour chaque cryptomonnaie, vous permettant d'accéder à une page sur le site de CoinGecko* pour obtenir plus d'informations sur la cryptommonaie. </p>
                
            
                <p className="text"><strong>
                    Plongez dans les détails des cryptomonnaies en cliquant sur le bouton ci-dessous :
                    </strong></p>
                <div className="center-container">
                    <NavLink to="/crypto" className="tall-nav-link" onClick={()=> window.scrollTo(0, 0)}>
                        <button href="/crypto" className="button">Découvrir le tableau</button>
                    </NavLink>   
                </div>
                <p className="text-info">  
                    *Veuillez noter que toutes les données du tableau proviennent de l'API CoinGecko en version gratuite, donc certaines limitations peuvent s'appliquer en termes de données disponibles.
                </p>
                <div className="circle gray"></div>
            </section>

            <section id="section3" className="container3">
            <h1 className="anchor title-home" ><span>Glossaire</span></h1>

                <div id="ath">
                    <h3 className="title3" >ATH - "All-Time High" :</h3>
                    <p className="text">C'est ce qui représente le plus haut niveau de prix historique atteint par une cryptomonnaie</p>
                </div>

                <div id="blockchain">
                    <h3 className="title3" >Blockchain :</h3>
                    <p className="text">La blockchain est comme un grand registre numérique partagé par de nombreuses personnes. Chaque fois qu'une transaction est effectuée (comme l'achat ou la vente de quelque chose), elle est enregistrée dans ce registre. Une fois qu'une page du registre est pleine de transactions, elle est verrouillée pour que personne ne puisse la modifier, et une nouvelle page est commencée. Ce registre est sécurisé et tout le monde peut voir son contenu, mais personne ne peut effacer ou altérer les pages déjà complétées. C'est une méthode extrêmement sûre pour enregistrer et suivre les transactions sans avoir besoin d'une banque ou d'un intermédiaire.</p>
                </div>

                <div id="captilisation-boursiere">
                    <h3 className="title3" >Capitalisation boursière :</h3>
                    <p className="text">C'est la valeur totale d'une cryptomonnaie sur le marché.</p>
                </div>
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
                <div id="volume">
                    <h3 className="title3" >Volume :</h3>
                    <p className="text">C'est le montant total de la cryptomonnaie échangé dans une période donnée.</p>
                </div>
                
                <div className="circle blue "></div>
            </section>
            
            <Footer/>

            
       
            </div>

        //  </div>
     );
}
 
export default Home;