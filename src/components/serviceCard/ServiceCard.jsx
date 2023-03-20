import "./serviceCard.css";
import Digital from "../../assets/digital.png";
import { useState } from "react";

const ServiceCard = ({cardText, title}) => {
  const [isHovering, setIsHovering] = useState(false);
  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <div
        className="service-card"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <img src={Digital} alt="" />
        <span>{title}</span>


        {isHovering && (
        <div className="service-card-text">
       {cardText}
        </div>
      )}
      </div>
     
    </>
  );
};

export default ServiceCard;
