import "./hdInsightPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import capture from "../../../assets/hdinsight/capture.png";
import lock1 from "../../../assets/hdinsight/lock-1.png";
import round1 from "../../../assets/hdinsight/round-1.png";
import integration from "../../../assets/hdinsight/integration.png";
import tools from "../../../assets/hdinsight/tools.png";
import ecosystem from "../../../assets/hdinsight/ecosystem.png";
import monitoring from "../../../assets/hdinsight/monitoring.png";
import support from "../../../assets/hdinsight/support.png";
import Work from "../../../components/work/Work";
import adzaiper from "../../../assets/hdinsight/adzaiper.png";
import quasar from "../../../assets/hdinsight/quasar.png";
import hashmap from "../../../assets/hdinsight/hash.png";
import ellic from "../../../assets/hdinsight/ellic.png";
import zenith from "../../../assets/hdinsight/zenith.png";
import dcb from "../../../assets/hdinsight/dcb.png";
import hadoop from "../../../assets/hdinsight/hadoop.png";
import spark from "../../../assets/hdinsight/spark.png";
import hbase from "../../../assets/hdinsight/hbase.png";
import hive from "../../../assets/hdinsight/hive.png";
import kafka from "../../../assets/hdinsight/kafka.png";
import storm from "../../../assets/hdinsight/storm.png";
import capture5 from "../../../assets/hdinsight/capture5.png";
import capture6 from "../../../assets/hdinsight/capture6.png";
import capture7 from "../../../assets/hdinsight/capture7.png";
import capture8 from "../../../assets/hdinsight/capture8.png";
import capture9 from "../../../assets/hdinsight/capture9.png";

import easy1 from "../../../assets/hdinsight/easy-1.png";
import cost from "../../../assets/hdinsight/cost-1.png";

import HdInsightCarad from "../../../components/hdInsightCard/HdInsightCard";
import HdInsightCard from "../../../components/hdInsightCard/HdInsightCard";

const HdInsightPage = () => {
  const whatCan = [
    {
      id: 1,
      title: "Extract, transform and load (ETL) using HDInsight lifecycle",
      description:
        "Extract, transform and load your big data clusters on-demand with Hadoop MapReduce and Apache Spark.",
      img: "assets/hdinsight/capture.png",
    },
    {
      id: 2,
      title: "Streaming using HDInsight lifecycle",
      description:
        "Ingest and process millions of streaming events per second with Apache Kafka, Apache Storm, and Apache Spark Streaming.      ",
      img: "assets/hdinsight/capture.png",
    },
    {
      id: 3,
      title: "Interactive querying with HDInsight lifecycle      ",
      description:
        "Perform fast, interactive SQL queries at scale over structured or unstructured data with Apache Hive LLAP.      ",
      img: "assets/hdinsight/capture.png",
    },
    {
      id: 4,
      title:
        "Extend your on-premises big data investments with HDInsight lifecycle      ",
      description:
        "Extend your on-premises big data investments to the cloud and transform your business using the advanced analytics capabilities of HDInsight.      ",
      img: "assets/hdinsight/capture.png",
    },
  ];
  return (
    <div>
      <Navbar />
      <div className="hd-insight-banner">
        <div className="hd-insight-banner-left">
          <h1>HDInsight</h1>
          <p>
            Easy, cost-effective, enterprise-grade service for open source
            analytics.
          </p>
        </div>
        <div className="hd-insight-banner-right">
          <img src={capture9} alt="" />
        </div>
      </div>
      <div className="explore-hd">
        <h1>Explore HDInsight:</h1>
      </div>
      <div className="why-hd-insight">
        <h1>Why HDInsight?</h1>
        <div className="why-hd-insight-cards">
          <HdInsightCard
            image={easy1}
            title={"Easy"}
            description={
              "Quickly spin up open source projects and clusters, with no hardware to install or infrastructure to manage."
            }
          />
          <HdInsightCard
            image={cost}
            title={"Cost-effective"}
            description={
              "Reduce costs by creating big data clusters on-demand, easily scaling them up or down, and paying only for what you use."
            }
          />
          <HdInsightCard
            image={lock1}
            title={"Enterprise-grade"}
            description={
              "Get enterprise-grade security and industry-leading compliance, with more than 30 certifications."
            }
          />

          <HdInsightCard
            image={round1}
            title={"Open"}
            description={
              "Create optimised components for Hadoop, Spark and more. Keep up to date with the latest versions."
            }
          />
        </div>
      </div>
      <div className="hd-related-products">
        <h1>Related products and services</h1>
        <div className="hd-related-products-cards">
          <img src={capture5} alt="" />
          <img src={capture6} alt="" />
          <img src={capture7} alt="" />
          <img src={capture8} alt="" />
        </div>
      </div>

      <div className="what-comes-wrapper">
        <h1>What comes with HDInsight?</h1>

        <div className="apache-logo-cards">
          <div className="apache-logo-card">
            <img src={hadoop} alt="" />
            <h1>Apache hadoop </h1>
          </div>
          <div className="apache-logo-card">
            <img src={kafka} alt="" />
            <h1>Apache Kafka</h1>
          </div>
          <div className="apache-logo-card">
            <img src={hbase} alt="" />
            <h1>Apache HBase</h1>
          </div>
          <div className="apache-logo-card">
            <img src={hive} alt="" />
            <h1>Apache Hive LLAP</h1>
          </div>
          <div className="apache-logo-card">
            <img src={spark} alt="" />
            <h1>Apache Spark </h1>
          </div>
          <div className="apache-logo-card">
            <img src={storm} alt="" />
            <h1>Apache Storm </h1>
          </div>
        </div>
        <div className="open-source-cards">
          <HdInsightCard
            image={lock1}
            title={"Security and compliance"}
            description={
              "Get enterprise-grade data protection with monitoring, virtual networks, encryption, Active Directory authentication, authorization, and role-based access control. HDInsight has more than 30 industry certifications, including ISO, SOC, HIPAA, and PCI, to meet compliance standards."
            }
          />

          <HdInsightCard
            image={ecosystem}
            title={"Open source ecosystem"}
            description={
              " HDInsight supports the latest open source projects from the Apache Hadoop and Spark ecosystems. Stay up to date with the newest releases of open-source frameworks, including Kafka,HBase, and Hive LLAP."
            }
          />

          <HdInsightCard
            image={integration}
            title={"Native integration with Azure services"}
            description={
              "Seamlessly integrate with a wide variety of Azure data stores and services, including SQL Data Warehouse, Azure Cosmos DB, Data Lake Storage, Blob Storage, Event Hubs, and Data Factory."
            }
          />
          <HdInsightCard
            image={monitoring}
            title={"Simplified monitoring"}
            description={
              "HDInsight integrates with Azure Log Analytics to provide a single interface where you can monitor all your clusters."
            }
          />
          <HdInsightCard
            image={support}
            title={"Broad application support"}
            description={
              "HDInsight supports a broad range of applications from the big data ecosystem, which you can install with a single click. Pick from more than 30 popular Hadoop and Spark applications for a variety of scenarios."
            }
          />
          <HdInsightCard
            image={tools}
            title={"Multiple languages and tools"}
            description={
              "Seamlessly integrate with a wide variety of Azure data stores and services, including SQL Data Warehouse, Azure Cosmos DB, Data Lake Storage, Blob Storage, Event Hubs, and Data Factory."
            }
          />
        </div>

        <div className="what-can">
          <h1>What can you do with HDInsight?</h1>

          {whatCan.map((what, id) => (
            <div key={what.id} className="what-can-wrapper">
              <div className="what-can-wrapper-left">
                <h1>{what.title}</h1>
                <p>{what.description}</p>
              </div>
              <div className="what-can-wrapper-right">
                <img src={what.img} alt="" />
              </div>
            </div>
          ))}
        </div>
        <div className="hd-use-cases">
          <h1>Use Cases</h1>
          <div className="hd-use-cases-cards">
            <div className="hd-use-cases-card">
              <h1>Customer insights</h1>
              <p>
                Help employees make data-driven decisions by building an
                end-to-end open-source analytics platform. Easily process
                massive amounts of data from different sources. <br /> Learn how
                Roche Diagnostics uses HDInsight for predictive maintenance.
              </p>
            </div>
            <div className="hd-use-cases-card">
              <h1>Personalized recommendations</h1>
              <p>
                Engage your customers in new ways by building personalized
                recommendation engines. <br /> Learn how Milliman uses HDInsight
                for risk assessment.
              </p>
            </div>
            <div className="hd-use-cases-card">
              <h1>Predictive maintenance</h1>
              <p>
                Predict and prevent failures and keep vital equipment running.
                Ingest and process data in real-time to optimize operations.{" "}
                <br />
                Learn how Roche Diagnostics uses HDInsight for predictive
                maintenance.
              </p>
            </div>
            <div className="hd-use-cases-card">
              <h1>Risk assessment</h1>
              <p>
                Build better models by transforming and analyzing your critical
                data and help keep your data secure with enterprise-grade
                capabilities.
                <br /> Learn how Milliman uses HDInsight for risk assessment.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Work
        title={"We Train Employees That Work Here"}
        image1={adzaiper}
        image2={zenith}
        image3={hashmap}
        image4={dcb}
        image5={ellic}
        image6={quasar}
      />

      <Footer />
    </div>
  );
};

export default HdInsightPage;
