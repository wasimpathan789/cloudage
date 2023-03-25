import "./aiPage.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import EdgeCard from "../../components/edgeCard/EdgeCard";
import EdgeTopCard from "../../components/edgeTopCard/EdgeTopCard";
import AI from "../../assets/ai1.jpg";
import Workflow from "../../assets/workflow.png";
import MLheader from "../../assets/MLheader.png";

const AiPage = () => {
  return (
    <div>
      <Navbar />
      <EdgeTopCard
        title={
          "Build, deploy, ML and AI anywhere, with CloudAge Machine Learning offerings. "
        }
      />
      <EdgeCard
        title={"Artificial Intelligence"}
        description={
          "Artificial Intelligence (AI) makes it possible for machines to learn from experience, adjust to new inputs and perform human-like tasks."
        }
        image={AI}
      />

      <div className="ai-page">
        <div className="ai-page-top">
          <div className="ai-page-top-left">
            <h1>Artificial Intelligence</h1>
            <p>
              Artificial Intelligence (AI) refers to the simulation of human
              intelligence in machines that are programmed to think like humans
              and mimic their actions. The term may also be applied to any
              machine that exhibits traits associated with a human mind such as
              learning and problem-solving. <br /> <br />
              All but the simplest human behavior is ascribed to intelligence,
              while even the most complicated insect behavior is never taken as
              an indication of intelligence. <br /> <br />
              There are several different forms of learning as applied to
              artificial intelligence. The simplest is learning by trial and
              error. For example, a simple computer program for solving
              mate-in-one chess problems might try moves at random until a mate
              is found.
            </p>
          </div>
          <div className="ai-page-top-right">
            <video
              controls
              src="https://6v097b.n3cdn1.secureserver.net/wp-content/uploads/2022/09/Artificial_Intelligence.mp4"
            >
              Your browser doesnt support this video format
            </video>
          </div>
        </div>
        <div className="ai-page-center">
          <div className="ai-page-center-left">
            <img src={MLheader} alt="" />
          </div>
          <div className="ai-page-center-right">
            <h1>What is Machine Learning?</h1>
            <p>
              Machine Learning (ML) is a programming technique that provides
              your apps with the ability to automatically learn and improve from
              experience without being explicitly programmed to do so. <br />
              Machine Learning (ML) is a subfield of Artificial Intelligence
              (AI). The goal of ML is to make computers learn from the data that
              you give them. Instead of writing code that describes the action
              the computer should take, your code provides an algorithm that
              adapts based on examples of intended behavior. The resulting
              program, consisting of the algorithm and associated learned
              parameters, is called a trained model.
            </p>
          </div>
        </div>
        <div className="ai-page-bottom">
          <div className="ai-page-bottom-left">
            <h1>Machine Learning Workflow</h1>
          </div>
          <div className="ai-page-bottom-right">
            <img src={Workflow} alt="" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AiPage;
