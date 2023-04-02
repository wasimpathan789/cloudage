import "./deliver.css";
import Network from "../../assets/network.png";
import Security from "../../assets/security.png";
import Open from "../../assets/open.png";
import AnyCloud from "../../assets/anycloud.png";

const Deliver = () => {
  return (
    <div className="deliver">
      <h1>
        We deliver an enterprise data cloud for any data, anywhere, from the
        Edge to AIss.
      </h1>

      <div className="deliver-cards">
        <div className="deliver-card">
          <img src={Security} alt=""  data-aos="flip-left" data-aos-duration= "1500" />
          <span  data-aos="fade-right"  data-aos-duration= "1500">Security</span>
          </div>
          <div className="deliver-card">
          <img src={Open} alt="" data-aos="flip-up" data-aos-duration= "1500"  />
          <span  data-aos="fade-up-right"   data-aos-duration= "1500">Open</span>
          </div>
          <div className="deliver-card">
          <img src={AnyCloud} alt=""  data-aos="flip-down" data-aos-duration= "1500"  />
          <span  data-aos="fade-up-left"   data-aos-duration= "1500">Any Cloud</span>
          </div>
          <div className="deliver-card">
          <img src={Network} alt=""  data-aos="flip-right" data-aos-duration= "1500"  />
          <span  data-aos="fade-left"  data-aos-duration= "1500">Network</span>
          </div>
        {/* <div className="deliver-card">2</div>
        <div className="deliver-card">3</div>
        <div className="deliver-card">4</div>
        <div className="deliver-card">5</div>
        <div className="deliver-card">6</div>
        <div className="deliver-card">7</div>
        <div className="deliver-card">8</div>
        <div className="deliver-card">9</div>
        <div className="deliver-card">10</div>
        <div className="deliver-card">11</div>
        <div className="deliver-card">12</div> */}

      </div>
    </div>
  );
};

export default Deliver;
