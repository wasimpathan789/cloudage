import "./cloudPage.css";
import EdgeCard from "../../components/edgeCard/EdgeCard";
import EdgeTopCard from "../../components/edgeTopCard/EdgeTopCard";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Cloud from "../../assets/cloudpage.jpg";
import CloudComputing from "../../assets/cloud-computing.png";
import AwsDeploy from "../../assets/AWS-1.png";
import GCP from "../../assets/GCP.png";
import Azure1 from '../../assets/Azure-1.png'

const CloudPage = () => {
  return (
    <div>
      <Navbar />
      <EdgeTopCard
        title={
          "With the cloud, you can easily deploy your application in multiple physical locations around the world. "
        }
      />
      <EdgeCard
        title={"Cloud Computing"}
        description={
          "Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user."
        }
        image={Cloud}
      />
      <div className="cloud-page-wrapper">
        <h1>Cloud Computing</h1>

        <div className="cloud-computing">
          <div className="cloud-computing-left">
            <p>
              Cloud Computing is the on-demand delivery of IT resources over the
              Internet with pay-as-you-go pricing. Instead of buying, owning,
              and maintaining physical data centers and servers, you can access
              technology services, such as computing power, storage, and
              databases, on an as-needed basis from a cloud provider like Amazon
              Web Services (AWS). Cloud Computing is the on-demand availability
              of computer system resources, especially data storage and
              computing power, without direct active management by the user. The
              term is generally used to describe data centers available to many
              users over the Internet.
            </p>
          </div>
          <div className="cloud-computing-right">
            <video controls>
              <source
                src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/CloudAge-Alumni.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div className="cloud-agricutlture">
          <h1>Cloud Computing Architecture</h1>
          <div className="cloud-agriculture-wrapper">
            <div className="cloud-agriculture-left">
              <img src={CloudComputing} alt="" />
            </div>
            <div className="cloud-agriculture-rigth">
              <p>
                Cloud Computing Architecture is simple; it clearly states the
                components and subcomponents embedded in it There’s no question
                that cloud computing is here to stay. It touches every part of
                our lives today, offering many advantages in terms of
                flexibility, storage, sharing, maintenance, and much more. A
                Cloud Computing Architecture provides higher bandwidth to its
                users due to which data over the cloud can be used from anywhere
                across the world at any time. Cloud Computing Architecture is
                divided into two parts, i.e., front-end and back-end. Front-end
                and back-end communicate via a network or internet.
              </p>
              <h1>Frontend </h1>
              <p>
                It provides applications and the interfaces that are required
                for the cloud-based service. It consists of client’s side
                applications, which are web browsers such as Google Chrome and
                Internet Explorer.
              </p>
              <h1>Backend </h1>
              <p>
                It is responsible for monitoring all the programs that run the
                application on the front-end It has a large number of data
                storage systems and servers.
              </p>
            </div>
          </div>
        </div>

        <div className="aws-development">
          <h1>AWS Deployment</h1>
          <div className="aws-development-wrapper">
            <div className="aws-development-left">
              <p>
                Cloudera makes it possible for organizations to deploy the
                Cloudera solution as an EDH in the AWS cloud. This joint
                solution combines Cloudera’s expertise in large-scale data
                management and analytics with AWS’s expertise in cloud
                computing. <br />
                AWS CodeDeploy is a fully managed deployment service that
                automates software deployments to a variety of computing
                services such as Amazon EC2, AWS Fargate, AWS Lambda, and your
                on-premises servers. You can use AWS CodeDeploy to automate
                software deployments, eliminating the need for error-prone
                manual operations
              </p>
            </div>
            <div className="aws-development-right">
              <img src={AwsDeploy} alt="" />
            </div>
          </div>
        </div>

        <div className="gcp-development">
          <h1>GCP Deployment</h1>
          <div className="gcp-development-wrapper">
            <div className="gcp-development-left">
              <img src={GCP} alt="" />
            </div>
            <div className="gcp-development-right">
              <p>
                Cloudera and Google make it possible for organizations to deploy
                the Cloudera solution as an EDH on Google Cloud Platform. This
                joint solution combines Cloudera’s expertise in large-scale data
                management and analytics with Google’s expertise in cloud
                computing. Google Cloud Deployment Manager allows you to specify
                all the resources needed for your application in a declarative
                format using yaml. Regions are collections of zones. Zones have
                high-bandwidth, low-latency network connections to other zones
                in the same region. In order to deploy fault-tolerant
                applications that have high availability, Google recommends
                deploying applications across multiple zones and multiple
                regions.
              </p>
            </div>
          </div>
        </div>

        <div className="azure-development">
          <h1>AZURE Deployment</h1>
          <div className="azure-development-wrapper">
            <div className="azure-develpment-left">
              <p>
                Microsoft Azure is an industry-leading cloud service for both
                infrastructure-as-a-service (IaaS) and platform-as-a-service
                (PaaS), with data centers spanning the globe. <br /> <br /> Microsoft Azure
                supports a diverse set of Linux as well as Windows-based
                applications and has the necessary infrastructure to serve
                big-data workloads. <br /><br /> It enables end-users to rent virtual
                machines of different configurations on demand and pay for the
                amount of time they use them.
              </p>
            </div>
            <div className="azure-develpment-right">
              <img src={Azure1} alt="" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CloudPage;
