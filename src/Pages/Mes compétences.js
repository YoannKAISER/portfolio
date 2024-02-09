import React from "react";
import html5 from "../Images/Langages/HTML5.webp"
import css3 from "../Images/Langages/CSS3.webp"
import js from "../Images/Langages/JS.webp"
import react from "../Images/Langages/React.webp"
import sass from "../Images/Outils/sass.webp"
import github from "../Images/Outils/GitHub-Logo.webp"


function MesCompétences() {
    return (
        <section>
            <h2>Mes compétences</h2>
            <div className="bodyDiv">
                <div className="skillsDiv">
                        <h2>Les langages et les frameworks que j'ai appris</h2>
                        <div className="langDiv">
                            <img src={html5} alt="html5" title="HTML 5 - Le respect des normes W3C, la sémantique et les règles d'accessibilité me sont familières." width="150px" height="120px" />
                            <img src={css3} alt="css3" title="CSS 3 - Entre les animations en Css3, le Scss ou encore Flexbox, je n'en ai jamais fini d'en apprendre..." width="150px" height="120px" />
                        </div>
                        <div className="langDiv">
                            <img src={js} alt="js" title="JavaScript - Mon petit point faible. Mes compétences sont encore limitées en JavaScript natif, je vais m'y améliorer" width="150px" height="120px" />
                            <img src={react} alt="react" title="React - J'aime bien ce framework JS ! C'est en React que j'ai conçu mon portfolio." width="150px" height="120px" />
                        </div>
                    </div>
                    <div>
                        <h2>Les outils que j'utilise</h2>
                        <img src={sass} alt="sass" width="150px" height="120px" />
                        <img src={github} alt="github" width="150px" height="120px" />
                    </div>
                </div>
        </section>
    )
}

export default MesCompétences;