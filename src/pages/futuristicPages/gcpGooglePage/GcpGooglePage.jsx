import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./gcpGooglePage.css";
import infra from "../../../assets/gcp-google/infra.png";
import smart from "../../../assets/gcp-google/smart.png";
import application from "../../../assets/gcp-google/application.png";
import data from "../../../assets/gcp-google/data.png";
import productivity from "../../../assets/gcp-google/productivity.png";
import gcorner from "../../../assets/gcp-google/gcorner.png";
import corner2 from "../../../assets/gcp-google/corner2.png";
import googleposter from "../../../assets/gcp-google/googleposter.png";

const GcpGooglePage = () => {

  return (
    <div>
      <Navbar />

      <div className="gcp-build-modernize">
        <div className="gcp-build-modern-top">
          <div className="gcp-build-modernize-left">
            <p data-aos="fade-right" data-aos-duration="1500">
              Build <br />
              <br />
              &nbsp;&nbsp; Modernize <br />
              <br />
              Scale
            </p>
          </div>
          <div className="gcp-build-modernize-right">
            <img src={gcorner} alt="" data-aos="fade-left" data-aos-duration="1500" />
          </div>
        </div>

        <div className="gcp-build-modern-bottom">
          <h1 data-aos="fade-right" data-aos-duration="1500" >Transform your business with Google Cloud.</h1>
          <img src={corner2} alt="" data-aos="fade-left" data-aos-duration="1500" />
        </div>
      </div>
      <div className="gcp-see-how">
        <div className="gcp-see-how-left">
          <h1 data-aos="fade-up"
     data-aos-duration="1500">
            See how DSW relaunched its customer loyalty program, engaging more
            than 28M shoe lovers
          </h1>
          <div className="gcp-see-how-left-video">
            {/* <img src={googleposter} alt="" /> */}
            <video data-aos="fade-up"
     data-aos-duration="1500"  src="blob:https://www.youtube.com/b495d260-26c3-4767-acb5-77184e5fdcc9" controls></video>
          </div>
    
        </div>
        <div className="gcp-see-how-right">
          <h1 data-aos="fade-up"
     data-aos-duration="1500">
            How Google and Mayo Clinic will transform the future of healthcare
          </h1>
          <div className="gcp-see-how-right-image">
            <img  data-aos="fade-up"
     data-aos-duration="1500" src={googleposter} alt="" />
          </div>
        </div>
      </div>

      <div className="google-see">
        <h1 data-aos="zoom-in" data-aos-duration="1500" >See what's possible with Google Cloud</h1>
        <h2  data-aos="zoom-in-up" data-aos-duration="1500" >
          Tap into Google's world-class infrastructure and robust set of
          solutions to build, operate, and grow your business in today's
          complex, multi-cloud environment.
        </h2>
        <div className="infra-image">
          <img src={infra} alt=""  data-aos="flip-down" data-aos-duration="1500"/>
          <img src={data} alt="" data-aos="flip-up" data-aos-duration="1500" />
        </div>
        <div className="application-image">
          <img src={application} alt="" data-aos="flip-down" data-aos-duration="1500" />
          <img src={smart} alt="" data-aos="flip-up" data-aos-duration="1500" />
        </div>
        <div className="productivity-image">
          <img src={productivity} alt="" data-aos="flip-down" data-aos-duration="1500" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GcpGooglePage;
