import React from "react";
import Header from '../Layout/Header';
import bgImg from "../Images/Fond_décran_page_mes_projets.webp"
import Carrousel from "../Components/Carrousel";
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer';

function MesProjets() {
    return(
        <>
            <Header />
            <section style={{backgroundImage: `url(${bgImg})`, backgroundColor:"#ff7777", backgroundPosition: "unset"}}>
                <h2>Mes projets réalisés</h2>
                <Carrousel />
                <Link to="https://github.com/YoannKAISER/Projet12.git" style={{position:"absolute", bottom:"80px", color:"blue", textDecoration:"underline", right:"50px"}}>Codes de mon portfolio</Link>
            </section>
            <Footer />
        </>
    )
}

export default MesProjets;