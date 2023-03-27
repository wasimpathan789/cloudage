import "./azureMlPage.css";
import Navbar from "../../../components/navbar/Navbar";
import Footer from "../../../components/footer/Footer";
import circle from "../../../assets/azure-ml/circle.png";
import square from "../../../assets/azure-ml/square.png";
import art from "../../../assets/azure-ml/art.png";
import open from "../../../assets/azure-ml/open.png";
import operational from "../../../assets/azure-ml/operational.png";
import build from "../../../assets/azure-ml/build.png";
import innovative from "../../../assets/azure-ml/innovative.png";
import advanced from "../../../assets/azure-ml/advanced.png";
import azurelearning from "../../../assets/azure-ml/azure-learning.png";
import FuturisticCard from "../../../components/futuristicCard/FuturisticCard";
import bg from '../../../assets/azure-ml/azure-ml-bg.jpg'

const AzureMlPage = () => {
  return (
    <div>
      <Navbar />
      <FuturisticCard title={"Azure Machine Learning"} description={"Enterprise-grade Machine Learning service to build and deploy models faster."} image={bg} />
      <div className="azure-ml-page">
        <div className="accelerate">
          <div className="accelerate-left">
            <span>Accelerate the end-to-end Machine Learning life cyclez</span>
            <p>
              Empower developers and data scientists with a wide range of
              productive experiences for building, training, and deploying
              machine learning models faster. Accelerate time to market and
              foster team collaboration with industry-leading MLOps—DevOps for
              machine learning. Innovate on a secure, trusted platform, designed
              for responsible AI
            </p>
          </div>
          <div className="accelerate-right">
            <video
              src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/Microsoft-Azure-Machine-Learning-Studio.mp4"
              controls
            ></video>
          </div>
        </div>
        <div className="azure-logo-wrapper">
          <div className="azure-ml-logo">
            <img src={circle} alt="" />
            <h1>Machine learning for all skills</h1>
            <h3>
              Productivity for all skill levels, with code-first and
              drag-and-drop designer and automated machine learning.
            </h3>
          </div>
          <div className="azure-ml-logo">
            <img src={square} alt="" />
            <h1>End-to-end MLOps</h1>
            <h3>
              Robust MLOps capabilities that integrate with existing DevOps
              processes and help manage the complete ML lifecycle.
            </h3>
          </div>
          <div className="azure-ml-logo">
            <img src={art} alt="" />
            <h1>State-of-the-art responsible ML</h1>
            <h3>
              State-of-the-art fairness and model interpretability to build
              responsible AI solutions, with enhanced security and cost
              management for advanced governance and control.
            </h3>
          </div>
          <div className="azure-ml-logo">
            <img src={open} alt="" />
            <h1>Open and Interoperable</h1>
            <h3>
              Best-in-class support for open-source frameworks and languages
              including MLflow, Kubeflow, ONNX, PyTorch, TensorFlow, Python, and
              R.
            </h3>
          </div>
        </div>
        <div className="azure-ml-boost">
          <div className="azure-ml-boost-left">
            <h1>Boost productivity and access ML for all</h1>
            <p>
              Rapidly build and deploy Machine Learning models using tools that
              meet your needs regardless of skill level. Use the no-code
              designer to get started or use built-in Jupyter notebooks for a
              code-first experience. Accelerate model creation with the
              automated machine learning UI and access built-in feature
              engineering, algorithm selection, and hyperparameter sweeping to
              develop highly accurate models.
            </p>
          </div>
          <div className="azure-ml-boost-right">
            <video
              controls
              src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/azuree.mp4"
            ></video>
          </div>
        </div>
        <div className="azure-ml-operationalise">
          <div className="azure-ml-operationalise-left">
            <img src={operational} alt="" />
          </div>
          <div className="azure-ml-operationalise-right">
            <h1>Operationalise at scale with robust MLOps</h1>
            <p>
              MLOps or DevOps for Machine Learning, streamlines the machine
              learning lifecycle, from building models to deployment and
              management. Use ML pipelines to build repeatable workflows and use
              a rich model registry to track your assets. Manage production
              workflows at scale using advanced alerts and machine learning
              automation capabilities. Profile, validate, and deploy machine
              learning models anywhere, from the cloud to the edge, to manage
              production ML workflows at scale in an enterprise-ready fashion.
            </p>
          </div>
        </div>
        <div className="azure-ml-build">
          <div className="azure-ml-build-left">
            <h1>Build responsible AI solutions</h1>
            <p>
              Access state-of-the-art technology for fairness and Machine
              Learning model transparency. Use model interpretability for
              explanations about predictions to better understand model
              behavior. Reduce model bias by applying common fairness metrics,
              automatically making comparisons, and using recommended
              mitigations.
            </p>
          </div>
          <div className="azure-ml-build-right">
            <img src={build} alt="" />
          </div>
        </div>
        <div className="azure-ml-innovative">
          <div className="azure-ml-innovative-left">
            <img src={innovative} alt="" />
          </div>
          <div className="azure-ml-innovative-right">
            <h1>Innovate on an open and flexible platform</h1>
            <p>
              Get built-in support for open-source tools and frameworks for
              machine learning model training and inferencing. Use familiar
              frameworks like PyTorch, TensorFlow, and sci-kit-learn or the open
              and interoperable ONNX format. Choose the development tools that
              best meet your needs, including popular IDEs, Jupyter notebooks,
              and CLIs—or languages such as Python and R. Use ONNX Runtime to
              optimize and accelerate inferencing across cloud and edge devices.
            </p>
          </div>
        </div>

        <div className="azure-ml-advanced">
          <h1>Advanced Security, Governance and Control</h1>
          <div className="azure-ml-advanced-wrapper">
            <div className="azure-ml-advanced-left">
              <img src={advanced} alt="" />
            </div>
            <ul className="azure-ml-advanced-left">
              <li>
                Build Machine Learning models using the enterprise-grade
                security, compliance, and virtual network support of Azure.
              </li>
              <li>
                Protect your assets using built-in controls for identity, data,
                and network access, including custom roles.
              </li>
              <li>
                Restrict access to only your corporate network or apply Azure
                security policies.
              </li>
              <li>
                Manage governance and controls with the audit trail, quota and
                cost management, and a comprehensive compliance portfolio.
              </li>
            </ul>
          </div>
        </div>

        <div className="azure-ml-how-to-use">
          <h1>How to use Azure Machine Learning</h1>
          <div className="azure-ml-how-to-use-slider">
         
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AzureMlPage;
