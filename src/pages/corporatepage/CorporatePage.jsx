import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import Work from "../../components/work/Work";
import "./corporatePage.css";
import img1 from "../../assets/tayyar.png";
import img2 from "../../assets/burj.png";
import img3 from "../../assets/etisalat.png";
import img4 from "../../assets/parkar.png";
import img5 from "../../assets/teradata.png";
import img6 from "../../assets/inndata.png";
import Img from "../../assets/a.jpg";
import CorporateCard from "../../components/corporateCard/CorporateCard";

import SchoolIcon from "@mui/icons-material/School";
import TransferWithinAStationIcon from "@mui/icons-material/TransferWithinAStation";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import PersonIcon from "@mui/icons-material/Person";

const CorporatePage = () => {
  return (
    <div>
      <Navbar />
      <div
        className="corporate-hero"
        style={{
          backgroundImage: `url(${Img})`,
          width: "85%",
          backgroundSize: "cover",
        }}
      >
        <div className="overlay"></div>
        <div>
          <h1>Corporate Training</h1>
          <h2>
            Competent People Are The Most Crucial Assets Of The Enterprise
          </h2>
        </div>
      </div>

      <div className="corporate-cards corporate-container">
        <p>
          CloudAge training delivers everything you need to learn about the
          technology—Online and Offline. Own your learning schedule with
          self-paced, online courses. Take proctored certification exams from
          your home or office and after you’ve passed an exam, display your
          verified digital badge on any professional networking site.
        </p>
        <div className="coporate-card">
          <CorporateCard icon={<TransferWithinAStationIcon/>} title={"Check Eligibility Criteria For Students&IT Professionals"} description={"Individuals Looking for Production Grade IT Training."} />
          <CorporateCard icon={<CorporateFareIcon/>} title={"Corporate Training For Organizations"} description={"Up Skill Your Entire Workforce"} />
          <CorporateCard icon={<SchoolIcon/>} title={"Corporate Training For Universities"} description={"Individuals Looking for Production Grade IT Training."} />
          <CorporateCard icon={<PersonIcon/>} title={"Start My Training"} description={"Login Into Our Learning Management System"} />
        </div>
      </div>
      <Work
        image1={img1}
        image2={img2}
        image3={img3}
        image4={img4}
        image5={img5}
        image6={img6}
      />
      <Footer />
    </div>
  );
};

export default CorporatePage;
