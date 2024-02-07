import { useState } from "react";
import ReactCardFlip from "react-card-flip";


export default function FlipCard({ image, h2, h3, p }) {
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
            <p>{p}</p>
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