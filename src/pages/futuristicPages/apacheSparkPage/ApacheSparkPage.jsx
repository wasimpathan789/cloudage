import "./apacheSparkPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Work from "../../../components/work/Work";
import hcl from "../../../assets/apache/hcl.png";
import inndata from "../../../assets/apache/inndata.png";
import harman from "../../../assets/apache/harman.jpg";
import harman2 from "../../../assets/apache/harman2.jpg";
import capgemini from "../../../assets/apache/cap.png";
import figmd from "../../../assets/apache/figmd.png";
import clair from "../../../assets/apache/clair.png";
import logo from "../../../assets/apache/logo.png";
import dev from "../../../assets/apache/dev.jpg";
import lgwoman from "../../../assets/apache/lgwoman.jpg";
import lg from "../../../assets/apache/lg.jpg";
import one from "../../../assets/apache/one.png";

const ApacheSparkPage = () => {
  return (
    <div>
      <Navbar />
      <div className="apache-banner">
        <div className="apache-banner-left">
          <h1 data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            APACHE Spark
          </h1>
          <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
            Apache Spark is a unified analytics engine for Big Data processing,
            with built-in modules for streaming, SQL, Machine Learning and graph
            processing.
          </p>
        </div>
        <div className="apache-banner-right">
          <img
            src={logo}
            alt=""
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          />
        </div>
      </div>
      <div className="apache-sparks">
        <h1>Apache Spark™</h1>
        <div className="apache-spark">
          <div
            className="apache-spark-left"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            An integrated part of CDH and supported with Cloudera Enterprise,
            Apache Spark is the open standard for flexible in-memory data
            processing that enables batch, real-time, and advanced analytics on
            the Apache Hadoop platform. Via the One Platform Initiative,
            Cloudera is committed to helping the ecosystem adopt Spark as the
            default data execution engine for analytic workloads. Apache Spark
            is the open standard for flexible in-memory data processing that
            enables batch, real-time, and advanced analytics on the Apache
            Hadoop platform. Via the One Platform Initiative, Cloudera is
            committed to helping the ecosystem adopt Spark as the default data
            execution engine for analytic workloads. machine-learning built-in.
          </div>
          <div className="apache-spark-right">
            <video
              controls
              src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/bigquery.mp4#t=1"
            ></video>
          </div>
        </div>
      </div>

      <div className="apache-easy">
        <div className="apache-easy-left">
          <img src={dev} alt="" data-aos="flip-up" data-aos-duration="2000" />
        </div>
        <div className="apache-easy-right">
          <h1>Easy, Productive Development</h1>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Simple, yet rich, APIs for Java, Scala, and Python open up data for
            interactive discovery and iterative development of applications.
            Through shared common code, data scientists and developers can
            increase productivity with rapid prototyping for batch and streaming
            applications, using the language and third-party tools on which they
            already rely.
          </p>
        </div>
      </div>

      <div className="fast-processing">
        <div className="fast-processing-left">
          <h1>Fast Processing</h1>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Take advantage of Spark’s distributed in-memory storage for
            high-performance processing across a variety of use cases, including
            batch processing, real-time streaming, and advanced modeling and
            analytics. With significant performance improvements over MapReduce,
            Spark is the tool of choice for data scientists and analysts to turn
            their data into real results.
          </p>
        </div>
        <div className="fast-processing-right">
          <img src={lg} alt="" data-aos="flip-down" data-aos-duration="2000" />
        </div>
      </div>

      <div className="apache-easy">
        <div className="apache-easy-left">
          <img
            src={lgwoman}
            alt=""
            data-aos="flip-up"
            data-aos-duration="2000"
          />
        </div>
        <div className="apache-easy-right">
          <h1>The Cloudera difference for Apache Spark</h1>
          <p
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            The first integrated solution to support Apache Spark, Cloudera not
            only has the most experience — with production customers across
            industries — but also has built the deepest engineering integration
            between Spark and the rest of the ecosystem, including bringing
            Spark to YARN and adding necessary security and management
            integrations (500+ patches contributed, to date). Cloudera also has
            multiple Spark committers on staff, so you get direct access and
            influence to the roadmap based on your needs and use cases.
          </p>
        </div>
      </div>
      <div className="fast-processing">
        <div className="fast-processing-left">
          <h1>The One Platform Initiative</h1>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Apache Spark is well-positioned to replace MapReduce as the default
            data-processing engine in the Hadoop ecosystem, but for customers to
            fully embrace Spark for all production workloads, there is still
            work to be done to make it enterprise-grade. Cloudera’s One Platform
            Initiative focuses on the need to deeply integrate Spark with the
            Hadoop ecosystem so users get maximum benefits from their big data
            infrastructure. To achieve this vision, Cloudera’s committers,
            working alongside the community, will specifically address the
            issues shown in the diagram to the right (with some items already
            done).
          </p>
        </div>
        <div className="fast-processing-right">
          <img src={one} alt="" data-aos="flip-down" data-aos-duration="1500" />
        </div>
      </div>

      <Work
        title={"We Train Employees That Work Here"}
        image1={hcl}
        image2={harman2}
        image3={capgemini}
        image4={clair}
        image5={inndata}
        image6={figmd}
      />
      <Footer />
    </div>
  );
};

export default ApacheSparkPage;
