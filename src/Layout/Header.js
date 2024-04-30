import React from "react";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header>
            <Link to="/" style={{fontSize:"50px", color:"white", fontFamily:"Italianno", backgroundColor:"transparent"}} className="linkHeader">Yoann KAISER</Link>
            <nav className="nav">
                <Link to="/APropos">A propos de moi</Link>
                <Link to="/Mes Compétences">Mes Compétences</Link>
                <Link to="/Mes projets">Mes projets réalisés</Link>
                <Link to="/Contact">Me contacter</Link>
            </nav>
        </header>
    );
};

export default Header;