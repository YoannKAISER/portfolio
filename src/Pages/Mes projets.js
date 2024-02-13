import React from "react";
import Carrousel from "../Components/Carrousel";
import { Link } from "react-router-dom";

function MesProjets() {
    return(
        <section className="projectSection">
            <h2>Mes projets réalisés</h2>
            <Carrousel />
            <Link to="https://github.com/YoannKAISER/Projet12.git" style={{position:"absolute", bottom:"80px", color:"blue", textDecoration:"underline", right:"50px"}}>Codes de mon portfolio</Link>
        </section>
    )
}

export default MesProjets;