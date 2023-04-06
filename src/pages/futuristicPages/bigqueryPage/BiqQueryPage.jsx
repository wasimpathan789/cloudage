import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import Work from "../../../components/work/Work";
import "./bigQueryPage.css";
import google from "../../../assets/bigquery/google.png";
import inforay from "../../../assets/bigquery/iforay.png";
import hcl from "../../../assets/bigquery/hcl-1.png";
import cybage from "../../../assets/bigquery/cybage.png";
import inndata from "../../../assets/bigquery/inndata.png";
import capgemini from "../../../assets/bigquery/capgemini.png";
import getup from "../../../assets/bigquery/getup.png";
import scale from "../../../assets/bigquery/scale.png";
import protect from "../../../assets/bigquery/protect.png";
import accelerate from "../../../assets/bigquery/accelerate.png";
import control from "../../../assets/bigquery/control.png";

const BiqQueryPage = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-recomondation">
        <h1  data-aos="fade-right" data-aos-duration="2000">
          BigQuery can provide a 3-year TCO that is 26-34% lower than cloud
          enterprise data warehouse alternatives.
        </h1>
      </div>
      <div className="hd-insight-banner bg-insight-banner">
        <div className="hd-insight-banner-left bg-insight-banner-left ">
          <h1  data-aos="fade-left" data-aos-duration="2000">Big-Query</h1>
          <p data-aos="fade-right" data-aos-duration="2000">
            BigQuery is a fully-managed, serverless Data Warehouse that enables
            scalable analysis over petabytes of data.
          </p>
        </div>
        <div className="hd-insight-banner-right bg-insight-banner-right">
          <img src={google} alt=""   data-aos="zoom-in"
            data-aos-duration="2000"/>
        </div>
      </div>
      <div className="bg-wrapper">
        <div className="bg-big-query">
          <h1  data-aos="fade-up-left"
            data-aos-duration="2000">Big-Query</h1>
          <div className="bg-big-query-container">
            <div className="bg-big-query-container-left">
              <p  data-aos="fade-up-left"
            data-aos-duration="2000">
                BigQuery is a serverless, highly-scalable, and cost-effective
                cloud data warehouse with an in-memory BI Engine and Machine
                Learning built-in. <br /> <br />
                Analyze all your batch and streaming data by creating a logical
                data warehouse over managed columnar storage, as well as data
                from object storage and spreadsheets. Create blazing-fast
                dashboards and reports with the in-memory BI Engine. Build and
                operationalize machine learning solutions or carry out
                geospatial analysis using simple SQL. Securely share insights
                within your organization and beyond as datasets, queries,
                spreadsheets, and reports. <br /> <br />
                BigQuery’s powerful streaming ingestion captures and analyzes
                data in real-time, ensuring insights are always current. Plus,
                you can analyze up to 1 TB of data and store 10 GB of data for
                free each month.
              </p>
            </div>
            <div className="bg-big-query-container-right">
              <video  data-aos="fade-up-left"
            data-aos-duration="2000"
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/bigquery-1.mp4"
                controls
              ></video>
            </div>
          </div>
        </div>
        <div className="bg-focus">
          <h1 data-aos="fade-up-right"
            data-aos-duration="2000">Focus on the analytics, not your infrastructure</h1>
          <div className="bg-focus-wrapper">
            <div className="bg-focus-right">
              <img src={getup} alt="" data-aos="fade-up-left"
            data-aos-duration="2000" />
            </div>
            <div className="bg-focus-right">
              <h2  data-aos="fade-up"
     data-aos-duration="2000">Get up and running fast</h2>
              <p data-aos="fade-up"
     data-aos-duration="2000">
                Set up your data warehouse in seconds and start to query data
                immediately. BigQuery runs blazing-fast SQL queries on gigabytes
                to petabytes of data and makes it easy to join public or
                commercial datasets with your data. Machine Learning built-in.{" "}
                <br /> <br />
                Train an ML model in minutes or drive geospatial analysis with
                plain SQL. Ingest streaming data and visualize insights. <br />{" "}
                <br />
                Eliminate the time-consuming work of provisioning resources and
                reduce your downtime with a serverless infrastructure that
                handles all ongoing maintenance, including patches and upgrades.
                BigQuery uses familiar ANSI-compliant SQL and provides ODBC and
                JDBC drivers to make integration with your data fast and easy.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-scale-seamly">
          <div className="bg-scale-seamly-left">
            <h1 data-aos="fade-up"
     data-aos-duration="2000">Scale seamlessly</h1>
            <p data-aos="fade-up"
     data-aos-duration="2000">
              BigQuery separates storage and computes to enable elastic scaling
              that streamlines capacity planning for data warehouses. BigQuery
              meets the challenges of real-time analytics by leveraging Google’s
              serverless infrastructure that uses automatic scaling and
              high-performance streaming ingestion to load data. BigQuery’s
              managed columnar storage, massively parallel execution, and
              automatic performance optimizations empower users to quickly and
              simultaneously analyze data from your cloud data lake regardless
              of the number of users or data size.
            </p>
          </div>
          <div className="bg-scale-seamly-right">
            <img src={scale} alt="" data-aos="fade-up"
     data-aos-duration="2000" />
          </div>
        </div>

        <div className="bg-accelerate">
          <h1 data-aos="fade-up"
     data-aos-duration="2000">Accelerate your insights with powerful analysis</h1>
          <div className="bg-accelerate-wrapper">
            <div className="bg-accelerate-wrapper-left">
              <img src={accelerate} alt="" data-aos="fade-up"
     data-aos-duration="2000" />
            </div>
            <div className="bg-accelerate-wrapper-right" data-aos="fade-up"
     data-aos-duration="2000">
              Gain a full view of all your data with seamless queries of data
              stored in BigQuery’s managed columnar storage, Cloud Storage,
              Cloud Bigtable, Sheets, and Drive. BigQuery integrates with
              existing ETL tools like Informatica and Talend to enrich your data
              with DTS. BigQuery supports popular BI tools like Tableau,
              MicroStrategy, Looker, and Data Studio out of the box, so anyone
              can easily create stunning reports and dashboards. Automatically
              ingest and visualize Google Ads and marketing data using BigQuery
              Data Transfer Service to set up a high-powered marketing data
              warehouse in just a few clicks. Through BigQuery Data Transfer
              Service, users also gain access to data connectors that help you
              easily transfer data from Teradata and Amazon S3 to BigQuery.
            </div>
          </div>
        </div>
        <div className="bg-scale-seamly">
          <div className="bg-scale-seamly-left">
            <h1 data-aos="fade-up"
     data-aos-duration="2000">Protect your business data and investments</h1>
            <p data-aos="fade-up"
     data-aos-duration="2000">
              BigQuery makes it easy to maintain a strong security and
              governance foundation. Eliminate data operation burdens with
              automatic data replication for disaster recovery and high
              availability of processing for no additional charge. BigQuery
              offers a 99.9% SLA subject to terms here and adheres to the
              Privacy Shield Principles.
            </p>
          </div>
          <div className="bg-scale-seamly-right">
            <img src={protect} alt="" data-aos="fade-up"
     data-aos-duration="2000"/>
          </div>
        </div>

        <div className="bg-control-cost">
          <div className="bg-control-cost-left">
            <img src={control} alt="" data-aos="fade-up"
     data-aos-duration="2000"/>
          </div>
          <div className="bg-control-cost-right">
            <h1 data-aos="fade-up"
     data-aos-duration="2000">Control costs and reduce TCO</h1>
            <p data-aos="fade-up"
     data-aos-duration="2000">
              Only pay for the storage and compute resources you use, thanks to
              BigQuery’s serverless architecture. BigQuery’s separation of
              storage and computing makes it easy to scale independently and
              endlessly on demand, resulting in low-cost, economical storage.
              BigQuery can lower the total cost of ownership by 56%–88%.
            </p>
          </div>
        </div>
      </div>
      <Work
        title={"We Train Employees That Work Here"}
        image1={inndata}
        image2={inforay}
        image3={hcl}
        image4={capgemini}
        image5={cybage}
        image6={inndata}
      />
      <Footer />
    </div>
  );
};

export default BiqQueryPage;
