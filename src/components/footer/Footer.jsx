import "./footer.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Logo from "../../assets/logo.png";
import { color, fontSize } from "@mui/system";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={Logo} alt="" />
          <p>
            Accelerating enterprise-class data management innovation. At
            CloudAge, we believe that data can make what is impossible today,
            possible tomorrow.
          </p>
          <div className="follow-us">
            <h1>Follow Us</h1>
            <div className="follow-us-icon">
              <a href="">
                <TwitterIcon />
              </a>
              <a href="">
                <LinkedInIcon />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-top-center">
          <h1 >Corporate Trainings</h1>
          {/* <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none' overflow='visible' height='100%' viewBox='0 0 24 24' fill='black' stroke='none'%3E%3Cpolygon points='9.4,2 24,2 14.6,21.6 0,21.6'/%3E%3C/svg%3E" alt="" /> */}
          <div className="dash">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="corporate-links">
            <li data-aos="slide-down" data-aos-delay= "100" data-aos-deration ="1000" className="corporate-link">
              <ArrowForwardIosIcon
                className="corpoate-arrow-icon"
                style={{ fontSize: "20", color: "#6EC1E4" }}
              />{" "}
              <a href="">Big data speciallization</a>
            </li>
            <li data-aos="slide-down" data-aos-delay= "100" data-aos-deration ="1000" className="corporate-link">
              <ArrowForwardIosIcon
                className="corpoate-arrow-icon"
                style={{ fontSize: "20", color: "#6EC1E4" }}
              />
              <a href="">Machine learning on Multicloud</a>
            </li>
            <li data-aos="slide-down" data-aos-delay= "100" data-aos-deration ="1000" className="corporate-link">
              <ArrowForwardIosIcon
                className="corpoate-arrow-icon"
                style={{ fontSize: "20", color: "#6EC1E4" }}
              />
              <a href="">All data on Kubernets</a>
            </li>
            <li data-aos="slide-down" data-aos-delay= "100" data-aos-deration ="1000" className="corporate-link">
              <ArrowForwardIosIcon
                className="corpoate-arrow-icon"
                style={{ fontSize: "20", color: "#6EC1E4" }}
              />
              <a href="">Data center on Hybrid clouds</a>
            </li>
          </ul>
          <h1>Services</h1>
          <div className="dash">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="corporate-links">
            <li className="corporate-link">
              <ArrowForwardIosIcon
                className="corpoate-arrow-icon"
                style={{ fontSize: "20", color: "#6EC1E4" }}
              />{" "}
              <a href="">Opportunities</a>
            </li>
          </ul>
        </div>
        <div className="footer-top-right">
          <h1>Contact info</h1>
          <div className="dash">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="contact-address">
            <h1>Address</h1>
            <p>
              Clover Hills Plaza, 9th Floor NIBM Undri Road, Mohammad Wadi,
              Kondhwa, Pune, Maharashtra-411048
            </p>
          </div>
          <div className="contact-phone">
            <h1>Phone</h1>
            <p>
            +91-976-406-3368
            </p>
          </div>
          <div className="contact-email">
            <h1>Email</h1>
            <p>
            info@cloudage.co.in
            </p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="privacy">Privacy-Policy</div>
        <div className="terms">Terms-Condition</div>
        <div className="third-party">Third-Party-Licences</div>
        <div className="cancellation">Cancellations & Refund Policy</div>
      </div>
    </div>
  );
};

export default Footer;
