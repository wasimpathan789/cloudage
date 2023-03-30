import "./hdInsightCard.css";

const HdInsightCard = ({ image, title, description }) => {
  return (
    <div className="hd-insight-card">
      <div className="hd-insight-card-left">
        <img src={image} alt="" />
      </div>
      <div className="hd-insight-card-right">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default HdInsightCard;
