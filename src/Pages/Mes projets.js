import React from "react";
import Header from '../Layout/Header';
import bgImg from "../Images/Fond_décran_page_mes_projets.webp"
import Carrousel from "../Components/Carrousel";
import { Link } from "react-router-dom";
import Footer from '../Layout/Footer';

function MesProjets() {
    return(
        <>
           <header>
                <Link to="/Projet12" style={{fontSize:"50px", color:"black", fontFamily:"Italianno", backgroundColor:"transparent"}} className="linkHeader">Yoann KAISER</Link>
                <nav className="ProjectNav">
                    <Link to="/APropos">A propos de moi</Link>
                    <Link to="/Mes Compétences">Mes Compétences</Link>
                    <Link to="/Mes projets">Mes projets réalisés</Link>
                </nav>
            </header>
            <section className="projectSection" style={{backgroundImage: `url(${bgImg})`, backgroundColor:"#ff7777"}}>
                <h2>Mes projets réalisés</h2>
                <Carrousel />
                <Link to="https://github.com/YoannKAISER/Projet12.git" className="linkPortfolio">Codes de mon portfolio</Link>
            </section>
            <Footer />
        </>
    )
}

export default MesProjets;