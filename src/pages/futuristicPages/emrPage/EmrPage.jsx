import React from "react";
import Footer from "../../../components/footer/Footer";
import FuturisticCard from "../../../components/futuristicCard/FuturisticCard";
import Navbar from "../../../components/navbar/Navbar";
import "./emrPage.css";
import round1 from "../../../assets/emr/round1.png";
import round2 from "../../../assets/emr/round2.png";
import round3 from "../../../assets/emr/round3.png";
import cap from "../../../assets/emr/cap.png";
import figmd from "../../../assets/emr/figmd.png";
import harman from "../../../assets/emr/harman.png";
import hcl from "../../../assets/emr/hcl.png";
import clairvoyent from "../../../assets/emr/clairvoyent.png";
import foral from "../../../assets/emr/foral.png";
import bg from "../../../assets/emr/bg.jpg";


const EmrPage = () => {
  const benefitsCards = [
    {
      id: 1,
      title: " EASY TO USE",
      description:
        "EMR launches clusters in minutes. You don’t need to worry about node provisioning, infrastructure setup, Hadoop configuration, or cluster tuning. EMR takes care of these tasks so you can focus on analysis. Analysts, data engineers, and data scientists can launch a serverless Jupyter notebook in seconds using EMR Notebooks, allowing individuals and teams to collaborate and interactively explore, process and visualize data in an easy to use notebook format.",
    },
    {
      id: 2,
      title: "LOW COST",
      description:
        " EMR pricing is simple and predictable: You pay a per-instance rate for every second used, with a one-minute minimum charge. You can launch a 10-node EMR cluster with applications such as Apache Spark, and Apache Hive, for as little as $0.15 per hour. Because EMR has native support for Amazon EC2 Spot and Reserved Instances, you can also save 50-80% on the cost of the underlying instances.",
    },
    {
      id: 3,
      title: "ELASTIC",
      description:
        "With EMR, you can provision one, hundreds, or thousands of compute instances to process data at any scale. The number of instances can be increased or decreased manually or automatically using Auto Scaling (which manages cluster sizes based on utilization), and you only pay for what you use. Unlike the rigid infrastructure of on-premise clusters, EMR decouples compute and persistent storage, giving you the ability to scale each independently",
    },
    {
      id: 4,
      title: "RELIABLE ",
      description:
        " Spend less time tuning and monitoring your cluster. EMR is tuned for the cloud and constantly monitors your cluster — retrying failed tasks and automatically replacing poorly performing instances. EMR provides the latest stable open-source software releases, so you don’t have to manage updates and bug fixes, leading to fewer issues and less effort to maintain the environment. With multiple master nodes, clusters are highly available and automatically failover in the event of a node failure. ",
    },
    {
      id: 5,
      title: "SECURE",
      description:
        " EMR automatically configures EC2 firewall settings controlling network access to instances and launches clusters in an Amazon Virtual Private Cloud (VPC), a logically isolated network you define. For objects stored in S3, server-side encryption or client-side encryption can be used with EMRFS (an object store for Hadoop on S3), using the AWS Key Management Service or your own customer-managed keys. EMR makes it easy to enable other encryption options, like in-transit and at-rest encryption, and strong authentication with Kerberos.",
    },
    {
      id: 6,
      title: "FLEXIBLE",
      description:
        "You have complete control over your cluster. You have root access to every instance, you can easily install additional applications, and customize every cluster with bootstrap actions. You can also launch EMR clusters with custom Amazon Linux AMIs, and reconfigure running clusters on the fly without the need to re-launch the cluster.",
    },
  ];

  const useCases = [
    {
      id: 1,
      title: "MACHINE LEARNING",
      description:
        "Use EMR’s built-in Machine Learning tools, including Apache Spark MLlib, TensorFlow, and Apache MXNet for scalable machine learning algorithms, and use Custom AMI’s and Bootstrap Actions to easily add your preferred libraries and tools to create your own predictive analytics toolset.",
    },
    {
      id: 2,
      title: "EXTRACT TRANSFORM LOAD (ETL) ",
      description:
        "EMR can be used to quickly and cost-effectively perform data transformation workloads (ETL) such as – sort, aggregate, and join – on large datasets. ",
    },
    {
      id: 3,
      title: "CLICKSTREAM ANALYSIS ",
      description:
        "Analyze clickstream data from Amazon S3 using Apache Spark and Apache Hive to segment users, understand user preferences, and deliver more effective ads. ",
    },
    {
      id: 4,
      title: "REAL-TIME STREAMING",
      description:
        " Analyze events from Apache Kafka, Amazon Kinesis, or other streaming data sources in real-time with Apache Spark Streaming and EMR to create long-running, highly available, and fault-tolerant streaming data pipelines. Persist transformed data sets to Amazon S3 or HDFS, and insights to Amazon Elasticsearch.",
    },
    {
      id: 5,
      title: " INTERACTIVE ANALYTICS",
      description:
        "EMR Notebooks provide a managed analytic environment based on open-source Jupyter that allows data scientists, analysts, and developers to prepare and visualize data, collaborate with peers, build applications, and perform interactive analysis.",
    },
    {
      id: 6,
      title: "GENOMICS",
      description:
        " EMR can be used to process vast amounts of genomic data and other large scientific data sets quickly and efficiently. Researchers can access genomic data hosted for free on AWS. ",
    },
  ];
  return (
    <div>
      <Navbar />
      <FuturisticCard image={bg} title={"Amazon EMR"} description={"Easily Run and Scale Apache Spark, Hadoop, HBase, Presto, Hive and other Big Data Frameworks. ."} />

      <div className="emr-page">
        <div className="emr-get-started">
          <h1>Get started with AWS</h1>
          <div className="get-started-card">
            <div className="get-started-logo">
              <img src={round1} alt="" />
              <h1>Sign up for an AWS account</h1>
              <p>Instantly get access to the AWS Free Tier.</p>
            </div>
            <div className="get-started-logo">
              <img src={round2} alt="" />
              <h1>Sign up for an AWS account</h1>
              <p>Instantly get access to the AWS Free Tier.</p>
            </div>
            <div className="get-started-logo">
              <img src={round3} alt="" />
              <h1>Sign up for an AWS account</h1>
              <p>Instantly get access to the AWS Free Tier.</p>
            </div>
          </div>
        </div>

        <div className="erm-benefits">
          <h1 className="erm-benefits-headline">Benefits</h1>

          <div className=" emr-cases-cards">
            {benefitsCards.map((benefits) => (
              <div className="emr-benefits-card" key={benefits.id}>
                <h1>{benefits.title}</h1>
                <p>{benefits.description}</p>
              </div>
            ))}
          </div>

          <h1 className="erm-benefits-headline">Use Cases</h1>
          <div className="emr-cases-cards">
            {useCases.map((cases) => (
              <div className="emr-benefits-card" key={cases.id}>
                <h1>{cases.title}</h1>
                <p>{cases.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="amazon-emr">
          <h1>Amazon Elastic MapReduce(EMR)</h1>
          <div className="amazon-emr-wrapper">
            <div className="amazon-emr-left">
              <p>
                {" "}
                Amazon EMR is the industry-leading cloud-native Big Data
                platform, allowing teams to process vast amounts of data
                quickly, and cost-effectively at scale. Using open-source tools
                such as Apache Spark, Apache Hive, Apache HBase, Apache Flink,
                and Presto, coupled with the dynamic scalability of Amazon EC2
                and scalable storage of Amazon S3, EMR gives analytical teams
                the engines and elasticity to run Petabyte-scale analysis for a
                fraction of the cost of traditional on-premise clusters.
                Developers and analysts can use Jupyter-based EMR Notebooks for
                iterative development, collaboration, and access to data stored
                across AWS data products such as Amazon S3, Amazon DynamoDB, and
                Amazon Redshift to reduce time to insight and quickly
                operationalize analytics.
              </p>
            </div>
            <div className="amazon-emr-right">
              <video
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/emr.mp4"
                controls
              ></video>
            </div>
          </div>
        </div>
        <div className="emr-work">
          <h1>We Train Employees That Work Here</h1>
          <div className="work-clients">
            <img src={cap} alt="" style={{ fill: "#54595f" }} />
            <img src={figmd} alt="" />
            <img src={hcl} alt="" />
            <img src={clairvoyent} alt="" />
            <img src={harman} alt="" />
            <img src={foral} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EmrPage;
