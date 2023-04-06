import "./gcpMlPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import FuturisticCard from "../../../components/futuristicCard/FuturisticCard";
import Work from "../../../components/work/Work";
import bg from "../../../assets/azure-ml/azure-ml-bg.jpg";
import idc from "../../../assets/gcp-ml/idc.png";
import phdata from "../../../assets/gcp-ml/phdata.png";
import suez from "../../../assets/gcp-ml/suez.png";
import zenith from "../../../assets/gcp-ml/zenith.png";
import dc from "../../../assets/gcp-ml/dc.png";
import banncer from "../../../assets/gcp-ml/hero-banner.png";
import plateform from "../../../assets/gcp-ml/plateform.png";
import airoplane from "../../../assets/gcp-ml/airoplane.png";
import activity from "../../../assets/gcp-ml/activity.png";
import google from "../../../assets/gcp-ml/google.png";
import tensor from "../../../assets/gcp-ml/tensor.png";

const GcpMlPage = () => {
  return (
    <div>
      <Navbar />
      <FuturisticCard
        title={"Google Cloud Platform "}
        description={
          "Machine Learning is functionality that helps software perform a task without explicit programming or rules."
        }
        image={bg} data-aos="fade-right"
      />

      <div className="gcp-ml-wrapper">
        <div className="gcp-take-your">
          <div className="gcp-take-your-left">
            <h1 data-aos="fade-right" data-aos-duration="1500">Take your Machine Learning projects to production</h1>
            <p data-aos="fade-left" data-aos-duration="1500">
              AI Platform makes it easy for machine learning developers, data
              scientists, and data engineers to take their ML projects from
              ideation to production and deployment, quickly and
              cost-effectively. From data engineering to “no lock-in”
              flexibility, AI Platform’s integrated tool chain helps you build
              and run your own machine learning applications. AI Platform
              supports Kubeflow, Google’s open-source platform, which lets you
              build portable ML pipelines that you can run on-premises or on
              Google Cloud without significant code changes. And you’ll have
              access to cutting-edge Google AI technology like TensorFlow, TPUs,
              and TFX tools as you deploy your AI applications to production.
            </p>
          </div>
          <div className="gcp-take-your-right">
            <img src={banncer} alt="" data-aos="fade-right" data-aos-duration="1500" />
          </div>
        </div>
        <div className="gcp-cloude-img">
          <img src={plateform} alt="" data-aos="fade-left" data-aos-duration="1500" />
          <img src={airoplane} alt=""  data-aos="fade-right" data-aos-duration="1500"/>
          <p data-aos="fade-left" data-aos-duration="1500">
            “Google Cloud Machine Learning Engine enabled us to improve the
            accuracy and speed at which we correct visual anomalies in the
            images captured from our satellites. It solved a problem that has
            existed for decades. It will allow Airbus Defence and Space to
            continue to provide unrivaled access to the most comprehensive range
            of commercial Earth observation data available today”.
          </p>
        </div>
        <div className="gcp-mathias">
          <h1 data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">Mathias Ortner</h1>
          <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">Data Analysis Image Processing Lead, Airbus Defence & Space.</p>
        </div>
        <div className="machine-development">
          <img src={activity} alt=""  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500"/>
        </div>
        <div className="gcp-we-empower">
          <div className="gcp-we-empower-left">
            <h1  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              We empower people to transform complex data, anywhere it resides,
              into clear and actionable insights
            </h1>
            <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              Rather than be an AWS clone, GCP has become a unique services
              outfit that providing massive-scale services, including artificial
              intelligence and machine learning. GCP’s advantages today include
              lower pricing via a sustained-usage discount, a much faster
              network connecting its data centers, live migration of virtual
              machines, massive scale, and availability zones, and a variety of
              redundant backups for always-available storage. What GCP doesn’t
              offer is the wealth of tools and add-ons that AWS does in its bid
              to address every use case.
            </p>
          </div>
          <div className="gcp-we-empower-right">
            <h1  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">
              We deliver an enterprise data cloud for any data, anywhere, from
              the Edge to AI
            </h1>
            <img src={google} alt="" data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="2000" />
          </div>
        </div>
        <div className="gcp-more-ai">
          <div className="gcp-more-ai-top">
            <h1  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">More AI resources</h1>
            <p  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500">Get started with machine learning on Google Cloud.</p>
          </div>
          <div className="gcp-more-ai-top">
            <img src={tensor} alt=""  data-aos="fade-up"
     data-aos-anchor-placement="top-bottom"  data-aos-duration="1500" />
          </div>
        </div>
      </div>
      <Work
        image1={idc}
        image2={phdata}
        image3={dc}
        image4={zenith}
        image5={suez}
        image6={dc}
      />
      <Footer />
    </div>
  );
};

export default GcpMlPage;
