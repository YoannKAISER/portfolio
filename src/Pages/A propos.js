import React from "react";
import Header from '../Layout/Header';
import bgImg from "../Images/Fond_décran_page_a_propos.webp"
import Footer from '../Layout/Footer';


function APropos() {
    return (
        <>
            <Header style={{position:"relative"}} />
            <section style={{backgroundImage: `url(${bgImg})`, overflow:"auto"}}>
                <div className="aboutDiv">
                    <h2>Je me présente</h2>
                    <div className="presentDiv" style={{fontSize:"large"}}>
                        <p style={{margin:"0"}}>
                            Je m'appelle Yoann, j'ai {$age} ans.<br/> Ayant fait des études sanitaires et sociales, j'ai suivi par la suite une première année en formation infirmier.<br/><br/>
                            J'ai ensuite été volontaire de service civique dans une association de secours pendant 6 mois, et je suis resté dans cette association pendant 5 ans en tant que bénévole.<br/>
                            En parallèle de mon bénévolat, j'ai travaillé dans un garage automobile.<br/>
                            J'ai ensuite travailler en tant que auxiliaire-ambulancier dans une entreprise d'ambulances privées. 
                            Mon contrat n'étant pas renouvelé suite à une baisse d'activités de l'entreprise dû à la pandémie COVID 19, j'ai travaillé à l'aéroport Roissy-Charles-De-Gaulle pour y faire des tests antigéniques et PCR aux personnes revenants de voyage.<br/>
                            A la fin de cette mission liée au COVID, j'ai fait un emploi saisonnier en tant que régulateur-secours dans une station de ski.<br/><br/>
                            Étant intéressé depuis longtemps par l'informatique, le web et la programmation, 
                            c'est après mon emploi saisonnier que j'ai décidé d'en faire mon métier et de faire donc la formation d'intégrateur web chez <a href="https://openclassrooms.com/" className="oc">OpenClassrooms</a>.<br/>
                            Cette formation m'a fait découvrir le SEO, l'amélioration des performances des sites et applications web, et m'en a rendu intéressé par ceux-ci.<br/>
                            J'aime le fait que dans ce domaine, on en apprend tous les jours et je trouve fascinant la puissance du web et la quantité de ce qu'on peut y faire.
                        </p>
                    </div>
                </div> 
            </section>
            <Footer />
        </>
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


export default APropos;