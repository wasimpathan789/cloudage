import "./databricksPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import FuturisticCard from "../../../components/futuristicCard/FuturisticCard";
import databricks from "../../../assets/databricks/databricks-wall.png";
import Work from "../../../components/work/Work";
import Clay from "../../../assets/databricks/clairvoyent.png";
import Capgemenu from "../../../assets/databricks/capgemini.png";
import Cybage from "../../../assets/databricks/cybage.png";
import HCL from "../../../assets/databricks/hcl-1.png";
import Inndata from "../../../assets/databricks/inndata.png";
import Inforay from "../../../assets/databricks/inforay.png";

const DatabricksPage = () => {
  return (
    <div>
      <Navbar />
      <div className="databricks">
        <FuturisticCard
          image={databricks}
          title={"Databricks"}
          description={"Helping data teams solve the world’stoughest problems"}
        />
        <div className="databricks-wrapper">
          <div className="databricks-watch">
            <div className="databricks-watch-left">
              <iframe src="https://youtu.be/7t4lhzTWM5I" frameborder="0"></iframe>
              <div className="image">

              </div>
            </div>
            <div className="databricks-watch-right">
              <h1>Watch Ali Ghodsi's Keynote</h1>
              <p>
                Ali talks about the opportunity data presents to tackle the
                world’s toughest problems.
              </p>
            </div>
          </div>
          <div className="unified-data">
            <div className="unified-data-top">
              <h1>Unified Data Analytics Platform</h1>
              <p>
                One cloud platform for massive scale data engineering and
                collaborative data science.
              </p>
            </div>
            <div className="unified-data-center">
              <button>LEARN MORE</button>
            </div>

            <div className="unified-data-bottom">
              <p>
                Increases the reliability, quality, and performance of data
                lakes
              </p>
              <p>
                Enables collaborative data science and machine learning on all
                your data
              </p>
              <p>
                Delivers actionable insights and predictions to the business
              </p>
            </div>
          </div>
        </div>
        <Work
          image1={Clay}
          image2={Capgemenu}
          image3={HCL}
          image4={Inndata}
          image5={Inforay}
          image6={Cybage}
          title={"We Train Employees That Work Here"}
        />
      </div>

      <Footer />
    </div>
  );
};

export default DatabricksPage;
