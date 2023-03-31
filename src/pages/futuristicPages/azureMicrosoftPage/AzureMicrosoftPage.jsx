import "./azureMicrosoftPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import one from "../../../assets/azure-microsoft/1.png";
import two from "../../../assets/azure-microsoft/2.png";
import three from "../../../assets/azure-microsoft/3.png";
import capture5 from "../../../assets/azure-microsoft/capture-5.png";
import capture11 from "../../../assets/azure-microsoft/capture11.png";
import capture12 from "../../../assets/azure-microsoft/capture12.png";
import capture13 from "../../../assets/azure-microsoft/capture13.png";
import capture10 from "../../../assets/azure-microsoft/capture10.png";
import map from "../../../assets/azure-microsoft/map.png";
import capture7 from "../../../assets/azure-microsoft/capture7.png";

import capture9 from "../../../assets/azure-microsoft/capture9.png";
import capture14 from "../../../assets/azure-microsoft/capture14.png";
import capture15 from "../../../assets/azure-microsoft/capture15.png";
import capture16 from "../../../assets/azure-microsoft/capture16.png";
import azure from "../../../assets/azure-microsoft/azure.png";




const AzureMicrosoftPage = () => {
  return (
    <div>
      <Navbar />
      <div className="hd-insight-banner">
        <div className="hd-insight-banner-left">
          <h1>Invent with purpose.</h1>
          <p>Empower your inner inventor to turn ideas into outcomes.</p>
        </div>
        <div className="hd-insight-banner-right">
          <img src={capture5} alt="" />
        </div>
      </div>

      <div className="microsoft-wrapper">
        <div className="microsoft-start-turning">
          <h1>Start turning your ideas into solutions with Azure</h1>
          <div className="start-turning-cards">
            <div className="start-turning-card">
              <img src={capture10} alt="" />
              <h1>Be future-ready</h1>
              <p>
                Continuous innovation from Microsoft supports your development
                today and your product visions for tomorrow.
              </p>
            </div>

            <div className="start-turning-card">
              <img src={capture13} alt="" />
              <h1>Build on your terms</h1>
              <p>
                With a commitment to open source and support for all languages
                and frameworks, build how you want and deploy where you want to.
              </p>
            </div>

            <div className="start-turning-card">
              <img src={capture11} alt="" />
              <h1>Operate hybrid seamlessly</h1>
              <p>
                On-premises, in the cloud and at the edge—we will meet you where
                you are. Integrate and manage your environments with services
                designed for hybrid cloud.
              </p>
            </div>

            <div className="start-turning-card">
              <img src={capture12} alt="" />
              <h1>Trust your cloud</h1>
              <p>
                Get security from the ground up, backed by a team of experts and
                proactive compliance trusted by enterprises, governments and
                startups.
              </p>
            </div>
          </div>
        </div>

        <div className="microsoft-regions">
          <h1>54 regions, more than any other cloud provider</h1>
          <div className="microsoft-regions-image">
            <img src={map} alt="" />
          </div>
        </div>
        <div className="ready-to-go">
          <h1>Ready-to-go solutions to start building today</h1>
          <div className="ready-to-go-cards">
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
                <img src={capture9} alt="" />
              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
              <img src={azure} alt="" />

              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
              <img src={capture7} alt="" />

              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
              <img src={capture14} alt="" />

              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
              <img src={capture15} alt="" />

              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
            <div className="ready-to-go-card">
              <div className="ready-to-go-card-left">
              <img src={capture16} alt="" />

              </div>
              <div className="ready-to-go-card-right">
                <h1>Internet of Things</h1>
                <p>
                  Power your digital transformation, collect untapped data and
                  find new insights by connecting your devices, assets and
                  sensors.
                </p>
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <div className="microsoft-the-cloud">
        <h1>The cloud you can trust, with the numbers to prove it</h1>
        <div className="microsoft-the-cloud-wrapper">
          <img src={one} alt="" />
          <img src={two} alt="" />
          <img src={three} alt="" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AzureMicrosoftPage;
