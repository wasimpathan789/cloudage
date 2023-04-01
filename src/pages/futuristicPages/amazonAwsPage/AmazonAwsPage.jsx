import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./amazonAwsPage.css";
import abandoner from "../../../assets/amazon-aws/abandoner.png";
import hand from "../../../assets/amazon-aws/hand.png";
import question from "../../../assets/amazon-aws/question.png";
import logo from "../../../assets/amazon-aws/logo.png";
import engineer from "../../../assets/amazon-aws/eng.jpeg";
import map from "../../../assets/amazon-aws/map.png";
import sitee2 from "../../../assets/amazon-aws/sitee2.png";
import site from "../../../assets/amazon-aws/site.png";
import sitee3 from "../../../assets/amazon-aws/sitee3.png";
import sitess2 from "../../../assets/amazon-aws/sitess-2.png";

const AmazonAwsPage = () => {
  return (
    <div>
      <Navbar />
      <div className="awsbanner">
        <h1   data-aos="fade-right"  data-aos-duration="1000" >Amazon AWS</h1>
        <p   data-aos="fade-right"  data-aos-duration="1000" >
          Millions of customers are using AWS cloud solutions to build
          applications with increased flexibility, scalability, security, and
          reliability.
        </p>
      </div>
      <div className="you-dont">
        <h1>
          YOU DONT WANT TO MISS THE OPPORTUNITY, GIVE YOURSELF A BREAK AND
          ENROLL!
        </h1>
        <div className="you-dont-cards">
          <div className="you-dont-card"  data-aos="flip-up" data-aos-duration="1500">
            <div className="you-dont-card-img">
              <img src={hand} alt="" />
            </div>
            <h1>Free Tier</h1>
            <p>Use Amazon EC2, S3, and more— free for a full year.</p>
          </div>

          <div className="you-dont-card"  data-aos="flip-up" data-aos-duration="1500">
            <div className="you-dont-card-img">
              <img src={question} alt="" />
            </div>
            <h1>Registration FAQ</h1>
            <p>Explore frequently asked questions on signup flow.</p>
          </div>
          <div className="you-dont-card"  data-aos="flip-up" data-aos-duration="1500">
            <div className="you-dont-card-img">
              <img src={abandoner} alt="" />
            </div>
            <h1>Contact Us</h1>
            <p>Reach out to us for any AWS related questions</p>
          </div>
        </div>
      </div>
      <div className="aws-market">
        <div className="aws-market-logo">
          <img src={logo} alt="" />
        </div>
        <h2>Find.Buy.Deploy</h2>
        <p  data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="500">
          AWS Marketplace is a digital catalog with thousands of software
          listings from independent software vendors that make it easy to find,
          test, buy, and deploy software that runs on AWS.
        </p>
      </div>
      <div className="aws-engineer">
        <img src={engineer} alt="" />
      </div>
      <div className="global-network">
        <h1>Global Network of AWS Regions</h1>
        <p  data-aos="fade-left"  data-aos-duration="500" >
          The AWS Cloud spans 69 Availability Zones within 22 geographic regions
          around the world, with announced plans for 13 more Availability Zones
          and four more AWS Regions in Indonesia, Italy, South Africa, and
          Spain.
        </p>
        <div className="global-network-image">
          <img src={map} alt="" />
        </div>
      </div>
      <div className="analysis-reports">
        <div className="analysis-report"  data-aos="zoom-out" data-aos-duration="1000">
          <div className="analysis-report-left">
            <img src={sitess2} alt="" />
          </div>
          <div className="analysis-report-right">
            <h1>Analyst Reports</h1>
            <p>
              Read what top analysts such as Gartner and IDC are saying about
              AWS
            </p>
          </div>
        </div>
        <div className="analysis-report"   data-aos="zoom-out" data-aos-duration="1000">
          <div className="analysis-report-left">
            <img src={site} alt="" />
          </div>
          <div className="analysis-report-right">
            <h1>AWS Training</h1>
            <p>Free digital courses to help you develop your skills</p>
          </div>
        </div>
        <div className="analysis-report"   data-aos="zoom-out" data-aos-duration="1000">
          <div className="analysis-report-left">
            <img src={sitee3} alt="" />
          </div>
          <div className="analysis-report-right">
            <h1>AWS Partner Network</h1>
            <p>
              Join AWS Partner Network to build and grow your cloud business
            </p>
          </div>
        </div>
        <div className="analysis-report"   data-aos="zoom-out" data-aos-duration="3000">
          <div className="analysis-report-left">
            <img src={sitee2} alt="" />
          </div>
          <div className="analysis-report-right">
            <h1>AWS Marketplace</h1>
            <p>Launch a variety of popular software on AWS in minutes</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AmazonAwsPage;
