import "./hadoopPage.css";
import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import hadoopImage from "../../../assets/hadoop/hadoop-image.png";
import hadoopLogo from "../../../assets/hadoop/hadoop-logo.png";




const HadoopPage = () => {
  return (
    <div>
      <Navbar />
      <div className="hadoop-page-card">
        <h1>Apache Hadoop as A Service
</h1>
        <div className="hadoop-page-card-logo">
            <p>The open-source project that spawned generations of big-data technologies and provides the foundation for Hive, Pig, and MapReduce, Hadoop is still today’s choice for workloads that require virtually unlimited scalability, a high degree of dependability, and support for a wide range of workload types. These characteristics make Apache Hadoop particularly suitable for batch processing of ETL jobs on large data sets, complex workflow diagrams, or data structures that exceed the in-memory limitations of other engines.

</p>
<img src={hadoopLogo} alt="" />

        </div>

      </div>
      <div className="hadoop-wrapper">
        <div className="hadoop-wrapper-top">
          <h1>
            A self-managing and self-optimizing implementation of Apache Hadoop
          </h1>
          <h2>
            Qubole offers the first Autonomous Data Platform implementation of
            the open-source Apache Hadoop project.
          </h2>
          <div className="hadoop-image">
          <img src={hadoopImage} alt="" />


          </div>
        </div>
        <div className="hadoop-wrapper-bottom">
          <p>
            “WE ARE GROWING VERY FAST AS A STARTUP AND NEEDED A WAY ACCELERATE
            OUR TIME TO VALUE FOR HADOOP,” EXPLAINS MICKEY ALON, INSIGHTERA’S
            CEO AND CO-FOUNDER. “WE WANTED TO FOCUS MORE ON DATA PROCESSING AND
            TURNING INSIGHTS INTO ACTIONABLE RESULTS, AND LESS ON THE
            OPERATIONAL SIDE OF HADOOP AND AMAZON S3 FOR TACKLING OUR BIG DATA
            INTEGRATION CHALLENGES.”
          </p>
        </div>
        <div className="mikey-alon">
          <h1>MIKEY ALON</h1>
          <h2>INSIGHTERA’S CEO AND CO-FOUNDER</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HadoopPage;
