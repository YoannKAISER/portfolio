import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import { Link } from "react-router-dom";


export default function FlipCard({ image, h2, h3, p, link, lien, p4, p4Lien, p9, p9Lien }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const flipCard = () => setIsFlipped(!isFlipped);
  
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <Card>
        <img src={image} alt="Project" />
        <button className="flip" onClick={flipCard}></button>
      </Card>
        <Card>
          <div style={{backgroundColor:"white", height:"100%"}}>
            <h2>{h2}</h2>
            <h3>{h3}</h3>
            <p className="textCard">{p}</p>
            <Link to={lien} style={{zIndex:"1", position:"relative"}} className="link">{link}</Link>
            <Link to={p4Lien} style={{zIndex:"1", position:"relative"}} className="link">{p4}</Link>
            <Link to={p9Lien} style={{zIndex:"1", position:"relative"}} className="link">{p9}</Link>
          </div>
          <button className="flip" onClick={flipCard}></button>
        </Card>
    </ReactCardFlip>
  );
}

const Card = ({ children }) => {
  return (
    <div
      style={{
        width: 350,
        height: 350,
        padding: 15,
        display: "flex",
        flexDirection: "column"
      }}
    >
      {children}
    </div>
  );
};