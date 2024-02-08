import React from "react";
import { Link } from "react-router-dom";
import YK from "../Images/Yoann KAISER.webp"

function Header() {
    return (
        <header>
            <h1><img src={YK} alt="Yoann KAISER" width="260px" height="30px" /></h1>
            <nav>
                <Link to="/">Accueil</Link>
                <Link to="/Mes Compétences">Mes Compétences</Link>
                <Link to="/Mes projets">Mes projets réalisés</Link>

            </nav>
        </header>
    );
};

export default Header;