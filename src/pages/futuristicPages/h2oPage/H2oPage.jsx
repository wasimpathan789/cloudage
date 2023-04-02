import "./h2oPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import h2o from "../../../assets/h2o/h2o.png";
import architect from "../../../assets/h2o/architec.png";
import enter from "../../../assets/h2o/enter.jpg";
import design from "../../../assets/h2o/design.png";
import placeholder from "../../../assets/h2o/placeholder.png";
import one from "../../../assets/h2o/usecase-one.jpg";
import two from "../../../assets/h2o/usecase-two.jpg";
import three from "../../../assets/h2o/usecase-three.jpg";
import four from "../../../assets/h2o/usecase-four.jpg";
import cloud from "../../../assets/h2o/cloud.png";
import microsoft from "../../../assets/h2o/microsoft.png";
import intel from "../../../assets/h2o/intel.png";
import nvidia from "../../../assets/h2o/nvidia.png";
import aws from "../../../assets/h2o/aws.jpg";

const H2oPage = () => {
  return (
    <div>
      <Navbar />
      <div className="h2o-banner">
        <h1 data-aos="fade-right" data-aos-duration="1500">
          H2O.ai
        </h1>
        <div className="h2o-banner-bottom">
          <p data-aos="fade-right" data-aos-duration="1500">
            The #1 open-source machine learning platform for the enterprise
          </p>
        </div>
      </div>
      <div className="h2o-banner-wrapper">
        <div className="h2o-open">
          <div className="h20-open-top">
            <h1 data-aos="fade-right" data-aos-duration="1500">
              Open Source, Distributed{" "}
              <div>
                <span>Machine Learning</span>
              </div>{" "}
              for Everyone
            </h1>
          </div>
          <p data-aos="fade-left" data-aos-duration="1500">
            H2O is a fully open-source, distributed in-memory machine learning
            platform with linear scalability. H2O supports the most widely used
            statistical & machine learning algorithms including gradient boosted
            machines, generalized linear models, deep learning, and more. H2O
            also has an industry-leading AutoML functionality that automatically
            runs through all the algorithms and their hyperparameters to produce
            a leaderboard of the best models. The H2O platform is used by over
            18,000 organizations globally and is extremely popular in both the R
            & Python communities.
          </p>
        </div>
        <div className="h2o-key-features">
          <h1>
            Key Features of <span>H2O</span>
          </h1>
          <div className="h2o-key-features-image">
            <img
              src={h2o}
              alt=""
              data-aos="fade-left"
              data-aos-offset="500"
              data-aos-easing="ease-in-sine"
            />
          </div>
        </div>
        <div className="h2o-how-it">
          <h1>Enterprise Data</h1>
          <p
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
          >
            H2O works on existing big data infrastructure, on bare metal, or top
            of existing Hadoop or Spark clusters. It can ingest data directly
            from HDFS, Spark, S3, Azure Data Lake, or any other data source into
            its in-memory distributed key-value store.
          </p>
          <h1>Distributed, In-Memory Machine Learning</h1>
          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500">
            H2O takes advantage of the computing power of distributed systems
            and in-memory computing to accelerate machine learning using its
            industry parallelized algorithms which take advantage of
            fine-grained in-memory MapReduce.
          </p>
          <h1>Seamless Deployment</h1>
          <p data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500">
            Quickly and easily deploy models into production with Java (POJO)
            and binary formats (MOJO). Besides, H2O models can be productized in
            a host of different ways as listed here.
          </p>
          <div className="h2o-how-it-image">
            <img
              src={architect}
              alt=""
              data-aos="fade-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="h2o-enterprise">
          <div className="h2o-enterprise-left">
            <h1 data-aos="zoom-out-up" data-aos-duration="1500">
              Enterprise Support
            </h1>
            <p data-aos="zoom-in-down" data-aos-duration="1500">
              When AI becomes mission-critical for enterprise success, H2O.ai is
              there to help. H2O Enterprise Support provides the services you
              need to optimize your investments in people and technology to
              deliver on your AI vision. H2O Enterprise Support includes
              training, a dedicated account manager, 24/7 support, accelerated
              issue resolution, and direct enhancement requests. Enterprise
              support also gives you access to H2O experts in data science, the
              H2O platform, and DevOps/production deployment to accelerate and
              expand your adoption of AI. Also, Enterprise Support customers
              have access to Enterprise Steam or H2O Sparkling Water to deploy
              and manage models in their Hadoop or Spark clusters.
            </p>
          </div>
          <div className="h2o-enterprise-right">
            <img
              src={enter}
              alt=""
              data-aos="fade-up-left"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="h2o-gpu">
          <div className="h2o-gpu-left">
            <img
              src={design}
              alt=""
              data-aos="flip-up"
              data-aos-duration="1500"
            />
          </div>
          <div className="h2o-gpu-right">
            <h1 data-aos="zoom-out-up" data-aos-duration="1500">
              H2O4GPU
            </h1>
            <p data-aos="zoom-in-down" data-aos-duration="1500">
              H2O4GPU is an open-source, GPU-accelerated machine learning
              package with APIs in Python and R that allows anyone to take
              advantage of GPUs to build advanced machine learning models. A
              variety of popular algorithms are available including Gradient
              Boosting Machines (GBM’s), Generalized Linear Models (GLM’s), and
              K-Means Clustering. Our benchmarks found that training machine
              learning models on GPUs were up to 40x faster than CPU based
              systems.
            </p>
          </div>
        </div>

        <div className="h2o-usecase">
          <h1>
            Featured Use <span> Cases</span>
          </h1>
          <div className="h2o-usecase-cards">
            <div className="h2o-usecase-card">
              <h1>Advanced Analytics</h1>
              <div className="h2o-usecase-card-img">
                <img
                  src={four}
                  alt=""
                  data-aos="flip-right"
                  data-aos-duration="1500"
                />
              </div>
              <p>
                Providing predictive insights to decision makers and frontline
                employees is critical to improving customer satisfaction and
                decreasing operating costs across industries.
              </p>
            </div>

            <div className="h2o-usecase-card">
              <h1>Fraud Detection</h1>
              <div className="h2o-usecase-card-img">
                <img
                  src={one}
                  alt=""
                  data-aos="flip-left"
                  data-aos-duration="1500"
                />
              </div>
              <p>
                Detecting fraud even before it happens can prevent significant
                losses for financial institutions and prevent headaches for
                customers that can damage relationships.
              </p>
            </div>

            <div className="h2o-usecase-card">
              <h1>Claims Management</h1>
              <div className="h2o-usecase-card-img">
                <img
                  src={two}
                  alt=""
                  data-aos="flip-up"
                  data-aos-duration="1500"
                />
              </div>
              <p>
                Finding ways to improve the claims process can save money but
                also makes sure that customers and patients with legitimate
                issues are taken care of.
              </p>
            </div>

            <div className="h2o-usecase-card">
              <h1>Digital Advertising</h1>
              <div className="h2o-usecase-card-img">
                <img
                  src={three}
                  alt=""
                  data-aos="flip-down"
                  data-aos-duration="1500"
                />
              </div>
              <p>
                Targeting the right person with the right message at the right
                time creates a personal interaction that has higher conversion
                rates and improves overall satisfaction.
              </p>
            </div>
          </div>
        </div>
        <div className="h2o-introduction">
          <div className="h2o-introduction-left">
            <h1 data-aos="zoom-in" data-aos-duration="1500">
              Introduction to Machine Learning with H2O Tutorial
            </h1>
            <p data-aos="zoom-out-up" data-aos-duration="1500">
              In this tutorial for the H2O platform, you will learn how to use
              H2O’s GLM Random Forest, GBM Models, and grid search to tune
              hyperparameters for a classification problem. We will be using a
              subset of the Freddie Mac Single-Family dataset to try to predict
              whether or not a mortgage loan will be delinquent using H2O’s GLM,
              Random Forest, and GBM models. We will go over how to use these
              models for classification problems, and we will demonstrate how to
              use H2O’s grid search to tune the hyper-parameters of each model.
            </p>
          </div>
          <div className="h2o-introduction-right">
            <img
              src={placeholder}
              alt=""
              data-aos="zoom-in-down"
              data-aos-duration="1500"
            />
          </div>
        </div>
        <div className="h2o-company">
          <h1>
            Keeping <span>Good Company</span>
          </h1>
          <p>
            H2O.ai is proud to partner with leading technology companies across
            a broad spectrum to bring AI to everyone.
          </p>
          <div className="h2o-company-images">
            <div className="h2o-company-image">
              <img
                src={cloud}
                alt=""
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="h2o-company-image">
              <img
                src={microsoft}
                alt=""
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="h2o-company-image nvidia-image">
              <img
                src={nvidia}
                alt=""
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="h2o-company-image">
              <img
                src={aws}
                alt=""
                data-aos="fade-left"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
            <div className="h2o-company-image intel-image">
              <img
                src={intel}
                alt=""
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default H2oPage;
