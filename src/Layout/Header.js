import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/Projet12" style={{fontSize:"50px", color:"white", fontFamily:"Italianno", backgroundColor:"transparent"}} className="linkHeader">Yoann KAISER</Link>
            <nav>
                <Link to="/APropos">A propos de moi</Link>
                <Link to="/Mes Compétences">Mes Compétences</Link>
                <Link to="/Mes projets">Mes projets réalisés</Link>
            </nav>
        </header>
    );
};

export default Header;