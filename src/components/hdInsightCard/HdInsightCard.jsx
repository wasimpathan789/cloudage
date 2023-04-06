import "./hdInsightCard.css";

const HdInsightCard = ({ image, title, description }) => {
  return (
    <div className="hd-insight-card">
      <div className="hd-insight-card-left">
        <img src={image} alt="" data-aos="fade-up" data-aos-duration="2000" />
      </div>
      <div className="hd-insight-card-right">
        <h1 data-aos="fade-up" data-aos-duration="2000">
          {title}
        </h1>
        <p data-aos="fade-up" data-aos-duration="2000">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HdInsightCard;
