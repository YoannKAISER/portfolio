import React, { Component } from "react";
import Carousel from "react-spring-3d-carousel";
import { v4 as uuidv4 } from "uuid";
import { config } from "react-spring";
import RidingCities from "../Images/Projets/RidingCities.webp";
import Booki from "../Images/Projets/Booki.webp";
import OhMyFood from "../Images/Projets/Oh-my-food.webp";
import PrintIt from "../Images/Projets/Printit.webp";
import SophieBluel from "../Images/Projets/SophieBluel.webp";
import Kasa from "../Images/Projets/Kasa.webp";
import NinaCarducci from "../Images/Projets/NinaCarducci.webp";
import Events from "../Images/Projets/77Events.webp";
import ArgentBank from "../Images/Projets/Argent Bank.jpg";
import FlipCard from "./FlipCard";

export default class Example extends Component {
  state = {
    showNavigation: true,
    config: config.gentle
  };

  slides = [
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={RidingCities} 
          title="Riding Cities" 
          width="350px" 
          height="350px" 
          alt="Riding Cities" 
          h2="Premiers pas sur le langage HTML" 
          h3="Riding Cities" 
          p="Ce projet a pour but de vous faire découvrir le langage HTML.
            Vous l'utiliserez bientôt pour développer des sites plus ambitieux, mais dans un premier temps, faites vos premiers pas sur HTML..."
          link="Lien vers le code du projet" 
          lien="https://github.com/YoannKAISER/Projet2.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={Booki} 
          title="Booki" 
          width="350px" 
          height="350px" 
          alt="Booki"
          h2="Créez la page d'accueil d'une agence de voyage avec HTML & CSS" 
          h3="Booki" 
          p="L’entreprise souhaite développer un site Internet qui permette aux usagers de trouver des hébergements et des activités dans la ville de leur choix. 
            Vous êtes chargé d'intégrer l'interface du site avec du code HTML et CSS."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet3.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={OhMyFood} 
          title="Oh My Food" 
          width="350px" 
          height="350px" 
          alt="Oh My Food"
          h2="Améliorez l'interface d'un site mobile avec des animations CSS" 
          h3="Oh My Food" 
          p="Vous avez intégré Ohmyfood en tant que développeur junior. Il s’agit d’une jeune startup qui voudrait s'imposer sur le marché de la restauration. 
            Votre mission est de développer un site “mobile first” qui répertorie les menus de restaurants gastronomiques."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet4.git"
          p4="Lien vers le site"
          p4Lien="https://yoannkaiser.github.io/Projet4/"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={PrintIt} 
          title="Print It" 
          width="350px" 
          height="350px" 
          alt="Print It"
          h2="Premiers pas sur le langage JavaScript" 
          h3="Print It" 
          p="Ce projet a pour but de vous faire découvrir le langage JavaScript.
            Vous débutez comme développeur front-end en freelance, et venez de décrocher une offre pour dynamiser le site Internet statique d’une petite imprimerie familiale nommée Print it."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet5.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={SophieBluel} 
          title="Sophie Bluel" 
          width="350px" 
          height="350px" 
          alt="Sophie Bluel"
          h2="Créez une page web dynamique avec JavaScript" 
          h3="Sophie Bluel" 
          p="Vous travaillez comme développeur front-end pour l’agence ArchiWebos qui comprend 50 salariés.
            Vous travaillez comme développeur front-end d’une équipe qui travaille sur la conception du site portfolio d’une architecte d’intérieur."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet6.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={Kasa} 
          title="Kasa" 
          width="350px" 
          height="350px" 
          alt="Kasa"
          h2="Créez une application web de location immobilière avec React" 
          h3="Kasa" 
          p="Kasa vous recrute en tant que développeur front-end en freelance pour développer sa nouvelle plateforme web. 
            Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans.
            Le site de Kasa a été codé il y a maintenant plus de 10 ans en ASP.NET. La CTO, a donc lancé une refonte totale pour passer à une stack complète en React côté front-end."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet8.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={NinaCarducci} 
          title="Nina Carducci" 
          width="350px" 
          height="350px" 
          alt="Nina Carducci"
          h2="Optimisez le référencement d'un site de photographe" 
          h3="Nina Carducci" 
          p="Vous êtes développeur freelance et vous décidez de proposer vos services d’optimisation SEO à de nouveaux clients. 
            Pour ce faire, vous avez analysé plusieurs sites internet. Vous avez ensuite pris contact avec les administrateurs des sites qui peuvent être optimisés pour leur proposer vos services. 
            Parmi vos prospects, il y a le site de Nina Carducci, une photographe dont vous a parlé l’un de vos amis."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet9.git"
          p9="Lien vers le site"
          p9Lien="https://yoannkaiser.github.io/Projet9/"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={Events} 
          title="77Events" 
          width="350px" 
          height="350px" 
          alt="77Events"
          h2="Débuggez le site d'une agence d'événementiel" 
          h3="77Events" 
          p="Vous êtes développeur front-end freelance, et l’agence évènementielle 77events vous contacte pour une mission.
          L’agence souhaite publier la nouvelle version de son site vitrine. Il s’agit d’un site one-page. 
          Le site est fonctionnel, mais quelques bugs entravent le bon usage par les visiteurs. 77events fait donc appel à vous pour finaliser le travail."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet10.git"
        />
    },
    {
      key: uuidv4(),
      content: 
        <FlipCard 
          image={ArgentBank} 
          title="Argent Bank" 
          width="350px" 
          height="350px" 
          alt="Argent Bank"
          h2="Implémentez le front-end d'une application bancaire avec React" 
          h3="Argent Bank" 
          p="Vous venez d’intégrer Argent Bank comme développeur front-end.
            Argent Bank est une nouvelle banque en ligne qui souhaite percer dans le secteur bancaire."
          link="Lien vers le code du projet"
          lien="https://github.com/YoannKAISER/Projet11.git"
        />
    }
].map((slide, index) => {
    return { ...slide, onClick: () => this.setState({ goToSlide: index }) };
  });
  
  render() {
    return (
      <div style={{ width: "50%", height: "350px", margin: "0 auto" }}>
        <Carousel
          slides={this.slides}
          goToSlide={this.state.goToSlide}
        />
        <div
          style={{
            margin: "0 auto",
            marginTop: "2rem",
            width: "50%",
            display: "flex",
            justifyContent: "space-around"
          }}>
        </div>
      </div>
    );
  };
};