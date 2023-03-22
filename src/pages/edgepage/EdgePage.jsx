import EdgeCard from "../../components/edgeCard/EdgeCard";
import "./edgePage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EdgeTopCard from "../../components/edgeTopCard/EdgeTopCard";
import Desert from "../../assets/desert.jfif";

const EdgePage = () => {
  return (
    <div>
      <Navbar />
      <EdgeTopCard
        title={
          "Ingest, curate, and analyze real-time streaming data with Cloudera DataFlow(CDF)."
        }
      />
      <EdgeCard
        title={"Cloudera DataFlow"}
        description={
          "Cloudera DataFlow (CDF), formerly Hortonworks DataFlow (HDF), is a scalable, real-time streaming analytics platform that ingests, curates, and analyzes data for key insights and immediate actionable intelligence."
        }
        image={Desert}
      />
      <div className="edgepage">
        <div className="edge-cloudera">
          <div className="edge-left">
            <h1>Cloudera DataFlow</h1>
            <p>
              Cloudera DataFlow (CDF) is a scalable, real-time streaming data
              platform that collects, curates, and analyzes data so customers
              gain key insights for immediate actionable intelligence. It meets
              the challenges faced with data-in-motion, such as real-time stream
              processing, data provenance, and data ingestion from IoT devices
              and other streaming sources. <br /> <br /> Built on 100% open
              source technology, CDF helps you deliver a better customer
              experience, boost your operational efficiency and stay ahead of
              the competition across all your strategic digital initiatives.{" "}
              <br /> <br /> CDF can do this within a common framework that
              offers unified security, governance and management.
            </p>
          </div>
          <div className="edge-right">
            <video
              controls
              src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/Cloudera-DataFlow.mp4"
            >
              Your browser doesnt support this video format
            </video>
          </div>
        </div>
        <div className="why-cloudera">
          <div className="why-cloudera-left">
            <video controls>
              <source
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/CloudAge-Alumni.mp4"
                type="video/mp4"
              />
            </video>
          </div>
          <div className="why-cloudera-right">
            <h1>Why Cloudera DataFlow?</h1>
            <p>
              CDF addresses a wide range of uses like Customer 360, data
              movement between data centers (on-premises and cloud), data
              ingestion from real-time streaming sources, log data ingestion and
              processing, streaming analytics, etc. CDF also addresses a wide
              spectrum of IoT-specific use cases like Predictive Maintenance,
              Asset Tracking, Patient Monitoring, Utility Monitoring, Smart
              Cities, etc. <br /> <br />
              CDF is the only platform in the market to offer out-of-the-box
              data provenance on streaming data. With an extremely strong
              community behind it, Apache NiFi powers CDF’s Flow Management
              capabilities with over 260+ pre-built processors for data source
              connectivity, ingestion, transformation, and content routing.
            </p>
          </div>
        </div>
        <div className="edge-key-aspects">
          <h1>The key aspects of the CDF platform are:</h1>
          <div className="edge-key-aspect-contents">
            <h1>Edge Data Management </h1>
            <p>Set up hundreds of MiNiFi agents in or near edge devices to enable edge data collection, content filtering, routing etc. This allows you to take on complex, distributed use cases such as connecting hundreds of retail stores across the country or getting data from thousands of utility sensors from your consumer edge. This is going to be a significant area of investment for us given our customer interest, the industry trends and the market potential.</p>
          </div>
          <div className="edge-key-aspect-contents">
            <h1>Flow Management </h1>
            <p>Adopt a no-code approach to create visual flows for building complex data ingestion / transformation with drag-and-drop ease. Powered by Apache NiFi and its 260+ pre-built processors, CDF enables you to take on extremely high-scale, high-volume and high-speed data ingestion use cases with simplicity and ease.</p>
          </div>
          <div className="edge-key-aspect-contents">
            <h1>Stream Processing  </h1>
            <p>Manage and process multiple streams of real-time data using the most advanced distributed stream processing system – Apache Kafka. Process millions of real-time messages per second to feed into your data lake or for immediate streaming analytics.</p>
          </div>
          <div className="edge-key-aspect-contents">
            <h1>Streaming Analytics </h1>
            <p>Analyze millions of streams of data in real-time using advanced techniques such as aggregations, time-based windowing, content-filtering etc., to generate key insights and actionable intelligence for predictive and prescriptive analytics. CDF is the only streaming platform to offer a choice of 3 different streaming analytics solutions – Apache Storm, Kafka Streams and Apache Spark Streaming.</p>
          </div>
          <div className="edge-key-aspect-contents">
            <h1>Enterprise Services </h1>
            <p>Leverage a common set of enterprise services for unified security, governance, and single sign-on across the entire Cloudera DataFlow platform. This makes the platform experience truly enriching when the same set of services make the interoperability between components seamless..</p>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default EdgePage;
