import "./aboutPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer.jsx";
import img1 from "../../assets/tayyar.png";
import img2 from "../../assets/burj.png";
import img3 from "../../assets/etisalat.png";
import img4 from "../../assets/parkar.png";
import img5 from "../../assets/cognizant.png";
import img6 from "../../assets/teradata.png";
import Approach from "../../assets/approach.png";
import Work from "../../components/work/Work";
import KnowProduct from "../../components/knowProduct/KnowProduct";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import LockIcon from "@mui/icons-material/Lock";
import VideocamIcon from "@mui/icons-material/Videocam";
import NearMeIcon from "@mui/icons-material/NearMe";
import LanguageIcon from "@mui/icons-material/Language";
import CloudQueueIcon from "@mui/icons-material/CloudQueue";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import HeroCard from "../../components/heroCard/HeroCard";
import office from '../../assets/a.jpg'
// import office from '../../assets/office.jpg'


const AboutPage = () => {
  return (
    <div>
      <Navbar />
      <div>
        <HeroCard image={office} title={"Why CloudAge?"} description={"We believe that data can make what is impossible today, possible tomorrow. That’s why."}/>

      </div>
      <div className="about-wrapper">
        <div className="about-welcome">
          <div className="welcome-right">
            <h1>Welcome to the CloudAge</h1>
          </div>
          <div className="welcome-left">
            <span className="horizontal-line"></span>
            <p>
              Big Data consulting and solutions provider offering services and
              training for Big Data Cloud and Machine Learning. We at CloudAge
              provide Hadoop Managed Services to help traditional enterprises
              adopt Apache Hadoop. We provide solutions that include Data
              Preparation, Data Discovery, Data Availability, and Data
              Analytics.
            </p>
          </div>
        </div>
        <hr
          style={{
            marginTop: "50px",
            color: "#000000",
            backgroundColor: "#000000",
            height: 0.1,
            borderColor: "#000000",
          }}
        />
        <div className="our-vision">
          <h1>Our Vision</h1>
          <p>
            Our expertise with Enterprise Distributions deliver a modern
            platform for analytics data management offerings, in AWS datacenter,
            Enterprises get one place to store, access, process, secure, and
            analyze all their data, empowering them to extend the value of
            existing investments while enabling fundamental new ways to derive
            value from their data. Apache Hadoop Open source big data platform
            is the most widely adopted in the world, and As the leading educator
            of Hadoop professionals, CloudAge has trained over 1200 individuals
            worldwide and a seasoned professional services team to help deliver
            greater time to value.
            <br />
            <br />
            Solutions to enterprises that are looking to unlock the potential in
            their data without the time, cost, and complexity associated with
            traditional big data initiatives. CloudAge delivers an end-to-end
            solution, so that time is better spent analyzing and driving
            business value from big data. CloudAge provides a full spectrum of
            services in a private cloud that leverages Hadoop and helps
            businesses perform complex analytics and batch-production schedules
            not possible before Hadoop. CloudAge offers a mix of speed, scale,
            skills, and end-to-end solutions unavailable anywhere else in the
            big data space. <br />
            <br />
            <ul>
              <li>
                {" "}
                Outstanding scalability so you can grow as your workloads grow.{" "}
              </li>
              <li>
                {" "}
                Industry-leading transaction processing so you can make better,
                faster business decisions.{" "}
              </li>
              <li>
                High-throughput capacity enables you to respond more quickly.
                Optimized systems and validated designs for faster time to
                value.
              </li>
            </ul>
            <span> — Khurram Turk, CEO CloudAge Global Services Pvt Ltd</span>
          </p>
        </div>
        <div className="our-approach">
          <h1>Our Approach</h1>
          <div className="approch-image">
            <img src={Approach} alt="" />
          </div>
          <p>
            {" "}
            Insights with Faster Time-to-Value, the analysis of data drives
            decisions in every business. To gain better business insights, you
            need to manage the volume, variety, and velocity of data, while
            applying analytics. With Lenovo-engineered big data validated
            designs on Lenovo servers, you can harness the power of Apache™
            Hadoop® and Apache™ Spark® with Cloudera®, Hortonworks®, IBM®, and
            MapR®. Lenovo servers provide highly reliable and flexible
            foundations for your business analytics solutions so you can unlock
            the value of your data and deliver insights faster.{" "}
          </p>
          <div  className="approch-video" data-aos="" data-aos-delay= "100" data-aos-deration ="1000">
            {/* <video width="80%" height="0vh" controls> */}
            <video controls>

              {/* <source src="..Videos/video1.mp4" type="video/mp4"/> */}
              <source
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/era.mp4#t=1"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="know-headline">
          <h1> Know your product</h1>
        </div>

        <div className="know-your-product">
          <KnowProduct
            icon={
              <LocalPhoneIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"AI Call Center"}
            description={
              "The potential for AI in call centers is twofold. First, it can seamlessly give customers the right information they need at the right time."
            }
          />
          <KnowProduct
            icon={
              <LockIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Recommendation Engine"}
            description={
              "A recommendation engine, also known as a recommender system, is software that analyzes available data to make suggestions."
            }
          />
          <KnowProduct
            icon={
              <VideocamIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Video Analytics"}
            description={
              "Video content analysis is the capability of automatically analyzing video to detect and determine temporal and spatial events."
            }
          />
          <KnowProduct
            icon={
              <NearMeIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Sentiment Analytics"}
            description={
              "Sentiment analysis helps data analysts within large enterprises gauge public opinion, conduct nuanced market research, monitor brand and product reputation."
            }
          />
          <KnowProduct
            icon={
              <LanguageIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Global Web Solutions"}
            description={
              "Customized solution to meet specific requirements. Find the solution to meet the needs of your application or business."
            }
          />
          <KnowProduct
            icon={
              <CloudQueueIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Cloud Computing"}
            description={
              "Cloud computing is the delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet (“the cloud”)."
            }
          />
          <KnowProduct
            icon={
              <SecurityIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"High Speed Servers"}
            description={
              "Using AWS, expedite your high performance computing (HPC) workloads & save money by choosing from low-cost pricing models that match utilization needs.."
            }
          />
          <KnowProduct
            icon={
              <DescriptionIcon
                style={{
                  color: "#6EC1E4",
                  fontSize: "18px",
                  fontWeight: "700",
                }}
              />
            }
            title={"Performance"}
            description={
              "Cloud servers can be configured to provide levels of performance, security and control similar to those of a dedicated server."
            }
          />
        </div>
      </div>
      <Work
        image1={img1}
        image2={img2}
        image3={img3}
        image4={img4}
        image5={img5}
        image6={img6}
        title={"We Train Employees That Work Globally"}
      />

      <Footer />
    </div>
  );
};

export default AboutPage;
