import React from "react";
import bgImg from "../Images/Fond_décran_page_daccueil.webp"
import { Link } from "react-router-dom";

function Accueil() {
    return (
        <section style={{backgroundImage: `url(${bgImg})`, alignItems:"flex-start", justifyContent:"flex-start"}}>
            <h1 style={{transition: "transform 1s ease-in-out"}}>Yoann KAISER</h1>
            <p style={{color:"white", marginLeft:"10%", fontSize:"40px", textShadow:"0 0 black", animation: "textAnimation 1s ease-in-out forwards"}}>Intégrateur web</p>
            <Link to="/APropos" style={{marginLeft:"10%", fontSize:"30px", position:"absolute", bottom:"180px", color:"lawngreen", textDecoration:"underline", backgroundColor:"transparent"}}>Mon portfolio</Link>
        </section>
    );
};

export default Accueil;