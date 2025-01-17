import React from "react";
import Header from '../Layout/Header';
import bgImg from "../Images/Fond_décran_page_a_propos.webp"
import Footer from '../Layout/Footer';


let DateMaintenant = new Date();
let $Month = '6';
let $Day = '18';
let $Year = '1993';
let $age;

if (($Month < DateMaintenant.getMonth()) || ($Month === DateMaintenant.getMonth() && $Day <= DateMaintenant.getDate())) {
    $age = DateMaintenant.getFullYear()-$Year;
}
else
{
   $age = DateMaintenant.getFullYear()- $Year - 1;
}

function APropos() {
    return (
        <>
            <Header style={{position:"relative"}} />
            <section className="aboutSection" style={{backgroundImage: `url(${bgImg})`}}>
                <div className="aboutDiv">
                    <h2>Je me présente</h2>
                    <div className="presentDiv" style={{fontSize:"large"}}>
                        <p style={{margin:"0"}}>
                            Je m'appelle Yoann, j'ai {$age} ans.<br/><br/> 
                            Étant intéressé depuis longtemps par l'informatique, le web et la programmation, 
                            j'ai décidé d'en faire mon métier et de faire donc la formation d'intégrateur web chez <a href="https://openclassrooms.com/" className="oc">OpenClassrooms</a>, diplôme enregistré au <a href="https://www.francecompetences.fr/recherche/rncp/36076/#ancre4" className="oc">RNCP</a>.<br/>
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

export default APropos;