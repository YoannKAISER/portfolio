import React from "react";


function Accueil() {
    return (
        <section>
            <div className="homeDiv">
                <h2>Je me présente</h2>
                <div className="presentDiv">
                    <p>
                        Je m'appelle Yoann, j'ai {$age} ans.<br/> Je suis intégrateur web, après une reconversion professionnel.<br/>
                        Intéressé par la programmation, le SEO, l'amélioration des performances des sites et applications web,
                        je me suis formé à ce domaine en faisant la formation Intégrateur web chez <a href="https://openclassrooms.com/" className="oc">OpenClassrooms.</a><br/>
                        J'aime le fait que dans ce domaine, on en apprend tous les jours et je trouve fascinant la puissance du web et la quantité de ce qu'on peut y faire.
                    </p>
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