import "./awsMlPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import Work from "../../../components/work/Work";
import Harmon from "../../../assets/aws-ml/harman.jpg";
import Zuba from "../../../assets/aws-ml/zuba.jpg";
import Deloite from "../../../assets/aws-ml/deloite.jpg";
import Cybage from "../../../assets/aws-ml/cybage.jpg";
import Nito from "../../../assets/aws-ml/nito.jpg";
import Adzaiper from "../../../assets/aws-ml/adzaiper.jpg";
import lamba from "../../../assets/aws-ml/amzo.png";
import amazonai from "../../../assets/aws-ml/amazonai.png";
import aw1 from "../../../assets/aws-ml/aw1.png";
import deep from "../../../assets/aws-ml/deeplense.png";
import silverstone from "../../../assets/aws-ml/silverstone.png";

import logo from "../../../assets/aws-ml/aws-logo.png";

const AwsMlPage = () => {
  return (
    <div>
      <Navbar />
      <div className="aws-ml">
        <div className="aws-ml-banner">
          <div className="aws-ml-banner-image">
            <img src={logo} alt="" />
          </div>
          <div className="banner-sub-container">
            <h1>MACHINE LEARNING ON AWS</h1>
            <p>
              PUTTING MACHINE LEARNING IN THE HANDS OF EVERY DEVELOPER AND DATA
              SCIENTIST
            </p>
            <div className="banner-line"></div>
          </div>
        </div>
        <div className="build-train-wrapper">
          <div className="build-train-deploy">
            <h1>Build, train, and deploy Machine Learning models fast</h1>
            <p>
              At Amazon, we’ve been investing deeply in artificial intelligence
              for over 20 years. Machine learning (ML) algorithms drive many of
              our internal systems. It’s also core to the capabilities our
              customer’s experience – from the path and optimization in our
              fulfillment centers, and Amazon.com’s recommendations engine, to
              Echo powered by Alexa, our drone initiative Prime Air, and our new
              retail experience Amazon Go. This is just the beginning. Our
              mission is to share our learnings and ML capabilities as fully
              managed services and put them into the hands of every developer
              and data scientist.
            </p>
            <div className="aws-lamba-wrapper">
              <div className="aws-lamba-image">
                <img src={lamba} alt="" />
                <div className="lamba-label">
                  <span>AWS LAmbda</span>
                </div>
              </div>
              <div className="aws-lamba-image">
                <img src={amazonai} alt="" />
                <div className="lamba-label">
                  <span>AWS LAmbda</span>
                </div>
              </div>
              <div className="aws-lamba-image">
                <img src={aw1} alt="" />
                <div className="lamba-label">
                  <span>AWS LAmbda</span>
                </div>
              </div>
            </div>
          </div>

          <div className="deploy-models-fast">
            <h1>Train and deploy models fast</h1>
          </div>
          <div className="engineered">
            <h1>Engineered for the Most Demanding Requirements</h1>
            <div className="engineered-services">
              <div className="eng-services">
                <h1>ML Services</h1>
                <p>Build, train, and deploy ML fast</p>
              </div>
              <div className="eng-services">
                <h1>AI Services</h1>
                <p>Easily add intelligence to your applications</p>
              </div>
              <div className="eng-services">
                <h1>Frameworks</h1>
                <p>Choice and flexibility with broadest framework support</p>
              </div>
              <div className="eng-services">
                <h1>Compute</h1>
                <p>Fastest and lowest-cost compute options</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-machine">
        <h1>Why Machine Learning on AWS?</h1>
        <h2>Machine Learning for everyone</h2>
        <p>
          Amazon Machine Learning (Amazon ML) is a robust, cloud-based service
          that makes it easy for developers of all skill levels to use machine
          learning technology. Amazon ML provides visualization tools and
          wizards that guide you through the process of creating machine
          learning (ML) models without having to learn complex ML algorithms and
          technology. Once your models are ready, Amazon ML makes it easy to
          obtain predictions for your application using simple APIs, without
          having to implement custom prediction generation code, or manage any
          infrastructure. Whether you are a data scientist, ML researcher, or
          developer, AWS offers machine learning services and tools tailored to
          meet your needs and level of expertise.
        </p>
      </div>
      <div className="get-deep">
        <h1>Get deep with Machine Learning</h1>
        <div className="get-deep-wrapper">
        <div className="get-deep-left">
          <span>AWS DeepRacer</span>
          <p>
            Accelerating enterprise-class data management innovation At
            CloudAge, we believe that data can make what is impossible today,
            possible tomorrow. We empower people to transform complex data into
            clear and actionable insights. AWS DeepRacer is a fully autonomous
            1/18th-scale race car designed to help you learn about reinforcement
            learning through autonomous driving.
            <ul>
              <li>
                Experience the thrill of the race in the real world when you
                deploy your RL model onto AWS DeepRacer.
              </li>
              <li>
                Protect your assets using built-in controls for identity, data
                and network access, including custom roles.
              </li>
              <li>
                Starting in 2019, compete in the world’s first global autonomous
                racing league, to race for prizes and a chance to advance to win
                the coveted AWS DeepRacer Cup.
              </li>
            </ul>
          </p>
        </div>
        <div className="get-deep-right">
          <img src={silverstone} alt="" />
        </div>


        </div>
       
      
      </div>

      <div className="aws-deep-lense">
        <div className="aws-deep-lense-left">
          <img src={deep} alt="" />
        </div>
        <div className="aws-deep-lense-right">
          <span>AWS DeepLens</span>
          <p>
            AWS DeepLens is the world’s first Deep Learning-enabled video camera
            for developers. Integrated with Amazon SageMaker and many other AWS
            services, it allows you to get started with deep learning in less
            than 10 minutes through sample projects with practical, hands-on
            examples.
            <ul>
              <li>
                Choose your deep learning model from the AWS DeepLens
                pre-trained model library, or your own models trained with
                Amazon SageMaker.
              </li>
              <li>Deploy your model to the device with a single click.</li>
              <li>
                Watch the results in real time in the AWS Management Console.
              </li>
            </ul>
          </p>
        </div>
      </div>
      <Work
        image1={Harmon}
        image2={Zuba}
        image3={Deloite}
        image4={Adzaiper}
        image5={Nito}
        image6={Cybage}
        title={"We Train Employees That Work Here"}
      />
      <Footer />
    </div>
  );
};

export default AwsMlPage;
