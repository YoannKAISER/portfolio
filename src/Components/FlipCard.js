import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";


export default function FlipCard({ image, h2, h3, p, link, lien, p4, p4Lien, p9, p9Lien, icone }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);

  const cardStyle = {
    width: "210px",
    height: "210px",
    padding: "15px",
    display: "flex",
    flexDirection: "column",
  };

  if (window.innerWidth >= 768) {
    cardStyle.width = "350px";
    cardStyle.height = "350px";
  }
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card style={cardStyle}>
        <img src={image} alt="Project" />
        <button className="flip" onClick={flipCard}><img src={icone} className="returnArrow" /></button>
        
        </Card>
        <Card style={cardStyle}>
          <div style={{backgroundColor:"white", height:"100%", overflowY:"scroll"}}>
            <h2 style={{margin:"0"}}>{h2}</h2>
            <h3 style={{color:"indigo"}}>{h3}</h3>
            <p className="textCard">{p}</p>
            <Link to={lien} className="link">{link}</Link>
            <Link to={p4Lien} className="link">{p4}</Link>
            <Link to={p9Lien} className="link">{p9}</Link>
          </div>
          <button className="flip" onClick={flipCard}><img src={icone} className="returnArrow" /></button>
        </Card>
    </ReactCardFlip>
  );
}

const Card = ({ children, style }) => {
  return (
    <div style={style}>
      {children}
    </div>
  );
};