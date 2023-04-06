import Footer from "../../../components/footer/Footer";
import Navbar from "../../../components/navbar/Navbar";
import "./dataPage.css";
import lines3 from "../../../assets/data/lines3.png";
import odi from "../../../assets/data/odi.png";
import layer from "../../../assets/data/daas.png";
import benefits from "../../../assets/data/benefits.png";
import { useState, useEffect } from "react";
import alight from "../../../assets/data/alight.png";
import barclays from "../../../assets/data/barclays.png";
import rbs from "../../../assets/data/rbs.png";

const DataPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderImages = [
    { urls: `${alight}` },
    { urls: `${barclays}` },
    { urls: `${rbs}` },
  ];
  const length = sliderImages.length - 1;
  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? length : activeIndex - 1);
  };
  const nextSlide = () => {
    setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(activeIndex === length ? 0 : activeIndex + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div>
      <Navbar />
      <div className="data-banner">
        <h1 data-aos="fade-right" data-aos-duration="1500">
          Data as a Service
        </h1>
        <p data-aos="fade-right" data-aos-duration="1500">
          Your company’s data should be its greatest asset. It ought to be easy
          to develop new applications based on your data and to generate
          essential business insights – but for too many, legacy systems and
          databases make this difficult or impossible.
        </p>
      </div>
      <div className="data-wrapper">
        <div className="data-did-u">
          <h1 data-aos="fade-down-right" data-aos-duration="1500">
            {" "}
            Did You Know?
          </h1>
          <p data-aos="fade-down-left" data-aos-duration="1500">
            Organizations are turning to a new approach: Data as a Service. This
            strategic initiative is an investment in consolidating and
            organizing your enterprise data in one place, then making it
            available to serve new and existing digital initiatives. Data as a
            Service becomes a system of innovation, exposing data as a
            cross-enterprise asset. It unlocks data from legacy systems to drive
            new applications and digital systems, without the need to disrupt
            existing backends.
          </p>
        </div>
        <div className="data-challanges">
          <h1 data-aos="fade-up" data-aos-duration="3000">
            Challenges
          </h1>
          <p data-aos="fade-up" data-aos-duration="3000">
            The keys to success in the digital age are how quickly you can build
            innovative applications, scale them and gain insights from the data
            they generate – but legacy systems hold you back.
          </p>
          <div className="data-challenge-cards">
            <div className="data-challenge-card">
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Lack of Agility
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000">
                Demands for faster time to market and higher productivity are
                held back by traditional rigid relational data models, waterfall
                development, and the wariness of altering existing systems.
              </p>
            </div>
            <div className="data-challenge-card">
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Data Locked in Silos
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000">
                No complete view of your data? That means poor customer
                experience, missing insights, and slower app development.
              </p>
            </div>
            <div className="data-challenge-card">
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Poor Data Accessibility
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000">
                Existing systems aren’t built for the modern access patterns of
                24/7 customer experiences on web, mobile, and social – and
                they’re single points of failure.
              </p>
            </div>
            <div className="data-challenge-card">
              <h1 data-aos="fade-up" data-aos-duration="3000">
                Limited Data Support
              </h1>
              <p data-aos="fade-up" data-aos-duration="3000">
                Demands for faster time to market and higher productivity are
                held back by traditional rigid relational data models, waterfall
                development, and the wariness of altering existing systems.
              </p>
            </div>
          </div>
        </div>
        <div className="data-solution">
          <h1
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            Solution
          </h1>
          <div className="data-solution-top">
            <h1
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-duration="1500"
            >
              Deliver Data as a Service within your organization to speed
              development, integrate data, and improve accessibility and
              performance.
            </h1>
            <div className="data-solution-top-div">
              <img
                src={lines3}
                alt=""
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
              />
              <p data-aos="fade-up" data-aos-anchor-placement="center-bottom">
                The path to Data as a Service is to implement an Operational
                Data Layer (ODL). This data layer sits in front of legacy
                systems, enabling you to meet challenges that the existing
                architecture can’t handle – without the difficulty and risk of a
                full rip and replace. Depending on your requirements, an ODL can
                draw data from one or many source systems and power one or many
                consuming applications. An ODL can be used to serve only reads,
                accept writes that are then written back to source systems, or
                evolve into a system of record and eventually replace legacy
                systems entirely and simplify the enterprise architecture.
              </p>
            </div>
          </div>
          <div className="data-solution-bottom">
            <img src={odi} alt="" data-aos="flip-up" data-aos-duration="1500" />
          </div>

          <h2></h2>
        </div>
        <div className="data-how">
          <h1 data-aos="zoom-in" data-aos-duration="1500">
            How
          </h1>
          <p data-aos="zoom-in-up " data-aos-duration="1500">
            Successfully building an ODL and delivering Data as a Service
            requires a combination of people, process, and technology. Here’s
            how MongoDB can help:
          </p>
        </div>
        <div className="data-people">
          <h1 data-aos="fade-right" data-aos-duration="1500">
            People and Process
          </h1>
        </div>
        <div className="data-layer">
          <h1 data-aos="fade-left" data-aos-duration="1500">
            Data Layer Realization
          </h1>
          <h2 data-aos="fade-up" data-aos-duration="3000">
            MongoDB has developed a tried and tested approach to constructing an
            Operational Data Layer. The Data Layer Realization methodology helps
            you unlock the value of data stored in silos and legacy systems,
            driving rapid, iterative integration of data sources for new and
            consuming applications. Data Layer Realization offers the expert
            skills of MongoDB’s consulting engineers but also helps develop your
            own in-house capabilities, building deep technical expertise and
            best practices.
          </h2>
          <div className="data-layer-image">
            <img
              src={layer}
              alt=""
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            />
          </div>
          <p
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            This process for constructing an Operational Data Layer has been
            successfully implemented with many customers. Starting with clear
            definitions of project scope and identifying required producing and
            consuming systems is the first step to ensure success. Based on
            these findings, we assign data stewards for clear chains of
            responsibility, then begin the process of developing and deploying
            the Operational Data Layer with loading and merging, data access API
            creation, validation, and optimization. This process is iterative,
            repeating to add new access patterns and consuming apps or enrich
            the ODL with new data sources. <br /> <br /> A successfully
            implemented ODL is a springboard for the agile implementation of new
            business requirements. MongoDB can help drive continued innovation
            through a structured program that facilitates prototyping and
            development of new features and applications.
          </p>
        </div>
        <div className="data-technology">
          <h1 data-aos="zoom-in-left" data-aos-duration="1500">
            Technology
          </h1>
          <h2 data-aos="zoom-in-right" data-aos-duration="1500">
            Why the MongoDB Intelligent Operational Data Platform?
          </h2>
          <p data-aos="zoom-out" data-aos-duration="1500">
            When you choose MongoDB as the foundation for DaaS, you’re investing
            in the best technology for your system of innovation.
          </p>
        </div>
        <div className="data-mongodb">
          <h1 data-aos="fade-down" data-aos-duration="1500">
            MongoDB is the best way to work with data
          </h1>
          <div className="data-mongodb-cards">
            <div className="data-mongodb-card">
              <h1 data-aos="fade-down" data-aos-duration="1500">
                Lack of Agility
              </h1>
              <p data-aos="fade-down" data-aos-duration="1500">
                MongoDB’s document model makes it simple to model – or remodel –
                data in a way that fits the needs of your applications.
              </p>
            </div>
            <div className="data-mongodb-card">
              <h1 data-aos="fade-down" data-aos-duration="1500">
                Data Locked in Silos
              </h1>
              <p data-aos="fade-down" data-aos-duration="1500">
                Unifying data in MongoDB means you can write less code and get
                better performance when accessing data.
              </p>
            </div>
            <div className="data-mongodb-card">
              <h1 data-aos="fade-down" data-aos-duration="1500">
                Poor Data Accessibility
              </h1>
              <p data-aos="fade-down" data-aos-duration="1500">
                A flexible data model is essential to integrate multiple source
                systems to offer a unified DaaS: adapt your schema at any time,
                without disruption.
              </p>
            </div>
            <div className="data-mongodb-card">
              <h1 data-aos="fade-down" data-aos-duration="1500">
                Limited Data Support
              </h1>
              <p data-aos="fade-down" data-aos-duration="1500">
                Query data in any way your applications require, meeting the
                demands of different workloads while providing ACID guarantees
                to ensure data integrity.
              </p>
            </div>
          </div>
          <h2 data-aos="fade-up" data-aos-duration="1500">
            MongoDB lets you intelligently put data where you need it
          </h2>
          <div className="data-mongodb-intelligent-cards">
            <div className="data-mongodb-intelligent-card">
              <h1 data-aos="fade-up" data-aos-duration="1500">
                Availability
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                Built-in redundancy and self-healing recovery ensure service
                continuity of DaaS.
              </p>
            </div>
            <div className="data-mongodb-intelligent-card">
              <h1 data-aos="fade-up" data-aos-duration="1500">
                Scalability
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                MongoDB ensures that you can scale your DaaS to store all your
                enterprise data and serve the most intensive workloads and
                demanding users.
              </p>
            </div>
            <div className="data-mongodb-intelligent-card">
              <h1 data-aos="fade-up" data-aos-duration="1500">
                Workload Isolation
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                Run operational apps while also serving analytics and BI to
                unlock critical insights in real-time – all on a single data
                platform.
              </p>
            </div>
            <div className="data-mongodb-intelligent-card">
              <h1 data-aos="fade-up" data-aos-duration="1500">
                Data Locality
              </h1>
              <p data-aos="fade-up" data-aos-duration="1500">
                Distribute your MongoDB cluster globally for worldwide DaaS
                coverage and regulatory compliance.
              </p>
            </div>
          </div>
          <div className="data-mongodb-enables">
            <h1 data-aos="fade-up" data-aos-duration="1500">
              MongoDB enables data access and APIs
            </h1>
            <p data-aos="fade-up" data-aos-duration="1500">
              Consuming systems require powerful and secure access methods to
              the data in the ODL. MongoDB’s drivers provide access to a
              MongoDB-based ODL from the language of your choice. Data as a
              Service reaches its fullest potential when you present a common
              Data Access API for applications; this layer can be custom-built,
              or MongoDB Stitch can be used to expose access methods with a
              built-in rules engine for fine-grained security policies. <br />{" "}
              <br /> Data as a Service should also be available for analytics.
              The Connector for Business Intelligence allows analysts to connect
              to a MongoDB ODL with their BI and visualization tools of choice,
              or MongoDB Charts can connect directly to the ODL for native
              visualization. The Connector for Apache Spark exposes MongoDB data
              for use by all of Spark’s libraries, enabling advanced analytics
              such as machine learning processes.
            </p>
            <div className="data-mongodb-enables-image">
              <img
                src={benefits}
                alt=""
                data-aos="flip-down"
                data-aos-duration="1500"
              />
            </div>
          </div>
          <div className="data-mongodb-usecases">
            <h1 data-aos="zoom-in" data-aos-duration="1500">
              Use Cases
            </h1>
            <div className="data-mongodb-usecases-cards">
              <div className="data-mongodb-usecases-card">
                <h1 data-aos="fade-right" data-aos-duration="1500">
                  Single View
                </h1>
                <p data-aos="fade-left" data-aos-duration="1500">
                  DaaS is perfectly suited to generating a Single View of your
                  business. When you unify your enterprise data and make it
                  available as Data as a Service, the next step is to build an
                  application to expose a single view of that data to those who
                  need it. Better real-time visibility across the business,
                  improved customer service, and insight for more intelligent
                  cross-sell and up-sell opportunities are all within reach.
                </p>
              </div>
              <div className="data-mongodb-usecases-card">
                <h1 data-aos="fade-right" data-aos-duration="1500">
                  Mainframe Offload
                </h1>
                <p data-aos="fade-left" data-aos-duration="1500">
                  Mainframes and other legacy systems aren’t suited for modern
                  applications. Rigidity, downtime requirements, and high costs
                  mean that you’re held back from innovating for the business.
                  By implementing an Operational Data Layer in front of your
                  legacy systems, you can build new apps faster, deliver great
                  performance with high availability, meet new regulatory
                  demands, and make it drastically easier to serve mainframe
                  data to new digital channels – all while reducing MIPS and
                  hardware upgrade costs.
                </p>
              </div>
              <div className="data-mongodb-usecases-card">
                <h1 data-aos="fade-right" data-aos-duration="1500">
                  Analytics
                </h1>
                <p data-aos="fade-left" data-aos-duration="1500">
                  Providing Data as a Service doesn’t just support operational
                  applications. It can also power the analytics that makes sense
                  of your data – faster than a traditional data warehouse.
                  Whether you’re analyzing your unified enterprise data set for
                  business insights, running real-time analytics to take action
                  based on algorithms, or reviewing usage patterns to inform
                  application roadmaps, an Operational Data Layer can serve
                  analytical needs with the appropriate workload isolation to
                  ensure that there is no performance impact on production
                  workloads.
                </p>
              </div>
              <div className="data-mongodb-usecases-card">
                <h1 data-aos="fade-right" data-aos-duration="1500">
                  And More
                </h1>
                <p data-aos="fade-left" data-aos-duration="1500">
                  Building a mobile application to reach your customers at any
                  place, any time? Putting machine learning to work on your
                  enterprise data? Building recommendation engines, adding
                  social components to your UI, or personalizing content in
                  real-time? These applications, and any others you need to
                  build, benefit from being able to access Data as a Service.
                  What innovation could you power with all of your enterprise
                  data easily and securely available in one place?
                </p>
              </div>
            </div>
          </div>
          <div className="data-mongodb-slider">
            <div className="slider-container data-slider-container">
              <section>
                {sliderImages.map((slide, index) => (
                  <div
                    key={index}
                    className={
                      index === activeIndex ? "slides active" : "inactive"
                    }
                  >
                    <img className="slide-image data-slide-images" src={slide.urls} alt="" />
                  </div>
                ))}
              </section>
              <div className="arrows">
                <span className=" data-prev" onClick={prevSlide}>
                  &#10094;
                </span>
                <span className=" data-next" onClick={nextSlide}>
                  &#10095;
                </span>
              </div>
              {/* <div className="all-dots">
                {sliderImages.map((slide, index) => (
                  <span
                    key={index}
                    className={`${
                      activeIndex === index ? "dot active-dot" : "dot"
                    }`}
                    onClick={() => onclick(index)}
                  ></span>
                ))}
              </div> */}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default DataPage;
