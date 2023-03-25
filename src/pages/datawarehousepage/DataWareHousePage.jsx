import EdgeCard from "../../components/edgeCard/EdgeCard";
import EdgeTopCard from "../../components/edgeTopCard/EdgeTopCard";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import "./dataWareHousePage.css";
import Warehouse from "../../assets/warehouse.jpg";
import Modern from "../../assets/modern-data.png";
import DataWareHouse from "../../assets/datawarehouse-1.jpg";
import Other from "../../assets/other.png";

const DataWareHousePage = () => {
  return (
    <div>
      <Navbar />
      <EdgeTopCard
        title={
          "Bring together data from new and diverse sources with Cloudera Data Warehouse."
        }
      />
      <EdgeCard
        title={"Data Warehouse"}
        description={
          "An Enterprise Data Warehouse is a system used for reporting and data analysis, and is considered a core component of business intelligence."
        }
        image={Warehouse}
      />
      <div className="data-ware-house">
        <div className="data-ware-house-top">
          <h1>Data Warehouse</h1>
          <div className="data-ware-house-child">
            <div className="data-ware-house-top-left">
              <p>
                Data warehousing is the process of constructing and using a data
                warehouse. A data warehouse is constructed by integrating data
                from multiple heterogeneous sources that support analytical
                reporting, structured and/or ad hoc queries, and decision
                making.
                <br />
                A data warehouse is a type of data management system that is
                designed to enable and support business intelligence (BI)
                activities, especially analytics. Data warehouses are solely
                intended to perform queries and analysis and often contain large
                amounts of historical data. <br /> A Data Warehouse works as a
                central repository where information arrives from one or more
                data sources. Data flows into a data warehouse from the
                transactional system and other relational databases
              </p>
            </div>
            <div className=" data-ware-house-top-right">
              <img src={Modern} alt="" />
            </div>
          </div>
        </div>
        <div className="data-ware-house-center">
          <h1>Data Warehouse Infrastructure</h1>

          <div className="data-ware-house-child">
            <div className="data-ware-house-center-left">
              <img src={DataWareHouse} alt="" />
            </div>
            <div className="data-ware-house-center-right">
              <p>
                The virtual data architecture of a warehouse is physically
                managed atop one or more data platforms, including traditional
                relational database management systems (RDBMSs), newer DBMSs
                (for columns, NoSQL, and graph), file systems (of which Hadoop
                is becoming increasingly common), and object stores (typically
                cloud-based). <br />
                It also includes a highly diverse ecosystem of tools, such as
                those for reporting, analytics, integration, quality, metadata,
                development, and administration. <br />
                Finally, for speed, scale, interoperability, and high
                availability all the above infrastructure components rely
                heavily on underlying enterprise hardware—namely CPUs, server
                memory, networks, storage, and clouds.
              </p>
            </div>
          </div>
        </div>
        <div className="data-ware-house-bottom">
          <h1>Application of Data Warehouse</h1>

          <div className="data-ware-house-child">
            <div className="data-ware-house-bottom-left">
              <img src={Other} alt="" />
            </div>
            <div className="data-ware-house-bottom-right">
              <div className="data-ware-house-bottom-contents">
                <h2>Healthcare</h2>
                <p>
                  One of the most important sector which utilizes data
                  warehouses is the Healthcare sector.
                </p>
              </div>
              <div className="data-ware-house-bottom-contents">
                <h2>Hospitality Industry</h2>
                <p>
                  A major proportion of this industry is dominated by hotel and
                  restaurant services, car rental services, and holiday home
                  services.
                </p>
              </div>
              <div className="data-ware-house-bottom-contents">
                <h2>Insurance</h2>
                <p>
                  The design of tailor-made customer offers and promotions is
                  also possible through warehouses.
                </p>
              </div>
              <div className="data-ware-house-bottom-contents">
                <h2>The Retailers</h2>
                <p>
                  Retailers serve as middlemen between producers and consumers.
                  They need to maintain records of both parties to ensure their
                  existence in the market.
                </p>
              </div>
              <div className="data-ware-house-bottom-contents">
                <h2>Services Sector</h2>
                <p>
                  Data warehouses find themselves to be of use in the service
                  sector for maintenance of financial records, revenue patterns,
                  customer profiling, resource management, and human resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default DataWareHousePage;
