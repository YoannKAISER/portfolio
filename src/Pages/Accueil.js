import React from "react";
import html5 from "../Images/Langages/HTML5.webp"
import css3 from "../Images/Langages/CSS3.webp"
import js from "../Images/Langages/JS.webp"
import react from "../Images/Langages/React.webp"

function Accueil() {
    return (
        <section>
            <div className="homeDiv">
                <div className="presentDiv">
                    <h2>Je me présente</h2>
                    <p>
                        Je m'appelle Yoann, j'ai {$age} ans.<br/> Je suis intégrateur web, après une reconversion professionnel.<br/>
                        Intéressé par la programmation, le SEO, l'amélioration des performances des sites et applications web,
                        je me suis formé à ce domaine en faisant la formation Intégrateur web chez <a href="https://openclassrooms.com/" className="oc">OpenClassrooms.</a><br/>
                        J'aime le fait que dans ce domaine, on en apprend tous les jours et je trouve fascinant la puissance du web et la quantité de ce qu'on peut y faire.
                    </p>
                </div>
                <div className="languagesDiv">
                    <h2>Les langages et les frameworks que j'ai appris</h2>
                    <div>
                        <img src={html5} alt="html5" title="HTML 5 - Le respect des normes W3C, la sémantique et les règles d'accessibilité me sont familières." width="150px" height="120px" />
                        <img src={css3} alt="css3" title="CSS 3 - Entre les animations en Css3, le Scss ou encore Flexbox, je n'en ai jamais fini d'en apprendre..." width="150px" height="120px" />
                    </div>
                    <div>
                        <img src={js} alt="js" title="JavaScript - Mon petit point faible. Mes compétences sont encore limitées en JavaScript natif, je vais m'y améliorer" width="150px" height="120px" />
                        <img src={react} alt="react" title="React - J'aime bien ce framework JS ! C'est en React que j'ai conçu mon portfolio." width="150px" height="120px" />
                    </div>
                </div>
            </div>
            
        </section>
    );
};

var DateMaintenant = new Date();
var $Month = '6';
var $Day = '18';
var $Year = '1993';
if (($Month < DateMaintenant.getMonth()) || ($Month === DateMaintenant.getMonth() && $Day <= DateMaintenant.getDate())) {
    $age = DateMaintenant.getFullYear()-$Year;
}
else
{
   var $age = DateMaintenant.getFullYear()- $Year - 1;
}


export default Accueil;